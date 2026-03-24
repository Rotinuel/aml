// import { NextResponse } from 'next/server'
// import crypto from 'crypto'
// import bcrypt from 'bcryptjs'

// export async function POST(request) {
//   try {
//     const { token, password } = await request.json()

//     if (!token || !password) {
//       return NextResponse.json(
//         { error: 'Token and password are required' },
//         { status: 400 }
//       )
//     }

//     // Validate password strength
//     if (password.length < 8) {
//       return NextResponse.json(
//         { error: 'Password must be at least 8 characters' },
//         { status: 400 }
//       )
//     }

//     // Hash the token to compare with stored hash
//     const resetTokenHash = crypto
//       .createHash('sha256')
//       .update(token)
//       .digest('hex')

//     // TODO: Replace with your actual database query
//     // Find user with matching token and check if it's not expired
//     // const user = await db.user.findFirst({
//     //   where: {
//     //     resetToken: resetTokenHash,
//     //     resetTokenExpiry: {
//     //       gt: new Date() // Token hasn't expired
//     //     }
//     //   }
//     // })

//     // For demo purposes, we'll assume the user exists
//     // In production, uncomment the check below:
//     // if (!user) {
//     //   return NextResponse.json(
//     //     { error: 'Invalid or expired reset token' },
//     //     { status: 400 }
//     //   )
//     // }

//     // Hash the new password
//     const hashedPassword = await bcrypt.hash(password, 10)

//     // TODO: Update user's password and clear reset token
//     // await db.user.update({
//     //   where: { id: user.id },
//     //   data: {
//     //     password: hashedPassword,
//     //     resetToken: null,
//     //     resetTokenExpiry: null
//     //   }
//     // })

//     console.log('Password would be updated to:', hashedPassword)

//     return NextResponse.json({
//       message: 'Password has been reset successfully'
//     })

//   } catch (error) {
//     console.error('Reset password error:', error)
//     return NextResponse.json(
//       { error: 'Failed to reset password' },
//       { status: 500 }
//     )
//   }
// }


import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const user = await db.findUserByEmail(email)

    if (user) {
      // TODO: Generate a reset token, save it on the user document,
      // and send an email via your preferred provider (e.g. Resend, Nodemailer).
      //
      // Example with Resend:
      // import { Resend } from 'resend'
      // const resend = new Resend(process.env.RESEND_API_KEY)
      // const resetToken = crypto.randomUUID()
      // await User.findByIdAndUpdate(user._id, {
      //   resetToken,
      //   resetTokenExpiry: Date.now() + 3600000, // 1 hour
      // })
      // await resend.emails.send({
      //   from: 'noreply@yourdomain.com',
      //   to: user.email,
      //   subject: 'Reset your password',
      //   html: `<a href="${process.env.NEXT_PUBLIC_APP_URL}/auth/reset-password?token=${resetToken}">Reset Password</a>`,
      // })
      console.log(`Password reset requested for: ${user.email}`)
    }

    // Always return 200 regardless of whether email exists
    return NextResponse.json({
      message: 'If an account with that email exists, a reset link has been sent.',
    })
  } catch (error) {
    console.error('Forgot password error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
