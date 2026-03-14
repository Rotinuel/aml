'use client'

import { motion } from 'framer-motion'
import { Shield, Truck, Package, Award, Users, Zap } from 'lucide-react'

const FEATURES = [
  {
    Icon: Shield, color: '#00A8E1',
    title: 'Amazon-Backed Security',
    desc:  'Every draw uses the same fraud-prevention infrastructure trusted by 300M+ customers worldwide.',
  },
  {
    Icon: Truck, color: '#FF9900',
    title: 'Prime Prize Delivery',
    desc:  'Physical prizes shipped free with Prime, often within 48 hours of winning. No couriers.',
  },
  {
    Icon: Package, color: '#067D62',
    title: 'Real Amazon Products',
    desc:  'Win genuine Amazon devices, Echo bundles, and Kindle collections at verified retail value.',
  },
  {
    Icon: Award, color: '#FF9900',
    title: 'Certified Fair Draws',
    desc:  'Independent audits, live-streamed draws, and on-chain verification — every result is genuine.',
  },
  {
    Icon: Users, color: '#00A8E1',
    title: 'Prime Member Perks',
    desc:  'Prime members earn bonus tickets and early access to exclusive high-value draws each quarter.',
  },
  {
    Icon: Zap, color: '#FFB347',
    title: 'Instant Cash Transfers',
    desc:  'Cash prizes deposited directly to your Amazon Pay wallet within minutes of draw closure.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-28 bg-amazon-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Why Amazon Lucky Draw</p>
          <h2 className="section-heading font-display">
            <span className="text-white">BUILT ON TRUST,</span>
            <br />
            <span className="gradient-text">POWERED BY PRIME</span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed max-w-xl mt-2">
            The same reliability that ships your orders overnight — now delivering
            life-changing prizes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {FEATURES.map(({ Icon, color, title, desc }, i) => (
            <motion.div
              key={title}
              className="feature-card group"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.5 }}
            >
              {/* Animated top bar (CSS-driven via group hover in globals.css) */}
              <div className="feature-card-bar" />

              <div
                className="w-[52px] h-[52px] bg-amazon-orange/10 rounded-xl
                           flex items-center justify-center mb-5
                           group-hover:scale-110 transition-transform duration-300"
              >
                <Icon size={24} style={{ color }} strokeWidth={1.8} />
              </div>

              <h3 className="text-lg font-bold mb-2.5 text-white
                             group-hover:text-amazon-orange transition-colors duration-200">
                {title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
