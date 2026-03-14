// // lib/auth.js
// import { cookies } from 'next/headers'

// const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// export function generateToken(user) {
//   // In production, use actual JWT library
//   return Buffer.from(JSON.stringify({
//     id: user.id,
//     email: user.email,
//     role: user.role,
//   })).toString('base64');
// }

// export function verifyToken(token) {
//   try {
//     const decoded = JSON.parse(Buffer.from(token, 'base64').toString());
//     return decoded;
//   } catch {
//     return null;
//   }
// }

// export async function getAuthUser() {
//   const cookieStore = await cookies();
//   const token = cookieStore.get('token')?.value;
  
//   if (!token) return null;
  
//   return verifyToken(token);
// }

// export function hashPassword(password) {
//   // In production, use bcrypt
//   return password; // Simplified for demo
// }

// export function comparePasswords(password, hash) {
//   // In production, use bcrypt.compare
//   return password === hash; // Simplified for demo
// }


import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

export function generateToken(user) {
  return jwt.sign(
    { 
      userId: user.id, 
      email: user.email,
      role: user.role 
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  )
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    return null
  }
}

export async function getAuthUser() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value
  
  if (!token) return null
  
  return verifyToken(token)
}

export function hashPassword(password) {
  return bcrypt.hashSync(password, 10)
}

export function comparePasswords(password, hash) {
  return bcrypt.compareSync(password, hash)
}