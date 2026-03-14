'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Lock, Eye, EyeOff, Trophy, ArrowRight, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'

export default function ResetPasswordPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!token) {
      toast.error('Invalid reset link')
      router.push('/auth/login')
    }
  }, [token, router])

  const validatePassword = (password) => {
    if (password.length < 8) {
      return 'Password must be at least 8 characters'
    }
    if (!/(?=.*[a-z])/.test(password)) {
      return 'Password must contain at least one lowercase letter'
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      return 'Password must contain at least one uppercase letter'
    }
    if (!/(?=.*\d)/.test(password)) {
      return 'Password must contain at least one number'
    }
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate password
    const passwordError = validatePassword(formData.password)
    if (passwordError) {
      toast.error(passwordError)
      return
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token,
          password: formData.password
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(true)
        toast.success('Password reset successful!')
        setTimeout(() => {
          router.push('/auth/login')
        }, 2000)
      } else {
        toast.error(data.error || 'Failed to reset password')
      }
    } catch (error) {
      toast.error('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-animated" />
        <div className="absolute inset-0 bg-mesh opacity-20" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 glass p-12 border-2 border-white/10 max-w-md text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-12 h-12 text-green-500" />
          </motion.div>
          <h2 className="text-3xl font-display text-white mb-4">PASSWORD RESET</h2>
          <p className="text-white/60 mb-6">
            Your password has been successfully reset. Redirecting to login...
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-animated" />
      <div className="absolute inset-0 bg-mesh opacity-20" />
      
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-64 h-64 bg-primary-500/20 blur-3xl rounded-full"
      />
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-72 h-72 bg-accent-500/20 blur-3xl rounded-full"
      />

      <div className="relative z-10 w-full max-w-md px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center justify-center space-x-3 mb-12 cursor-pointer group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center 
                            transform group-hover:scale-110 transition-transform">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <span className="text-4xl font-display gradient-text tracking-wider">WINVAULT</span>
            </div>
          </Link>

          {/* Form Card */}
          <div className="glass p-8 border-2 border-white/10">
            <div className="mb-8">
              <h1 className="text-4xl font-display text-white mb-2">NEW PASSWORD</h1>
              <p className="text-white/60">Enter your new password below</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* New Password */}
              <div>
                <label className="block text-white/70 mb-2 text-sm uppercase tracking-wider font-semibold">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="input pl-12 pr-12"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-white/70 mb-2 text-sm uppercase tracking-wider font-semibold">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="input pl-12 pr-12"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Password Requirements */}
              <div className="bg-dark-900/50 p-4 border border-white/5 space-y-2">
                <p className="text-xs text-white/50 uppercase tracking-wider mb-2">Password Requirements:</p>
                <ul className="text-xs text-white/60 space-y-1">
                  <li className="flex items-center space-x-2">
                    <span className={formData.password.length >= 8 ? 'text-green-500' : 'text-white/40'}>•</span>
                    <span>At least 8 characters</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className={/(?=.*[a-z])/.test(formData.password) ? 'text-green-500' : 'text-white/40'}>•</span>
                    <span>One lowercase letter</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className={/(?=.*[A-Z])/.test(formData.password) ? 'text-green-500' : 'text-white/40'}>•</span>
                    <span>One uppercase letter</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className={/(?=.*\d)/.test(formData.password) ? 'text-green-500' : 'text-white/40'}>•</span>
                    <span>One number</span>
                  </li>
                </ul>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full group flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{loading ? 'RESETTING...' : 'RESET PASSWORD'}</span>
                {!loading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>

            {/* Back to Login */}
            <div className="mt-6 text-center">
              <Link href="/auth/login" className="text-primary-500 hover:text-primary-400 transition-colors font-semibold text-sm">
                ← Back to Login
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
