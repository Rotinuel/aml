import Link from 'next/link'
import Image from 'next/image'
import { Gift } from 'lucide-react'

const COLS = [
  {
    head: 'Draws',
    links: [
      { label: 'Grand Jackpot', href: '#' },
      { label: 'Weekly Draws', href: '#' },
      { label: 'Prime Exclusives', href: '#' },
      { label: 'Instant Win', href: '#' },
    ],
  },
  {
    head: 'Support',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Responsible Play', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Privacy Notice', href: '#' },
    ],
  },
  {
    head: 'Amazon',
    links: [
      { label: 'Amazon.com', href: '#' },
      { label: 'Prime Membership', href: '#' },
      { label: 'Amazon Pay', href: '#' },
      { label: 'Investor Relations', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-amazon-navy border-t border-white/10 pt-14 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              {/* <div className="w-10 h-10 bg-amazon-orange rounded-lg flex items-center justify-center">
                <Gift size={18} className="text-amazon-dark" strokeWidth={2.2} />
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
                <p className="text-[18px] font-bold text-white">amazon</p>
                <p className="text-[10px] text-amazon-orange font-semibold uppercase tracking-[2px]">
                  Lucky Draw
                </p>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-[240px]">
              Operated under Amazon Pay Services. Prizes subject to local tax laws.
              Play responsibly. 18+.
            </p>
          </div>

          {/* Link columns */}
          {COLS.map(({ head, links }) => (
            <div key={head}>
              <h4 className="text-xs font-bold text-white uppercase tracking-[1px] mb-4">
                {head}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-white/45 hover:text-amazon-orange transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.07] py-5 flex flex-col sm:flex-row
                        justify-between items-center gap-3">
          <p className="text-xs text-white/30">
            © 2026 Amazon.com, Inc. or its affiliates. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy', 'Cookies', 'Terms'].map(l => (
              <Link
                key={l} href="#"
                className="text-xs text-white/30 hover:text-amazon-orange transition-colors duration-200"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
