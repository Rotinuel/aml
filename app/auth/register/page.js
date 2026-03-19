'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Mail, Lock, User, ArrowRight, Eye, EyeOff, Trophy } from 'lucide-react'
import toast from 'react-hot-toast'

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Account created! Please login.')
        router.push('/auth/login')
      } else {
        toast.error(data.error || 'Registration failed')
      }
    } catch (error) {
      toast.error('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-950 relative overflow-hidden py-12">
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
                      <div className="flex items-center justify-center space-x-3 mb-2 cursor-pointer group">
                        {/*  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center 
                                      transform group-hover:scale-110 transition-transform">
                          <Trophy className="w-8 h-8 text-white" />
                        </div>
                        */}
                        <Image
                          src="/logo.png"
                          alt="Amazon Lucky Draw"
                          width={140}
                          height={45}
                          className="object-contain"
                          priority
                        />
                        <span className="text-4xl font-display gradient-text tracking-wider">Lottery</span>
                      </div>
                    </Link>

          {/* Form Card */}
          <div className="glass p-8 border-2 border-white/10">
            <div className="mb-8">
              <h1 className="text-4xl font-display text-white mb-2">JOIN WINVAULT</h1>
              <p className="text-white/60">Create your account and start winning</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-white/70 mb-2 text-sm uppercase tracking-wider font-semibold">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input pl-2 text-black"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-white/70 mb-2 text-sm uppercase tracking-wider font-semibold">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input pl-2 text-black"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-white/70 mb-2 text-sm uppercase tracking-wider font-semibold">
                  Password
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
                    minLength={6}
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
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="input pl-12"
                    placeholder="••••••••"
                    minLength={6}
                  />
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start space-x-3 cursor-pointer text-sm">
                <input type="checkbox" required className="w-4 h-4 mt-1 accent-primary-500" />
                <span className="text-white/60">
                  I agree to the{' '}
                  <a href="#" className="text-primary-500 hover:text-primary-400">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-primary-500 hover:text-primary-400">Privacy Policy</a>
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full group flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{loading ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT'}</span>
                {!loading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-dark-900 text-white/40 uppercase tracking-wider">Or</span>
              </div>
            </div>

            {/* Login Link */}
            <div className="text-center">
              <span className="text-white/60">Already have an account? </span>
              <Link href="/auth/login" className="text-primary-500 hover:text-primary-400 transition-colors font-bold">
                Sign in here
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
