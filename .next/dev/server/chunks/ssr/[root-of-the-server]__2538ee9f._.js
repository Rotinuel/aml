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
// // import { DashboardHeader } from '@/components/DashboardHeader'
// // import { motion, AnimatePresence } from 'framer-motion'
// // import { Trophy, Ticket, Sparkles, LogOut, Calendar, DollarSign, X, Gift, Clock, ChevronRight, Hash, CreditCard, CheckCircle, AlertCircle, Copy, Star } from 'lucide-react'
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
// // function CountdownDisplay({ drawDate }) {
// //   const t = useCountdown(drawDate)
// //   if (t.expired) return <span className="text-red-400 font-bold text-xs uppercase tracking-wider">Draw Closed</span>
// //   return (
// //     <div className="flex items-center gap-1 text-xs font-mono">
// //       {[['d', t.days], ['h', t.hours], ['m', t.minutes], ['s', t.seconds]].map(([label, val]) => (
// //         <span key={label} className="flex items-center gap-0.5">
// //           <span className="bg-white/10 px-1.5 py-0.5 rounded text-white font-bold tabular-nums">{String(val).padStart(2, '0')}</span>
// //           <span className="text-white/40">{label}</span>
// //         </span>
// //       ))}
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
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       exit={{ opacity: 0 }}
// //       className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
// //       onClick={onClose}
// //     >
// //       <motion.div
// //         initial={{ opacity: 0, scale: 0.95, y: 20 }}
// //         animate={{ opacity: 1, scale: 1, y: 0 }}
// //         exit={{ opacity: 0, scale: 0.95, y: 20 }}
// //         onClick={e => e.stopPropagation()}
// //         className="w-full max-w-2xl max-h-[85vh] flex flex-col"
// //         style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16 }}
// //       >
// //         {/* Header */}
// //         {/* <div className="flex items-center justify-between p-6 border-b border-white/10">
// //           <div className="flex items-center gap-3">
// //             <div style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)', borderRadius: 8, padding: 8 }}>
// //               <Ticket className="w-5 h-5 text-white" />
// //             </div>
// //             <div>
// //               <h2 className="text-xl font-bold text-white">Your Tickets</h2>
// //               <p className="text-white/50 text-sm">{tickets.length} purchase{tickets.length !== 1 ? 's' : ''} · {tickets.reduce((s, t) => s + t.quantity, 0)} total tickets</p>
// //             </div>
// //           </div>
// //           <button onClick={onClose} className="text-white/40 hover:text-white transition-colors p-1">
// //             <X className="w-5 h-5" />
// //           </button>
// //         </div> */}
// //         {/* Header */}
// //         {/* <header className="glass border-b border-white/10 sticky top-0 z-40">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
// //             <div className="flex justify-between items-center gap-3">
// //               {/* Logo */}
// //         {/* <div className="flex items-center gap-2 shrink-0">
// //                 <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500" />
// //                 <span className="text-lg sm:text-2xl font-display gradient-text">WINVAULT</span>
// //               </div>
// //               {/* Right side */}
// //         {/* <div className="flex items-center gap-2 sm:gap-3"> */}
// //         {/* Balance */}
// //         {/* <div className="glass px-2.5 sm:px-4 py-1.5 sm:py-2 border border-primary-500/30 shrink-0">
// //                   <span className="text-white/60 text-xs sm:text-sm mr-1 hidden xs:inline">Balance:</span>
// //                   <span className="text-accent-400 font-bold text-sm sm:text-lg">${user.balance.toFixed(2)}</span>
// //                 </div> */}
// //         {/* Top Up — icon only on mobile */}
// //         {/* <button
// //                   onClick={() => setShowTopUp(true)}
// //                   className="flex items-center gap-1.5 px-2.5 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 shrink-0"
// //                   style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', color: 'white' }}
// //                 >
// //                   <Gift className="w-4 h-4 shrink-0" />
// //                   <span className="hidden sm:inline">Top Up</span>
// //                 </button> */}
// //         {/* Logout — icon only on mobile */}
// //         {/* <button onClick={handleLogout} className="btn-ghost flex items-center gap-1.5 px-2.5 sm:px-3 py-2 shrink-0">
// //                   <LogOut className="w-4 h-4 shrink-0" />
// //                   <span className="hidden sm:inline">Logout</span>
// //                 </button>
// //               </div>
// //             </div>
// //           </div> */}
// //         {/* </header>  */}
// //         <DashboardHeader
// //           user={user}
// //           onTopUp={() => setShowTopUp(true)}
// //           onLogout={handleLogout}
// //           onViewTickets={() => setShowTickets(true)}
// //         />
// //         {/* Content */}
// //         <div className="flex-1 overflow-y-auto p-6 space-y-4">
// //           {tickets.length === 0 ? (
// //             <div className="text-center py-16 text-white/40">
// //               <Ticket className="w-12 h-12 mx-auto mb-3 opacity-30" />
// //               <p>No tickets yet</p>
// //             </div>
// //           ) : tickets.map((ticket) => {
// //             const event = getEvent(ticket.eventId)
// //             const isOpen = selected === ticket.id
// //             return (
// //               <motion.div
// //                 key={ticket.id}
// //                 layout
// //                 style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12 }}
// //               >
// //                 {/* Ticket Summary Row */}
// //                 <button
// //                   onClick={() => setSelected(isOpen ? null : ticket.id)}
// //                   className="w-full flex items-center justify-between p-4 text-left"
// //                 >
// //                   <div className="flex items-center gap-3">
// //                     <div style={{ background: 'rgba(124,58,237,0.2)', borderRadius: 8, padding: 6 }}>
// //                       <Star className="w-4 h-4 text-purple-400" />
// //                     </div>
// //                     <div>
// //                       <p className="text-white font-semibold text-sm">{ticket.eventName}</p>
// //                       <p className="text-white/40 text-xs">{new Date(ticket.purchaseDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
// //                     </div>
// //                   </div>
// //                   <div className="flex items-center gap-4">
// //                     <div className="text-right">
// //                       <p className="text-emerald-400 font-bold text-sm">${ticket.totalCost}</p>
// //                       <p className="text-white/40 text-xs">{ticket.quantity} ticket{ticket.quantity > 1 ? 's' : ''}</p>
// //                     </div>
// //                     <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
// //                       <ChevronRight className="w-4 h-4 text-white/40" />
// //                     </motion.div>
// //                   </div>
// //                 </button>
// //                 {/* Expanded Detail */}
// //                 <AnimatePresence>
// //                   {isOpen && (
// //                     <motion.div
// //                       initial={{ height: 0, opacity: 0 }}
// //                       animate={{ height: 'auto', opacity: 1 }}
// //                       exit={{ height: 0, opacity: 0 }}
// //                       style={{ overflow: 'hidden' }}
// //                     >
// //                       <div className="px-4 pb-4 border-t border-white/5 pt-4 space-y-4">
// //                         {/* Event info */}
// //                         {event && (
// //                           <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: 12 }} className="grid grid-cols-3 gap-3 text-center">
// //                             <div>
// //                               <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Prize Pool</p>
// //                               <p className="text-yellow-400 font-bold">${event.prize.toLocaleString()}</p>
// //                             </div>
// //                             <div>
// //                               <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Draw Date</p>
// //                               <p className="text-white text-sm">{new Date(event.drawDate).toLocaleDateString()}</p>
// //                             </div>
// //                             <div>
// //                               <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Countdown</p>
// //                               <CountdownDisplay drawDate={event.drawDate} />
// //                             </div>
// //                           </div>
// //                         )}
// //                         {/* Ticket Numbers */}
// //                         <div>
// //                           <p className="text-white/40 text-xs uppercase tracking-wider mb-2 flex items-center gap-1">
// //                             <Hash className="w-3 h-3" /> Ticket Numbers
// //                           </p>
// //                           <div className="flex flex-wrap gap-2">
// //                             {ticket.ticketNumbers.map((num, i) => (
// //                               <button
// //                                 key={i}
// //                                 onClick={() => copyNumber(num)}
// //                                 className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-sm transition-all"
// //                                 style={{
// //                                   background: copied === num ? 'rgba(16,185,129,0.2)' : 'rgba(124,58,237,0.15)',
// //                                   border: `1px solid ${copied === num ? 'rgba(16,185,129,0.4)' : 'rgba(124,58,237,0.3)'}`,
// //                                   color: copied === num ? '#10b981' : '#a78bfa',
// //                                 }}
// //                               >
// //                                 {copied === num ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3 opacity-50" />}
// //                                 {num}
// //                               </button>
// //                             ))}
// //                           </div>
// //                         </div>
// //                         {/* Status */}
// //                         <div className="flex items-center gap-2">
// //                           <span style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 20, padding: '2px 10px' }} className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
// //                             Active Entry
// //                           </span>
// //                           <span className="text-white/30 text-xs">Ticket #{ticket.id.slice(-6)}</span>
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
// //   const [cardType, setCardType] = useState(null) // null | 'physical' | 'ecode'
// //   const [code, setCode] = useState('')
// //   const [amount, setAmount] = useState('')
// //   const [loading, setLoading] = useState(false)
// //   const [step, setStep] = useState('form') // 'form' | 'pending'
// //   const [cardImage, setCardImage] = useState(null)
// //   const [dragOver, setDragOver] = useState(false)
// //   const [showCamera, setShowCamera] = useState(false)
// //   const [cameraError, setCameraError] = useState(null)
// //   const [capturing, setCapturing] = useState(false)
// //   const videoRef = useRef(null)
// //   const streamRef = useRef(null)
// //   const cardDenominations = [
// //     { value: 10, color: ['#1a1a2e', '#16213e'], accent: '#60a5fa', label: 'Starter' },
// //     { value: 25, color: ['#1a2e1a', '#16321e'], accent: '#4ade80', label: 'Popular' },
// //     { value: 50, color: ['#2e1a1a', '#321616'], accent: '#f97316', label: 'Classic' },
// //     { value: 100, color: ['#2a1a2e', '#24163e'], accent: '#c084fc', label: 'Premium' },
// //     { value: 250, color: ['#2e2a1a', '#3e3216'], accent: '#fbbf24', label: 'Gold' },
// //     { value: 500, color: ['#1a2a2e', '#16363e'], accent: '#22d3ee', label: 'Platinum' },
// //   ]
// //   // Stop camera stream helper
// //   const stopStream = () => {
// //     if (streamRef.current) {
// //       streamRef.current.getTracks().forEach(t => t.stop())
// //       streamRef.current = null
// //     }
// //   }
// //   // Open camera using getUserMedia
// //   const openCamera = async () => {
// //     setCameraError(null)
// //     setShowCamera(true)
// //     try {
// //       const stream = await navigator.mediaDevices.getUserMedia({
// //         video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } },
// //         audio: false,
// //       })
// //       streamRef.current = stream
// //       if (videoRef.current) {
// //         videoRef.current.srcObject = stream
// //         videoRef.current.play()
// //       }
// //     } catch (err) {
// //       setCameraError(
// //         err.name === 'NotAllowedError' ? 'Camera permission denied. Please allow camera access.' :
// //           err.name === 'NotFoundError' ? 'No camera found on this device.' :
// //             'Could not access camera. Try uploading a file instead.'
// //       )
// //     }
// //   }
// //   // Capture still frame from video
// //   const capturePhoto = () => {
// //     if (!videoRef.current) return
// //     setCapturing(true)
// //     const video = videoRef.current
// //     const canvas = document.createElement('canvas')
// //     canvas.width = video.videoWidth || 1280
// //     canvas.height = video.videoHeight || 720
// //     canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
// //     canvas.toBlob((blob) => {
// //       const file = new File([blob], `card-photo-${Date.now()}.jpg`, { type: 'image/jpeg' })
// //       const reader = new FileReader()
// //       reader.onload = (e) => {
// //         setCardImage({ file, preview: e.target.result, name: file.name, size: (file.size / 1024).toFixed(0) + ' KB' })
// //         stopStream()
// //         setShowCamera(false)
// //         setCapturing(false)
// //       }
// //       reader.readAsDataURL(file)
// //     }, 'image/jpeg', 0.92)
// //   }
// //   const closeCamera = () => {
// //     stopStream()
// //     setShowCamera(false)
// //     setCameraError(null)
// //   }
// //   // Clean up on unmount
// //   useEffect(() => () => stopStream(), [])
// //   const processFile = (file) => {
// //     if (!file) return
// //     const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/gif']
// //     if (!allowed.includes(file.type) && !file.name.match(/\.(jpg|jpeg|png|webp|heic|gif)$/i)) {
// //       toast.error('Please upload an image file (JPG, PNG, WEBP, HEIC)')
// //       return
// //     }
// //     if (file.size > 10 * 1024 * 1024) {
// //       toast.error('Image must be under 10MB')
// //       return
// //     }
// //     const reader = new FileReader()
// //     reader.onload = (e) => setCardImage({ file, preview: e.target.result, name: file.name, size: (file.size / 1024).toFixed(0) + ' KB' })
// //     reader.readAsDataURL(file)
// //   }
// //   const handleFileChange = (e) => processFile(e.target.files[0])
// //   const handleDrop = (e) => {
// //     e.preventDefault()
// //     setDragOver(false)
// //     processFile(e.dataTransfer.files[0])
// //   }
// //   const handleSubmit = async () => {
// //     if (!amount) {
// //       toast.error('Please select a card value')
// //       return
// //     }
// //     if (cardType === 'ecode' && !code.trim()) {
// //       toast.error('Please enter your e-code')
// //       return
// //     }
// //     if (cardType === 'physical' && !cardImage) {
// //       toast.error('Please upload or take a photo of your card')
// //       return
// //     }
// //     setLoading(true)
// //     await new Promise(r => setTimeout(r, 1200))
// //     setLoading(false)
// //     setStep('pending')
// //     onSubmit({ code: code.trim(), amount: Number(amount), image: cardImage?.file || null, cardType })
// //   }
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       exit={{ opacity: 0 }}
// //       className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto"
// //       onClick={onClose}
// //     >
// //       <div className="min-h-full flex items-center justify-center p-4 py-8" onClick={e => e.stopPropagation()}>
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.95, y: 20 }}
// //           animate={{ opacity: 1, scale: 1, y: 0 }}
// //           exit={{ opacity: 0, scale: 0.95, y: 20 }}
// //           className="w-full max-w-md flex flex-col"
// //           style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16 }}
// //         >
// //           {step === 'pending' ? (
// //             <div className="p-8 text-center">
// //               <motion.div
// //                 initial={{ scale: 0 }}
// //                 animate={{ scale: 1 }}
// //                 transition={{ type: 'spring', stiffness: 200 }}
// //                 className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
// //                 style={{ background: 'rgba(234,179,8,0.15)', border: '2px solid rgba(234,179,8,0.4)' }}
// //               >
// //                 <Clock className="w-8 h-8 text-yellow-400" />
// //               </motion.div>
// //               <h3 className="text-xl font-bold text-white mb-2">Request Submitted!</h3>
// //               <p className="text-white/50 text-sm mb-1">Your gift card has been sent for admin verification.</p>
// //               <p className="text-white/40 text-xs mb-6">Funds will be added to your balance once approved. This usually takes a few minutes.</p>
// //               <div style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)', borderRadius: 10 }} className="p-4 mb-4">
// //                 <div className="flex justify-between text-sm mb-2">
// //                   <span className="text-white/50">Card Type</span>
// //                   <span className="font-semibold" style={{ color: cardType === 'ecode' ? '#818cf8' : '#f97316' }}>
// //                     {cardType === 'ecode' ? '⌨ E-Code' : '💳 Physical Card'}
// //                   </span>
// //                 </div>
// //                 {cardType === 'ecode' && (
// //                   <div className="flex justify-between text-sm mb-2">
// //                     <span className="text-white/50">Code</span>
// //                     <span className="text-white font-mono font-bold">{code}</span>
// //                   </div>
// //                 )}
// //                 <div className="flex justify-between text-sm mb-2">
// //                   <span className="text-white/50">Requested Amount</span>
// //                   <span className="text-yellow-400 font-bold">${amount}</span>
// //                 </div>
// //                 {cardType === 'physical' && (
// //                   <div className="flex justify-between text-sm">
// //                     <span className="text-white/50">Card Image</span>
// //                     <span className={`text-xs font-semibold ${cardImage ? 'text-emerald-400' : 'text-white/30'}`}>
// //                       {cardImage ? '✓ Uploaded' : 'Not provided'}
// //                     </span>
// //                   </div>
// //                 )}
// //               </div>
// //               {/* Image thumbnail in success */}
// //               {cardImage && (
// //                 <div className="mb-6 rounded-lg overflow-hidden border border-white/10">
// //                   <img src={cardImage.preview} alt="Gift card" className="w-full h-28 object-cover" />
// //                 </div>
// //               )}
// //               <button onClick={onClose} className="w-full py-3 rounded-lg font-semibold text-white transition-all"
// //                 style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>
// //                 Done
// //               </button>
// //             </div>
// //           ) : (
// //             <>
// //               {/* Header */}
// //               <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
// //                 <div className="flex items-center gap-3">
// //                   <div style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', borderRadius: 8, padding: 8 }}>
// //                     <Gift className="w-5 h-5 text-white" />
// //                   </div>
// //                   <div>
// //                     <h2 className="text-xl font-bold text-white">Top Up Balance</h2>
// //                     <p className="text-white/50 text-sm">Redeem a gift card</p>
// //                   </div>
// //                 </div>
// //                 <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
// //                   <X className="w-5 h-5" />
// //                 </button>
// //               </div>
// //               {/* Body */}
// //               <div className="p-6 space-y-5">
// //                 {/* ── Card Type Selector ───────────────────────── */}
// //                 <div>
// //                   <label className="block text-white/60 text-xs uppercase tracking-wider mb-3 font-semibold">How would you like to redeem?</label>
// //                   <div className="grid grid-cols-2 gap-3">
// //                     <button
// //                       onClick={() => { setCardType('physical'); setCode('') }}
// //                       className="relative rounded-xl p-4 text-left transition-all"
// //                       style={{
// //                         background: cardType === 'physical' ? 'rgba(249,115,22,0.1)' : 'rgba(255,255,255,0.03)',
// //                         border: cardType === 'physical' ? '2px solid rgba(249,115,22,0.5)' : '2px solid rgba(255,255,255,0.08)',
// //                         boxShadow: cardType === 'physical' ? '0 0 20px rgba(249,115,22,0.08)' : 'none',
// //                       }}
// //                     >
// //                       {cardType === 'physical' && (
// //                         <div className="absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: '#f97316' }}>
// //                           <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
// //                         </div>
// //                       )}
// //                       <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
// //                         style={{ background: cardType === 'physical' ? 'rgba(249,115,22,0.2)' : 'rgba(255,255,255,0.07)' }}>
// //                         <svg className="w-4 h-4" style={{ color: cardType === 'physical' ? '#f97316' : 'rgba(255,255,255,0.4)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
// //                           <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
// //                         </svg>
// //                       </div>
// //                       <p className="text-white text-sm font-bold">Physical Card</p>
// //                       <p className="text-white/40 text-xs mt-0.5">Upload or snap a photo</p>
// //                     </button>
// //                     <button
// //                       onClick={() => { setCardType('ecode'); setCardImage(null) }}
// //                       className="relative rounded-xl p-4 text-left transition-all"
// //                       style={{
// //                         background: cardType === 'ecode' ? 'rgba(99,102,241,0.1)' : 'rgba(255,255,255,0.03)',
// //                         border: cardType === 'ecode' ? '2px solid rgba(99,102,241,0.5)' : '2px solid rgba(255,255,255,0.08)',
// //                         boxShadow: cardType === 'ecode' ? '0 0 20px rgba(99,102,241,0.08)' : 'none',
// //                       }}
// //                     >
// //                       {cardType === 'ecode' && (
// //                         <div className="absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: '#6366f1' }}>
// //                           <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
// //                         </div>
// //                       )}
// //                       <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
// //                         style={{ background: cardType === 'ecode' ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.07)' }}>
// //                         <svg className="w-4 h-4" style={{ color: cardType === 'ecode' ? '#818cf8' : 'rgba(255,255,255,0.4)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
// //                           <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
// //                         </svg>
// //                       </div>
// //                       <p className="text-white text-sm font-bold">E-Code</p>
// //                       <p className="text-white/40 text-xs mt-0.5">Enter digital code</p>
// //                     </button>
// //                   </div>
// //                 </div>
// //                 {/* ── Conditional Fields ───────────────────────── */}
// //                 <AnimatePresence mode="wait">
// //                   {cardType && (
// //                     <motion.div key={cardType} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="space-y-5">
// //                       {/* E-Code input */}
// //                       {cardType === 'ecode' && (
// //                         <div>
// //                           <label className="block text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">E-Code</label>
// //                           <div className="relative">
// //                             <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
// //                             <input type="text" value={code} onChange={e => setCode(e.target.value.toUpperCase())} placeholder="XXXX-XXXX-XXXX-XXXX" autoFocus
// //                               className="w-full pl-10 pr-4 py-3 font-mono text-sm rounded-lg text-white placeholder-white/20 outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
// //                               style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }} />
// //                           </div>
// //                         </div>
// //                       )}
// //                       {/* Gift Card Denomination Picker */}
// //                       <div>
// //                         <label className="block text-white/60 text-xs uppercase tracking-wider mb-3 font-semibold">Select Card Value</label>
// //                         <div className="grid grid-cols-3 gap-2 mb-3">
// //                           {cardDenominations.map(({ value, color, accent, label }) => {
// //                             const selected = amount === String(value)
// //                             return (
// //                               <button
// //                                 key={value}
// //                                 onClick={() => setAmount(String(value))}
// //                                 className="relative rounded-xl overflow-hidden transition-all"
// //                                 style={{
// //                                   background: `linear-gradient(135deg, ${color[0]}, ${color[1]})`,
// //                                   border: selected ? `2px solid ${accent}` : '2px solid rgba(255,255,255,0.07)',
// //                                   boxShadow: selected ? `0 0 16px ${accent}44` : 'none',
// //                                   transform: selected ? 'scale(1.04)' : 'scale(1)',
// //                                   aspectRatio: '1.586 / 1', // standard card ratio
// //                                   padding: 0,
// //                                 }}
// //                               >
// //                                 {/* Card shine */}
// //                                 <div className="absolute inset-0 pointer-events-none"
// //                                   style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)' }} />
// //                                 {/* Chip */}
// //                                 <div className="absolute top-2 left-2.5 w-4 h-3 rounded-sm"
// //                                   style={{ background: `linear-gradient(135deg, ${accent}88, ${accent}44)`, border: `1px solid ${accent}66` }} />
// //                                 {/* Selected check */}
// //                                 {selected && (
// //                                   <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full flex items-center justify-center"
// //                                     style={{ background: accent }}>
// //                                     <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
// //                                       <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
// //                                     </svg>
// //                                   </div>
// //                                 )}
// //                                 {/* Amount */}
// //                                 <div className="absolute bottom-2 inset-x-0 px-2.5 flex items-end justify-between">
// //                                   <div>
// //                                     <p className="text-white/40 text-[9px] uppercase tracking-wider leading-none mb-0.5">{label}</p>
// //                                     <p className="font-bold leading-none" style={{ color: accent, fontSize: 15 }}>${value}</p>
// //                                   </div>
// //                                   {/* Decorative circles */}
// //                                   <div className="flex -space-x-1">
// //                                     <div className="w-4 h-4 rounded-full opacity-40" style={{ background: accent }} />
// //                                     <div className="w-4 h-4 rounded-full opacity-20" style={{ background: accent }} />
// //                                   </div>
// //                                 </div>
// //                               </button>
// //                             )
// //                           })}
// //                         </div>
// //                         {/* Selected summary */}
// //                         {amount && (
// //                           <p className="text-xs mt-2 text-center" style={{ color: cardDenominations.find(d => String(d.value) === amount)?.accent || 'rgba(255,255,255,0.4)' }}>
// //                             {cardDenominations.find(d => String(d.value) === amount)
// //                               ? `${cardDenominations.find(d => String(d.value) === amount).label} card · $${amount} selected`
// //                               : null}
// //                           </p>
// //                         )}
// //                       </div>
// //                       {/* Physical: upload / camera */}
// //                       {cardType === 'physical' && (
// //                         <div>
// //                           <label className="flex text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold items-center gap-1.5">
// //                             Card Photo <span className="text-red-400/70 normal-case font-normal">· required</span>
// //                           </label>
// //                           {cardImage ? (
// //                             <div className="relative rounded-xl overflow-hidden" style={{ border: '1px solid rgba(16,185,129,0.3)' }}>
// //                               <img src={cardImage.preview} alt="Gift card preview" className="w-full h-40 object-cover" />
// //                               <div className="absolute bottom-0 inset-x-0 p-3 flex items-center justify-between"
// //                                 style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)' }}>
// //                                 <div className="flex items-center gap-2">
// //                                   <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
// //                                   <div>
// //                                     <p className="text-white text-xs font-semibold truncate max-w-[160px]">{cardImage.name}</p>
// //                                     <p className="text-white/40 text-xs">{cardImage.size}</p>
// //                                   </div>
// //                                 </div>
// //                                 <button onClick={() => setCardImage(null)} className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs text-white/60 hover:text-white transition-colors" style={{ background: 'rgba(255,255,255,0.1)' }}>
// //                                   <X className="w-3 h-3" /> Remove
// //                                 </button>
// //                               </div>
// //                             </div>
// //                           ) : (
// //                             <div className="grid grid-cols-2 gap-2">
// //                               <div onDragOver={e => { e.preventDefault(); setDragOver(true) }} onDragLeave={() => setDragOver(false)} onDrop={handleDrop}
// //                                 onClick={() => document.getElementById('gc-file-input').click()}
// //                                 className="relative rounded-xl cursor-pointer transition-all flex flex-col items-center justify-center gap-2 py-5"
// //                                 style={{ border: `2px dashed ${dragOver ? 'rgba(124,58,237,0.7)' : 'rgba(255,255,255,0.1)'}`, background: dragOver ? 'rgba(124,58,237,0.08)' : 'rgba(255,255,255,0.03)' }}>
// //                                 <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: dragOver ? 'rgba(124,58,237,0.25)' : 'rgba(255,255,255,0.07)' }}>
// //                                   <svg className="w-4 h-4" style={{ color: dragOver ? '#a78bfa' : 'rgba(255,255,255,0.4)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
// //                                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
// //                                   </svg>
// //                                 </div>
// //                                 <div className="text-center">
// //                                   <p className="text-white/60 text-xs font-semibold">{dragOver ? 'Drop here' : 'Upload File'}</p>
// //                                   <p className="text-white/25 text-[10px] mt-0.5">JPG, PNG, WEBP</p>
// //                                 </div>
// //                                 <input id="gc-file-input" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
// //                               </div>
// //                               <div onClick={openCamera} className="relative rounded-xl cursor-pointer transition-all flex flex-col items-center justify-center gap-2 py-5"
// //                                 style={{ border: '2px dashed rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}
// //                                 onMouseEnter={e => { e.currentTarget.style.border = '2px dashed rgba(6,182,212,0.5)'; e.currentTarget.style.background = 'rgba(6,182,212,0.06)' }}
// //                                 onMouseLeave={e => { e.currentTarget.style.border = '2px dashed rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}>
// //                                 <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(6,182,212,0.12)' }}>
// //                                   <svg className="w-4 h-4" style={{ color: 'rgba(6,182,212,0.8)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
// //                                     <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
// //                                     <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
// //                                   </svg>
// //                                 </div>
// //                                 <div className="text-center">
// //                                   <p className="text-white/60 text-xs font-semibold">Take Photo</p>
// //                                   <p className="text-white/25 text-[10px] mt-0.5">Use camera</p>
// //                                 </div>
// //                               </div>
// //                             </div>
// //                           )}
// //                         </div>
// //                       )}
// //                       {/* ── Camera Overlay ─────────────────────────────── */}
// //                       <AnimatePresence>
// //                         {showCamera && (
// //                           <motion.div
// //                             initial={{ opacity: 0 }}
// //                             animate={{ opacity: 1 }}
// //                             exit={{ opacity: 0 }}
// //                             className="fixed inset-0 z-[60] flex flex-col"
// //                             style={{ background: '#000' }}
// //                           >
// //                             {/* Viewfinder */}
// //                             <div className="relative flex-1 overflow-hidden">
// //                               {!cameraError ? (
// //                                 <>
// //                                   <video
// //                                     ref={videoRef}
// //                                     autoPlay
// //                                     playsInline
// //                                     muted
// //                                     className="absolute inset-0 w-full h-full object-cover"
// //                                   />
// //                                   {/* Corner guides */}
// //                                   {[['top-8 left-8', 'border-t-2 border-l-2'], ['top-8 right-8', 'border-t-2 border-r-2'], ['bottom-24 left-8', 'border-b-2 border-l-2'], ['bottom-24 right-8', 'border-b-2 border-r-2']].map(([pos, borders], i) => (
// //                                     <div key={i} className={`absolute w-8 h-8 ${pos} ${borders} border-white/70`} style={{ borderRadius: 2 }} />
// //                                   ))}
// //                                   {/* Hint */}
// //                                   <div className="absolute top-6 inset-x-0 flex justify-center">
// //                                     <span className="px-3 py-1 rounded-full text-xs text-white/70 font-medium"
// //                                       style={{ background: 'rgba(0,0,0,0.5)' }}>
// //                                       Point camera at your gift card
// //                                     </span>
// //                                   </div>
// //                                 </>
// //                               ) : (
// //                                 <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center">
// //                                   <div className="w-14 h-14 rounded-full flex items-center justify-center"
// //                                     style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)' }}>
// //                                     <AlertCircle className="w-7 h-7 text-red-400" />
// //                                   </div>
// //                                   <p className="text-white/80 text-sm">{cameraError}</p>
// //                                   <button onClick={closeCamera}
// //                                     className="px-5 py-2 rounded-lg text-sm font-semibold text-white"
// //                                     style={{ background: 'rgba(255,255,255,0.1)' }}>
// //                                     Close
// //                                   </button>
// //                                 </div>
// //                               )}
// //                             </div>
// //                             {/* Bottom controls */}
// //                             <div className="shrink-0 flex items-center justify-between px-10 py-6"
// //                               style={{ background: 'rgba(0,0,0,0.85)' }}>
// //                               {/* Cancel */}
// //                               <button onClick={closeCamera}
// //                                 className="w-11 h-11 rounded-full flex items-center justify-center transition-all"
// //                                 style={{ background: 'rgba(255,255,255,0.1)' }}>
// //                                 <X className="w-5 h-5 text-white/70" />
// //                               </button>
// //                               {/* Shutter */}
// //                               {!cameraError && (
// //                                 <button
// //                                   onClick={capturePhoto}
// //                                   disabled={capturing}
// //                                   className="relative w-16 h-16 rounded-full flex items-center justify-center transition-all disabled:scale-95"
// //                                   style={{ background: 'white' }}
// //                                 >
// //                                   <div className="w-12 h-12 rounded-full border-2 border-gray-300" />
// //                                   {capturing && (
// //                                     <div className="absolute inset-0 rounded-full animate-ping"
// //                                       style={{ background: 'rgba(255,255,255,0.4)' }} />
// //                                   )}
// //                                 </button>
// //                               )}
// //                               {/* Spacer */}
// //                               <div className="w-11" />
// //                             </div>
// //                           </motion.div>
// //                         )}
// //                       </AnimatePresence>
// //                       {/* Info Banner */}
// //                       <div style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)', borderRadius: 10 }} className="p-3 flex gap-2 items-start">
// //                         <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
// //                         <p className="text-yellow-400/80 text-xs leading-relaxed">
// //                           {cardType === 'ecode'
// //                             ? 'Enter your digital gift card code exactly as shown. Admin will verify and credit your balance within minutes.'
// //                             : 'Upload or snap a clear photo of your physical card. Admin will verify and add funds shortly.'}
// //                         </p>
// //                       </div>
// //                       {/* Submit */}
// //                       <button onClick={handleSubmit} disabled={loading}
// //                         className="w-full py-3 rounded-lg font-bold text-white text-sm uppercase tracking-wider transition-all disabled:opacity-50"
// //                         style={{ background: cardType === 'ecode' ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'linear-gradient(135deg, #f97316, #ef4444)' }}>
// //                         {loading ? 'Submitting...' : 'Submit for Verification'}
// //                       </button>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </div>
// //             </>
// //           )}
// //         </motion.div>
// //       </div>
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
// //   const [filter, setFilter] = useState('tickets') // 'tickets' | 'spent'
// //   const [showAll, setShowAll] = useState(false)
// //   // Merge real user tickets with demo data
// //   const myEntry = tickets.length > 0 ? {
// //     id: currentUserId || 'me',
// //     name: 'You',
// //     avatar: 'ME',
// //     tickets: tickets.reduce((s, t) => s + t.quantity, 0),
// //     spent: tickets.reduce((s, t) => s + t.totalCost, 0),
// //     color: '#7c3aed',
// //     isMe: true,
// //   } : null
// //   const allPlayers = [
// //     ...DEMO_LEADERS,
// //     ...(myEntry ? [myEntry] : []),
// //   ].sort((a, b) => filter === 'tickets' ? b.tickets - a.tickets : b.spent - a.spent)
// //     .map((p, i) => ({ ...p, rank: i + 1 }))
// //   const visible = showAll ? allPlayers : allPlayers.slice(0, 5)
// //   const top3 = allPlayers.slice(0, 3)
// //   const maxVal = allPlayers[0]?.[filter === 'tickets' ? 'tickets' : 'spent'] || 1
// //   return (
// //     <div className="mb-8">
// //       {/* Header */}
// //       <div className="flex items-center justify-between mb-6">
// //         <div className="flex items-center gap-3">
// //           <h2 className="text-3xl font-display text-white">LEADERBOARD</h2>
// //           <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
// //             <Trophy className="w-6 h-6 text-yellow-400" />
// //           </motion.div>
// //         </div>
// //         {/* Filter Toggle */}
// //         <div className="flex rounded-lg overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
// //           {[['tickets', 'By Tickets'], ['spent', 'By Spent']].map(([val, label]) => (
// //             <button key={val} onClick={() => setFilter(val)}
// //               className="px-3 py-1.5 text-xs font-semibold transition-all"
// //               style={{
// //                 background: filter === val ? 'rgba(124,58,237,0.4)' : 'transparent',
// //                 color: filter === val ? '#a78bfa' : 'rgba(255,255,255,0.4)',
// //               }}>
// //               {label}
// //             </button>
// //           ))}
// //         </div>
// //       </div>
// //       {/* Top 3 Podium */}
// //       <div className="grid grid-cols-3 gap-3 mb-6 items-end">
// //         {/* Reorder: 2nd, 1st, 3rd */}
// //         {[top3[1], top3[0], top3[2]].map((player, podiumIdx) => {
// //           if (!player) return <div key={podiumIdx} />
// //           const actualRank = podiumIdx === 1 ? 1 : podiumIdx === 0 ? 2 : 3
// //           const rs = RANK_STYLES[actualRank - 1]
// //           const heights = ['h-24', 'h-32', 'h-20']
// //           return (
// //             <motion.div
// //               key={player.id}
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: podiumIdx * 0.1 }}
// //               className="flex flex-col items-center"
// //             >
// //               {/* Avatar */}
// //               <div className="relative mb-2">
// //                 <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg"
// //                   style={{ background: player.color, boxShadow: `0 0 20px ${player.color}55` }}>
// //                   {player.avatar}
// //                 </div>
// //                 <span className="absolute -bottom-1 -right-1 text-base leading-none">{rs.badge}</span>
// //               </div>
// //               <p className="text-white text-xs font-bold mb-1 text-center truncate w-full px-1">{player.name}</p>
// //               <p className="text-white/40 text-[10px] mb-2">
// //                 {filter === 'tickets' ? `${player.tickets} tickets` : `$${player.spent}`}
// //               </p>
// //               {/* Podium block */}
// //               <div className={`w-full ${heights[podiumIdx]} rounded-t-lg flex items-center justify-center`}
// //                 style={{ background: rs.bg, border: `1px solid ${rs.border}`, boxShadow: `0 0 20px ${rs.glow}` }}>
// //                 <span className="text-white/60 text-lg font-display">#{actualRank}</span>
// //               </div>
// //             </motion.div>
// //           )
// //         })}
// //       </div>
// //       {/* Ranked List */}
// //       <div className="space-y-2">
// //         {visible.map((player, idx) => {
// //           const isMe = player.isMe
// //           const barWidth = ((filter === 'tickets' ? player.tickets : player.spent) / maxVal * 100).toFixed(1)
// //           const rs = player.rank <= 3 ? RANK_STYLES[player.rank - 1] : null
// //           return (
// //             <motion.div
// //               key={player.id}
// //               initial={{ opacity: 0, x: -12 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ delay: idx * 0.04 }}
// //               className="relative overflow-hidden rounded-xl p-3 flex items-center gap-3"
// //               style={{
// //                 background: isMe ? 'rgba(124,58,237,0.12)' : 'rgba(255,255,255,0.03)',
// //                 border: isMe ? '1px solid rgba(124,58,237,0.35)' : '1px solid rgba(255,255,255,0.06)',
// //                 boxShadow: isMe ? '0 0 20px rgba(124,58,237,0.1)' : 'none',
// //               }}
// //             >
// //               {/* Progress bar bg */}
// //               <div className="absolute inset-0 pointer-events-none"
// //                 style={{ width: `${barWidth}%`, background: isMe ? 'rgba(124,58,237,0.06)' : 'rgba(255,255,255,0.02)', borderRadius: 'inherit' }} />
// //               {/* Rank */}
// //               <div className="w-7 shrink-0 text-center">
// //                 {rs ? (
// //                   <span className="text-base leading-none">{rs.badge}</span>
// //                 ) : (
// //                   <span className="text-white/30 text-sm font-bold">#{player.rank}</span>
// //                 )}
// //               </div>
// //               {/* Avatar */}
// //               <div className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center text-xs font-bold text-white"
// //                 style={{ background: player.color, boxShadow: `0 0 12px ${player.color}44` }}>
// //                 {player.avatar}
// //               </div>
// //               {/* Name */}
// //               <div className="flex-1 min-w-0">
// //                 <div className="flex items-center gap-2">
// //                   <p className="text-white text-sm font-semibold truncate">{player.name}</p>
// //                   {isMe && (
// //                     <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full shrink-0"
// //                       style={{ background: 'rgba(124,58,237,0.3)', color: '#a78bfa', border: '1px solid rgba(124,58,237,0.4)' }}>
// //                       YOU
// //                     </span>
// //                   )}
// //                 </div>
// //                 <p className="text-white/30 text-[10px]">
// //                   {player.tickets} ticket{player.tickets !== 1 ? 's' : ''} · ${player.spent} spent
// //                 </p>
// //               </div>
// //               {/* Value */}
// //               <div className="text-right shrink-0">
// //                 <p className="font-bold text-sm" style={{ color: isMe ? '#a78bfa' : player.rank <= 3 ? '#fbbf24' : 'rgba(255,255,255,0.6)' }}>
// //                   {filter === 'tickets' ? player.tickets : `$${player.spent}`}
// //                 </p>
// //                 <p className="text-white/25 text-[10px]">{filter === 'tickets' ? 'tickets' : 'spent'}</p>
// //               </div>
// //             </motion.div>
// //           )
// //         })}
// //       </div>
// //       {/* Show more */}
// //       {allPlayers.length > 5 && (
// //         <button onClick={() => setShowAll(!showAll)}
// //           className="w-full mt-3 py-2.5 rounded-xl text-sm font-semibold transition-all"
// //           style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}>
// //           {showAll ? 'Show Less ↑' : `Show All ${allPlayers.length} Players ↓`}
// //         </button>
// //       )}
// //     </div>
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
// //     const parsedUser = JSON.parse(userData)
// //     setUser(parsedUser)
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
// //       id: Date.now().toString(),
// //       eventId: selectedEvent.id,
// //       eventName: selectedEvent.name,
// //       quantity: ticketQuantity,
// //       totalCost,
// //       purchaseDate: new Date(),
// //       ticketNumbers: Array.from({ length: ticketQuantity }, () => Math.floor(Math.random() * 1000000).toString().padStart(6, '0')),
// //     }
// //     const newTickets = [...tickets, newTicket]
// //     setTickets(newTickets)
// //     const updatedUser = { ...user, balance: user.balance - totalCost }
// //     setUser(updatedUser)
// //     localStorage.setItem('user', JSON.stringify(updatedUser))
// //     setStats({ totalTickets: newTickets.reduce((s, t) => s + t.quantity, 0), activeEntries: newTickets.length, totalSpent: newTickets.reduce((s, t) => s + t.totalCost, 0), totalWinnings: 0 })
// //     toast.success(`Successfully purchased ${ticketQuantity} ticket(s)!`)
// //     setSelectedEvent(null)
// //     setTicketQuantity(1)
// //   }
// //   const handleTopUpSubmit = ({ code, amount }) => {
// //     toast.success('Gift card submitted for admin review!')
// //     // In production: POST to /api/topup with { code, amount }
// //   }
// //   const handleLogout = () => {
// //     localStorage.removeItem('token')
// //     localStorage.removeItem('user')
// //     router.push('/')
// //   }
// //   if (loading || !user) return (
// //     <div className="min-h-screen bg-dark-950 flex items-center justify-center">
// //       <div className="text-white text-2xl font-display">Loading...</div>
// //     </div>
// //   )
// //   const statCards = [
// //     {
// //       label: 'Total Tickets', value: stats.totalTickets, icon: Ticket,
// //       color: 'from-blue-500 to-cyan-500', clickable: true,
// //       onClick: () => setShowTickets(true),
// //       hint: 'Click to view'
// //     },
// //     { label: 'Active Entries', value: stats.activeEntries, icon: Sparkles, color: 'from-purple-500 to-pink-500' },
// //     { label: 'Total Spent', value: `$${stats.totalSpent}`, icon: DollarSign, color: 'from-orange-500 to-red-500' },
// //     { label: 'Total Winnings', value: `$${stats.totalWinnings}`, icon: Trophy, color: 'from-green-500 to-emerald-500' },
// //   ]
// //   return (
// //     <div className="min-h-screen bg-dark-950">
// //       {/* Header */}
// //       <header className="glass border-b border-white/10 sticky top-0 z-40">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
// //           <div className="flex justify-between items-center">
// //             <div className="flex items-center space-x-3">
// //               <Trophy className="w-8 h-8 text-primary-500" />
// //               <span className="text-2xl font-display gradient-text">WINVAULT</span>
// //             </div>
// //             <div className="flex items-center space-x-3">
// //               {/* Top Up Button */}
// //               <button
// //                 onClick={() => setShowTopUp(true)}
// //                 className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105"
// //                 style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', color: 'white' }}
// //               >
// //                 <Gift className="w-4 h-4" />
// //                 <span>Top Up</span>
// //               </button>
// //               <div className="glass px-4 py-2 border border-primary-500/30">
// //                 <span className="text-white/60 text-sm mr-2">Balance:</span>
// //                 <span className="text-accent-400 font-bold text-lg">${user.balance.toFixed(2)}</span>
// //               </div>
// //               <button onClick={handleLogout} className="btn-ghost flex items-center space-x-2">
// //                 <LogOut className="w-4 h-4" />
// //                 <span className="hidden sm:inline">Logout</span>
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </header>
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //         {/* Welcome Banner */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className="bg-gradient-to-r from-primary-600 to-accent-500 p-8 mb-8 relative overflow-hidden rounded-xl"
// //         >
// //           <div className="absolute inset-0 bg-mesh opacity-20" />
// //           <div className="relative z-10">
// //             <h1 className="text-4xl font-display text-white mb-2">WELCOME BACK, {user.name.toUpperCase()}!</h1>
// //             <p className="text-white/90 text-lg">Your next big win is just a ticket away</p>
// //           </div>
// //         </motion.div>
// //         {/* Stats Grid */}
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
// //           {statCards.map((stat, index) => (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, scale: 0.9 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               transition={{ delay: index * 0.1 }}
// //               onClick={stat.onClick}
// //               className={`card p-6 relative overflow-hidden ${stat.clickable ? 'cursor-pointer group' : ''}`}
// //               whileHover={stat.clickable ? { scale: 1.02, y: -2 } : {}}
// //             >
// //               {stat.clickable && (
// //                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
// //                   style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(6,182,212,0.08))' }} />
// //               )}
// //               <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 rounded-lg`}>
// //                 <stat.icon className="w-6 h-6 text-white" />
// //               </div>
// //               <div className="text-3xl font-display gradient-text mb-1">{stat.value}</div>
// //               <div className="text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
// //               {stat.clickable && (
// //                 <div className="flex items-center gap-1 mt-2 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
// //                   <span>{stat.hint}</span>
// //                   <ChevronRight className="w-3 h-3" />
// //                 </div>
// //               )}
// //             </motion.div>
// //           ))}
// //         </div>
// //         {/* Active Events */}
// //         <div className="mb-8">
// //           <h2 className="text-3xl font-display text-white mb-6">ACTIVE LOTTERY EVENTS</h2>
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {events.map((event, index) => {
// //               const availability = ((event.totalTickets - event.soldTickets) / event.totalTickets * 100).toFixed(0)
// //               return (
// //                 <motion.div
// //                   key={event.id}
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: index * 0.1 }}
// //                   className="card overflow-hidden"
// //                 >
// //                   <div className="bg-gradient-to-r from-primary-600 to-accent-500 p-6">
// //                     <div className="text-4xl font-display text-white mb-1">${event.prize.toLocaleString()}</div>
// //                     <div className="text-white/90 text-lg">{event.name}</div>
// //                   </div>
// //                   <div className="p-6">
// //                     <p className="text-white/60 mb-4 text-sm">{event.description}</p>
// //                     <div className="grid grid-cols-3 gap-3 mb-4">
// //                       <div className="text-center">
// //                         <div className="text-lg font-bold text-accent-400">${event.ticketPrice}</div>
// //                         <div className="text-xs text-white/50 uppercase">Per Ticket</div>
// //                       </div>
// //                       <div className="text-center">
// //                         <div className="text-lg font-bold text-primary-400">{event.soldTickets}/{event.totalTickets}</div>
// //                         <div className="text-xs text-white/50 uppercase">Sold</div>
// //                       </div>
// //                       <div className="text-center">
// //                         <div className="text-lg font-bold text-white">{availability}%</div>
// //                         <div className="text-xs text-white/50 uppercase">Available</div>
// //                       </div>
// //                     </div>
// //                     {/* Countdown */}
// //                     <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8 }} className="p-3 mb-4">
// //                       <div className="flex items-center justify-between">
// //                         <div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wider">
// //                           <Clock className="w-3 h-3" />
// //                           <span>Draw In</span>
// //                         </div>
// //                         <CountdownDisplay drawDate={event.drawDate} />
// //                       </div>
// //                     </div>
// //                     <div className="flex items-center gap-1.5 text-white/40 text-xs mb-4">
// //                       <Calendar className="w-3 h-3" />
// //                       <span>{new Date(event.drawDate).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })} · {new Date(event.drawDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
// //                     </div>
// //                     <button onClick={() => setSelectedEvent(event)} className="btn-primary w-full">
// //                       BUY TICKETS
// //                     </button>
// //                   </div>
// //                 </motion.div>
// //               )
// //             })}
// //           </div>
// //         </div>
// //         {/* ── Leaderboard ─────────────────────────────────────── */}
// //         <Leaderboard tickets={tickets} currentUserId={user.id} />
// //         {/* Ticket History Preview */}
// //         <div>
// //           <div className="flex items-center justify-between mb-6">
// //             <h2 className="text-3xl font-display text-white">YOUR TICKET HISTORY</h2>
// //             {tickets.length > 0 && (
// //               <button
// //                 onClick={() => setShowTickets(true)}
// //                 className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
// //               >
// //                 View All <ChevronRight className="w-4 h-4" />
// //               </button>
// //             )}
// //           </div>
// //           {tickets.length === 0 ? (
// //             <div className="card p-12 text-center">
// //               <Ticket className="w-16 h-16 text-white/20 mx-auto mb-4" />
// //               <p className="text-white/60 text-lg">No tickets purchased yet</p>
// //               <p className="text-white/40">Start playing today and win big!</p>
// //             </div>
// //           ) : (
// //             <div className="space-y-3">
// //               {tickets.slice(0, 3).map((ticket) => (
// //                 <motion.div
// //                   key={ticket.id}
// //                   initial={{ opacity: 0, x: -10 }}
// //                   animate={{ opacity: 1, x: 0 }}
// //                   className="card p-4 flex items-center justify-between cursor-pointer hover:border-white/20 transition-colors"
// //                   onClick={() => setShowTickets(true)}
// //                   style={{ border: '1px solid rgba(255,255,255,0.06)' }}
// //                 >
// //                   <div className="flex items-center gap-3">
// //                     <div style={{ background: 'rgba(124,58,237,0.2)', borderRadius: 8, padding: 8 }}>
// //                       <Ticket className="w-4 h-4 text-purple-400" />
// //                     </div>
// //                     <div>
// //                       <p className="text-white font-semibold text-sm">{ticket.eventName}</p>
// //                       <p className="text-white/40 text-xs">{ticket.quantity} ticket{ticket.quantity > 1 ? 's' : ''} · {new Date(ticket.purchaseDate).toLocaleDateString()}</p>
// //                     </div>
// //                   </div>
// //                   <div className="flex items-center gap-3">
// //                     <span className="text-emerald-400 font-bold">${ticket.totalCost}</span>
// //                     <ChevronRight className="w-4 h-4 text-white/30" />
// //                   </div>
// //                 </motion.div>
// //               ))}
// //               {tickets.length > 3 && (
// //                 <button onClick={() => setShowTickets(true)} className="w-full py-3 text-white/40 text-sm hover:text-white/60 transition-colors">
// //                   +{tickets.length - 3} more tickets
// //                 </button>
// //               )}
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //       {/* Purchase Modal */}
// //       <AnimatePresence>
// //         {selectedEvent && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
// //           >
// //             <motion.div
// //               initial={{ opacity: 0, scale: 0.9 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               exit={{ opacity: 0, scale: 0.9 }}
// //               className="glass max-w-md w-full p-8 border-2 border-white/10 rounded-xl"
// //             >
// //               <div className="flex justify-between items-start mb-6">
// //                 <h2 className="text-3xl font-display text-white">PURCHASE TICKETS</h2>
// //                 <button onClick={() => setSelectedEvent(null)} className="text-white/40 hover:text-white transition-colors">
// //                   <X className="w-5 h-5" />
// //                 </button>
// //               </div>
// //               <div className="bg-dark-900 p-4 mb-6 border-l-4 border-primary-500 rounded-r-lg">
// //                 <h3 className="text-xl font-display text-white mb-1">{selectedEvent.name}</h3>
// //                 <div className="text-white/60 text-sm">${selectedEvent.prize.toLocaleString()} Prize</div>
// //                 <div className="text-accent-400 font-bold mt-1">${selectedEvent.ticketPrice} per ticket</div>
// //               </div>
// //               {/* Countdown in modal */}
// //               <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8 }} className="p-3 mb-6 flex items-center justify-between">
// //                 <div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wider">
// //                   <Clock className="w-3 h-3" /> Draw In
// //                 </div>
// //                 <CountdownDisplay drawDate={selectedEvent.drawDate} />
// //               </div>
// //               <div className="mb-6">
// //                 <label className="block text-white/70 mb-3 text-sm uppercase tracking-wider font-semibold">Number of Tickets</label>
// //                 <div className="flex items-center space-x-4">
// //                   <button onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
// //                     className="w-12 h-12 bg-dark-900 border-2 border-dark-800 text-white font-bold text-xl hover:border-primary-500 transition-colors rounded-lg">-</button>
// //                   <div className="text-4xl font-display text-white min-w-[80px] text-center">{ticketQuantity}</div>
// //                   <button onClick={() => setTicketQuantity(ticketQuantity + 1)}
// //                     className="w-12 h-12 bg-dark-900 border-2 border-dark-800 text-white font-bold text-xl hover:border-primary-500 transition-colors rounded-lg">+</button>
// //                 </div>
// //               </div>
// //               <div className="bg-dark-900 p-6 mb-6 text-center border-2 border-primary-500/30 rounded-lg">
// //                 <div className="text-sm text-white/60 uppercase tracking-wider mb-2">Total Amount</div>
// //                 <div className="text-5xl font-display gradient-text">${(selectedEvent.ticketPrice * ticketQuantity).toFixed(2)}</div>
// //                 <div className="text-white/40 text-sm mt-1">Your balance: ${user.balance.toFixed(2)}</div>
// //               </div>
// //               <div className="flex space-x-4">
// //                 <button onClick={() => setSelectedEvent(null)} className="btn-secondary flex-1">Cancel</button>
// //                 <button onClick={handlePurchase} className="btn-primary flex-1">Confirm Purchase</button>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //       {/* Ticket Detail Modal */}
// //       <AnimatePresence>
// //         {showTickets && (
// //           <TicketModal tickets={tickets} events={events} onClose={() => setShowTickets(false)} />
// //         )}
// //       </AnimatePresence>
// //       {/* Top Up Modal */}
// //       <AnimatePresence>
// //         {showTopUp && (
// //           <TopUpModal onClose={() => setShowTopUp(false)} onSubmit={handleTopUpSubmit} />
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   )
// // }
// 'use client'
// import { useState, useEffect, useCallback, useRef } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Trophy, Ticket, Sparkles, LogOut, Calendar, DollarSign, X, Gift, Clock, ChevronRight, ChevronDown, Hash, CreditCard, CheckCircle, AlertCircle, Copy, Star } from 'lucide-react'
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
// function CountdownDisplay({ drawDate }) {
//   const t = useCountdown(drawDate)
//   if (t.expired) return <span className="text-red-400 font-bold text-xs uppercase tracking-wider">Draw Closed</span>
//   return (
//     <div className="flex items-center gap-1 text-xs font-mono">
//       {[['d', t.days], ['h', t.hours], ['m', t.minutes], ['s', t.seconds]].map(([label, val]) => (
//         <span key={label} className="flex items-center gap-0.5">
//           <span className="bg-white/10 px-1.5 py-0.5 rounded text-white font-bold tabular-nums">{String(val).padStart(2, '0')}</span>
//           <span className="text-white/40">{label}</span>
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
//     const handler = (e) => {
//       if (ref.current && !ref.current.contains(e.target)) setOpen(false)
//     }
//     document.addEventListener('mousedown', handler)
//     return () => document.removeEventListener('mousedown', handler)
//   }, [])
//   const initials = user.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
//   return (
//     <div className="relative sm:hidden" ref={ref}>
//       {/* Avatar trigger button */}
//       <button
//         onClick={() => setOpen(v => !v)}
//         className="flex items-center gap-2 pl-1 pr-2.5 py-1 rounded-full transition-all active:scale-95"
//         style={{
//           background: open ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.06)',
//           border: '1px solid rgba(255,255,255,0.12)',
//         }}
//       >
//         {/* Initials avatar */}
//         <div
//           className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
//           style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}
//         >
//           {initials}
//         </div>
//         {/* Balance preview */}
//         <span className="text-accent-400 font-bold text-sm">${user.balance.toFixed(2)}</span>
//         <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
//           <ChevronDown className="w-3.5 h-3.5 text-white/40" />
//         </motion.div>
//       </button>
//       {/* Dropdown panel */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95, y: -6 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.95, y: -6 }}
//             transition={{ duration: 0.15 }}
//             className="absolute right-0 mt-2 w-64 rounded-2xl overflow-hidden shadow-2xl"
//             style={{
//               background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)',
//               border: '1px solid rgba(255,255,255,0.1)',
//               zIndex: 999,
//             }}
//           >
//             {/* User info row */}
//             <div className="p-4 border-b border-white/10">
//               <div className="flex items-center gap-3">
//                 <div
//                   className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
//                   style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}
//                 >
//                   {initials}
//                 </div>
//                 <div className="min-w-0">
//                   <p className="text-white font-semibold text-sm truncate">{user.name}</p>
//                   <p className="text-white/40 text-xs">{user.email || 'Player'}</p>
//                 </div>
//               </div>
//             </div>
//             {/* Balance card */}
//             <div
//               className="mx-3 mt-3 p-3 rounded-xl"
//               style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)' }}
//             >
//               <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Available Balance</p>
//               <p className="text-accent-400 font-bold text-2xl">${user.balance.toFixed(2)}</p>
//             </div>
//             {/* Action buttons */}
//             <div className="p-3 space-y-1.5">
//               <button
//                 onClick={() => { onTopUp(); setOpen(false) }}
//                 className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-white transition-all active:scale-95"
//                 style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)' }}
//               >
//                 <Gift className="w-4 h-4 shrink-0" />
//                 Top Up with Gift Card
//               </button>
//               <button
//                 onClick={() => { onViewTickets(); setOpen(false) }}
//                 className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
//                 style={{ color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.05)' }}
//               >
//                 <Ticket className="w-4 h-4 shrink-0 text-purple-400" />
//                 My Tickets
//               </button>
//               <button
//                 onClick={() => { onLogout(); setOpen(false) }}
//                 className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
//                 style={{ color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.03)' }}
//               >
//                 <LogOut className="w-4 h-4 shrink-0" />
//                 Logout
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
//       className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
//         onClick={e => e.stopPropagation()}
//         className="w-full max-w-2xl max-h-[85vh] flex flex-col"
//         style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16 }}
//       >
//         <div className="flex items-center justify-between p-6 border-b border-white/10">
//           <div className="flex items-center gap-3">
//             <div style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)', borderRadius: 8, padding: 8 }}>
//               <Ticket className="w-5 h-5 text-white" />
//             </div>
//             <div>
//               <h2 className="text-xl font-bold text-white">Your Tickets</h2>
//               <p className="text-white/50 text-sm">{tickets.length} purchase{tickets.length !== 1 ? 's' : ''} · {tickets.reduce((s, t) => s + t.quantity, 0)} total tickets</p>
//             </div>
//           </div>
//           <button onClick={onClose} className="text-white/40 hover:text-white transition-colors p-1"><X className="w-5 h-5" /></button>
//         </div>
//         <div className="flex-1 overflow-y-auto p-6 space-y-4">
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
//                 <button onClick={() => setSelected(isOpen ? null : ticket.id)} className="w-full flex items-center justify-between p-4 text-left">
//                   <div className="flex items-center gap-3">
//                     <div style={{ background: 'rgba(124,58,237,0.2)', borderRadius: 8, padding: 6 }}>
//                       <Star className="w-4 h-4 text-purple-400" />
//                     </div>
//                     <div>
//                       <p className="text-white font-semibold text-sm">{ticket.eventName}</p>
//                       <p className="text-white/40 text-xs">{new Date(ticket.purchaseDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-4">
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
//                       <div className="px-4 pb-4 border-t border-white/5 pt-4 space-y-4">
//                         {event && (
//                           <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: 12 }} className="grid grid-cols-3 gap-3 text-center">
//                             <div>
//                               <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Prize Pool</p>
//                               <p className="text-yellow-400 font-bold">${event.prize.toLocaleString()}</p>
//                             </div>
//                             <div>
//                               <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Draw Date</p>
//                               <p className="text-white text-sm">{new Date(event.drawDate).toLocaleDateString()}</p>
//                             </div>
//                             <div>
//                               <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Countdown</p>
//                               <CountdownDisplay drawDate={event.drawDate} />
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
//                                 className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-sm transition-all"
//                                 style={{ background: copied === num ? 'rgba(16,185,129,0.2)' : 'rgba(124,58,237,0.15)', border: `1px solid ${copied === num ? 'rgba(16,185,129,0.4)' : 'rgba(124,58,237,0.3)'}`, color: copied === num ? '#10b981' : '#a78bfa' }}>
//                                 {copied === num ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3 opacity-50" />}
//                                 {num}
//                               </button>
//                             ))}
//                           </div>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <span style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 20, padding: '2px 10px' }} className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">Active Entry</span>
//                           <span className="text-white/30 text-xs">Ticket #{ticket.id.slice(-6)}</span>
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
//   const videoRef = useRef(null)
//   const streamRef = useRef(null)
//   const cardDenominations = [
//     { value: 10, color: ['#1a1a2e', '#16213e'], accent: '#60a5fa', label: 'Starter' },
//     { value: 25, color: ['#1a2e1a', '#16321e'], accent: '#4ade80', label: 'Popular' },
//     { value: 50, color: ['#2e1a1a', '#321616'], accent: '#f97316', label: 'Classic' },
//     { value: 100, color: ['#2a1a2e', '#24163e'], accent: '#c084fc', label: 'Premium' },
//     { value: 250, color: ['#2e2a1a', '#3e3216'], accent: '#fbbf24', label: 'Gold' },
//     { value: 500, color: ['#1a2a2e', '#16363e'], accent: '#22d3ee', label: 'Platinum' },
//   ]
//   const stopStream = () => {
//     if (streamRef.current) { streamRef.current.getTracks().forEach(t => t.stop()); streamRef.current = null }
//   }
//   useEffect(() => () => stopStream(), [])
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
//       className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto" onClick={onClose}>
//       <div className="min-h-full flex items-center justify-center p-4 py-8" onClick={e => e.stopPropagation()}>
//         <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
//           className="w-full max-w-md"
//           style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16 }}>
//           {step === 'pending' ? (
//             <div className="p-8 text-center">
//               <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}
//                 className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
//                 style={{ background: 'rgba(234,179,8,0.15)', border: '2px solid rgba(234,179,8,0.4)' }}>
//                 <Clock className="w-8 h-8 text-yellow-400" />
//               </motion.div>
//               <h3 className="text-xl font-bold text-white mb-2">Request Submitted!</h3>
//               <p className="text-white/50 text-sm mb-6">Your gift card has been sent for admin verification. Funds will be added once approved.</p>
//               <button onClick={onClose} className="w-full py-3 rounded-lg font-semibold text-white"
//                 style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>Done</button>
//             </div>
//           ) : (
//             <>
//               <div className="flex items-center justify-between p-6 border-b border-white/10">
//                 <div className="flex items-center gap-3">
//                   <div style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', borderRadius: 8, padding: 8 }}>
//                     <Gift className="w-5 h-5 text-white" />
//                   </div>
//                   <div>
//                     <h2 className="text-xl font-bold text-white">Top Up Balance</h2>
//                     <p className="text-white/50 text-sm">Redeem a gift card</p>
//                   </div>
//                 </div>
//                 <button onClick={onClose} className="text-white/40 hover:text-white"><X className="w-5 h-5" /></button>
//               </div>
//               <div className="p-6 space-y-5">
//                 <div>
//                   <label className="block text-white/60 text-xs uppercase tracking-wider mb-3 font-semibold">How would you like to redeem?</label>
//                   <div className="grid grid-cols-2 gap-3">
//                     {[
//                       { key: 'physical', label: 'Physical Card', sub: 'Upload or snap a photo', color: '#f97316', bg: 'rgba(249,115,22,0.1)', border: 'rgba(249,115,22,0.5)' },
//                       { key: 'ecode', label: 'E-Code', sub: 'Enter digital code', color: '#818cf8', bg: 'rgba(99,102,241,0.1)', border: 'rgba(99,102,241,0.5)' },
//                     ].map(({ key, label, sub, color, bg, border }) => (
//                       <button key={key} onClick={() => setCardType(key)}
//                         className="relative rounded-xl p-4 text-left transition-all"
//                         style={{ background: cardType === key ? bg : 'rgba(255,255,255,0.03)', border: `2px solid ${cardType === key ? border : 'rgba(255,255,255,0.08)'}` }}>
//                         {cardType === key && (
//                           <div className="absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: color }}>
//                             <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
//                           </div>
//                         )}
//                         <p className="text-white text-sm font-bold mt-4">{label}</p>
//                         <p className="text-white/40 text-xs mt-0.5">{sub}</p>
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//                 <AnimatePresence mode="wait">
//                   {cardType && (
//                     <motion.div key={cardType} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-5">
//                       {cardType === 'ecode' && (
//                         <div>
//                           <label className="block text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">E-Code</label>
//                           <div className="relative">
//                             <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
//                             <input type="text" value={code} onChange={e => setCode(e.target.value.toUpperCase())}
//                               placeholder="XXXX-XXXX-XXXX-XXXX" autoFocus
//                               className="w-full pl-10 pr-4 py-3 font-mono text-sm rounded-lg text-white placeholder-white/20 outline-none focus:ring-2 focus:ring-indigo-500/50"
//                               style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }} />
//                           </div>
//                         </div>
//                       )}
//                       <div>
//                         <label className="block text-white/60 text-xs uppercase tracking-wider mb-3 font-semibold">Select Card Value</label>
//                         <div className="grid grid-cols-3 gap-2">
//                           {cardDenominations.map(({ value, color, accent, label }) => {
//                             const sel = amount === String(value)
//                             return (
//                               <button key={value} onClick={() => setAmount(String(value))}
//                                 className="relative rounded-xl overflow-hidden transition-all"
//                                 style={{ background: `linear-gradient(135deg, ${color[0]}, ${color[1]})`, border: `2px solid ${sel ? accent : 'rgba(255,255,255,0.07)'}`, boxShadow: sel ? `0 0 16px ${accent}44` : 'none', transform: sel ? 'scale(1.04)' : 'scale(1)', aspectRatio: '1.586 / 1' }}>
//                                 <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)' }} />
//                                 <div className="absolute top-2 left-2.5 w-4 h-3 rounded-sm" style={{ background: `linear-gradient(135deg, ${accent}88, ${accent}44)`, border: `1px solid ${accent}66` }} />
//                                 {sel && (
//                                   <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: accent }}>
//                                     <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
//                                   </div>
//                                 )}
//                                 <div className="absolute bottom-2 inset-x-0 px-2.5">
//                                   <p className="text-white/40 text-[9px] uppercase tracking-wider leading-none mb-0.5">{label}</p>
//                                   <p className="font-bold leading-none" style={{ color: accent, fontSize: 15 }}>${value}</p>
//                                 </div>
//                               </button>
//                             )
//                           })}
//                         </div>
//                       </div>
//                       {cardType === 'physical' && (
//                         <div>
//                           <label className="block text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">
//                             Card Photo <span className="text-red-400/70 normal-case font-normal">· required</span>
//                           </label>
//                           {cardImage ? (
//                             <div className="relative rounded-xl overflow-hidden" style={{ border: '1px solid rgba(16,185,129,0.3)' }}>
//                               <img src={cardImage.preview} alt="Gift card" className="w-full h-40 object-cover" />
//                               <button onClick={() => setCardImage(null)} className="absolute top-2 right-2 px-2 py-1 rounded-lg text-xs text-white" style={{ background: 'rgba(0,0,0,0.6)' }}>Remove</button>
//                             </div>
//                           ) : (
//                             <div
//                               onDragOver={e => { e.preventDefault(); setDragOver(true) }}
//                               onDragLeave={() => setDragOver(false)}
//                               onDrop={e => { e.preventDefault(); setDragOver(false); processFile(e.dataTransfer.files[0]) }}
//                               onClick={() => document.getElementById('gc-file-input').click()}
//                               className="rounded-xl cursor-pointer flex flex-col items-center justify-center gap-2 py-8"
//                               style={{ border: `2px dashed ${dragOver ? 'rgba(124,58,237,0.7)' : 'rgba(255,255,255,0.1)'}`, background: dragOver ? 'rgba(124,58,237,0.08)' : 'rgba(255,255,255,0.03)' }}>
//                               <p className="text-white/60 text-sm font-semibold">Click to upload or drag & drop</p>
//                               <p className="text-white/30 text-xs">JPG, PNG, WEBP up to 10MB</p>
//                               <input id="gc-file-input" type="file" accept="image/*" className="hidden" onChange={e => processFile(e.target.files[0])} />
//                             </div>
//                           )}
//                         </div>
//                       )}
//                       <div style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)', borderRadius: 10 }} className="p-3 flex gap-2 items-start">
//                         <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
//                         <p className="text-yellow-400/80 text-xs leading-relaxed">
//                           {cardType === 'ecode' ? 'Enter your code exactly as shown. Admin will verify and credit your balance within minutes.' : 'Upload a clear photo. Admin will verify and add funds shortly.'}
//                         </p>
//                       </div>
//                       <button onClick={handleSubmit} disabled={loading}
//                         className="w-full py-3 rounded-lg font-bold text-white text-sm uppercase tracking-wider disabled:opacity-50"
//                         style={{ background: cardType === 'ecode' ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'linear-gradient(135deg, #f97316, #ef4444)' }}>
//                         {loading ? 'Submitting...' : 'Submit for Verification'}
//                       </button>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </>
//           )}
//         </motion.div>
//       </div>
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
//       <div className="flex items-center justify-between mb-6">
//         <div className="flex items-center gap-3">
//           <h2 className="text-3xl font-display text-white">LEADERBOARD</h2>
//           <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
//             <Trophy className="w-6 h-6 text-yellow-400" />
//           </motion.div>
//         </div>
//         <div className="flex rounded-lg overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
//           {[['tickets', 'By Tickets'], ['spent', 'By Spent']].map(([val, label]) => (
//             <button key={val} onClick={() => setFilter(val)} className="px-3 py-1.5 text-xs font-semibold transition-all"
//               style={{ background: filter === val ? 'rgba(124,58,237,0.4)' : 'transparent', color: filter === val ? '#a78bfa' : 'rgba(255,255,255,0.4)' }}>
//               {label}
//             </button>
//           ))}
//         </div>
//       </div>
//       <div className="grid grid-cols-3 gap-3 mb-6 items-end">
//         {[top3[1], top3[0], top3[2]].map((player, podiumIdx) => {
//           if (!player) return <div key={podiumIdx} />
//           const actualRank = podiumIdx === 1 ? 1 : podiumIdx === 0 ? 2 : 3
//           const rs = RANK_STYLES[actualRank - 1]
//           const heights = ['h-24', 'h-32', 'h-20']
//           return (
//             <motion.div key={player.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: podiumIdx * 0.1 }} className="flex flex-col items-center">
//               <div className="relative mb-2">
//                 <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: player.color, boxShadow: `0 0 20px ${player.color}55` }}>{player.avatar}</div>
//                 <span className="absolute -bottom-1 -right-1 text-base leading-none">{rs.badge}</span>
//               </div>
//               <p className="text-white text-xs font-bold mb-1 text-center truncate w-full px-1">{player.name}</p>
//               <p className="text-white/40 text-[10px] mb-2">{filter === 'tickets' ? `${player.tickets} tickets` : `$${player.spent}`}</p>
//               <div className={`w-full ${heights[podiumIdx]} rounded-t-lg flex items-center justify-center`}
//                 style={{ background: rs.bg, border: `1px solid ${rs.border}`, boxShadow: `0 0 20px ${rs.glow}` }}>
//                 <span className="text-white/60 text-lg font-display">#{actualRank}</span>
//               </div>
//             </motion.div>
//           )
//         })}
//       </div>
//       <div className="space-y-2">
//         {visible.map((player, idx) => {
//           const isMe = player.isMe
//           const barWidth = ((filter === 'tickets' ? player.tickets : player.spent) / maxVal * 100).toFixed(1)
//           const rs = player.rank <= 3 ? RANK_STYLES[player.rank - 1] : null
//           return (
//             <motion.div key={player.id} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.04 }}
//               className="relative overflow-hidden rounded-xl p-3 flex items-center gap-3"
//               style={{ background: isMe ? 'rgba(124,58,237,0.12)' : 'rgba(255,255,255,0.03)', border: isMe ? '1px solid rgba(124,58,237,0.35)' : '1px solid rgba(255,255,255,0.06)' }}>
//               <div className="absolute inset-0 pointer-events-none" style={{ width: `${barWidth}%`, background: isMe ? 'rgba(124,58,237,0.06)' : 'rgba(255,255,255,0.02)', borderRadius: 'inherit' }} />
//               <div className="w-7 shrink-0 text-center">
//                 {rs ? <span className="text-base">{rs.badge}</span> : <span className="text-white/30 text-sm font-bold">#{player.rank}</span>}
//               </div>
//               <div className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center text-xs font-bold text-white" style={{ background: player.color }}>{player.avatar}</div>
//               <div className="flex-1 min-w-0">
//                 <div className="flex items-center gap-2">
//                   <p className="text-white text-sm font-semibold truncate">{player.name}</p>
//                   {isMe && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full shrink-0" style={{ background: 'rgba(124,58,237,0.3)', color: '#a78bfa', border: '1px solid rgba(124,58,237,0.4)' }}>YOU</span>}
//                 </div>
//                 <p className="text-white/30 text-[10px]">{player.tickets} tickets · ${player.spent} spent</p>
//               </div>
//               <div className="text-right shrink-0">
//                 <p className="font-bold text-sm" style={{ color: isMe ? '#a78bfa' : player.rank <= 3 ? '#fbbf24' : 'rgba(255,255,255,0.6)' }}>
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
//     toast.success(`Successfully purchased ${ticketQuantity} ticket(s)!`)
//     setSelectedEvent(null); setTicketQuantity(1)
//   }
//   const handleLogout = () => { localStorage.removeItem('token'); localStorage.removeItem('user'); router.push('/') }
//   if (loading || !user) return (
//     <div className="min-h-screen bg-dark-950 flex items-center justify-center">
//       <div className="text-white text-2xl font-display">Loading...</div>
//     </div>
//   )
//   const statCards = [
//     { label: 'Total Tickets', value: stats.totalTickets, icon: Ticket, color: 'from-blue-500 to-cyan-500', clickable: true, onClick: () => setShowTickets(true), hint: 'Click to view' },
//     { label: 'Active Entries', value: stats.activeEntries, icon: Sparkles, color: 'from-purple-500 to-pink-500' },
//     { label: 'Total Spent', value: `$${stats.totalSpent}`, icon: DollarSign, color: 'from-orange-500 to-red-500' },
//     { label: 'Total Winnings', value: `$${stats.totalWinnings}`, icon: Trophy, color: 'from-green-500 to-emerald-500' },
//   ]
//   return (
//     <div className="min-h-screen bg-dark-950">
//       {/* ─── HEADER ─────────────────────────────────────────────────────────── */}
//       <header className="glass border-b border-white/10 sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
//           <div className="flex justify-between items-center">
//             {/* Logo */}
//             <div className="flex items-center gap-2 shrink-0">
//               <Trophy className="w-7 h-7 text-primary-500" />
//               <span className="text-xl sm:text-2xl font-display gradient-text">WINVAULT</span>
//             </div>
//             {/* ── Desktop only ── */}
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
//             {/* ── Mobile only: profile avatar dropdown ── */}
//             <MobileProfileMenu
//               user={user}
//               onTopUp={() => setShowTopUp(true)}
//               onLogout={handleLogout}
//               onViewTickets={() => setShowTickets(true)}
//             />
//           </div>
//         </div>
//       </header>
//       {/* ─────────────────────────────────────────────────────────────────────── */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Welcome Banner */}
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
//           className="bg-gradient-to-r from-primary-600 to-accent-500 p-8 mb-8 relative overflow-hidden rounded-xl">
//           <div className="absolute inset-0 bg-mesh opacity-20" />
//           <div className="relative z-10">
//             <h1 className="text-4xl font-display text-white mb-2">WELCOME BACK, {user.name.toUpperCase()}!</h1>
//             <p className="text-white/90 text-lg">Your next big win is just a ticket away</p>
//           </div>
//         </motion.div>
//         {/* Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//           {statCards.map((stat, index) => (
//             <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }}
//               onClick={stat.onClick}
//               className={`card p-6 relative overflow-hidden ${stat.clickable ? 'cursor-pointer group' : ''}`}
//               whileHover={stat.clickable ? { scale: 1.02, y: -2 } : {}}>
//               <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 rounded-lg`}>
//                 <stat.icon className="w-6 h-6 text-white" />
//               </div>
//               <div className="text-3xl font-display gradient-text mb-1">{stat.value}</div>
//               <div className="text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
//               {stat.clickable && (
//                 <div className="flex items-center gap-1 mt-2 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <span>{stat.hint}</span><ChevronRight className="w-3 h-3" />
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//         {/* Events */}
//         <div className="mb-8">
//           <h2 className="text-3xl font-display text-white mb-6">ACTIVE LOTTERY EVENTS</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {events.map((event, index) => {
//               const availability = ((event.totalTickets - event.soldTickets) / event.totalTickets * 100).toFixed(0)
//               return (
//                 <motion.div key={event.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="card overflow-hidden">
//                   <div className="bg-gradient-to-r from-primary-600 to-accent-500 p-6">
//                     <div className="text-4xl font-display text-white mb-1">${event.prize.toLocaleString()}</div>
//                     <div className="text-white/90 text-lg">{event.name}</div>
//                   </div>
//                   <div className="p-6">
//                     <p className="text-white/60 mb-4 text-sm">{event.description}</p>
//                     <div className="grid grid-cols-3 gap-3 mb-4">
//                       <div className="text-center"><div className="text-lg font-bold text-accent-400">${event.ticketPrice}</div><div className="text-xs text-white/50 uppercase">Per Ticket</div></div>
//                       <div className="text-center"><div className="text-lg font-bold text-primary-400">{event.soldTickets}/{event.totalTickets}</div><div className="text-xs text-white/50 uppercase">Sold</div></div>
//                       <div className="text-center"><div className="text-lg font-bold text-white">{availability}%</div><div className="text-xs text-white/50 uppercase">Available</div></div>
//                     </div>
//                     <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8 }} className="p-3 mb-4">
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wider"><Clock className="w-3 h-3" /><span>Draw In</span></div>
//                         <CountdownDisplay drawDate={event.drawDate} />
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-1.5 text-white/40 text-xs mb-4">
//                       <Calendar className="w-3 h-3" />
//                       <span>{new Date(event.drawDate).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</span>
//                     </div>
//                     <button onClick={() => setSelectedEvent(event)} className="btn-primary w-full">BUY TICKETS</button>
//                   </div>
//                 </motion.div>
//               )
//             })}
//           </div>
//         </div>
//         <Leaderboard tickets={tickets} currentUserId={user.id} />
//         {/* Ticket History */}
//         <div>
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-3xl font-display text-white">YOUR TICKET HISTORY</h2>
//             {tickets.length > 0 && (
//               <button onClick={() => setShowTickets(true)} className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300">
//                 View All <ChevronRight className="w-4 h-4" />
//               </button>
//             )}
//           </div>
//           {tickets.length === 0 ? (
//             <div className="card p-12 text-center">
//               <Ticket className="w-16 h-16 text-white/20 mx-auto mb-4" />
//               <p className="text-white/60 text-lg">No tickets purchased yet</p>
//               <p className="text-white/40">Start playing today and win big!</p>
//             </div>
//           ) : (
//             <div className="space-y-3">
//               {tickets.slice(0, 3).map((ticket) => (
//                 <motion.div key={ticket.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
//                   className="card p-4 flex items-center justify-between cursor-pointer hover:border-white/20 transition-colors"
//                   onClick={() => setShowTickets(true)} style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
//                   <div className="flex items-center gap-3">
//                     <div style={{ background: 'rgba(124,58,237,0.2)', borderRadius: 8, padding: 8 }}><Ticket className="w-4 h-4 text-purple-400" /></div>
//                     <div>
//                       <p className="text-white font-semibold text-sm">{ticket.eventName}</p>
//                       <p className="text-white/40 text-xs">{ticket.quantity} ticket{ticket.quantity > 1 ? 's' : ''} · {new Date(ticket.purchaseDate).toLocaleDateString()}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <span className="text-emerald-400 font-bold">${ticket.totalCost}</span>
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
//       </div>
//       {/* Purchase Modal */}
//       <AnimatePresence>
//         {selectedEvent && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//             <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
//               className="glass max-w-md w-full p-8 border-2 border-white/10 rounded-xl">
//               <div className="flex justify-between items-start mb-6">
//                 <h2 className="text-3xl font-display text-white">PURCHASE TICKETS</h2>
//                 <button onClick={() => setSelectedEvent(null)} className="text-white/40 hover:text-white"><X className="w-5 h-5" /></button>
//               </div>
//               <div className="bg-dark-900 p-4 mb-6 border-l-4 border-primary-500 rounded-r-lg">
//                 <h3 className="text-xl font-display text-white mb-1">{selectedEvent.name}</h3>
//                 <div className="text-white/60 text-sm">${selectedEvent.prize.toLocaleString()} Prize</div>
//                 <div className="text-accent-400 font-bold mt-1">${selectedEvent.ticketPrice} per ticket</div>
//               </div>
//               <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8 }} className="p-3 mb-6 flex items-center justify-between">
//                 <div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wider"><Clock className="w-3 h-3" /> Draw In</div>
//                 <CountdownDisplay drawDate={selectedEvent.drawDate} />
//               </div>
//               <div className="mb-6">
//                 <label className="block text-white/70 mb-3 text-sm uppercase tracking-wider font-semibold">Number of Tickets</label>
//                 <div className="flex items-center space-x-4">
//                   <button onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))} className="w-12 h-12 bg-dark-900 border-2 border-dark-800 text-white font-bold text-xl hover:border-primary-500 transition-colors rounded-lg">-</button>
//                   <div className="text-4xl font-display text-white min-w-[80px] text-center">{ticketQuantity}</div>
//                   <button onClick={() => setTicketQuantity(ticketQuantity + 1)} className="w-12 h-12 bg-dark-900 border-2 border-dark-800 text-white font-bold text-xl hover:border-primary-500 transition-colors rounded-lg">+</button>
//                 </div>
//               </div>
//               <div className="bg-dark-900 p-6 mb-6 text-center border-2 border-primary-500/30 rounded-lg">
//                 <div className="text-sm text-white/60 uppercase tracking-wider mb-2">Total Amount</div>
//                 <div className="text-5xl font-display gradient-text">${(selectedEvent.ticketPrice * ticketQuantity).toFixed(2)}</div>
//                 <div className="text-white/40 text-sm mt-1">Your balance: ${user.balance.toFixed(2)}</div>
//               </div>
//               <div className="flex space-x-4">
//                 <button onClick={() => setSelectedEvent(null)} className="btn-secondary flex-1">Cancel</button>
//                 <button onClick={handlePurchase} className="btn-primary flex-1">Confirm Purchase</button>
//               </div>
//             </motion.div>
//           </motion.div>
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