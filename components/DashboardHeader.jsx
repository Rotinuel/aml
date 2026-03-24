'use client'

// ── Drop this component into your dashboard file, above DashboardPage ──────────
// Then replace your existing <header> block with <DashboardHeader ... />

import { useState, useRef, useEffect } from 'react'
import { Trophy, Gift, LogOut, DollarSign, User, ChevronDown, Ticket } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function DashboardHeader({ user, onTopUp, onLogout, onViewTickets }) {
  const [profileOpen, setProfileOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const initials = user.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <header className="glass border-b border-white/10 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex justify-between items-center">

          {/* ── Logo ── */}
          <div className="flex items-center gap-2 shrink-0">
            <Trophy className="w-7 h-7 text-primary-500" />
            <span className="text-xl sm:text-2xl font-display gradient-text">WINVAULT</span>
          </div>

          {/* ── Desktop right side (hidden on mobile) ── */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onTopUp}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', color: 'white' }}
            >
              <Gift className="w-4 h-4" />
              Top Up
            </button>
            <div className="glass px-4 py-2 border border-primary-500/30">
              <span className="text-white/60 text-sm mr-2">Balance:</span>
              <span className="text-accent-400 font-bold text-lg">${user.balance.toFixed(2)}</span>
            </div>
            <button onClick={onLogout} className="btn-ghost flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>

          {/* ── Mobile: avatar profile button (hidden on desktop) ── */}
          <div className="relative sm:hidden" ref={dropdownRef}>
            <button
              onClick={() => setProfileOpen((v) => !v)}
              className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full transition-all active:scale-95"
              style={{
                background: profileOpen ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              {/* Avatar circle */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}
              >
                {initials}
              </div>
              {/* Balance preview */}
              <span className="text-accent-400 font-bold text-sm">${user.balance.toFixed(2)}</span>
              <motion.div animate={{ rotate: profileOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-3.5 h-3.5 text-white/40" />
              </motion.div>
            </button>

            {/* ── Dropdown panel ── */}
            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-64 rounded-2xl overflow-hidden shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {/* User info */}
                  <div className="p-4 border-b border-white/8">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                        style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}
                      >
                        {initials}
                      </div>
                      <div className="min-w-0">
                        <p className="text-white font-semibold text-sm truncate">{user.name}</p>
                        <p className="text-white/40 text-xs truncate">{user.email || 'Player'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Balance */}
                  <div
                    className="mx-3 mt-3 p-3 rounded-xl"
                    style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)' }}
                  >
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Available Balance</p>
                    <p className="text-accent-400 font-bold text-2xl">${user.balance.toFixed(2)}</p>
                  </div>

                  {/* Actions */}
                  <div className="p-3 space-y-1">
                    <button
                      onClick={() => { onTopUp(); setProfileOpen(false) }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-white transition-all active:scale-95"
                      style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)' }}
                    >
                      <Gift className="w-4 h-4 shrink-0" />
                      Top Up with Gift Card
                    </button>

                    <button
                      onClick={() => { onViewTickets(); setProfileOpen(false) }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
                      style={{ color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.05)' }}
                    >
                      <Ticket className="w-4 h-4 shrink-0 text-purple-400" />
                      My Tickets
                    </button>

                    <button
                      onClick={() => { onLogout(); setProfileOpen(false) }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
                      style={{ color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.03)' }}
                    >
                      <LogOut className="w-4 h-4 shrink-0" />
                      Logout
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </header>
  )
}
