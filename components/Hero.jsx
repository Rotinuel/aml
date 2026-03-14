'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Trophy, TrendingUp, Users, Zap } from 'lucide-react'
import PrizeCard from './PrizeCard'

const STATS = [
  { val: '1.2M+', label: 'Entries Sold',  Icon: Trophy     },
  { val: '$12M',  label: 'Prize Pool',    Icon: TrendingUp },
  { val: '47K',   label: 'Past Winners',  Icon: Users      },
  { val: '150+',  label: 'Countries',     Icon: Zap        },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[70px] overflow-hidden bg-amazon-dark">
      {/* Top accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1
                      bg-gradient-to-r from-amazon-orange via-prime to-amazon-orange" />

      {/* Ambient glow blobs */}
      <div className="absolute -top-28 -left-28 w-[580px] h-[580px]
                      hero-glow-l rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -right-16 w-[420px] h-[420px]
                      hero-glow-r rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full
                      grid grid-cols-1 lg:grid-cols-2 gap-14 items-center py-20">

        {/* ── Left ── */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x:   0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1   }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 bg-amazon-orange/10
                       border border-amazon-orange/30 px-4 py-1.5 rounded-full mb-7"
          >
            <span className="w-1.5 h-1.5 bg-amazon-orange rounded-full animate-pulse-dot" />
            <span className="text-amazon-orange text-xs font-semibold uppercase tracking-[1.5px]">
              Amazon Exclusive · Q2 2026 Grand Draw
            </span>
          </motion.div>

          {/* Headline */}
          <h1
            className="font-display leading-[0.92] text-glow mb-7"
            style={{ fontSize: 'clamp(54px, 7.5vw, 98px)' }}
          >
            <span className="block text-white">WIN PRIZES</span>
            <span className="block gradient-text">WORTH MILLIONS</span>
            <span className="block text-white">DELIVERED TO</span>
            <span className="block text-white">YOUR DOOR</span>
          </h1>

          <p className="text-white/60 text-lg leading-relaxed max-w-[480px] mb-10">
            Amazon's first-ever mega lottery — tech bundles, cars, dream vacations.
            Enter, watch the draw live, and get your prize shipped with Prime speed.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-14">
            <Link href="/auth/register" className="btn-hero">
              Enter the Draw <ArrowRight size={18} />
            </Link>
            <a href="#how-it-works" className="btn-ghost-hero">
              How It Works <ChevronDown size={18} />
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {STATS.map(({ val, label, Icon }, i) => (
              <motion.div
                key={label}
                className="stat-card"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y:  0 }}
                transition={{ delay: 0.35 + i * 0.1 }}
              >
                <Icon size={18} className="text-amazon-orange mb-2" />
                <p className="font-display text-amazon-orange leading-none mb-1"
                   style={{ fontSize: 30 }}>{val}</p>
                <p className="text-[11px] text-white/40 uppercase tracking-[1.2px]">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Right: Prize Card ── */}
        <div className="hidden lg:flex justify-center">
          <PrizeCard />
        </div>
      </div>
    </section>
  )
}
