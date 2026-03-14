'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Draw closes 2 days + 14 hours from first render (demo)
const DRAW_MS = Date.now() + (2 * 86400 + 14 * 3600) * 1000

function useCountdown(targetMs) {
  const compute = () => {
    const diff = Math.max(0, targetMs - Date.now())
    return {
      d: String(Math.floor(diff / 86400000)).padStart(2, '0'),
      h: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
      m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
      s: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
    }
  }
  const [t, setT] = useState({ d:'00', h:'00', m:'00', s:'00' })
  useEffect(() => {
    setT(compute())
    const id = setInterval(() => setT(compute()), 1000)
    return () => clearInterval(id)
  }, [])
  return t
}

const UNIT_LABELS = ['Days', 'Hrs', 'Min', 'Sec']

export default function PrizeCard() {
  const { d, h, m, s } = useCountdown(DRAW_MS)
  const units = [d, h, m, s]

  return (
    <div className="relative flex items-center justify-center py-10">
      {/* Orbital rings */}
      <div className="orbital w-[420px] h-[420px] animate-spin-slow  absolute" />
      <div className="orbital w-[520px] h-[520px] animate-spin-slower absolute" />

      <motion.div
        className="prize-card"
        initial={{ opacity: 0, y: 28, scale: 0.95 }}
        animate={{ opacity: 1, y: 0,  scale: 1    }}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        {/* Prime badge */}
        <div className="absolute -top-[14px] left-1/2 -translate-x-1/2
                        bg-prime text-white text-[11px] font-bold uppercase
                        tracking-[1.5px] px-5 py-1 rounded-full whitespace-nowrap">
          ⚡ Prime Draw
        </div>

        <p className="text-[11px] text-white/40 uppercase tracking-[2px] mt-4 mb-1">
          Grand Jackpot
        </p>

        {/* Amount */}
        <p className="font-display gradient-text text-glow leading-none mb-1"
           style={{ fontSize: 82 }}>
          $5M
        </p>
        <p className="text-[11px] text-white/40 uppercase tracking-[1.8px] mb-6">
          + Amazon Devices Bundle
        </p>

        {/* Countdown */}
        <p className="text-[11px] text-white/40 uppercase tracking-[1.5px] mb-3">
          Draw closes in
        </p>
        <div className="grid grid-cols-4 gap-2 mb-6">
          {units.map((num, i) => (
            <div key={i} className="timer-unit">
              <p className="font-display text-amazon-orange text-[26px] leading-none">{num}</p>
              <p className="text-[9px] text-white/40 uppercase tracking-[1px] mt-0.5">
                {UNIT_LABELS[i]}
              </p>
            </div>
          ))}
        </div>

        <div className="h-px bg-white/10 mb-5" />

        <div className="flex justify-between text-sm text-white/50">
          <span>🎟 $9.99 / ticket</span>
          <span className="text-wins font-semibold">✓ Verified</span>
        </div>

        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-5">
          <Link
            href="/auth/register"
            className="block bg-gradient-to-r from-amazon-orange to-amazon-orange-dark
                       text-amazon-dark font-bold text-[15px] py-3.5 rounded-lg text-center
                       shadow-[0_4px_22px_rgba(255,153,0,0.45)]
                       hover:shadow-[0_6px_30px_rgba(255,153,0,0.65)]
                       transition-shadow duration-200"
          >
            Buy Tickets Now →
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
