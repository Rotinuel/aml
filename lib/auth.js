import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

// ─── JWT Helpers ──────────────────────────────────────────────────────────────

export function generateToken(user) {
  return jwt.sign(
    {
      userId: user._id?.toString() || user.id,
      email: user.email,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  )
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch {
    return null
  }
}

export async function getAuthUser() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value
  if (!token) return null
  return verifyToken(token)
}

// ─── Password Helpers ─────────────────────────────────────────────────────────

// Kept as async so both login and register routes can await them
export async function hashPassword(password) {
  return bcrypt.hash(password, 10)
}

export async function comparePasswords(password, hash) {
  return bcrypt.compare(password, hash)
}
