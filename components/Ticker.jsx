// Server component — no 'use client' needed

const WINS = [
  '🏆 Sarah K. (Toronto) won Echo Studio Bundle — $420',
  '🎉 James L. (London) won Cash Prize — $50,000',
  '📦 Priya M. (Bengaluru) won Fire TV Max — $230',
  '🚗 Marco R. (Milan) won $100,000 Car Voucher',
  '💻 Aiko T. (Tokyo) won MacBook Pro Bundle — $3,200',
  '🌴 Chen W. (Singapore) won Dream Vacation — $8,000',
  '🎮 Luis G. (São Paulo) won Gaming Setup — $1,800',
  '📱 Fatima A. (Dubai) won iPhone + AirPods — $1,600',
]

// Duplicate for seamless loop
const ITEMS = [...WINS, ...WINS]

export default function Ticker() {
  return (
    <div className="bg-amazon-navy border-y border-amazon-orange/20 py-3 overflow-hidden">
      <div className="flex items-center">
        {/* Label */}
        <div className="shrink-0 bg-amazon-orange text-amazon-dark text-xs font-bold
                        uppercase tracking-[1.5px] px-4 py-1 mr-6 rounded-r-full z-10">
          LIVE WINS
        </div>

        {/* Scrolling band */}
        <div className="flex overflow-hidden">
          <ul
            className="flex gap-12 whitespace-nowrap animate-ticker"
            style={{ willChange: 'transform' }}
          >
            {ITEMS.map((win, i) => (
              <li key={i} className="text-sm text-white/60 shrink-0">
                {win}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
