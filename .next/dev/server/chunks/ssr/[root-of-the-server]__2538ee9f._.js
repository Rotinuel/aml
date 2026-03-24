module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/app/dashboard/page.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// // 'use client'
// // import { useState, useEffect, useCallback, useRef } from 'react'
// // import { motion, AnimatePresence } from 'framer-motion'
// // import { Trophy, Ticket, Sparkles, LogOut, Calendar, DollarSign, X, Gift, Clock, ChevronRight, ChevronDown, Hash, CreditCard, CheckCircle, AlertCircle, Copy, Star, Menu } from 'lucide-react'
// // import { useRouter } from 'next/navigation'
// // import toast from 'react-hot-toast'
// // // ─── Countdown Hook ───────────────────────────────────────────────────────────
// // function useCountdown(targetDate) {
// //   const calc = useCallback(() => {
// //     const diff = new Date(targetDate) - new Date()
// //     if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
// //     return {
// //       days: Math.floor(diff / 86400000),
// //       hours: Math.floor((diff % 86400000) / 3600000),
// //       minutes: Math.floor((diff % 3600000) / 60000),
// //       seconds: Math.floor((diff % 60000) / 1000),
// //       expired: false,
// //     }
// //   }, [targetDate])
// //   const [time, setTime] = useState(calc)
// //   useEffect(() => {
// //     const id = setInterval(() => setTime(calc()), 1000)
// //     return () => clearInterval(id)
// //   }, [calc])
// //   return time
// // }
// // // ─── CountdownDisplay ─────────────────────────────────────────────────────────
// // function CountdownDisplay({ drawDate, compact = false }) {
// //   const t = useCountdown(drawDate)
// //   if (t.expired) return <span className="text-red-400 font-bold text-xs uppercase tracking-wider">Closed</span>
// //   return (
// //     <div className="flex items-center gap-0.5 text-xs font-mono flex-wrap">
// //       {[['d', t.days], ['h', t.hours], ['m', t.minutes], ['s', t.seconds]].map(([label, val]) => (
// //         <span key={label} className="flex items-center gap-0.5">
// //           <span className="bg-white/10 px-1 py-0.5 rounded text-white font-bold tabular-nums" style={{ minWidth: compact ? 20 : 24, textAlign: 'center' }}>
// //             {String(val).padStart(2, '0')}
// //           </span>
// //           <span className="text-white/40 mr-0.5">{label}</span>
// //         </span>
// //       ))}
// //     </div>
// //   )
// // }
// // // ─── Mobile Profile Menu ──────────────────────────────────────────────────────
// // function MobileProfileMenu({ user, onTopUp, onLogout, onViewTickets }) {
// //   const [open, setOpen] = useState(false)
// //   const ref = useRef(null)
// //   useEffect(() => {
// //     const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
// //     document.addEventListener('mousedown', handler)
// //     return () => document.removeEventListener('mousedown', handler)
// //   }, [])
// //   const initials = user.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
// //   return (
// //     <div className="relative sm:hidden" ref={ref}>
// //       <button
// //         onClick={() => setOpen(v => !v)}
// //         className="flex items-center gap-2 pl-1 pr-2.5 py-1 rounded-full transition-all active:scale-95"
// //         style={{ background: open ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
// //       >
// //         <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
// //           style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>{initials}</div>
// //         <span className="text-accent-400 font-bold text-sm">${user.balance.toFixed(2)}</span>
// //         <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
// //           <ChevronDown className="w-3.5 h-3.5 text-white/40" />
// //         </motion.div>
// //       </button>
// //       <AnimatePresence>
// //         {open && (
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.95, y: -6 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: -6 }}
// //             transition={{ duration: 0.15 }}
// //             className="absolute right-0 mt-2 w-64 rounded-2xl overflow-hidden shadow-2xl"
// //             style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)', border: '1px solid rgba(255,255,255,0.1)', zIndex: 999 }}
// //           >
// //             <div className="p-4 border-b border-white/10">
// //               <div className="flex items-center gap-3">
// //                 <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
// //                   style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>{initials}</div>
// //                 <div className="min-w-0">
// //                   <p className="text-white font-semibold text-sm truncate">{user.name}</p>
// //                   <p className="text-white/40 text-xs">{user.email || 'Player'}</p>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="mx-3 mt-3 p-3 rounded-xl" style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)' }}>
// //               <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Available Balance</p>
// //               <p className="text-accent-400 font-bold text-2xl">${user.balance.toFixed(2)}</p>
// //             </div>
// //             <div className="p-3 space-y-1.5">
// //               <button onClick={() => { onTopUp(); setOpen(false) }}
// //                 className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-white transition-all active:scale-95"
// //                 style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)' }}>
// //                 <Gift className="w-4 h-4 shrink-0" /> Top Up with Gift Card
// //               </button>
// //               <button onClick={() => { onViewTickets(); setOpen(false) }}
// //                 className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
// //                 style={{ color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.05)' }}>
// //                 <Ticket className="w-4 h-4 shrink-0 text-purple-400" /> My Tickets
// //               </button>
// //               <button onClick={() => { onLogout(); setOpen(false) }}
// //                 className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
// //                 style={{ color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.03)' }}>
// //                 <LogOut className="w-4 h-4 shrink-0" /> Logout
// //               </button>
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   )
// // }
// // // ─── Ticket Detail Modal ──────────────────────────────────────────────────────
// // function TicketModal({ tickets, events, onClose }) {
// //   const [selected, setSelected] = useState(null)
// //   const [copied, setCopied] = useState(null)
// //   const copyNumber = (num) => {
// //     navigator.clipboard.writeText(num)
// //     setCopied(num)
// //     setTimeout(() => setCopied(null), 1500)
// //   }
// //   const getEvent = (eventId) => events.find(e => e.id === eventId)
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
// //       className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center"
// //       style={{ padding: 0 }}
// //       onClick={onClose}
// //     >
// //       <motion.div
// //         initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 60 }}
// //         transition={{ type: 'spring', damping: 30, stiffness: 300 }}
// //         onClick={e => e.stopPropagation()}
// //         className="w-full sm:max-w-2xl sm:mx-4 flex flex-col"
// //         style={{
// //           background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)',
// //           border: '1px solid rgba(255,255,255,0.1)',
// //           borderRadius: '16px 16px 0 0',
// //           maxHeight: '90vh',
// //         }}
// //       >
// //         {/* Drag handle for mobile */}
// //         <div className="flex justify-center pt-3 pb-1 sm:hidden">
// //           <div className="w-10 h-1 rounded-full bg-white/20" />
// //         </div>
// //         <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10">
// //           <div className="flex items-center gap-3">
// //             <div style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)', borderRadius: 8, padding: 8 }}>
// //               <Ticket className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
// //             </div>
// //             <div>
// //               <h2 className="text-lg sm:text-xl font-bold text-white">Your Tickets</h2>
// //               <p className="text-white/50 text-xs sm:text-sm">{tickets.length} purchase{tickets.length !== 1 ? 's' : ''} · {tickets.reduce((s, t) => s + t.quantity, 0)} total</p>
// //             </div>
// //           </div>
// //           <button onClick={onClose} className="text-white/40 hover:text-white p-2 -mr-2"><X className="w-5 h-5" /></button>
// //         </div>
// //         <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-3">
// //           {tickets.length === 0 ? (
// //             <div className="text-center py-16 text-white/40">
// //               <Ticket className="w-12 h-12 mx-auto mb-3 opacity-30" />
// //               <p>No tickets yet</p>
// //             </div>
// //           ) : tickets.map((ticket) => {
// //             const event = getEvent(ticket.eventId)
// //             const isOpen = selected === ticket.id
// //             return (
// //               <motion.div key={ticket.id} layout style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12 }}>
// //                 <button onClick={() => setSelected(isOpen ? null : ticket.id)} className="w-full flex items-center justify-between p-3 sm:p-4 text-left">
// //                   <div className="flex items-center gap-3 min-w-0">
// //                     <div style={{ background: 'rgba(124,58,237,0.2)', borderRadius: 8, padding: 6, flexShrink: 0 }}>
// //                       <Star className="w-4 h-4 text-purple-400" />
// //                     </div>
// //                     <div className="min-w-0">
// //                       <p className="text-white font-semibold text-sm truncate">{ticket.eventName}</p>
// //                       <p className="text-white/40 text-xs">{new Date(ticket.purchaseDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
// //                     </div>
// //                   </div>
// //                   <div className="flex items-center gap-2 sm:gap-4 shrink-0 ml-2">
// //                     <div className="text-right">
// //                       <p className="text-emerald-400 font-bold text-sm">${ticket.totalCost}</p>
// //                       <p className="text-white/40 text-xs">{ticket.quantity} ticket{ticket.quantity > 1 ? 's' : ''}</p>
// //                     </div>
// //                     <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
// //                       <ChevronRight className="w-4 h-4 text-white/40" />
// //                     </motion.div>
// //                   </div>
// //                 </button>
// //                 <AnimatePresence>
// //                   {isOpen && (
// //                     <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
// //                       <div className="px-3 sm:px-4 pb-4 border-t border-white/5 pt-4 space-y-4">
// //                         {event && (
// //                           <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: 12 }} className="grid grid-cols-3 gap-2 text-center">
// //                             <div>
// //                               <p className="text-white/40 text-[10px] sm:text-xs uppercase tracking-wider mb-1">Prize</p>
// //                               <p className="text-yellow-400 font-bold text-sm">${event.prize.toLocaleString()}</p>
// //                             </div>
// //                             <div>
// //                               <p className="text-white/40 text-[10px] sm:text-xs uppercase tracking-wider mb-1">Draw</p>
// //                               <p className="text-white text-xs">{new Date(event.drawDate).toLocaleDateString()}</p>
// //                             </div>
// //                             <div>
// //                               <p className="text-white/40 text-[10px] sm:text-xs uppercase tracking-wider mb-1">Time Left</p>
// //                               <CountdownDisplay drawDate={event.drawDate} compact />
// //                             </div>
// //                           </div>
// //                         )}
// //                         <div>
// //                           <p className="text-white/40 text-xs uppercase tracking-wider mb-2 flex items-center gap-1">
// //                             <Hash className="w-3 h-3" /> Ticket Numbers
// //                           </p>
// //                           <div className="flex flex-wrap gap-2">
// //                             {ticket.ticketNumbers.map((num, i) => (
// //                               <button key={i} onClick={() => copyNumber(num)}
// //                                 className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-mono text-xs sm:text-sm transition-all"
// //                                 style={{ background: copied === num ? 'rgba(16,185,129,0.2)' : 'rgba(124,58,237,0.15)', border: `1px solid ${copied === num ? 'rgba(16,185,129,0.4)' : 'rgba(124,58,237,0.3)'}`, color: copied === num ? '#10b981' : '#a78bfa' }}>
// //                                 {copied === num ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3 opacity-50" />}
// //                                 {num}
// //                               </button>
// //                             ))}
// //                           </div>
// //                         </div>
// //                         <div className="flex items-center gap-2 flex-wrap">
// //                           <span style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 20, padding: '2px 10px' }} className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">Active Entry</span>
// //                           <span className="text-white/30 text-xs">#{ticket.id.slice(-6)}</span>
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             )
// //           })}
// //         </div>
// //       </motion.div>
// //     </motion.div>
// //   )
// // }
// // // ─── Gift Card Top-Up Modal ───────────────────────────────────────────────────
// // function TopUpModal({ onClose, onSubmit }) {
// //   const [cardType, setCardType] = useState(null)
// //   const [code, setCode] = useState('')
// //   const [amount, setAmount] = useState('')
// //   const [loading, setLoading] = useState(false)
// //   const [step, setStep] = useState('form')
// //   const [cardImage, setCardImage] = useState(null)
// //   const [dragOver, setDragOver] = useState(false)
// //   const cardDenominations = [
// //     { value: 10, color: ['#1a1a2e', '#16213e'], accent: '#60a5fa', label: 'Starter' },
// //     { value: 25, color: ['#1a2e1a', '#16321e'], accent: '#4ade80', label: 'Popular' },
// //     { value: 50, color: ['#2e1a1a', '#321616'], accent: '#f97316', label: 'Classic' },
// //     { value: 100, color: ['#2a1a2e', '#24163e'], accent: '#c084fc', label: 'Premium' },
// //     { value: 250, color: ['#2e2a1a', '#3e3216'], accent: '#fbbf24', label: 'Gold' },
// //     { value: 500, color: ['#1a2a2e', '#16363e'], accent: '#22d3ee', label: 'Platinum' },
// //   ]
// //   const processFile = (file) => {
// //     if (!file) return
// //     if (file.size > 10 * 1024 * 1024) { toast.error('Image must be under 10MB'); return }
// //     const reader = new FileReader()
// //     reader.onload = (e) => setCardImage({ file, preview: e.target.result, name: file.name, size: (file.size / 1024).toFixed(0) + ' KB' })
// //     reader.readAsDataURL(file)
// //   }
// //   const handleSubmit = async () => {
// //     if (!amount) { toast.error('Please select a card value'); return }
// //     if (cardType === 'ecode' && !code.trim()) { toast.error('Please enter your e-code'); return }
// //     if (cardType === 'physical' && !cardImage) { toast.error('Please upload a photo of your card'); return }
// //     setLoading(true)
// //     await new Promise(r => setTimeout(r, 1200))
// //     setLoading(false); setStep('pending')
// //     onSubmit({ code: code.trim(), amount: Number(amount), cardType })
// //   }
// //   return (
// //     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
// //       className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center"
// //       onClick={onClose}
// //     >
// //       <motion.div
// //         initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 60 }}
// //         transition={{ type: 'spring', damping: 30, stiffness: 300 }}
// //         onClick={e => e.stopPropagation()}
// //         className="w-full sm:max-w-md sm:mx-4 overflow-y-auto"
// //         style={{
// //           background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)',
// //           border: '1px solid rgba(255,255,255,0.1)',
// //           borderRadius: '16px 16px 0 0',
// //           maxHeight: '92vh',
// //         }}
// //       >
// //         {/* Drag handle */}
// //         <div className="flex justify-center pt-3 pb-1 sm:hidden">
// //           <div className="w-10 h-1 rounded-full bg-white/20" />
// //         </div>
// //         {step === 'pending' ? (
// //           <div className="p-6 sm:p-8 text-center">
// //             <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}
// //               className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
// //               style={{ background: 'rgba(234,179,8,0.15)', border: '2px solid rgba(234,179,8,0.4)' }}>
// //               <Clock className="w-8 h-8 text-yellow-400" />
// //             </motion.div>
// //             <h3 className="text-xl font-bold text-white mb-2">Request Submitted!</h3>
// //             <p className="text-white/50 text-sm mb-6">Your gift card has been sent for admin verification. Funds will be added once approved.</p>
// //             <button onClick={onClose} className="w-full py-3 rounded-lg font-semibold text-white"
// //               style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>Done</button>
// //           </div>
// //         ) : (
// //           <>
// //             <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10">
// //               <div className="flex items-center gap-3">
// //                 <div style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', borderRadius: 8, padding: 8 }}>
// //                   <Gift className="w-5 h-5 text-white" />
// //                 </div>
// //                 <div>
// //                   <h2 className="text-lg sm:text-xl font-bold text-white">Top Up Balance</h2>
// //                   <p className="text-white/50 text-sm">Redeem a gift card</p>
// //                 </div>
// //               </div>
// //               <button onClick={onClose} className="text-white/40 hover:text-white p-2 -mr-2"><X className="w-5 h-5" /></button>
// //             </div>
// //             <div className="px-4 sm:px-6 py-4 space-y-5">
// //               {/* Card type */}
// //               <div>
// //                 <label className="block text-white/60 text-xs uppercase tracking-wider mb-3 font-semibold">How would you like to redeem?</label>
// //                 <div className="grid grid-cols-2 gap-3">
// //                   {[
// //                     { key: 'physical', label: 'Physical Card', sub: 'Upload or snap a photo', color: '#f97316', bg: 'rgba(249,115,22,0.1)', border: 'rgba(249,115,22,0.5)' },
// //                     { key: 'ecode', label: 'E-Code', sub: 'Enter digital code', color: '#818cf8', bg: 'rgba(99,102,241,0.1)', border: 'rgba(99,102,241,0.5)' },
// //                   ].map(({ key, label, sub, color, bg, border }) => (
// //                     <button key={key} onClick={() => setCardType(key)}
// //                       className="relative rounded-xl p-3 sm:p-4 text-left transition-all active:scale-95"
// //                       style={{ background: cardType === key ? bg : 'rgba(255,255,255,0.03)', border: `2px solid ${cardType === key ? border : 'rgba(255,255,255,0.08)'}` }}>
// //                       {cardType === key && (
// //                         <div className="absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: color }}>
// //                           <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
// //                         </div>
// //                       )}
// //                       <p className="text-white text-sm font-bold mt-3">{label}</p>
// //                       <p className="text-white/40 text-xs mt-0.5">{sub}</p>
// //                     </button>
// //                   ))}
// //                 </div>
// //               </div>
// //               <AnimatePresence mode="wait">
// //                 {cardType && (
// //                   <motion.div key={cardType} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-5">
// //                     {cardType === 'ecode' && (
// //                       <div>
// //                         <label className="block text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">E-Code</label>
// //                         <div className="relative">
// //                           <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
// //                           <input type="text" value={code} onChange={e => setCode(e.target.value.toUpperCase())}
// //                             placeholder="XXXX-XXXX-XXXX-XXXX" autoFocus
// //                             className="w-full pl-10 pr-4 py-3 font-mono text-sm rounded-lg text-white placeholder-white/20 outline-none focus:ring-2 focus:ring-indigo-500/50"
// //                             style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', fontSize: 16 }} />
// //                         </div>
// //                       </div>
// //                     )}
// //                     <div>
// //                       <label className="block text-white/60 text-xs uppercase tracking-wider mb-3 font-semibold">Select Card Value</label>
// //                       <div className="grid grid-cols-3 gap-2">
// //                         {cardDenominations.map(({ value, color, accent, label }) => {
// //                           const sel = amount === String(value)
// //                           return (
// //                             <button key={value} onClick={() => setAmount(String(value))}
// //                               className="relative rounded-xl overflow-hidden transition-all active:scale-95"
// //                               style={{ background: `linear-gradient(135deg, ${color[0]}, ${color[1]})`, border: `2px solid ${sel ? accent : 'rgba(255,255,255,0.07)'}`, boxShadow: sel ? `0 0 16px ${accent}44` : 'none', transform: sel ? 'scale(1.04)' : 'scale(1)', aspectRatio: '1.586 / 1' }}>
// //                               <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)' }} />
// //                               <div className="absolute top-1.5 left-2 w-3.5 h-2.5 rounded-sm" style={{ background: `linear-gradient(135deg, ${accent}88, ${accent}44)`, border: `1px solid ${accent}66` }} />
// //                               {sel && (
// //                                 <div className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ background: accent }}>
// //                                   <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
// //                                 </div>
// //                               )}
// //                               <div className="absolute bottom-1.5 inset-x-0 px-2">
// //                                 <p className="text-white/40 text-[8px] uppercase tracking-wider leading-none mb-0.5">{label}</p>
// //                                 <p className="font-bold leading-none" style={{ color: accent, fontSize: 13 }}>${value}</p>
// //                               </div>
// //                             </button>
// //                           )
// //                         })}
// //                       </div>
// //                     </div>
// //                     {cardType === 'physical' && (
// //                       <div>
// //                         <label className="block text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">
// //                           Card Photo <span className="text-red-400/70 normal-case font-normal">· required</span>
// //                         </label>
// //                         {cardImage ? (
// //                           <div className="relative rounded-xl overflow-hidden" style={{ border: '1px solid rgba(16,185,129,0.3)' }}>
// //                             <img src={cardImage.preview} alt="Gift card" className="w-full h-36 sm:h-40 object-cover" />
// //                             <button onClick={() => setCardImage(null)} className="absolute top-2 right-2 px-2 py-1 rounded-lg text-xs text-white" style={{ background: 'rgba(0,0,0,0.6)' }}>Remove</button>
// //                           </div>
// //                         ) : (
// //                           <div
// //                             onDragOver={e => { e.preventDefault(); setDragOver(true) }}
// //                             onDragLeave={() => setDragOver(false)}
// //                             onDrop={e => { e.preventDefault(); setDragOver(false); processFile(e.dataTransfer.files[0]) }}
// //                             onClick={() => document.getElementById('gc-file-input').click()}
// //                             className="rounded-xl cursor-pointer flex flex-col items-center justify-center gap-2 py-7"
// //                             style={{ border: `2px dashed ${dragOver ? 'rgba(124,58,237,0.7)' : 'rgba(255,255,255,0.1)'}`, background: dragOver ? 'rgba(124,58,237,0.08)' : 'rgba(255,255,255,0.03)' }}>
// //                             <p className="text-white/60 text-sm font-semibold">Tap to upload</p>
// //                             <p className="text-white/30 text-xs">JPG, PNG, WEBP up to 10MB</p>
// //                             <input id="gc-file-input" type="file" accept="image/*" className="hidden" onChange={e => processFile(e.target.files[0])} />
// //                           </div>
// //                         )}
// //                       </div>
// //                     )}
// //                     <div style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)', borderRadius: 10 }} className="p-3 flex gap-2 items-start">
// //                       <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
// //                       <p className="text-yellow-400/80 text-xs leading-relaxed">
// //                         {cardType === 'ecode' ? 'Enter your code exactly as shown. Admin will verify and credit your balance within minutes.' : 'Upload a clear photo. Admin will verify and add funds shortly.'}
// //                       </p>
// //                     </div>
// //                     <button onClick={handleSubmit} disabled={loading}
// //                       className="w-full py-3.5 rounded-lg font-bold text-white text-sm uppercase tracking-wider disabled:opacity-50 transition-all active:scale-95"
// //                       style={{ background: cardType === 'ecode' ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'linear-gradient(135deg, #f97316, #ef4444)' }}>
// //                       {loading ? 'Submitting…' : 'Submit for Verification'}
// //                     </button>
// //                     {/* Bottom safe area spacer on mobile */}
// //                     <div className="h-2 sm:hidden" />
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>
// //             </div>
// //           </>
// //         )}
// //       </motion.div>
// //     </motion.div>
// //   )
// // }
// // // ─── Leaderboard ─────────────────────────────────────────────────────────────
// // const DEMO_LEADERS = [
// //   { id: 'u1', name: 'CryptoKing99', avatar: 'CK', tickets: 47, spent: 2350, color: '#f59e0b' },
// //   { id: 'u2', name: 'LuckyStrike', avatar: 'LS', tickets: 38, spent: 1900, color: '#ec4899' },
// //   { id: 'u3', name: 'GoldenEagle', avatar: 'GE', tickets: 31, spent: 1550, color: '#22d3ee' },
// //   { id: 'u4', name: 'JackpotHunter', avatar: 'JH', tickets: 24, spent: 1200, color: '#a78bfa' },
// //   { id: 'u5', name: 'MillionDreamer', avatar: 'MD', tickets: 19, spent: 950, color: '#4ade80' },
// //   { id: 'u6', name: 'NightOwl', avatar: 'NO', tickets: 15, spent: 750, color: '#fb923c' },
// //   { id: 'u7', name: 'StarChaser', avatar: 'SC', tickets: 11, spent: 550, color: '#60a5fa' },
// // ]
// // const RANK_STYLES = [
// //   { bg: 'linear-gradient(135deg, #92400e, #b45309)', border: 'rgba(251,191,36,0.5)', glow: 'rgba(251,191,36,0.15)', badge: '🥇' },
// //   { bg: 'linear-gradient(135deg, #374151, #4b5563)', border: 'rgba(209,213,219,0.5)', glow: 'rgba(209,213,219,0.1)', badge: '🥈' },
// //   { bg: 'linear-gradient(135deg, #431407, #7c2d12)', border: 'rgba(249,115,22,0.5)', glow: 'rgba(249,115,22,0.1)', badge: '🥉' },
// // ]
// // function Leaderboard({ tickets, currentUserId }) {
// //   const [filter, setFilter] = useState('tickets')
// //   const [showAll, setShowAll] = useState(false)
// //   const myEntry = tickets.length > 0 ? {
// //     id: currentUserId || 'me', name: 'You', avatar: 'ME',
// //     tickets: tickets.reduce((s, t) => s + t.quantity, 0),
// //     spent: tickets.reduce((s, t) => s + t.totalCost, 0),
// //     color: '#7c3aed', isMe: true,
// //   } : null
// //   const allPlayers = [...DEMO_LEADERS, ...(myEntry ? [myEntry] : [])]
// //     .sort((a, b) => filter === 'tickets' ? b.tickets - a.tickets : b.spent - a.spent)
// //     .map((p, i) => ({ ...p, rank: i + 1 }))
// //   const visible = showAll ? allPlayers : allPlayers.slice(0, 5)
// //   const top3 = allPlayers.slice(0, 3)
// //   const maxVal = allPlayers[0]?.[filter === 'tickets' ? 'tickets' : 'spent'] || 1
// //   return (
// //     <div className="mb-8">
// //       <div className="flex items-center justify-between mb-5">
// //         <div className="flex items-center gap-2 sm:gap-3">
// //           <h2 className="text-2xl sm:text-3xl font-display text-white">LEADERBOARD</h2>
// //           <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
// //             <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
// //           </motion.div>
// //         </div>
// //         <div className="flex rounded-lg overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
// //           {[['tickets', 'Tickets'], ['spent', 'Spent']].map(([val, label]) => (
// //             <button key={val} onClick={() => setFilter(val)} className="px-2.5 sm:px-3 py-1.5 text-xs font-semibold transition-all"
// //               style={{ background: filter === val ? 'rgba(124,58,237,0.4)' : 'transparent', color: filter === val ? '#a78bfa' : 'rgba(255,255,255,0.4)' }}>
// //               {label}
// //             </button>
// //           ))}
// //         </div>
// //       </div>
// //       {/* Podium — tighter on mobile */}
// //       <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5 items-end">
// //         {[top3[1], top3[0], top3[2]].map((player, podiumIdx) => {
// //           if (!player) return <div key={podiumIdx} />
// //           const actualRank = podiumIdx === 1 ? 1 : podiumIdx === 0 ? 2 : 3
// //           const rs = RANK_STYLES[actualRank - 1]
// //           const heights = ['h-20 sm:h-24', 'h-28 sm:h-32', 'h-16 sm:h-20']
// //           return (
// //             <motion.div key={player.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: podiumIdx * 0.1 }} className="flex flex-col items-center">
// //               <div className="relative mb-1.5">
// //                 <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-white" style={{ background: player.color, boxShadow: `0 0 16px ${player.color}55` }}>{player.avatar}</div>
// //                 <span className="absolute -bottom-1 -right-1 text-sm leading-none">{rs.badge}</span>
// //               </div>
// //               <p className="text-white text-[10px] sm:text-xs font-bold mb-1 text-center truncate w-full px-1">{player.name}</p>
// //               <p className="text-white/40 text-[9px] sm:text-[10px] mb-1.5">
// //                 {filter === 'tickets' ? `${player.tickets}` : `$${player.spent}`}
// //               </p>
// //               <div className={`w-full ${heights[podiumIdx]} rounded-t-lg flex items-center justify-center`}
// //                 style={{ background: rs.bg, border: `1px solid ${rs.border}`, boxShadow: `0 0 20px ${rs.glow}` }}>
// //                 <span className="text-white/60 text-base sm:text-lg font-display">#{actualRank}</span>
// //               </div>
// //             </motion.div>
// //           )
// //         })}
// //       </div>
// //       {/* List */}
// //       <div className="space-y-2">
// //         {visible.map((player, idx) => {
// //           const isMe = player.isMe
// //           const barWidth = ((filter === 'tickets' ? player.tickets : player.spent) / maxVal * 100).toFixed(1)
// //           const rs = player.rank <= 3 ? RANK_STYLES[player.rank - 1] : null
// //           return (
// //             <motion.div key={player.id} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.04 }}
// //               className="relative overflow-hidden rounded-xl p-2.5 sm:p-3 flex items-center gap-2 sm:gap-3"
// //               style={{ background: isMe ? 'rgba(124,58,237,0.12)' : 'rgba(255,255,255,0.03)', border: isMe ? '1px solid rgba(124,58,237,0.35)' : '1px solid rgba(255,255,255,0.06)' }}>
// //               <div className="absolute inset-0 pointer-events-none" style={{ width: `${barWidth}%`, background: isMe ? 'rgba(124,58,237,0.06)' : 'rgba(255,255,255,0.02)', borderRadius: 'inherit' }} />
// //               <div className="w-6 sm:w-7 shrink-0 text-center">
// //                 {rs ? <span className="text-sm sm:text-base">{rs.badge}</span> : <span className="text-white/30 text-xs sm:text-sm font-bold">#{player.rank}</span>}
// //               </div>
// //               <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full shrink-0 flex items-center justify-center text-[10px] sm:text-xs font-bold text-white" style={{ background: player.color }}>{player.avatar}</div>
// //               <div className="flex-1 min-w-0">
// //                 <div className="flex items-center gap-1.5">
// //                   <p className="text-white text-xs sm:text-sm font-semibold truncate">{player.name}</p>
// //                   {isMe && <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0" style={{ background: 'rgba(124,58,237,0.3)', color: '#a78bfa', border: '1px solid rgba(124,58,237,0.4)' }}>YOU</span>}
// //                 </div>
// //                 <p className="text-white/30 text-[9px] sm:text-[10px]">{player.tickets} tickets · ${player.spent}</p>
// //               </div>
// //               <div className="text-right shrink-0">
// //                 <p className="font-bold text-xs sm:text-sm" style={{ color: isMe ? '#a78bfa' : player.rank <= 3 ? '#fbbf24' : 'rgba(255,255,255,0.6)' }}>
// //                   {filter === 'tickets' ? player.tickets : `$${player.spent}`}
// //                 </p>
// //               </div>
// //             </motion.div>
// //           )
// //         })}
// //       </div>
// //       {allPlayers.length > 5 && (
// //         <button onClick={() => setShowAll(!showAll)} className="w-full mt-3 py-2.5 rounded-xl text-sm font-semibold"
// //           style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}>
// //           {showAll ? 'Show Less ↑' : `Show All ${allPlayers.length} Players ↓`}
// //         </button>
// //       )}
// //     </div>
// //   )
// // }
// // // ─── Purchase Modal (mobile sheet) ───────────────────────────────────────────
// // function PurchaseModal({ event, user, ticketQuantity, setTicketQuantity, onConfirm, onClose }) {
// //   return (
// //     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
// //       className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center z-50"
// //       onClick={onClose}
// //     >
// //       <motion.div
// //         initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 60 }}
// //         transition={{ type: 'spring', damping: 30, stiffness: 300 }}
// //         onClick={e => e.stopPropagation()}
// //         className="w-full sm:max-w-md sm:mx-4 overflow-y-auto"
// //         style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px 16px 0 0', maxHeight: '92vh' }}
// //       >
// //         {/* Drag handle */}
// //         <div className="flex justify-center pt-3 pb-1 sm:hidden">
// //           <div className="w-10 h-1 rounded-full bg-white/20" />
// //         </div>
// //         <div className="px-5 sm:px-8 pt-4 sm:pt-6 pb-6 sm:pb-8">
// //           <div className="flex justify-between items-center mb-5">
// //             <h2 className="text-2xl sm:text-3xl font-display text-white">PURCHASE TICKETS</h2>
// //             <button onClick={onClose} className="text-white/40 hover:text-white p-2 -mr-2"><X className="w-5 h-5" /></button>
// //           </div>
// //           <div className="bg-dark-900 p-4 mb-5 border-l-4 border-primary-500 rounded-r-lg">
// //             <h3 className="text-lg sm:text-xl font-display text-white mb-1">{event.name}</h3>
// //             <div className="text-white/60 text-sm">${event.prize.toLocaleString()} Prize</div>
// //             <div className="text-accent-400 font-bold mt-1">${event.ticketPrice} per ticket</div>
// //           </div>
// //           <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8 }} className="p-3 mb-5 flex items-center justify-between">
// //             <div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wider"><Clock className="w-3 h-3" /> Draw In</div>
// //             <CountdownDisplay drawDate={event.drawDate} />
// //           </div>
// //           <div className="mb-5">
// //             <label className="block text-white/70 mb-3 text-xs sm:text-sm uppercase tracking-wider font-semibold">Number of Tickets</label>
// //             <div className="flex items-center gap-4">
// //               <button onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
// //                 className="w-12 h-12 bg-dark-900 border-2 border-dark-800 text-white font-bold text-xl hover:border-primary-500 active:scale-95 transition-all rounded-lg">-</button>
// //               <div className="text-4xl font-display text-white min-w-[80px] text-center">{ticketQuantity}</div>
// //               <button onClick={() => setTicketQuantity(ticketQuantity + 1)}
// //                 className="w-12 h-12 bg-dark-900 border-2 border-dark-800 text-white font-bold text-xl hover:border-primary-500 active:scale-95 transition-all rounded-lg">+</button>
// //             </div>
// //           </div>
// //           <div className="bg-dark-900 p-5 mb-5 text-center border-2 border-primary-500/30 rounded-lg">
// //             <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider mb-1">Total Amount</div>
// //             <div className="text-4xl sm:text-5xl font-display gradient-text">${(event.ticketPrice * ticketQuantity).toFixed(2)}</div>
// //             <div className="text-white/40 text-xs sm:text-sm mt-1">Balance: ${user.balance.toFixed(2)}</div>
// //           </div>
// //           <div className="flex gap-3">
// //             <button onClick={onClose} className="btn-secondary flex-1 py-3">Cancel</button>
// //             <button onClick={onConfirm} className="btn-primary flex-1 py-3">Confirm</button>
// //           </div>
// //           <div className="h-2 sm:hidden" />
// //         </div>
// //       </motion.div>
// //     </motion.div>
// //   )
// // }
// // // ─── Main Dashboard ───────────────────────────────────────────────────────────
// // export default function DashboardPage() {
// //   const router = useRouter()
// //   const [user, setUser] = useState(null)
// //   const [events, setEvents] = useState([])
// //   const [tickets, setTickets] = useState([])
// //   const [stats, setStats] = useState({ totalTickets: 0, activeEntries: 0, totalSpent: 0, totalWinnings: 0 })
// //   const [selectedEvent, setSelectedEvent] = useState(null)
// //   const [ticketQuantity, setTicketQuantity] = useState(1)
// //   const [loading, setLoading] = useState(true)
// //   const [showTickets, setShowTickets] = useState(false)
// //   const [showTopUp, setShowTopUp] = useState(false)
// //   useEffect(() => {
// //     const userData = localStorage.getItem('user')
// //     if (!userData) { router.push('/auth/login'); return }
// //     setUser(JSON.parse(userData))
// //     setEvents([
// //       { id: '1', name: 'Mega Jackpot 2026', description: 'Win life-changing prizes in our biggest draw ever', prize: 100000, ticketPrice: 50, totalTickets: 1000, soldTickets: 342, drawDate: new Date('2026-04-15T20:00:00'), status: 'active' },
// //       { id: '2', name: 'Weekly Winners Draw', description: 'Your weekly chance to win big', prize: 5000, ticketPrice: 10, totalTickets: 500, soldTickets: 189, drawDate: new Date('2026-03-28T18:00:00'), status: 'active' },
// //       { id: '3', name: 'Golden Fortune', description: 'Golden opportunity awaits', prize: 25000, ticketPrice: 25, totalTickets: 800, soldTickets: 621, drawDate: new Date('2026-03-31T19:00:00'), status: 'active' },
// //     ])
// //     setLoading(false)
// //   }, [])
// //   const handlePurchase = () => {
// //     if (!selectedEvent) return
// //     const totalCost = selectedEvent.ticketPrice * ticketQuantity
// //     if (user.balance < totalCost) { toast.error('Insufficient balance'); return }
// //     const newTicket = {
// //       id: Date.now().toString(), eventId: selectedEvent.id, eventName: selectedEvent.name,
// //       quantity: ticketQuantity, totalCost, purchaseDate: new Date(),
// //       ticketNumbers: Array.from({ length: ticketQuantity }, () => Math.floor(Math.random() * 1000000).toString().padStart(6, '0')),
// //     }
// //     const newTickets = [...tickets, newTicket]
// //     setTickets(newTickets)
// //     const updatedUser = { ...user, balance: user.balance - totalCost }
// //     setUser(updatedUser)
// //     localStorage.setItem('user', JSON.stringify(updatedUser))
// //     setStats({ totalTickets: newTickets.reduce((s, t) => s + t.quantity, 0), activeEntries: newTickets.length, totalSpent: newTickets.reduce((s, t) => s + t.totalCost, 0), totalWinnings: 0 })
// //     toast.success(`Purchased ${ticketQuantity} ticket${ticketQuantity > 1 ? 's' : ''}!`)
// //     setSelectedEvent(null); setTicketQuantity(1)
// //   }
// //   const handleLogout = () => { localStorage.removeItem('token'); localStorage.removeItem('user'); router.push('/') }
// //   if (loading || !user) return (
// //     <div className="min-h-screen bg-dark-950 flex items-center justify-center">
// //       <div className="text-white text-2xl font-display">Loading…</div>
// //     </div>
// //   )
// //   const statCards = [
// //     { label: 'Total Tickets', value: stats.totalTickets, icon: Ticket, color: 'from-blue-500 to-cyan-500', clickable: true, onClick: () => setShowTickets(true), hint: 'View all' },
// //     { label: 'Active Entries', value: stats.activeEntries, icon: Sparkles, color: 'from-purple-500 to-pink-500' },
// //     { label: 'Total Spent', value: `$${stats.totalSpent}`, icon: DollarSign, color: 'from-orange-500 to-red-500' },
// //     { label: 'Winnings', value: `$${stats.totalWinnings}`, icon: Trophy, color: 'from-green-500 to-emerald-500' },
// //   ]
// //   return (
// //     <div className="min-h-screen bg-dark-950">
// //       {/* ─── HEADER ─────────────────────────────────────────────────────────── */}
// //       <header className="glass border-b border-white/10 sticky top-0 z-40">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
// //           <div className="flex justify-between items-center">
// //             <div className="flex items-center gap-2 shrink-0">
// //               <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500" />
// //               <span className="text-xl sm:text-2xl font-display gradient-text">WINVAULT</span>
// //             </div>
// //             {/* Desktop actions */}
// //             <div className="hidden sm:flex items-center gap-3">
// //               <button onClick={() => setShowTopUp(true)}
// //                 className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105"
// //                 style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', color: 'white' }}>
// //                 <Gift className="w-4 h-4" /> Top Up
// //               </button>
// //               <div className="glass px-4 py-2 border border-primary-500/30">
// //                 <span className="text-white/60 text-sm mr-2">Balance:</span>
// //                 <span className="text-accent-400 font-bold text-lg">${user.balance.toFixed(2)}</span>
// //               </div>
// //               <button onClick={handleLogout} className="btn-ghost flex items-center gap-2">
// //                 <LogOut className="w-4 h-4" /> <span>Logout</span>
// //               </button>
// //             </div>
// //             {/* Mobile avatar dropdown */}
// //             <MobileProfileMenu user={user} onTopUp={() => setShowTopUp(true)} onLogout={handleLogout} onViewTickets={() => setShowTickets(true)} />
// //           </div>
// //         </div>
// //       </header>
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8">
// //         {/* Welcome Banner */}
// //         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
// //           className="bg-gradient-to-r from-primary-600 to-accent-500 p-5 sm:p-8 mb-6 sm:mb-8 relative overflow-hidden rounded-xl">
// //           <div className="absolute inset-0 bg-mesh opacity-20" />
// //           <div className="relative z-10">
// //             <h1 className="text-2xl sm:text-4xl font-display text-white mb-1 sm:mb-2 leading-tight">
// //               WELCOME BACK,<br className="sm:hidden" /> {user.name.toUpperCase()}!
// //             </h1>
// //             <p className="text-white/80 text-sm sm:text-lg">Your next big win is just a ticket away</p>
// //           </div>
// //         </motion.div>
// //         {/* Stats Grid — 2x2 on mobile */}
// //         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
// //           {statCards.map((stat, index) => (
// //             <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }}
// //               onClick={stat.onClick}
// //               className={`card p-4 sm:p-6 relative overflow-hidden ${stat.clickable ? 'cursor-pointer group active:scale-95' : ''}`}
// //               whileHover={stat.clickable ? { scale: 1.02, y: -2 } : {}}>
// //               <div className={`w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 sm:mb-4 rounded-lg`}>
// //                 <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
// //               </div>
// //               <div className="text-2xl sm:text-3xl font-display gradient-text mb-1">{stat.value}</div>
// //               <div className="text-[10px] sm:text-sm text-white/50 uppercase tracking-wider leading-tight">{stat.label}</div>
// //               {stat.clickable && (
// //                 <div className="flex items-center gap-1 mt-1.5 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
// //                   <span>{stat.hint}</span><ChevronRight className="w-3 h-3" />
// //                 </div>
// //               )}
// //             </motion.div>
// //           ))}
// //         </div>
// //         {/* Events — single column on mobile, 2 on md, 3 on lg */}
// //         <div className="mb-6 sm:mb-8">
// //           <h2 className="text-2xl sm:text-3xl font-display text-white mb-4 sm:mb-6">ACTIVE LOTTERY EVENTS</h2>
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
// //             {events.map((event, index) => {
// //               const availability = ((event.totalTickets - event.soldTickets) / event.totalTickets * 100).toFixed(0)
// //               return (
// //                 <motion.div key={event.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="card overflow-hidden">
// //                   <div className="bg-gradient-to-r from-primary-600 to-accent-500 p-4 sm:p-6">
// //                     <div className="text-3xl sm:text-4xl font-display text-white mb-1">${event.prize.toLocaleString()}</div>
// //                     <div className="text-white/90 text-base sm:text-lg">{event.name}</div>
// //                   </div>
// //                   <div className="p-4 sm:p-6">
// //                     <p className="text-white/60 mb-4 text-xs sm:text-sm">{event.description}</p>
// //                     <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
// //                       <div className="text-center">
// //                         <div className="text-base sm:text-lg font-bold text-accent-400">${event.ticketPrice}</div>
// //                         <div className="text-[10px] sm:text-xs text-white/50 uppercase">Per Ticket</div>
// //                       </div>
// //                       <div className="text-center">
// //                         <div className="text-base sm:text-lg font-bold text-primary-400">{event.soldTickets}/{event.totalTickets}</div>
// //                         <div className="text-[10px] sm:text-xs text-white/50 uppercase">Sold</div>
// //                       </div>
// //                       <div className="text-center">
// //                         <div className="text-base sm:text-lg font-bold text-white">{availability}%</div>
// //                         <div className="text-[10px] sm:text-xs text-white/50 uppercase">Available</div>
// //                       </div>
// //                     </div>
// //                     <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8 }} className="p-2.5 sm:p-3 mb-3 sm:mb-4">
// //                       <div className="flex items-center justify-between gap-2">
// //                         <div className="flex items-center gap-1 text-white/50 text-[10px] sm:text-xs uppercase tracking-wider shrink-0">
// //                           <Clock className="w-3 h-3" /><span>Draw In</span>
// //                         </div>
// //                         <CountdownDisplay drawDate={event.drawDate} compact />
// //                       </div>
// //                     </div>
// //                     <div className="flex items-center gap-1.5 text-white/40 text-[10px] sm:text-xs mb-4">
// //                       <Calendar className="w-3 h-3 shrink-0" />
// //                       <span className="truncate">{new Date(event.drawDate).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</span>
// //                     </div>
// //                     <button onClick={() => setSelectedEvent(event)} className="btn-primary w-full py-2.5 sm:py-3 text-sm sm:text-base">
// //                       BUY TICKETS
// //                     </button>
// //                   </div>
// //                 </motion.div>
// //               )
// //             })}
// //           </div>
// //         </div>
// //         <Leaderboard tickets={tickets} currentUserId={user.id} />
// //         {/* Ticket History */}
// //         <div>
// //           <div className="flex items-center justify-between mb-4 sm:mb-6">
// //             <h2 className="text-2xl sm:text-3xl font-display text-white">TICKET HISTORY</h2>
// //             {tickets.length > 0 && (
// //               <button onClick={() => setShowTickets(true)} className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 shrink-0">
// //                 View All <ChevronRight className="w-4 h-4" />
// //               </button>
// //             )}
// //           </div>
// //           {tickets.length === 0 ? (
// //             <div className="card p-8 sm:p-12 text-center">
// //               <Ticket className="w-12 h-12 sm:w-16 sm:h-16 text-white/20 mx-auto mb-3 sm:mb-4" />
// //               <p className="text-white/60 text-base sm:text-lg">No tickets purchased yet</p>
// //               <p className="text-white/40 text-sm">Start playing today and win big!</p>
// //             </div>
// //           ) : (
// //             <div className="space-y-2 sm:space-y-3">
// //               {tickets.slice(0, 3).map((ticket) => (
// //                 <motion.div key={ticket.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
// //                   className="card p-3 sm:p-4 flex items-center justify-between cursor-pointer hover:border-white/20 active:scale-[0.99] transition-all"
// //                   onClick={() => setShowTickets(true)} style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
// //                   <div className="flex items-center gap-2 sm:gap-3 min-w-0">
// //                     <div style={{ background: 'rgba(124,58,237,0.2)', borderRadius: 8, padding: 6, flexShrink: 0 }}><Ticket className="w-4 h-4 text-purple-400" /></div>
// //                     <div className="min-w-0">
// //                       <p className="text-white font-semibold text-sm truncate">{ticket.eventName}</p>
// //                       <p className="text-white/40 text-xs">{ticket.quantity} ticket{ticket.quantity > 1 ? 's' : ''} · {new Date(ticket.purchaseDate).toLocaleDateString()}</p>
// //                     </div>
// //                   </div>
// //                   <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-2">
// //                     <span className="text-emerald-400 font-bold text-sm">${ticket.totalCost}</span>
// //                     <ChevronRight className="w-4 h-4 text-white/30" />
// //                   </div>
// //                 </motion.div>
// //               ))}
// //               {tickets.length > 3 && (
// //                 <button onClick={() => setShowTickets(true)} className="w-full py-3 text-white/40 text-sm hover:text-white/60">
// //                   +{tickets.length - 3} more tickets
// //                 </button>
// //               )}
// //             </div>
// //           )}
// //         </div>
// //         {/* Bottom padding for mobile (avoids content hidden behind nav bars) */}
// //         <div className="h-6 sm:hidden" />
// //       </div>
// //       {/* Purchase Modal */}
// //       <AnimatePresence>
// //         {selectedEvent && (
// //           <PurchaseModal
// //             event={selectedEvent}
// //             user={user}
// //             ticketQuantity={ticketQuantity}
// //             setTicketQuantity={setTicketQuantity}
// //             onConfirm={handlePurchase}
// //             onClose={() => { setSelectedEvent(null); setTicketQuantity(1) }}
// //           />
// //         )}
// //       </AnimatePresence>
// //       <AnimatePresence>
// //         {showTickets && <TicketModal tickets={tickets} events={events} onClose={() => setShowTickets(false)} />}
// //       </AnimatePresence>
// //       <AnimatePresence>
// //         {showTopUp && <TopUpModal onClose={() => setShowTopUp(false)} onSubmit={() => toast.success('Gift card submitted for admin review!')} />}
// //       </AnimatePresence>
// //     </div>
// //   )
// // }
// 'use client'
// import { useState, useEffect, useCallback, useRef } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Trophy, Ticket, Sparkles, LogOut, Calendar, DollarSign, X, Gift, Clock, ChevronRight, ChevronDown, Hash, CreditCard, CheckCircle, AlertCircle, Copy, Star, Menu } from 'lucide-react'
// import { useRouter } from 'next/navigation'
// import toast from 'react-hot-toast'
// // ─── Countdown Hook ───────────────────────────────────────────────────────────
// function useCountdown(targetDate) {
//   const calc = useCallback(() => {
//     const diff = new Date(targetDate) - new Date()
//     if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
//     return {
//       days: Math.floor(diff / 86400000),
//       hours: Math.floor((diff % 86400000) / 3600000),
//       minutes: Math.floor((diff % 3600000) / 60000),
//       seconds: Math.floor((diff % 60000) / 1000),
//       expired: false,
//     }
//   }, [targetDate])
//   const [time, setTime] = useState(calc)
//   useEffect(() => {
//     const id = setInterval(() => setTime(calc()), 1000)
//     return () => clearInterval(id)
//   }, [calc])
//   return time
// }
// // ─── CountdownDisplay ─────────────────────────────────────────────────────────
// function CountdownDisplay({ drawDate, compact = false }) {
//   const t = useCountdown(drawDate)
//   if (t.expired) return <span className="text-red-400 font-bold text-xs uppercase tracking-wider">Closed</span>
//   return (
//     <div className="flex items-center gap-0.5 text-xs font-mono flex-wrap">
//       {[['d', t.days], ['h', t.hours], ['m', t.minutes], ['s', t.seconds]].map(([label, val]) => (
//         <span key={label} className="flex items-center gap-0.5">
//           <span className="bg-white/10 px-1 py-0.5 rounded text-white font-bold tabular-nums" style={{ minWidth: compact ? 20 : 24, textAlign: 'center' }}>
//             {String(val).padStart(2, '0')}
//           </span>
//           <span className="text-white/40 mr-0.5">{label}</span>
//         </span>
//       ))}
//     </div>
//   )
// }
// // ─── Mobile Profile Menu ──────────────────────────────────────────────────────
// function MobileProfileMenu({ user, onTopUp, onLogout, onViewTickets }) {
//   const [open, setOpen] = useState(false)
//   const ref = useRef(null)
//   useEffect(() => {
//     const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
//     document.addEventListener('mousedown', handler)
//     return () => document.removeEventListener('mousedown', handler)
//   }, [])
//   const initials = user.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
//   return (
//     <div className="relative sm:hidden" ref={ref}>
//       <button
//         onClick={() => setOpen(v => !v)}
//         className="flex items-center gap-2 pl-1 pr-2.5 py-1 rounded-full transition-all active:scale-95"
//         style={{ background: open ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
//       >
//         <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
//           style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>{initials}</div>
//         <span className="text-accent-400 font-bold text-sm">${user.balance.toFixed(2)}</span>
//         <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
//           <ChevronDown className="w-3.5 h-3.5 text-white/40" />
//         </motion.div>
//       </button>
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95, y: -6 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: -6 }}
//             transition={{ duration: 0.15 }}
//             className="absolute right-0 mt-2 w-64 rounded-2xl overflow-hidden shadow-2xl"
//             style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)', border: '1px solid rgba(255,255,255,0.1)', zIndex: 999 }}
//           >
//             <div className="p-4 border-b border-white/10">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
//                   style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>{initials}</div>
//                 <div className="min-w-0">
//                   <p className="text-white font-semibold text-sm truncate">{user.name}</p>
//                   <p className="text-white/40 text-xs">{user.email || 'Player'}</p>
//                 </div>
//               </div>
//             </div>
//             <div className="mx-3 mt-3 p-3 rounded-xl" style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)' }}>
//               <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Available Balance</p>
//               <p className="text-accent-400 font-bold text-2xl">${user.balance.toFixed(2)}</p>
//             </div>
//             <div className="p-3 space-y-1.5">
//               <button onClick={() => { onTopUp(); setOpen(false) }}
//                 className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-white transition-all active:scale-95"
//                 style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)' }}>
//                 <Gift className="w-4 h-4 shrink-0" /> Top Up with Gift Card
//               </button>
//               <button onClick={() => { onViewTickets(); setOpen(false) }}
//                 className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
//                 style={{ color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.05)' }}>
//                 <Ticket className="w-4 h-4 shrink-0 text-purple-400" /> My Tickets
//               </button>
//               <button onClick={() => { onLogout(); setOpen(false) }}
//                 className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
//                 style={{ color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.03)' }}>
//                 <LogOut className="w-4 h-4 shrink-0" /> Logout
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }
// // ─── Ticket Detail Modal ──────────────────────────────────────────────────────
// function TicketModal({ tickets, events, onClose }) {
//   const [selected, setSelected] = useState(null)
//   const [copied, setCopied] = useState(null)
//   const copyNumber = (num) => {
//     navigator.clipboard.writeText(num)
//     setCopied(num)
//     setTimeout(() => setCopied(null), 1500)
//   }
//   const getEvent = (eventId) => events.find(e => e.id === eventId)
//   return (
//     <motion.div
//       initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center"
//       style={{ padding: 0 }}
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 60 }}
//         transition={{ type: 'spring', damping: 30, stiffness: 300 }}
//         onClick={e => e.stopPropagation()}
//         className="w-full sm:max-w-2xl sm:mx-4 flex flex-col"
//         style={{
//           background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)',
//           border: '1px solid rgba(255,255,255,0.1)',
//           borderRadius: '16px 16px 0 0',
//           maxHeight: '90vh',
//         }}
//       >
//         {/* Drag handle for mobile */}
//         <div className="flex justify-center pt-3 pb-1 sm:hidden">
//           <div className="w-10 h-1 rounded-full bg-white/20" />
//         </div>
//         <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10">
//           <div className="flex items-center gap-3">
//             <div style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)', borderRadius: 8, padding: 8 }}>
//               <Ticket className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
//             </div>
//             <div>
//               <h2 className="text-lg sm:text-xl font-bold text-white">Your Tickets</h2>
//               <p className="text-white/50 text-xs sm:text-sm">{tickets.length} purchase{tickets.length !== 1 ? 's' : ''} · {tickets.reduce((s, t) => s + t.quantity, 0)} total</p>
//             </div>
//           </div>
//           <button onClick={onClose} className="text-white/40 hover:text-white p-2 -mr-2"><X className="w-5 h-5" /></button>
//         </div>
//         <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-3">
//           {tickets.length === 0 ? (
//             <div className="text-center py-16 text-white/40">
//               <Ticket className="w-12 h-12 mx-auto mb-3 opacity-30" />
//               <p>No tickets yet</p>
//             </div>
//           ) : tickets.map((ticket) => {
//             const event = getEvent(ticket.eventId)
//             const isOpen = selected === ticket.id
//             return (
//               <motion.div key={ticket.id} layout style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12 }}>
//                 <button onClick={() => setSelected(isOpen ? null : ticket.id)} className="w-full flex items-center justify-between p-3 sm:p-4 text-left">
//                   <div className="flex items-center gap-3 min-w-0">
//                     <div style={{ background: 'rgba(124,58,237,0.2)', borderRadius: 8, padding: 6, flexShrink: 0 }}>
//                       <Star className="w-4 h-4 text-purple-400" />
//                     </div>
//                     <div className="min-w-0">
//                       <p className="text-white font-semibold text-sm truncate">{ticket.eventName}</p>
//                       <p className="text-white/40 text-xs">{new Date(ticket.purchaseDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2 sm:gap-4 shrink-0 ml-2">
//                     <div className="text-right">
//                       <p className="text-emerald-400 font-bold text-sm">${ticket.totalCost}</p>
//                       <p className="text-white/40 text-xs">{ticket.quantity} ticket{ticket.quantity > 1 ? 's' : ''}</p>
//                     </div>
//                     <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
//                       <ChevronRight className="w-4 h-4 text-white/40" />
//                     </motion.div>
//                   </div>
//                 </button>
//                 <AnimatePresence>
//                   {isOpen && (
//                     <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
//                       <div className="px-3 sm:px-4 pb-4 border-t border-white/5 pt-4 space-y-4">
//                         {event && (
//                           <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: 12 }} className="grid grid-cols-3 gap-2 text-center">
//                             <div>
//                               <p className="text-white/40 text-[10px] sm:text-xs uppercase tracking-wider mb-1">Prize</p>
//                               <p className="text-yellow-400 font-bold text-sm">${event.prize.toLocaleString()}</p>
//                             </div>
//                             <div>
//                               <p className="text-white/40 text-[10px] sm:text-xs uppercase tracking-wider mb-1">Draw</p>
//                               <p className="text-white text-xs">{new Date(event.drawDate).toLocaleDateString()}</p>
//                             </div>
//                             <div>
//                               <p className="text-white/40 text-[10px] sm:text-xs uppercase tracking-wider mb-1">Time Left</p>
//                               <CountdownDisplay drawDate={event.drawDate} compact />
//                             </div>
//                           </div>
//                         )}
//                         <div>
//                           <p className="text-white/40 text-xs uppercase tracking-wider mb-2 flex items-center gap-1">
//                             <Hash className="w-3 h-3" /> Ticket Numbers
//                           </p>
//                           <div className="flex flex-wrap gap-2">
//                             {ticket.ticketNumbers.map((num, i) => (
//                               <button key={i} onClick={() => copyNumber(num)}
//                                 className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-mono text-xs sm:text-sm transition-all"
//                                 style={{ background: copied === num ? 'rgba(16,185,129,0.2)' : 'rgba(124,58,237,0.15)', border: `1px solid ${copied === num ? 'rgba(16,185,129,0.4)' : 'rgba(124,58,237,0.3)'}`, color: copied === num ? '#10b981' : '#a78bfa' }}>
//                                 {copied === num ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3 opacity-50" />}
//                                 {num}
//                               </button>
//                             ))}
//                           </div>
//                         </div>
//                         <div className="flex items-center gap-2 flex-wrap">
//                           <span style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 20, padding: '2px 10px' }} className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">Active Entry</span>
//                           <span className="text-white/30 text-xs">#{ticket.id.slice(-6)}</span>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             )
//           })}
//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }
// // ─── Gift Card Top-Up Modal ───────────────────────────────────────────────────
// function TopUpModal({ onClose, onSubmit }) {
//   const [cardType, setCardType] = useState(null)
//   const [code, setCode] = useState('')
//   const [amount, setAmount] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [step, setStep] = useState('form')
//   const [cardImage, setCardImage] = useState(null)
//   const [dragOver, setDragOver] = useState(false)
//   const cardDenominations = [
//     { value: 10, color: ['#1a1a2e', '#16213e'], accent: '#60a5fa', label: 'Starter' },
//     { value: 25, color: ['#1a2e1a', '#16321e'], accent: '#4ade80', label: 'Popular' },
//     { value: 50, color: ['#2e1a1a', '#321616'], accent: '#f97316', label: 'Classic' },
//     { value: 100, color: ['#2a1a2e', '#24163e'], accent: '#c084fc', label: 'Premium' },
//     { value: 250, color: ['#2e2a1a', '#3e3216'], accent: '#fbbf24', label: 'Gold' },
//     { value: 500, color: ['#1a2a2e', '#16363e'], accent: '#22d3ee', label: 'Platinum' },
//   ]
//   const processFile = (file) => {
//     if (!file) return
//     if (file.size > 10 * 1024 * 1024) { toast.error('Image must be under 10MB'); return }
//     const reader = new FileReader()
//     reader.onload = (e) => setCardImage({ file, preview: e.target.result, name: file.name, size: (file.size / 1024).toFixed(0) + ' KB' })
//     reader.readAsDataURL(file)
//   }
//   const handleSubmit = async () => {
//     if (!amount) { toast.error('Please select a card value'); return }
//     if (cardType === 'ecode' && !code.trim()) { toast.error('Please enter your e-code'); return }
//     if (cardType === 'physical' && !cardImage) { toast.error('Please upload a photo of your card'); return }
//     setLoading(true)
//     await new Promise(r => setTimeout(r, 1200))
//     setLoading(false); setStep('pending')
//     onSubmit({ code: code.trim(), amount: Number(amount), cardType })
//   }
//   return (
//     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 60 }}
//         transition={{ type: 'spring', damping: 30, stiffness: 300 }}
//         onClick={e => e.stopPropagation()}
//         className="w-full sm:max-w-md sm:mx-4 overflow-y-auto"
//         style={{
//           background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)',
//           border: '1px solid rgba(255,255,255,0.1)',
//           borderRadius: '16px 16px 0 0',
//           maxHeight: '92vh',
//         }}
//       >
//         {/* Drag handle */}
//         <div className="flex justify-center pt-3 pb-1 sm:hidden">
//           <div className="w-10 h-1 rounded-full bg-white/20" />
//         </div>
//         {step === 'pending' ? (
//           <div className="p-6 sm:p-8 text-center">
//             <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}
//               className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
//               style={{ background: 'rgba(234,179,8,0.15)', border: '2px solid rgba(234,179,8,0.4)' }}>
//               <Clock className="w-8 h-8 text-yellow-400" />
//             </motion.div>
//             <h3 className="text-xl font-bold text-white mb-2">Request Submitted!</h3>
//             <p className="text-white/50 text-sm mb-6">Your gift card has been sent for admin verification. Funds will be added once approved.</p>
//             <button onClick={onClose} className="w-full py-3 rounded-lg font-semibold text-white"
//               style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>Done</button>
//           </div>
//         ) : (
//           <>
//             <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10">
//               <div className="flex items-center gap-3">
//                 <div style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', borderRadius: 8, padding: 8 }}>
//                   <Gift className="w-5 h-5 text-white" />
//                 </div>
//                 <div>
//                   <h2 className="text-lg sm:text-xl font-bold text-white">Top Up Balance</h2>
//                   <p className="text-white/50 text-sm">Redeem a gift card</p>
//                 </div>
//               </div>
//               <button onClick={onClose} className="text-white/40 hover:text-white p-2 -mr-2"><X className="w-5 h-5" /></button>
//             </div>
//             <div className="px-4 sm:px-6 py-4 space-y-5">
//               {/* Card type */}
//               <div>
//                 <label className="block text-white/60 text-xs uppercase tracking-wider mb-3 font-semibold">How would you like to redeem?</label>
//                 <div className="grid grid-cols-2 gap-3">
//                   {[
//                     { key: 'physical', label: 'Physical Card', sub: 'Upload or snap a photo', color: '#f97316', bg: 'rgba(249,115,22,0.1)', border: 'rgba(249,115,22,0.5)' },
//                     { key: 'ecode', label: 'E-Code', sub: 'Enter digital code', color: '#818cf8', bg: 'rgba(99,102,241,0.1)', border: 'rgba(99,102,241,0.5)' },
//                   ].map(({ key, label, sub, color, bg, border }) => (
//                     <button key={key} onClick={() => setCardType(key)}
//                       className="relative rounded-xl p-3 sm:p-4 text-left transition-all active:scale-95"
//                       style={{ background: cardType === key ? bg : 'rgba(255,255,255,0.03)', border: `2px solid ${cardType === key ? border : 'rgba(255,255,255,0.08)'}` }}>
//                       {cardType === key && (
//                         <div className="absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: color }}>
//                           <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
//                         </div>
//                       )}
//                       <p className="text-white text-sm font-bold mt-3">{label}</p>
//                       <p className="text-white/40 text-xs mt-0.5">{sub}</p>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//               <AnimatePresence mode="wait">
//                 {cardType && (
//                   <motion.div key={cardType} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-5">
//                     {cardType === 'ecode' && (
//                       <div>
//                         <label className="block text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">E-Code</label>
//                         <div className="relative">
//                           <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
//                           <input type="text" value={code} onChange={e => setCode(e.target.value.toUpperCase())}
//                             placeholder="XXXX-XXXX-XXXX-XXXX" autoFocus
//                             className="w-full pl-10 pr-4 py-3 font-mono text-sm rounded-lg text-white placeholder-white/20 outline-none focus:ring-2 focus:ring-indigo-500/50"
//                             style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', fontSize: 16 }} />
//                         </div>
//                       </div>
//                     )}
//                     <div>
//                       <label className="block text-white/60 text-xs uppercase tracking-wider mb-3 font-semibold">Select Card Value</label>
//                       <div className="grid grid-cols-3 gap-2">
//                         {cardDenominations.map(({ value, color, accent, label }) => {
//                           const sel = amount === String(value)
//                           return (
//                             <button key={value} onClick={() => setAmount(String(value))}
//                               className="relative rounded-xl overflow-hidden transition-all active:scale-95"
//                               style={{ background: `linear-gradient(135deg, ${color[0]}, ${color[1]})`, border: `2px solid ${sel ? accent : 'rgba(255,255,255,0.07)'}`, boxShadow: sel ? `0 0 16px ${accent}44` : 'none', transform: sel ? 'scale(1.04)' : 'scale(1)', aspectRatio: '1.586 / 1' }}>
//                               <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)' }} />
//                               <div className="absolute top-1.5 left-2 w-3.5 h-2.5 rounded-sm" style={{ background: `linear-gradient(135deg, ${accent}88, ${accent}44)`, border: `1px solid ${accent}66` }} />
//                               {sel && (
//                                 <div className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ background: accent }}>
//                                   <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
//                                 </div>
//                               )}
//                               <div className="absolute bottom-1.5 inset-x-0 px-2">
//                                 <p className="text-white/40 text-[8px] uppercase tracking-wider leading-none mb-0.5">{label}</p>
//                                 <p className="font-bold leading-none" style={{ color: accent, fontSize: 13 }}>${value}</p>
//                               </div>
//                             </button>
//                           )
//                         })}
//                       </div>
//                     </div>
//                     {cardType === 'physical' && (
//                       <div>
//                         <label className="block text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">
//                           Card Photo <span className="text-red-400/70 normal-case font-normal">· required</span>
//                         </label>
//                         {cardImage ? (
//                           <div className="relative rounded-xl overflow-hidden" style={{ border: '1px solid rgba(16,185,129,0.3)' }}>
//                             <img src={cardImage.preview} alt="Gift card" className="w-full h-36 sm:h-40 object-cover" />
//                             <button onClick={() => setCardImage(null)} className="absolute top-2 right-2 px-2 py-1 rounded-lg text-xs text-white" style={{ background: 'rgba(0,0,0,0.6)' }}>Remove</button>
//                           </div>
//                         ) : (
//                           <div
//                             onDragOver={e => { e.preventDefault(); setDragOver(true) }}
//                             onDragLeave={() => setDragOver(false)}
//                             onDrop={e => { e.preventDefault(); setDragOver(false); processFile(e.dataTransfer.files[0]) }}
//                             onClick={() => document.getElementById('gc-file-input').click()}
//                             className="rounded-xl cursor-pointer flex flex-col items-center justify-center gap-2 py-7"
//                             style={{ border: `2px dashed ${dragOver ? 'rgba(124,58,237,0.7)' : 'rgba(255,255,255,0.1)'}`, background: dragOver ? 'rgba(124,58,237,0.08)' : 'rgba(255,255,255,0.03)' }}>
//                             <p className="text-white/60 text-sm font-semibold">Tap to upload</p>
//                             <p className="text-white/30 text-xs">JPG, PNG, WEBP up to 10MB</p>
//                             <input id="gc-file-input" type="file" accept="image/*" className="hidden" onChange={e => processFile(e.target.files[0])} />
//                           </div>
//                         )}
//                       </div>
//                     )}
//                     <div style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)', borderRadius: 10 }} className="p-3 flex gap-2 items-start">
//                       <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
//                       <p className="text-yellow-400/80 text-xs leading-relaxed">
//                         {cardType === 'ecode' ? 'Enter your code exactly as shown. Admin will verify and credit your balance within minutes.' : 'Upload a clear photo. Admin will verify and add funds shortly.'}
//                       </p>
//                     </div>
//                     <button onClick={handleSubmit} disabled={loading}
//                       className="w-full py-3.5 rounded-lg font-bold text-white text-sm uppercase tracking-wider disabled:opacity-50 transition-all active:scale-95"
//                       style={{ background: cardType === 'ecode' ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'linear-gradient(135deg, #f97316, #ef4444)' }}>
//                       {loading ? 'Submitting…' : 'Submit for Verification'}
//                     </button>
//                     {/* Bottom safe area spacer on mobile */}
//                     <div className="h-2 sm:hidden" />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </>
//         )}
//       </motion.div>
//     </motion.div>
//   )
// }
// // ─── Leaderboard ─────────────────────────────────────────────────────────────
// const DEMO_LEADERS = [
//   { id: 'u1', name: 'CryptoKing99', avatar: 'CK', tickets: 47, spent: 2350, color: '#f59e0b' },
//   { id: 'u2', name: 'LuckyStrike', avatar: 'LS', tickets: 38, spent: 1900, color: '#ec4899' },
//   { id: 'u3', name: 'GoldenEagle', avatar: 'GE', tickets: 31, spent: 1550, color: '#22d3ee' },
//   { id: 'u4', name: 'JackpotHunter', avatar: 'JH', tickets: 24, spent: 1200, color: '#a78bfa' },
//   { id: 'u5', name: 'MillionDreamer', avatar: 'MD', tickets: 19, spent: 950, color: '#4ade80' },
//   { id: 'u6', name: 'NightOwl', avatar: 'NO', tickets: 15, spent: 750, color: '#fb923c' },
//   { id: 'u7', name: 'StarChaser', avatar: 'SC', tickets: 11, spent: 550, color: '#60a5fa' },
// ]
// const RANK_STYLES = [
//   { bg: 'linear-gradient(135deg, #92400e, #b45309)', border: 'rgba(251,191,36,0.5)', glow: 'rgba(251,191,36,0.15)', badge: '🥇' },
//   { bg: 'linear-gradient(135deg, #374151, #4b5563)', border: 'rgba(209,213,219,0.5)', glow: 'rgba(209,213,219,0.1)', badge: '🥈' },
//   { bg: 'linear-gradient(135deg, #431407, #7c2d12)', border: 'rgba(249,115,22,0.5)', glow: 'rgba(249,115,22,0.1)', badge: '🥉' },
// ]
// function Leaderboard({ tickets, currentUserId }) {
//   const [filter, setFilter] = useState('tickets')
//   const [showAll, setShowAll] = useState(false)
//   const myEntry = tickets.length > 0 ? {
//     id: currentUserId || 'me', name: 'You', avatar: 'ME',
//     tickets: tickets.reduce((s, t) => s + t.quantity, 0),
//     spent: tickets.reduce((s, t) => s + t.totalCost, 0),
//     color: '#7c3aed', isMe: true,
//   } : null
//   const allPlayers = [...DEMO_LEADERS, ...(myEntry ? [myEntry] : [])]
//     .sort((a, b) => filter === 'tickets' ? b.tickets - a.tickets : b.spent - a.spent)
//     .map((p, i) => ({ ...p, rank: i + 1 }))
//   const visible = showAll ? allPlayers : allPlayers.slice(0, 5)
//   const top3 = allPlayers.slice(0, 3)
//   const maxVal = allPlayers[0]?.[filter === 'tickets' ? 'tickets' : 'spent'] || 1
//   return (
//     <div className="mb-8">
//       <div className="flex items-center justify-between mb-5">
//         <div className="flex items-center gap-2 sm:gap-3">
//           <h2 className="text-2xl sm:text-3xl font-display text-white">LEADERBOARD</h2>
//           <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
//             <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
//           </motion.div>
//         </div>
//         <div className="flex rounded-lg overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
//           {[['tickets', 'Tickets'], ['spent', 'Spent']].map(([val, label]) => (
//             <button key={val} onClick={() => setFilter(val)} className="px-2.5 sm:px-3 py-1.5 text-xs font-semibold transition-all"
//               style={{ background: filter === val ? 'rgba(124,58,237,0.4)' : 'transparent', color: filter === val ? '#a78bfa' : 'rgba(255,255,255,0.4)' }}>
//               {label}
//             </button>
//           ))}
//         </div>
//       </div>
//       {/* Podium — tighter on mobile */}
//       <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5 items-end">
//         {[top3[1], top3[0], top3[2]].map((player, podiumIdx) => {
//           if (!player) return <div key={podiumIdx} />
//           const actualRank = podiumIdx === 1 ? 1 : podiumIdx === 0 ? 2 : 3
//           const rs = RANK_STYLES[actualRank - 1]
//           const heights = ['h-20 sm:h-24', 'h-28 sm:h-32', 'h-16 sm:h-20']
//           return (
//             <motion.div key={player.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: podiumIdx * 0.1 }} className="flex flex-col items-center">
//               <div className="relative mb-1.5">
//                 <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-white" style={{ background: player.color, boxShadow: `0 0 16px ${player.color}55` }}>{player.avatar}</div>
//                 <span className="absolute -bottom-1 -right-1 text-sm leading-none">{rs.badge}</span>
//               </div>
//               <p className="text-white text-[10px] sm:text-xs font-bold mb-1 text-center truncate w-full px-1">{player.name}</p>
//               <p className="text-white/40 text-[9px] sm:text-[10px] mb-1.5">
//                 {filter === 'tickets' ? `${player.tickets}` : `$${player.spent}`}
//               </p>
//               <div className={`w-full ${heights[podiumIdx]} rounded-t-lg flex items-center justify-center`}
//                 style={{ background: rs.bg, border: `1px solid ${rs.border}`, boxShadow: `0 0 20px ${rs.glow}` }}>
//                 <span className="text-white/60 text-base sm:text-lg font-display">#{actualRank}</span>
//               </div>
//             </motion.div>
//           )
//         })}
//       </div>
//       {/* List */}
//       <div className="space-y-2">
//         {visible.map((player, idx) => {
//           const isMe = player.isMe
//           const barWidth = ((filter === 'tickets' ? player.tickets : player.spent) / maxVal * 100).toFixed(1)
//           const rs = player.rank <= 3 ? RANK_STYLES[player.rank - 1] : null
//           return (
//             <motion.div key={player.id} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.04 }}
//               className="relative overflow-hidden rounded-xl p-2.5 sm:p-3 flex items-center gap-2 sm:gap-3"
//               style={{ background: isMe ? 'rgba(124,58,237,0.12)' : 'rgba(255,255,255,0.03)', border: isMe ? '1px solid rgba(124,58,237,0.35)' : '1px solid rgba(255,255,255,0.06)' }}>
//               <div className="absolute inset-0 pointer-events-none" style={{ width: `${barWidth}%`, background: isMe ? 'rgba(124,58,237,0.06)' : 'rgba(255,255,255,0.02)', borderRadius: 'inherit' }} />
//               <div className="w-6 sm:w-7 shrink-0 text-center">
//                 {rs ? <span className="text-sm sm:text-base">{rs.badge}</span> : <span className="text-white/30 text-xs sm:text-sm font-bold">#{player.rank}</span>}
//               </div>
//               <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full shrink-0 flex items-center justify-center text-[10px] sm:text-xs font-bold text-white" style={{ background: player.color }}>{player.avatar}</div>
//               <div className="flex-1 min-w-0">
//                 <div className="flex items-center gap-1.5">
//                   <p className="text-white text-xs sm:text-sm font-semibold truncate">{player.name}</p>
//                   {isMe && <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0" style={{ background: 'rgba(124,58,237,0.3)', color: '#a78bfa', border: '1px solid rgba(124,58,237,0.4)' }}>YOU</span>}
//                 </div>
//                 <p className="text-white/30 text-[9px] sm:text-[10px]">{player.tickets} tickets · ${player.spent}</p>
//               </div>
//               <div className="text-right shrink-0">
//                 <p className="font-bold text-xs sm:text-sm" style={{ color: isMe ? '#a78bfa' : player.rank <= 3 ? '#fbbf24' : 'rgba(255,255,255,0.6)' }}>
//                   {filter === 'tickets' ? player.tickets : `$${player.spent}`}
//                 </p>
//               </div>
//             </motion.div>
//           )
//         })}
//       </div>
//       {allPlayers.length > 5 && (
//         <button onClick={() => setShowAll(!showAll)} className="w-full mt-3 py-2.5 rounded-xl text-sm font-semibold"
//           style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}>
//           {showAll ? 'Show Less ↑' : `Show All ${allPlayers.length} Players ↓`}
//         </button>
//       )}
//     </div>
//   )
// }
// // ─── Purchase Modal (mobile sheet) ───────────────────────────────────────────
// function PurchaseModal({ event, user, ticketQuantity, setTicketQuantity, onConfirm, onClose }) {
//   return (
//     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center z-50"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 60 }}
//         transition={{ type: 'spring', damping: 30, stiffness: 300 }}
//         onClick={e => e.stopPropagation()}
//         className="w-full sm:max-w-md sm:mx-4 overflow-y-auto"
//         style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px 16px 0 0', maxHeight: '92vh' }}
//       >
//         {/* Drag handle */}
//         <div className="flex justify-center pt-3 pb-1 sm:hidden">
//           <div className="w-10 h-1 rounded-full bg-white/20" />
//         </div>
//         <div className="px-5 sm:px-8 pt-4 sm:pt-6 pb-6 sm:pb-8">
//           <div className="flex justify-between items-center mb-5">
//             <h2 className="text-2xl sm:text-3xl font-display text-white">PURCHASE TICKETS</h2>
//             <button onClick={onClose} className="text-white/40 hover:text-white p-2 -mr-2"><X className="w-5 h-5" /></button>
//           </div>
//           <div className="bg-dark-900 p-4 mb-5 border-l-4 border-primary-500 rounded-r-lg">
//             <h3 className="text-lg sm:text-xl font-display text-white mb-1">{event.name}</h3>
//             <div className="text-white/60 text-sm">${event.prize.toLocaleString()} Prize</div>
//             <div className="text-accent-400 font-bold mt-1">${event.ticketPrice} per ticket</div>
//           </div>
//           <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8 }} className="p-3 mb-5 flex items-center justify-between">
//             <div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wider"><Clock className="w-3 h-3" /> Draw In</div>
//             <CountdownDisplay drawDate={event.drawDate} />
//           </div>
//           <div className="mb-5">
//             <label className="block text-white/70 mb-3 text-xs sm:text-sm uppercase tracking-wider font-semibold">Number of Tickets</label>
//             <div className="flex items-center gap-4">
//               <button onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
//                 className="w-12 h-12 bg-dark-900 border-2 border-dark-800 text-white font-bold text-xl hover:border-primary-500 active:scale-95 transition-all rounded-lg">-</button>
//               <div className="text-4xl font-display text-white min-w-[80px] text-center">{ticketQuantity}</div>
//               <button onClick={() => setTicketQuantity(ticketQuantity + 1)}
//                 className="w-12 h-12 bg-dark-900 border-2 border-dark-800 text-white font-bold text-xl hover:border-primary-500 active:scale-95 transition-all rounded-lg">+</button>
//             </div>
//           </div>
//           <div className="bg-dark-900 p-5 mb-5 text-center border-2 border-primary-500/30 rounded-lg">
//             <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider mb-1">Total Amount</div>
//             <div className="text-4xl sm:text-5xl font-display gradient-text">${(event.ticketPrice * ticketQuantity).toFixed(2)}</div>
//             <div className="text-white/40 text-xs sm:text-sm mt-1">Balance: ${user.balance.toFixed(2)}</div>
//           </div>
//           <div className="flex gap-3">
//             <button onClick={onClose} className="btn-secondary flex-1 py-3">Cancel</button>
//             <button onClick={onConfirm} className="btn-primary flex-1 py-3">Confirm</button>
//           </div>
//           <div className="h-2 sm:hidden" />
//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }
// // ─── Main Dashboard ───────────────────────────────────────────────────────────
// export default function DashboardPage() {
//   const router = useRouter()
//   const [user, setUser] = useState(null)
//   const [events, setEvents] = useState([])
//   const [tickets, setTickets] = useState([])
//   const [stats, setStats] = useState({ totalTickets: 0, activeEntries: 0, totalSpent: 0, totalWinnings: 0 })
//   const [selectedEvent, setSelectedEvent] = useState(null)
//   const [ticketQuantity, setTicketQuantity] = useState(1)
//   const [loading, setLoading] = useState(true)
//   const [showTickets, setShowTickets] = useState(false)
//   const [showTopUp, setShowTopUp] = useState(false)
//   useEffect(() => {
//     const userData = localStorage.getItem('user')
//     if (!userData) { router.push('/auth/login'); return }
//     setUser(JSON.parse(userData))
//     setEvents([
//       { id: '1', name: 'Mega Jackpot 2026', description: 'Win life-changing prizes in our biggest draw ever', prize: 100000, ticketPrice: 50, totalTickets: 1000, soldTickets: 342, drawDate: new Date('2026-04-15T20:00:00'), status: 'active' },
//       { id: '2', name: 'Weekly Winners Draw', description: 'Your weekly chance to win big', prize: 5000, ticketPrice: 10, totalTickets: 500, soldTickets: 189, drawDate: new Date('2026-03-28T18:00:00'), status: 'active' },
//       { id: '3', name: 'Golden Fortune', description: 'Golden opportunity awaits', prize: 25000, ticketPrice: 25, totalTickets: 800, soldTickets: 621, drawDate: new Date('2026-03-31T19:00:00'), status: 'active' },
//     ])
//     setLoading(false)
//   }, [])
//   const handlePurchase = () => {
//     if (!selectedEvent) return
//     const totalCost = selectedEvent.ticketPrice * ticketQuantity
//     if (user.balance < totalCost) { toast.error('Insufficient balance'); return }
//     const newTicket = {
//       id: Date.now().toString(), eventId: selectedEvent.id, eventName: selectedEvent.name,
//       quantity: ticketQuantity, totalCost, purchaseDate: new Date(),
//       ticketNumbers: Array.from({ length: ticketQuantity }, () => Math.floor(Math.random() * 1000000).toString().padStart(6, '0')),
//     }
//     const newTickets = [...tickets, newTicket]
//     setTickets(newTickets)
//     const updatedUser = { ...user, balance: user.balance - totalCost }
//     setUser(updatedUser)
//     localStorage.setItem('user', JSON.stringify(updatedUser))
//     setStats({ totalTickets: newTickets.reduce((s, t) => s + t.quantity, 0), activeEntries: newTickets.length, totalSpent: newTickets.reduce((s, t) => s + t.totalCost, 0), totalWinnings: 0 })
//     toast.success(`Purchased ${ticketQuantity} ticket${ticketQuantity > 1 ? 's' : ''}!`)
//     setSelectedEvent(null); setTicketQuantity(1)
//   }
//   const handleLogout = () => { localStorage.removeItem('token'); localStorage.removeItem('user'); router.push('/') }
//   if (loading || !user) return (
//     <div className="min-h-screen bg-dark-950 flex items-center justify-center">
//       <div className="text-white text-2xl font-display">Loading…</div>
//     </div>
//   )
//   const statCards = [
//     { label: 'Total Tickets', value: stats.totalTickets, icon: Ticket, color: 'from-blue-500 to-cyan-500', clickable: true, onClick: () => setShowTickets(true), hint: 'View all' },
//     { label: 'Active Entries', value: stats.activeEntries, icon: Sparkles, color: 'from-purple-500 to-pink-500' },
//     { label: 'Total Spent', value: `$${stats.totalSpent}`, icon: DollarSign, color: 'from-orange-500 to-red-500' },
//     { label: 'Winnings', value: `$${stats.totalWinnings}`, icon: Trophy, color: 'from-green-500 to-emerald-500' },
//   ]
//   return (
//     <div className="min-h-screen bg-dark-950">
//       {/* ─── HEADER ─────────────────────────────────────────────────────────── */}
//       <header className="glass border-b border-white/10 sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-2 shrink-0">
//               <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500" />
//               <span className="text-xl sm:text-2xl font-display gradient-text">WINVAULT</span>
//             </div>
//             {/* Desktop actions */}
//             <div className="hidden sm:flex items-center gap-3">
//               <button onClick={() => setShowTopUp(true)}
//                 className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105"
//                 style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', color: 'white' }}>
//                 <Gift className="w-4 h-4" /> Top Up
//               </button>
//               <div className="glass px-4 py-2 border border-primary-500/30">
//                 <span className="text-white/60 text-sm mr-2">Balance:</span>
//                 <span className="text-accent-400 font-bold text-lg">${user.balance.toFixed(2)}</span>
//               </div>
//               <button onClick={handleLogout} className="btn-ghost flex items-center gap-2">
//                 <LogOut className="w-4 h-4" /> <span>Logout</span>
//               </button>
//             </div>
//             {/* Mobile avatar dropdown */}
//             <MobileProfileMenu user={user} onTopUp={() => setShowTopUp(true)} onLogout={handleLogout} onViewTickets={() => setShowTickets(true)} />
//           </div>
//         </div>
//       </header>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8">
//         {/* Welcome Banner */}
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
//           className="bg-gradient-to-r from-primary-600 to-accent-500 p-5 sm:p-8 mb-6 sm:mb-8 relative overflow-hidden rounded-xl">
//           <div className="absolute inset-0 bg-mesh opacity-20" />
//           <div className="relative z-10">
//             <h1 className="text-2xl sm:text-4xl font-display text-white mb-1 sm:mb-2 leading-tight">
//               WELCOME BACK,<br className="sm:hidden" /> {user.name.toUpperCase()}!
//             </h1>
//             <p className="text-white/80 text-sm sm:text-lg">Your next big win is just a ticket away</p>
//           </div>
//         </motion.div>
//         {/* Stats Grid — 2x2 on mobile */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
//           {statCards.map((stat, index) => (
//             <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }}
//               onClick={stat.onClick}
//               className={`card p-4 sm:p-6 relative overflow-hidden ${stat.clickable ? 'cursor-pointer group active:scale-95' : ''}`}
//               whileHover={stat.clickable ? { scale: 1.02, y: -2 } : {}}>
//               <div className={`w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 sm:mb-4 rounded-lg`}>
//                 <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
//               </div>
//               <div className="text-2xl sm:text-3xl font-display gradient-text mb-1">{stat.value}</div>
//               <div className="text-[10px] sm:text-sm text-white/50 uppercase tracking-wider leading-tight">{stat.label}</div>
//               {stat.clickable && (
//                 <div className="flex items-center gap-1 mt-1.5 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <span>{stat.hint}</span><ChevronRight className="w-3 h-3" />
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//         {/* Events — single column on mobile, 2 on md, 3 on lg */}
//         <div className="mb-6 sm:mb-8">
//           <h2 className="text-2xl sm:text-3xl font-display text-white mb-4 sm:mb-6">ACTIVE LOTTERY EVENTS</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//             {events.map((event, index) => {
//               const availability = ((event.totalTickets - event.soldTickets) / event.totalTickets * 100).toFixed(0)
//               return (
//                 <motion.div key={event.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="card overflow-hidden">
//                   <div className="bg-gradient-to-r from-primary-600 to-accent-500 p-4 sm:p-6">
//                     <div className="text-3xl sm:text-4xl font-display text-white mb-1">${event.prize.toLocaleString()}</div>
//                     <div className="text-white/90 text-base sm:text-lg">{event.name}</div>
//                   </div>
//                   <div className="p-4 sm:p-6">
//                     <p className="text-white/60 mb-4 text-xs sm:text-sm">{event.description}</p>
//                     <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
//                       <div className="text-center">
//                         <div className="text-base sm:text-lg font-bold text-accent-400">${event.ticketPrice}</div>
//                         <div className="text-[10px] sm:text-xs text-white/50 uppercase">Per Ticket</div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-base sm:text-lg font-bold text-primary-400">{event.soldTickets}/{event.totalTickets}</div>
//                         <div className="text-[10px] sm:text-xs text-white/50 uppercase">Sold</div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-base sm:text-lg font-bold text-white">{availability}%</div>
//                         <div className="text-[10px] sm:text-xs text-white/50 uppercase">Available</div>
//                       </div>
//                     </div>
//                     <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8 }} className="p-2.5 sm:p-3 mb-3 sm:mb-4">
//                       <div className="flex items-center justify-between gap-2">
//                         <div className="flex items-center gap-1 text-white/50 text-[10px] sm:text-xs uppercase tracking-wider shrink-0">
//                           <Clock className="w-3 h-3" /><span>Draw In</span>
//                         </div>
//                         <CountdownDisplay drawDate={event.drawDate} compact />
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-1.5 text-white/40 text-[10px] sm:text-xs mb-4">
//                       <Calendar className="w-3 h-3 shrink-0" />
//                       <span className="truncate">{new Date(event.drawDate).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</span>
//                     </div>
//                     <button onClick={() => setSelectedEvent(event)} className="btn-primary w-full py-2.5 sm:py-3 text-sm sm:text-base">
//                       BUY TICKETS
//                     </button>
//                   </div>
//                 </motion.div>
//               )
//             })}
//           </div>
//         </div>
//         <Leaderboard tickets={tickets} currentUserId={user.id} />
//         {/* Ticket History */}
//         <div>
//           <div className="flex items-center justify-between mb-4 sm:mb-6">
//             <h2 className="text-2xl sm:text-3xl font-display text-white">TICKET HISTORY</h2>
//             {tickets.length > 0 && (
//               <button onClick={() => setShowTickets(true)} className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 shrink-0">
//                 View All <ChevronRight className="w-4 h-4" />
//               </button>
//             )}
//           </div>
//           {tickets.length === 0 ? (
//             <div className="card p-8 sm:p-12 text-center">
//               <Ticket className="w-12 h-12 sm:w-16 sm:h-16 text-white/20 mx-auto mb-3 sm:mb-4" />
//               <p className="text-white/60 text-base sm:text-lg">No tickets purchased yet</p>
//               <p className="text-white/40 text-sm">Start playing today and win big!</p>
//             </div>
//           ) : (
//             <div className="space-y-2 sm:space-y-3">
//               {tickets.slice(0, 3).map((ticket) => (
//                 <motion.div key={ticket.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
//                   className="card p-3 sm:p-4 flex items-center justify-between cursor-pointer hover:border-white/20 active:scale-[0.99] transition-all"
//                   onClick={() => setShowTickets(true)} style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
//                   <div className="flex items-center gap-2 sm:gap-3 min-w-0">
//                     <div style={{ background: 'rgba(124,58,237,0.2)', borderRadius: 8, padding: 6, flexShrink: 0 }}><Ticket className="w-4 h-4 text-purple-400" /></div>
//                     <div className="min-w-0">
//                       <p className="text-white font-semibold text-sm truncate">{ticket.eventName}</p>
//                       <p className="text-white/40 text-xs">{ticket.quantity} ticket{ticket.quantity > 1 ? 's' : ''} · {new Date(ticket.purchaseDate).toLocaleDateString()}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-2">
//                     <span className="text-emerald-400 font-bold text-sm">${ticket.totalCost}</span>
//                     <ChevronRight className="w-4 h-4 text-white/30" />
//                   </div>
//                 </motion.div>
//               ))}
//               {tickets.length > 3 && (
//                 <button onClick={() => setShowTickets(true)} className="w-full py-3 text-white/40 text-sm hover:text-white/60">
//                   +{tickets.length - 3} more tickets
//                 </button>
//               )}
//             </div>
//           )}
//         </div>
//         {/* Bottom padding for mobile (avoids content hidden behind nav bars) */}
//         <div className="h-6 sm:hidden" />
//       </div>
//       {/* Purchase Modal */}
//       <AnimatePresence>
//         {selectedEvent && (
//           <PurchaseModal
//             event={selectedEvent}
//             user={user}
//             ticketQuantity={ticketQuantity}
//             setTicketQuantity={setTicketQuantity}
//             onConfirm={handlePurchase}
//             onClose={() => { setSelectedEvent(null); setTicketQuantity(1) }}
//           />
//         )}
//       </AnimatePresence>
//       <AnimatePresence>
//         {showTickets && <TicketModal tickets={tickets} events={events} onClose={() => setShowTickets(false)} />}
//       </AnimatePresence>
//       <AnimatePresence>
//         {showTopUp && <TopUpModal onClose={() => setShowTopUp(false)} onSubmit={() => toast.success('Gift card submitted for admin review!')} />}
//       </AnimatePresence>
//     </div>
//   )
// }
}),
"[project]/app/dashboard/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/dashboard/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2538ee9f._.js.map