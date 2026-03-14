'use client'

import { motion } from 'framer-motion'

const STEPS = [
  {
    n: '01', title: 'Sign In',
    desc: 'Use your existing Amazon account — no new registration needed.',
  },
  {
    n: '02', title: 'Pick a Draw',
    desc: 'Browse active draws by prize type, ticket price, or draw date.',
  },
  {
    n: '03', title: 'Buy Tickets',
    desc: 'Pay securely with Amazon Pay, card, or gift-card balance.',
  },
  {
    n: '04', title: 'Claim Prizes',
    desc: 'Winners notified instantly. Cash or products shipped to your address.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-amazon-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label text-center">Simple Process</p>
          <h2 className="section-heading font-display text-center">
            <span className="text-white">HOW IT&nbsp;</span>
            <span className="gradient-text">WORKS</span>
          </h2>
          <p className="text-white/55 text-lg max-w-lg mx-auto mt-2">
            Four steps from your Amazon account to your prize.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Connector line — lg only */}
          <div
            className="hidden lg:block absolute h-[2px] pointer-events-none z-0
                        bg-gradient-to-r from-amazon-orange via-amazon-orange/40 to-transparent"
            style={{ top: '36px', left: '12.5%', right: '12.5%' }}
          />

          {STEPS.map(({ n, title, desc }, i) => (
            <motion.div
              key={n}
              className="relative z-10 step-card flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div
                className="w-[72px] h-[72px] shrink-0 mb-5 rounded-full
                           bg-amazon-navy border-2 border-amazon-orange
                           flex items-center justify-center
                           font-display text-amazon-orange text-[28px]"
              >
                {n}
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
