'use client'

import { motion } from 'framer-motion'

const METRICS = [
  { val: '1994',  lbl: 'Amazon Founded'    },
  { val: '300M+', lbl: 'Customer Accounts' },
  { val: '47K',   lbl: 'Draw Winners'      },
  { val: '99.9%', lbl: 'Payout Rate'       },
]

const REVIEWS = [
  {
    stars: 5,
    text: '"Couldn\'t believe it when the email arrived. My Echo Studio was at my doorstep 36 hours later. Only Amazon could pull that off."',
    author: 'Sarah K., Toronto — Won Echo Bundle ($420)',
  },
  {
    stars: 5,
    text: '"The draw was streamed live and I watched my number come up in real time. Most transparent lottery I\'ve seen."',
    author: 'James L., London — Won $50,000 Cash Prize',
  },
  {
    stars: 4,
    text: '"Prime members get double tickets on weekends. Used mine on the Tesla draw — fingers crossed for next month!"',
    author: 'Priya M., Bengaluru — Active Prime Member',
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 bg-amazon-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* ── Left copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="section-label">Our Story</p>
            <h2 className="section-heading font-display">
              <span className="gradient-text">DELIVERING</span>
              <br />
              <span className="text-white">HAPPINESS</span>
              <br />
              <span className="text-white">SINCE 1994</span>
            </h2>

            <div className="space-y-5 text-white/65 text-base leading-relaxed mt-4">
              <p>
                Amazon Lucky Draw is an extension of our core mission — to be Earth's
                most customer-centric company. We wanted to create a space where
                customers could not only shop for things they love, but win them.
              </p>
              <p>
                Launched in partnership with Amazon Pay and Prime, every draw is backed
                by our industry-leading trust and safety systems. We don't just promise
                transparency — we prove it with live draws and independent auditing.
              </p>
              <p>
                From $10 instant-win games to million-dollar mega jackpots, there's a
                draw for every customer at every budget. Play responsibly, play Amazon.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {METRICS.map(({ val, lbl }) => (
                <div key={lbl} className="metric-card">
                  <p className="font-display gradient-text leading-none mb-1"
                     style={{ fontSize: 40 }}>{val}</p>
                  <p className="text-xs text-white/45 uppercase tracking-[1.2px]">{lbl}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right reviews ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="bg-gradient-to-br from-amazon-navy to-amazon-orange/[0.05]
                       border border-amazon-orange/20 rounded-2xl p-8 flex flex-col gap-5"
          >
            <p className="text-xs font-semibold text-white/40 uppercase tracking-[1.5px]">
              What Winners Say
            </p>

            {REVIEWS.map(({ stars, text, author }, i) => (
              <div key={i} className="review-card">
                <p className="text-amazon-orange text-sm mb-2">
                  {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
                </p>
                <p className="text-sm text-white/70 leading-relaxed mb-3">{text}</p>
                <p className="text-xs font-semibold text-white/40">{author}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
