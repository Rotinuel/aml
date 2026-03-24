// 'use client'

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Link from 'next/link'
// import Image from 'next/image'
// import { useRouter } from 'next/navigation'
// import { Mail, Lock, ArrowRight, Eye, EyeOff, Trophy, X } from 'lucide-react'
// import toast from 'react-hot-toast'

// export default function LoginPage() {
//   const router = useRouter()
//   const [formData, setFormData] = useState({ email: '', password: '' })
//   const [showPassword, setShowPassword] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [rememberMe, setRememberMe] = useState(false)
//   const [showForgotPassword, setShowForgotPassword] = useState(false)
//   const [resetEmail, setResetEmail] = useState('')
//   const [resetLoading, setResetLoading] = useState(false)

//   // Load remembered email on mount
//   useEffect(() => {
//     const rememberedEmail = localStorage.getItem('rememberedEmail')
//     if (rememberedEmail) {
//       setFormData(prev => ({ ...prev, email: rememberedEmail }))
//       setRememberMe(true)
//     }
//   }, [])

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setLoading(true)

//     try {
//       const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       })

//       const data = await response.json()

//       if (response.ok) {
//         toast.success('Welcome back!')

//         // Handle Remember Me
//         if (rememberMe) {
//           localStorage.setItem('rememberedEmail', formData.email)
//         } else {
//           localStorage.removeItem('rememberedEmail')
//         }

//         localStorage.setItem('token', data.token)
//         localStorage.setItem('user', JSON.stringify(data.user))

//         if (data.user.role === 'admin') {
//           window.location.href = '/admin'
//         } else {
//           window.location.href = '/dashboard'
//         }
//       } else {
//         toast.error(data.error || 'Login failed')
//       }
//     } catch (error) {
//       toast.error('Something went wrong')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleForgotPassword = async (e) => {
//     e.preventDefault()
//     setResetLoading(true)

//     try {
//       const response = await fetch('/api/auth/forgot-password', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: resetEmail }),
//       })

//       const data = await response.json()

//       if (response.ok) {
//         toast.success('Password reset link sent to your email!')
//         setShowForgotPassword(false)
//         setResetEmail('')
//       } else {
//         toast.error(data.error || 'Failed to send reset link')
//       }
//     } catch (error) {
//       toast.error('Something went wrong')
//     } finally {
//       setResetLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-dark-950 relative overflow-hidden">
//       {/* Background Effects */}
//       <div className="absolute inset-0 bg-animated" />
//       <div className="absolute inset-0 bg-mesh opacity-20" />

//       <motion.div
//         animate={{ y: [0, -20, 0] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-20 left-20 w-64 h-64 bg-primary-500/20 blur-3xl rounded-full"
//       />
//       <motion.div
//         animate={{ y: [0, 20, 0] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute bottom-20 right-20 w-72 h-72 bg-accent-500/20 blur-3xl rounded-full"
//       />

//       <div className="relative z-10 w-full max-w-md px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           {/* Logo */}
//           <Link href="/">
//             <div className="flex items-center justify-center space-x-3 mb-2 cursor-pointer group">
//               {/*  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center 
//                             transform group-hover:scale-110 transition-transform">
//                 <Trophy className="w-8 h-8 text-white" />
//               </div>
//               */}
//               <Image
//                 src="/logo.png"
//                 alt="Amazon Lucky Draw"
//                 width={140}
//                 height={45}
//                 className="object-contain"
//                 priority
//               />
//               <span className="text-4xl font-display gradient-text tracking-wider">Lottery</span>
//             </div>
//           </Link>

//           {/* Form Card */}
//           <div className="glass p-8 border-2 border-white/10">
//             <div className="mb-8">
//               <h1 className="text-4xl font-display text-white mb-2">WELCOME BACK</h1>
//               <p className="text-white/60">Enter your credentials to continue</p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Email */}
//               <div>
//                 <label className="block text-white/70 mb-2 text-sm uppercase tracking-wider font-semibold">
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
//                   <input
//                     type="email"
//                     required
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     className="input pl-2 text-black"
//                     placeholder="your@email.com"
//                   />
//                 </div>
//               </div>

//               {/* Password */}
//               <div>
//                 <label className="block text-white/70 mb-2 text-sm uppercase tracking-wider font-semibold">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
//                   <input
//                     type={showPassword ? 'text' : 'password'}
//                     required
//                     value={formData.password}
//                     onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                     className="input pl-2 pr-2 text-black"
//                     placeholder="••••••••"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
//                   >
//                     {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                   </button>
//                 </div>
//               </div>

//               {/* Remember & Forgot */}
//               <div className="flex items-center justify-between text-sm">
//                 <label className="flex items-center space-x-2 cursor-pointer group">
//                   <input
//                     type="checkbox"
//                     checked={rememberMe}
//                     onChange={(e) => setRememberMe(e.target.checked)}
//                     className="w-4 h-4 accent-primary-500 cursor-pointer"
//                   />
//                   <span className="text-white/60 group-hover:text-white/80 transition-colors">
//                     Remember me
//                   </span>
//                 </label>
//                 <button
//                   type="button"
//                   onClick={() => setShowForgotPassword(true)}
//                   className="text-primary-500 hover:text-primary-400 transition-colors font-semibold"
//                 >
//                   Forgot password?
//                 </button>
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="btn-primary w-full group flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <span>{loading ? 'SIGNING IN...' : 'SIGN IN'}</span>
//                 {!loading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
//               </button>
//             </form>

//             {/* Divider */}
//             <div className="relative my-8">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-white/10"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-4 bg-dark-900 text-white/40 uppercase tracking-wider">Or</span>
//               </div>
//             </div>

//             {/* Register Link */}
//             <div className="text-center">
//               <span className="text-white/60">Don't have an account? </span>
//               <Link href="/auth/register" className="text-primary-500 hover:text-primary-400 transition-colors font-bold">
//                 Sign up here
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Forgot Password Modal */}
//       <AnimatePresence>
//         {showForgotPassword && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setShowForgotPassword(false)}
//               className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
//             />

//             {/* Modal */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.95, y: 20 }}
//               className="fixed inset-0 z-50 flex items-center justify-center p-4"
//             >
//               <div className="glass p-8 border-2 border-white/10 max-w-md w-full relative">
//                 {/* Close Button */}
//                 <button
//                   onClick={() => setShowForgotPassword(false)}
//                   className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>

//                 <div className="mb-6">
//                   <h2 className="text-3xl font-display text-white mb-2">RESET PASSWORD</h2>
//                   <p className="text-white/60 text-sm">
//                     Enter your email address and we'll send you a link to reset your password
//                   </p>
//                 </div>

//                 <form onSubmit={handleForgotPassword} className="space-y-6">
//                   <div>
//                     <label className="block text-white/70 mb-2 text-sm uppercase tracking-wider font-semibold">
//                       Email Address
//                     </label>
//                     <div className="relative">
//                       <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
//                       <input
//                         type="email"
//                         required
//                         value={resetEmail}
//                         onChange={(e) => setResetEmail(e.target.value)}
//                         className="input pl-12"
//                         placeholder="your@email.com"
//                         autoFocus
//                       />
//                     </div>
//                   </div>

//                   <div className="flex gap-3">
//                     <button
//                       type="button"
//                       onClick={() => setShowForgotPassword(false)}
//                       className="flex-1 px-6 py-3 bg-white/5 border border-white/10 text-white hover:bg-white/10 
//                                transition-colors uppercase tracking-wider font-bold text-sm"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="submit"
//                       disabled={resetLoading}
//                       className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       {resetLoading ? 'SENDING...' : 'SEND LINK'}
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Lock, ArrowRight, Eye, EyeOff, X } from 'lucide-react'
import toast from 'react-hot-toast'

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [resetEmail, setResetEmail] = useState('')
  const [resetLoading, setResetLoading] = useState(false)

  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail')
    if (rememberedEmail) {
      setFormData(prev => ({ ...prev, email: rememberedEmail }))
      setRememberMe(true)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Welcome back!')

        if (rememberMe) {
          localStorage.setItem('rememberedEmail', formData.email)
        } else {
          localStorage.removeItem('rememberedEmail')
        }

        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))

        window.location.href = data.user.role === 'admin' ? '/admin' : '/dashboard'
      } else {
        toast.error(data.error || 'Login failed')
      }
    } catch (error) {
      toast.error('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPassword = async (e) => {
    e.preventDefault()
    setResetLoading(true)

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: resetEmail }),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Reset link sent!')
        setShowForgotPassword(false)
        setResetEmail('')
      } else {
        toast.error(data.error || 'Failed')
      }
    } catch {
      toast.error('Something went wrong')
    } finally {
      setResetLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 w-full max-w-md px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>

          {/* Logo */}
          <Link href="/">
            <div className="flex items-center justify-center mb-6 cursor-pointer">
              <Image src="/logo.png" alt="Logo" width={140} height={45} />
            </div>
          </Link>

          {/* Card */}
          <div className="backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl">

            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-semibold text-white">Welcome Back 👋</h1>
              <p className="text-white/60 text-sm">Login to your account</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email */}
              <div>
                <label className="block text-white/70 mb-2 text-xs uppercase">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/90 text-gray-900 placeholder-gray-500 
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-white/70 mb-2 text-xs uppercase">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-3 rounded-xl bg-white/90 text-gray-900 placeholder-gray-500 
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Remember */}
              <div className="flex justify-between text-sm">
                <label className="flex items-center gap-2 text-white/60">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="accent-indigo-500"
                  />
                  Remember me
                </label>

                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="text-indigo-400 hover:underline"
                >
                  Forgot?
                </button>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 
                text-white font-semibold flex justify-center items-center gap-2 
                hover:opacity-90 transition"
              >
                {loading ? 'Signing in...' : 'Sign In'}
                {!loading && <ArrowRight size={18} />}
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 border-t border-white/10 text-center text-xs text-white/40 pt-4">
              OR
            </div>

            {/* Signup */}
            <p className="text-center text-white/60 text-sm">
              Don’t have an account?{' '}
              <Link href="/auth/register" className="text-indigo-400 hover:underline">
                Sign up
              </Link>
            </p>

          </div>
        </motion.div>
      </div>

      {/* Forgot Password Modal */}
      <AnimatePresence>
        {showForgotPassword && (
          <>
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setShowForgotPassword(false)}
            />

            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="bg-white p-6 rounded-xl max-w-md w-full relative">

                <button
                  onClick={() => setShowForgotPassword(false)}
                  className="absolute top-3 right-3 text-gray-500"
                >
                  <X />
                </button>

                <h2 className="text-xl font-semibold mb-2">Reset Password</h2>
                <p className="text-gray-500 text-sm mb-4">
                  Enter your email to receive reset link
                </p>

                <form onSubmit={handleForgotPassword} className="space-y-4">
                  <input
                    type="email"
                    required
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full p-3 rounded-lg border text-gray-900"
                  />

                  <button
                    type="submit"
                    className="w-full bg-indigo-500 text-white py-2 rounded-lg"
                  >
                    {resetLoading ? 'Sending...' : 'Send Link'}
                  </button>
                </form>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}