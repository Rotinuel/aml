import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { generateToken, comparePasswords } from '@/lib/auth'

export async function POST(request) {
  try {
    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Find user
    const user = db.findUserByEmail(email)

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // For demo purposes, accept 'demo123' for user and 'admin123' for admin
    const validPassword = (email === 'user@demo.com' && password === 'demo123') ||
      (email === 'admin@demo.com' && password === 'admin123') ||
      comparePasswords(password, user.password)

    if (!validPassword) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Generate token
    const token = generateToken(user)

    // Return user data (excluding password)
    const { password: _, ...userWithoutPassword } = user

    const response = NextResponse.json({
      token,
      user: userWithoutPassword,
    })

    // Set cookie
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
