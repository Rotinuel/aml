// import { NextResponse } from 'next/server'
// import { db } from '@/lib/db'
// import { hashPassword } from '@/lib/auth'

// export async function POST(request) {
//   try {
//     const { name, email, password } = await request.json()

//     // Validate input
//     if (!name || !email || !password) {
//       return NextResponse.json(
//         { error: 'All fields are required' },
//         { status: 400 }
//       )
//     }

//     if (password.length < 6) {
//       return NextResponse.json(
//         { error: 'Password must be at least 6 characters' },
//         { status: 400 }
//       )
//     }

//     // Check if user exists
//     const existingUser = db.findUserByEmail(email)
//     if (existingUser) {
//       return NextResponse.json(
//         { error: 'Email already registered' },
//         { status: 400 }
//       )
//     }

//     // Create user
//     const hashedPassword = hashPassword(password)
//     const user = db.createUser({
//       name,
//       email,
//       password: hashedPassword,
//       role: 'user',
//     })

//     // Return success (excluding password)
//     const { password: _, ...userWithoutPassword } = user

//     return NextResponse.json({
//       message: 'Account created successfully',
//       user: userWithoutPassword,
//     }, { status: 201 })
//   } catch (error) {
//     console.error('Registration error:', error)
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     )
//   }
// }


import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { hashPassword } from '@/lib/auth'

export async function POST(request) {
  try {
    const { name, email, password } = await request.json()

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    if (name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      )
    }

    // Connect to MongoDB and check for existing email
    const existing = await db.findUserByEmail(email)

    if (existing) {
      return NextResponse.json(
        { error: 'An account with this email already exists' },
        { status: 400 }
      )
    }

    // Hash password (now async) and create user
    const hashedPassword = await hashPassword(password)

    const user = await db.createUser({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      role: 'user',
      balance: 0,
    })

    // Return success (no password, no token — user must log in)
    return NextResponse.json(
      {
        message: 'Account created successfully',
        user: {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    // Mongoose duplicate key error
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'An account with this email already exists' },
        { status: 400 }
      )
    }

    // Mongoose validation errors
    if (error.name === 'ValidationError') {
      const message = Object.values(error.errors)[0]?.message || 'Validation failed'
      return NextResponse.json({ error: message }, { status: 400 })
    }

    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
