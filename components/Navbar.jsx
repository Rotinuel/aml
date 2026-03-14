'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Gift, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-shadow duration-300
                  bg-amazon-navy border-b-[3px] border-amazon-orange
                  ${scrolled ? 'shadow-[0_4px_24px_rgba(0,0,0,0.5)]' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">

          {/* ── Logo ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 shrink-0"
          >
            {/* <div className="w-11 h-11 bg-amazon-orange rounded-lg flex items-center justify-center">
              <Gift size={21} className="text-amazon-dark" strokeWidth={2.2} />
            </div> */}
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Amazon Lucky Draw"
                width={140}
                height={45}
                className="object-contain"
                priority
              />
            </Link>
            <div className="leading-none">
              {/* <p className="text-[21px] font-bold text-white tracking-tight">amazon</p> */}
              <p className="text-[10px] text-amazon-orange font-semibold uppercase tracking-[2.5px]">
                Lucky Draw
              </p>
            </div>
          </motion.div>

          {/* ── Desktop menu ── */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href} className="nav-link">{label}</a>
            ))}
            <Link href="/auth/login" className="btn-outline">Sign In</Link>
            <Link href="/auth/register" className="btn-primary">Enter Draw</Link>
          </nav>

          {/* ── Mobile toggle ── */}
          <button
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
            className="md:hidden text-white p-1.5 rounded-md hover:bg-white/10 transition-colors"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-amazon-navy border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-5 flex flex-col gap-4">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href} href={href}
                  onClick={() => setOpen(false)}
                  className="nav-link text-base py-1"
                >
                  {label}
                </a>
              ))}
              <Link href="/auth/login" onClick={() => setOpen(false)}
                className="btn-outline text-center w-full">Sign In</Link>
              <Link href="/auth/register" onClick={() => setOpen(false)}
                className="btn-primary text-center w-full">Enter Draw</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
