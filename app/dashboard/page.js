// // // // // 'use client'

// // // // // import { useState, useEffect } from 'react'
// // // // // import { motion } from 'framer-motion'
// // // // // import { Trophy, Ticket, TrendingUp, Sparkles, LogOut, User, Calendar, DollarSign } from 'lucide-react'
// // // // // import { useRouter } from 'next/navigation'
// // // // // import toast from 'react-hot-toast'

// // // // // export default function DashboardPage() {
// // // // //   const router = useRouter()
// // // // //   const [user, setUser] = useState(null)
// // // // //   const [events, setEvents] = useState([])
// // // // //   const [tickets, setTickets] = useState([])
// // // // //   const [stats, setStats] = useState({
// // // // //     totalTickets: 0,
// // // // //     activeEntries: 0,
// // // // //     totalSpent: 0,
// // // // //     totalWinnings: 0,
// // // // //   })
// // // // //   const [selectedEvent, setSelectedEvent] = useState(null)
// // // // //   const [ticketQuantity, setTicketQuantity] = useState(1)
// // // // //   const [loading, setLoading] = useState(true)

// // // // //   useEffect(() => {
// // // // //     const userData = localStorage.getItem('user')
// // // // //     if (!userData) {
// // // // //       router.push('/auth/login')
// // // // //       return
// // // // //     }
    
// // // // //     const parsedUser = JSON.parse(userData)
// // // // //     setUser(parsedUser)
    
// // // // //     // Fetch events and user data
// // // // //     fetchEvents()
// // // // //     fetchTickets(parsedUser.id)
// // // // //     setLoading(false)
// // // // //   }, [])

// // // // //   const fetchEvents = async () => {
// // // // //     // Demo events - in production, fetch from API
// // // // //     const demoEvents = [
// // // // //       {
// // // // //         id: '1',
// // // // //         name: 'Mega Jackpot 2026',
// // // // //         description: 'Win life-changing prizes in our biggest draw ever',
// // // // //         prize: 100000,
// // // // //         ticketPrice: 50,
// // // // //         totalTickets: 1000,
// // // // //         soldTickets: 342,
// // // // //         drawDate: new Date('2026-03-15T20:00:00'),
// // // // //         status: 'active',
// // // // //       },
// // // // //       {
// // // // //         id: '2',
// // // // //         name: 'Weekly Winners Draw',
// // // // //         description: 'Your weekly chance to win big',
// // // // //         prize: 5000,
// // // // //         ticketPrice: 10,
// // // // //         totalTickets: 500,
// // // // //         soldTickets: 189,
// // // // //         drawDate: new Date('2026-02-14T18:00:00'),
// // // // //         status: 'active',
// // // // //       },
// // // // //       {
// // // // //         id: '3',
// // // // //         name: 'Golden Fortune',
// // // // //         description: 'Golden opportunity awaits',
// // // // //         prize: 25000,
// // // // //         ticketPrice: 25,
// // // // //         totalTickets: 800,
// // // // //         soldTickets: 621,
// // // // //         drawDate: new Date('2026-02-28T19:00:00'),
// // // // //         status: 'active',
// // // // //       },
// // // // //     ]
// // // // //     setEvents(demoEvents)
// // // // //   }

// // // // //   const fetchTickets = (userId) => {
// // // // //     // Demo tickets
// // // // //     const demoTickets = []
// // // // //     setTickets(demoTickets)
    
// // // // //     // Calculate stats
// // // // //     const totalTickets = demoTickets.reduce((sum, t) => sum + t.quantity, 0)
// // // // //     const totalSpent = demoTickets.reduce((sum, t) => sum + t.totalCost, 0)
// // // // //     setStats({
// // // // //       totalTickets,
// // // // //       activeEntries: demoTickets.length,
// // // // //       totalSpent,
// // // // //       totalWinnings: 0,
// // // // //     })
// // // // //   }

// // // // //   const handlePurchase = () => {
// // // // //     if (!selectedEvent) return
    
// // // // //     const totalCost = selectedEvent.ticketPrice * ticketQuantity
    
// // // // //     if (user.balance < totalCost) {
// // // // //       toast.error('Insufficient balance')
// // // // //       return
// // // // //     }

// // // // //     // Simulate purchase
// // // // //     const newTicket = {
// // // // //       id: Date.now().toString(),
// // // // //       eventId: selectedEvent.id,
// // // // //       eventName: selectedEvent.name,
// // // // //       quantity: ticketQuantity,
// // // // //       totalCost,
// // // // //       purchaseDate: new Date(),
// // // // //       ticketNumbers: Array.from({ length: ticketQuantity }, () => 
// // // // //         Math.floor(Math.random() * 1000000).toString().padStart(6, '0')
// // // // //       ),
// // // // //     }

// // // // //     setTickets([...tickets, newTicket])
    
// // // // //     // Update user balance
// // // // //     const updatedUser = { ...user, balance: user.balance - totalCost }
// // // // //     setUser(updatedUser)
// // // // //     localStorage.setItem('user', JSON.stringify(updatedUser))
    
// // // // //     // Update stats
// // // // //     setStats({
// // // // //       ...stats,
// // // // //       totalTickets: stats.totalTickets + ticketQuantity,
// // // // //       activeEntries: stats.activeEntries + 1,
// // // // //       totalSpent: stats.totalSpent + totalCost,
// // // // //     })

// // // // //     toast.success(`Successfully purchased ${ticketQuantity} ticket(s)!`)
// // // // //     setSelectedEvent(null)
// // // // //     setTicketQuantity(1)
// // // // //   }

// // // // //   const handleLogout = () => {
// // // // //     localStorage.removeItem('token')
// // // // //     localStorage.removeItem('user')
// // // // //     router.push('/')
// // // // //   }

// // // // //   if (loading || !user) {
// // // // //     return (
// // // // //       <div className="min-h-screen bg-dark-950 flex items-center justify-center">
// // // // //         <div className="text-white text-2xl font-display">Loading...</div>
// // // // //       </div>
// // // // //     )
// // // // //   }

// // // // //   return (
// // // // //     <div className="min-h-screen bg-dark-950">
// // // // //       {/* Header */}
// // // // //       <header className="glass border-b border-white/10 sticky top-0 z-50">
// // // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
// // // // //           <div className="flex justify-between items-center">
// // // // //             <div className="flex items-center space-x-3">
// // // // //               <Trophy className="w-8 h-8 text-primary-500" />
// // // // //               <span className="text-2xl font-display gradient-text">WINVAULT</span>
// // // // //             </div>
            
// // // // //             <div className="flex items-center space-x-4">
// // // // //               <div className="glass px-4 py-2 border border-primary-500/30">
// // // // //                 <span className="text-white/60 text-sm mr-2">Balance:</span>
// // // // //                 <span className="text-accent-400 font-bold text-lg">${user.balance.toFixed(2)}</span>
// // // // //               </div>
// // // // //               <button onClick={handleLogout} className="btn-ghost flex items-center space-x-2">
// // // // //                 <LogOut className="w-4 h-4" />
// // // // //                 <span>Logout</span>
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </header>

// // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// // // // //         {/* Welcome Banner */}
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0, y: 20 }}
// // // // //           animate={{ opacity: 1, y: 0 }}
// // // // //           className="bg-gradient-to-r from-primary-600 to-accent-500 p-8 mb-8 relative overflow-hidden"
// // // // //         >
// // // // //           <div className="absolute inset-0 bg-mesh opacity-20" />
// // // // //           <div className="relative z-10">
// // // // //             <h1 className="text-4xl font-display text-white mb-2">
// // // // //               WELCOME BACK, {user.name.toUpperCase()}!
// // // // //             </h1>
// // // // //             <p className="text-white/90 text-lg">Your next big win is just a ticket away</p>
// // // // //           </div>
// // // // //         </motion.div>

// // // // //         {/* Stats Grid */}
// // // // //         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
// // // // //           {[
// // // // //             { label: 'Total Tickets', value: stats.totalTickets, icon: Ticket, color: 'from-blue-500 to-cyan-500' },
// // // // //             { label: 'Active Entries', value: stats.activeEntries, icon: Sparkles, color: 'from-purple-500 to-pink-500' },
// // // // //             { label: 'Total Spent', value: `$${stats.totalSpent}`, icon: DollarSign, color: 'from-orange-500 to-red-500' },
// // // // //             { label: 'Total Winnings', value: `$${stats.totalWinnings}`, icon: Trophy, color: 'from-green-500 to-emerald-500' },
// // // // //           ].map((stat, index) => (
// // // // //             <motion.div
// // // // //               key={index}
// // // // //               initial={{ opacity: 0, scale: 0.9 }}
// // // // //               animate={{ opacity: 1, scale: 1 }}
// // // // //               transition={{ delay: index * 0.1 }}
// // // // //               className="card p-6"
// // // // //             >
// // // // //               <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
// // // // //                 <stat.icon className="w-6 h-6 text-white" />
// // // // //               </div>
// // // // //               <div className="text-3xl font-display gradient-text mb-1">{stat.value}</div>
// // // // //               <div className="text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
// // // // //             </motion.div>
// // // // //           ))}
// // // // //         </div>

// // // // //         {/* Active Events */}
// // // // //         <div className="mb-8">
// // // // //           <h2 className="text-3xl font-display text-white mb-6">ACTIVE LOTTERY EVENTS</h2>
// // // // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //             {events.map((event, index) => {
// // // // //               const availability = ((event.totalTickets - event.soldTickets) / event.totalTickets * 100).toFixed(0)
// // // // //               const drawDate = new Date(event.drawDate)
              
// // // // //               return (
// // // // //                 <motion.div
// // // // //                   key={event.id}
// // // // //                   initial={{ opacity: 0, y: 20 }}
// // // // //                   animate={{ opacity: 1, y: 0 }}
// // // // //                   transition={{ delay: index * 0.1 }}
// // // // //                   className="card"
// // // // //                 >
// // // // //                   <div className="bg-gradient-to-r from-primary-600 to-accent-500 p-6">
// // // // //                     <div className="text-4xl font-display text-white mb-2">
// // // // //                       ${event.prize.toLocaleString()}
// // // // //                     </div>
// // // // //                     <div className="text-white/90 text-lg">{event.name}</div>
// // // // //                   </div>
                  
// // // // //                   <div className="p-6">
// // // // //                     <p className="text-white/60 mb-4">{event.description}</p>
                    
// // // // //                     <div className="grid grid-cols-3 gap-4 mb-4">
// // // // //                       <div className="text-center">
// // // // //                         <div className="text-xl font-bold text-accent-400">${event.ticketPrice}</div>
// // // // //                         <div className="text-xs text-white/50 uppercase">Per Ticket</div>
// // // // //                       </div>
// // // // //                       <div className="text-center">
// // // // //                         <div className="text-xl font-bold text-primary-400">{event.soldTickets}/{event.totalTickets}</div>
// // // // //                         <div className="text-xs text-white/50 uppercase">Sold</div>
// // // // //                       </div>
// // // // //                       <div className="text-center">
// // // // //                         <div className="text-xl font-bold text-white">{availability}%</div>
// // // // //                         <div className="text-xs text-white/50 uppercase">Available</div>
// // // // //                       </div>
// // // // //                     </div>

// // // // //                     <div className="flex items-center space-x-2 text-white/60 text-sm mb-4">
// // // // //                       <Calendar className="w-4 h-4" />
// // // // //                       <span>Draw: {drawDate.toLocaleDateString()} at {drawDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
// // // // //                     </div>

// // // // //                     <button
// // // // //                       onClick={() => setSelectedEvent(event)}
// // // // //                       className="btn-primary w-full"
// // // // //                     >
// // // // //                       BUY TICKETS
// // // // //                     </button>
// // // // //                   </div>
// // // // //                 </motion.div>
// // // // //               )
// // // // //             })}
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Purchase History */}
// // // // //         <div>
// // // // //           <h2 className="text-3xl font-display text-white mb-6">YOUR TICKET HISTORY</h2>
// // // // //           {tickets.length === 0 ? (
// // // // //             <div className="card p-12 text-center">
// // // // //               <Ticket className="w-16 h-16 text-white/20 mx-auto mb-4" />
// // // // //               <p className="text-white/60 text-lg">No tickets purchased yet</p>
// // // // //               <p className="text-white/40">Start playing today and win big!</p>
// // // // //             </div>
// // // // //           ) : (
// // // // //             <div className="space-y-4">
// // // // //               {tickets.map((ticket) => (
// // // // //                 <div key={ticket.id} className="card p-6">
// // // // //                   <div className="flex justify-between items-start mb-4">
// // // // //                     <div>
// // // // //                       <h3 className="text-xl font-display text-white mb-1">{ticket.eventName}</h3>
// // // // //                       <p className="text-white/60 text-sm">
// // // // //                         Purchased on {new Date(ticket.purchaseDate).toLocaleDateString()}
// // // // //                       </p>
// // // // //                     </div>
// // // // //                     <div className="text-right">
// // // // //                       <div className="text-2xl font-display text-accent-400">${ticket.totalCost}</div>
// // // // //                       <div className="text-sm text-white/60">{ticket.quantity} ticket(s)</div>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                   <div className="bg-dark-950 p-4 border border-white/5">
// // // // //                     <p className="text-xs text-white/50 uppercase tracking-wider mb-2">Ticket Numbers</p>
// // // // //                     <div className="flex flex-wrap gap-2">
// // // // //                       {ticket.ticketNumbers.map((num, i) => (
// // // // //                         <span key={i} className="glass px-3 py-1 text-sm font-mono text-primary-400 border border-primary-500/30">
// // // // //                           {num}
// // // // //                         </span>
// // // // //                       ))}
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Purchase Modal */}
// // // // //       {selectedEvent && (
// // // // //         <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, scale: 0.9 }}
// // // // //             animate={{ opacity: 1, scale: 1 }}
// // // // //             className="glass max-w-md w-full p-8 border-2 border-white/10"
// // // // //           >
// // // // //             <h2 className="text-3xl font-display text-white mb-6">PURCHASE TICKETS</h2>
            
// // // // //             <div className="bg-dark-900 p-4 mb-6 border-l-4 border-primary-500">
// // // // //               <h3 className="text-xl font-display text-white mb-2">{selectedEvent.name}</h3>
// // // // //               <div className="text-white/60">${selectedEvent.prize.toLocaleString()} Prize</div>
// // // // //               <div className="text-accent-400 font-bold mt-2">${selectedEvent.ticketPrice} per ticket</div>
// // // // //             </div>

// // // // //             <div className="mb-6">
// // // // //               <label className="block text-white/70 mb-3 text-sm uppercase tracking-wider font-semibold">
// // // // //                 Number of Tickets
// // // // //               </label>
// // // // //               <div className="flex items-center space-x-4">
// // // // //                 <button
// // // // //                   onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
// // // // //                   className="w-12 h-12 bg-dark-900 border-2 border-dark-800 text-white font-bold text-xl
// // // // //                            hover:border-primary-500 transition-colors"
// // // // //                 >
// // // // //                   -
// // // // //                 </button>
// // // // //                 <div className="text-4xl font-display text-white min-w-[80px] text-center">
// // // // //                   {ticketQuantity}
// // // // //                 </div>
// // // // //                 <button
// // // // //                   onClick={() => setTicketQuantity(ticketQuantity + 1)}
// // // // //                   className="w-12 h-12 bg-dark-900 border-2 border-dark-800 text-white font-bold text-xl
// // // // //                            hover:border-primary-500 transition-colors"
// // // // //                 >
// // // // //                   +
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="bg-dark-900 p-6 mb-6 text-center border-2 border-primary-500/30">
// // // // //               <div className="text-sm text-white/60 uppercase tracking-wider mb-2">Total Amount</div>
// // // // //               <div className="text-5xl font-display gradient-text">
// // // // //                 ${(selectedEvent.ticketPrice * ticketQuantity).toFixed(2)}
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="flex space-x-4">
// // // // //               <button
// // // // //                 onClick={() => setSelectedEvent(null)}
// // // // //                 className="btn-secondary flex-1"
// // // // //               >
// // // // //                 Cancel
// // // // //               </button>
// // // // //               <button
// // // // //                 onClick={handlePurchase}
// // // // //                 className="btn-primary flex-1"
// // // // //               >
// // // // //                 Confirm Purchase
// // // // //               </button>
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   )
// // // // // }


// // // // 'use client'

// // // // import { useState, useEffect, useCallback } from 'react'
// // // // import { motion, AnimatePresence } from 'framer-motion'
// // // // import { Trophy, Ticket, Sparkles, LogOut, Calendar, DollarSign, X, Gift, Clock, ChevronRight, Hash, CreditCard, CheckCircle, AlertCircle, Copy, Star } from 'lucide-react'
// // // // import { useRouter } from 'next/navigation'
// // // // import toast from 'react-hot-toast'

// // // // // ─── Countdown Hook ───────────────────────────────────────────────────────────
// // // // function useCountdown(targetDate) {
// // // //   const calc = useCallback(() => {
// // // //     const diff = new Date(targetDate) - new Date()
// // // //     if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
// // // //     return {
// // // //       days: Math.floor(diff / 86400000),
// // // //       hours: Math.floor((diff % 86400000) / 3600000),
// // // //       minutes: Math.floor((diff % 3600000) / 60000),
// // // //       seconds: Math.floor((diff % 60000) / 1000),
// // // //       expired: false,
// // // //     }
// // // //   }, [targetDate])

// // // //   const [time, setTime] = useState(calc)
// // // //   useEffect(() => {
// // // //     const id = setInterval(() => setTime(calc()), 1000)
// // // //     return () => clearInterval(id)
// // // //   }, [calc])
// // // //   return time
// // // // }

// // // // // ─── CountdownDisplay ─────────────────────────────────────────────────────────
// // // // function CountdownDisplay({ drawDate }) {
// // // //   const t = useCountdown(drawDate)
// // // //   if (t.expired) return <span className="text-red-400 font-bold text-xs uppercase tracking-wider">Draw Closed</span>
// // // //   return (
// // // //     <div className="flex items-center gap-1 text-xs font-mono">
// // // //       {[['d', t.days], ['h', t.hours], ['m', t.minutes], ['s', t.seconds]].map(([label, val]) => (
// // // //         <span key={label} className="flex items-center gap-0.5">
// // // //           <span className="bg-white/10 px-1.5 py-0.5 rounded text-white font-bold tabular-nums">{String(val).padStart(2, '0')}</span>
// // // //           <span className="text-white/40">{label}</span>
// // // //         </span>
// // // //       ))}
// // // //     </div>
// // // //   )
// // // // }

// // // // // ─── Ticket Detail Modal ──────────────────────────────────────────────────────
// // // // function TicketModal({ tickets, events, onClose }) {
// // // //   const [selected, setSelected] = useState(null)
// // // //   const [copied, setCopied] = useState(null)

// // // //   const copyNumber = (num) => {
// // // //     navigator.clipboard.writeText(num)
// // // //     setCopied(num)
// // // //     setTimeout(() => setCopied(null), 1500)
// // // //   }

// // // //   const getEvent = (eventId) => events.find(e => e.id === eventId)

// // // //   return (
// // // //     <motion.div
// // // //       initial={{ opacity: 0 }}
// // // //       animate={{ opacity: 1 }}
// // // //       exit={{ opacity: 0 }}
// // // //       className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
// // // //       onClick={onClose}
// // // //     >
// // // //       <motion.div
// // // //         initial={{ opacity: 0, scale: 0.95, y: 20 }}
// // // //         animate={{ opacity: 1, scale: 1, y: 0 }}
// // // //         exit={{ opacity: 0, scale: 0.95, y: 20 }}
// // // //         onClick={e => e.stopPropagation()}
// // // //         className="w-full max-w-2xl max-h-[85vh] flex flex-col"
// // // //         style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16 }}
// // // //       >
// // // //         {/* Header */}
// // // //         <div className="flex items-center justify-between p-6 border-b border-white/10">
// // // //           <div className="flex items-center gap-3">
// // // //             <div style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)', borderRadius: 8, padding: 8 }}>
// // // //               <Ticket className="w-5 h-5 text-white" />
// // // //             </div>
// // // //             <div>
// // // //               <h2 className="text-xl font-bold text-white">Your Tickets</h2>
// // // //               <p className="text-white/50 text-sm">{tickets.length} purchase{tickets.length !== 1 ? 's' : ''} · {tickets.reduce((s, t) => s + t.quantity, 0)} total tickets</p>
// // // //             </div>
// // // //           </div>
// // // //           <button onClick={onClose} className="text-white/40 hover:text-white transition-colors p-1">
// // // //             <X className="w-5 h-5" />
// // // //           </button>
// // // //         </div>

// // // //         {/* Content */}
// // // //         <div className="flex-1 overflow-y-auto p-6 space-y-4">
// // // //           {tickets.length === 0 ? (
// // // //             <div className="text-center py-16 text-white/40">
// // // //               <Ticket className="w-12 h-12 mx-auto mb-3 opacity-30" />
// // // //               <p>No tickets yet</p>
// // // //             </div>
// // // //           ) : tickets.map((ticket) => {
// // // //             const event = getEvent(ticket.eventId)
// // // //             const isOpen = selected === ticket.id
// // // //             return (
// // // //               <motion.div
// // // //                 key={ticket.id}
// // // //                 layout
// // // //                 style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12 }}
// // // //               >
// // // //                 {/* Ticket Summary Row */}
// // // //                 <button
// // // //                   onClick={() => setSelected(isOpen ? null : ticket.id)}
// // // //                   className="w-full flex items-center justify-between p-4 text-left"
// // // //                 >
// // // //                   <div className="flex items-center gap-3">
// // // //                     <div style={{ background: 'rgba(124,58,237,0.2)', borderRadius: 8, padding: 6 }}>
// // // //                       <Star className="w-4 h-4 text-purple-400" />
// // // //                     </div>
// // // //                     <div>
// // // //                       <p className="text-white font-semibold text-sm">{ticket.eventName}</p>
// // // //                       <p className="text-white/40 text-xs">{new Date(ticket.purchaseDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
// // // //                     </div>
// // // //                   </div>
// // // //                   <div className="flex items-center gap-4">
// // // //                     <div className="text-right">
// // // //                       <p className="text-emerald-400 font-bold text-sm">${ticket.totalCost}</p>
// // // //                       <p className="text-white/40 text-xs">{ticket.quantity} ticket{ticket.quantity > 1 ? 's' : ''}</p>
// // // //                     </div>
// // // //                     <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
// // // //                       <ChevronRight className="w-4 h-4 text-white/40" />
// // // //                     </motion.div>
// // // //                   </div>
// // // //                 </button>

// // // //                 {/* Expanded Detail */}
// // // //                 <AnimatePresence>
// // // //                   {isOpen && (
// // // //                     <motion.div
// // // //                       initial={{ height: 0, opacity: 0 }}
// // // //                       animate={{ height: 'auto', opacity: 1 }}
// // // //                       exit={{ height: 0, opacity: 0 }}
// // // //                       style={{ overflow: 'hidden' }}
// // // //                     >
// // // //                       <div className="px-4 pb-4 border-t border-white/5 pt-4 space-y-4">
// // // //                         {/* Event info */}
// // // //                         {event && (
// // // //                           <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: 12 }} className="grid grid-cols-3 gap-3 text-center">
// // // //                             <div>
// // // //                               <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Prize Pool</p>
// // // //                               <p className="text-yellow-400 font-bold">${event.prize.toLocaleString()}</p>
// // // //                             </div>
// // // //                             <div>
// // // //                               <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Draw Date</p>
// // // //                               <p className="text-white text-sm">{new Date(event.drawDate).toLocaleDateString()}</p>
// // // //                             </div>
// // // //                             <div>
// // // //                               <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Countdown</p>
// // // //                               <CountdownDisplay drawDate={event.drawDate} />
// // // //                             </div>
// // // //                           </div>
// // // //                         )}

// // // //                         {/* Ticket Numbers */}
// // // //                         <div>
// // // //                           <p className="text-white/40 text-xs uppercase tracking-wider mb-2 flex items-center gap-1">
// // // //                             <Hash className="w-3 h-3" /> Ticket Numbers
// // // //                           </p>
// // // //                           <div className="flex flex-wrap gap-2">
// // // //                             {ticket.ticketNumbers.map((num, i) => (
// // // //                               <button
// // // //                                 key={i}
// // // //                                 onClick={() => copyNumber(num)}
// // // //                                 className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-sm transition-all"
// // // //                                 style={{
// // // //                                   background: copied === num ? 'rgba(16,185,129,0.2)' : 'rgba(124,58,237,0.15)',
// // // //                                   border: `1px solid ${copied === num ? 'rgba(16,185,129,0.4)' : 'rgba(124,58,237,0.3)'}`,
// // // //                                   color: copied === num ? '#10b981' : '#a78bfa',
// // // //                                 }}
// // // //                               >
// // // //                                 {copied === num ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3 opacity-50" />}
// // // //                                 {num}
// // // //                               </button>
// // // //                             ))}
// // // //                           </div>
// // // //                         </div>

// // // //                         {/* Status */}
// // // //                         <div className="flex items-center gap-2">
// // // //                           <span style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 20, padding: '2px 10px' }} className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
// // // //                             Active Entry
// // // //                           </span>
// // // //                           <span className="text-white/30 text-xs">Ticket #{ticket.id.slice(-6)}</span>
// // // //                         </div>
// // // //                       </div>
// // // //                     </motion.div>
// // // //                   )}
// // // //                 </AnimatePresence>
// // // //               </motion.div>
// // // //             )
// // // //           })}
// // // //         </div>
// // // //       </motion.div>
// // // //     </motion.div>
// // // //   )
// // // // }

// // // // // ─── Gift Card Top-Up Modal ───────────────────────────────────────────────────
// // // // function TopUpModal({ onClose, onSubmit }) {
// // // //   const [code, setCode] = useState('')
// // // //   const [amount, setAmount] = useState('')
// // // //   const [loading, setLoading] = useState(false)
// // // //   const [step, setStep] = useState('form') // 'form' | 'pending'

// // // //   const presets = [10, 25, 50, 100, 250]

// // // //   const handleSubmit = async () => {
// // // //     if (!code.trim() || !amount) {
// // // //       toast.error('Please enter a gift card code and amount')
// // // //       return
// // // //     }
// // // //     setLoading(true)
// // // //     await new Promise(r => setTimeout(r, 1200)) // simulate API
// // // //     setLoading(false)
// // // //     setStep('pending')
// // // //     onSubmit({ code: code.trim(), amount: Number(amount) })
// // // //   }

// // // //   return (
// // // //     <motion.div
// // // //       initial={{ opacity: 0 }}
// // // //       animate={{ opacity: 1 }}
// // // //       exit={{ opacity: 0 }}
// // // //       className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
// // // //       onClick={onClose}
// // // //     >
// // // //       <motion.div
// // // //         initial={{ opacity: 0, scale: 0.95, y: 20 }}
// // // //         animate={{ opacity: 1, scale: 1, y: 0 }}
// // // //         exit={{ opacity: 0, scale: 0.95, y: 20 }}
// // // //         onClick={e => e.stopPropagation()}
// // // //         className="w-full max-w-md"
// // // //         style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16 }}
// // // //       >
// // // //         {step === 'pending' ? (
// // // //           <div className="p-8 text-center">
// // // //             <motion.div
// // // //               initial={{ scale: 0 }}
// // // //               animate={{ scale: 1 }}
// // // //               transition={{ type: 'spring', stiffness: 200 }}
// // // //               className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
// // // //               style={{ background: 'rgba(234,179,8,0.15)', border: '2px solid rgba(234,179,8,0.4)' }}
// // // //             >
// // // //               <Clock className="w-8 h-8 text-yellow-400" />
// // // //             </motion.div>
// // // //             <h3 className="text-xl font-bold text-white mb-2">Request Submitted!</h3>
// // // //             <p className="text-white/50 text-sm mb-1">Your gift card has been sent for admin verification.</p>
// // // //             <p className="text-white/40 text-xs mb-6">Funds will be added to your balance once approved. This usually takes a few minutes.</p>
// // // //             <div style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)', borderRadius: 10 }} className="p-4 mb-6">
// // // //               <div className="flex justify-between text-sm mb-2">
// // // //                 <span className="text-white/50">Gift Card Code</span>
// // // //                 <span className="text-white font-mono font-bold">{code}</span>
// // // //               </div>
// // // //               <div className="flex justify-between text-sm">
// // // //                 <span className="text-white/50">Requested Amount</span>
// // // //                 <span className="text-yellow-400 font-bold">${amount}</span>
// // // //               </div>
// // // //             </div>
// // // //             <button onClick={onClose} className="w-full py-3 rounded-lg font-semibold text-white transition-all"
// // // //               style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>
// // // //               Done
// // // //             </button>
// // // //           </div>
// // // //         ) : (
// // // //           <>
// // // //             <div className="flex items-center justify-between p-6 border-b border-white/10">
// // // //               <div className="flex items-center gap-3">
// // // //                 <div style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', borderRadius: 8, padding: 8 }}>
// // // //                   <Gift className="w-5 h-5 text-white" />
// // // //                 </div>
// // // //                 <div>
// // // //                   <h2 className="text-xl font-bold text-white">Top Up Balance</h2>
// // // //                   <p className="text-white/50 text-sm">Redeem a gift card</p>
// // // //                 </div>
// // // //               </div>
// // // //               <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
// // // //                 <X className="w-5 h-5" />
// // // //               </button>
// // // //             </div>

// // // //             <div className="p-6 space-y-5">
// // // //               {/* Gift Card Code */}
// // // //               <div>
// // // //                 <label className="block text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">Gift Card Code</label>
// // // //                 <div className="relative">
// // // //                   <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
// // // //                   <input
// // // //                     type="text"
// // // //                     value={code}
// // // //                     onChange={e => setCode(e.target.value.toUpperCase())}
// // // //                     placeholder="XXXX-XXXX-XXXX-XXXX"
// // // //                     className="w-full pl-10 pr-4 py-3 font-mono text-sm rounded-lg text-white placeholder-white/20 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
// // // //                     style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
// // // //                   />
// // // //                 </div>
// // // //               </div>

// // // //               {/* Amount */}
// // // //               <div>
// // // //                 <label className="block text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">Amount ($)</label>
// // // //                 <div className="flex gap-2 mb-2 flex-wrap">
// // // //                   {presets.map(p => (
// // // //                     <button
// // // //                       key={p}
// // // //                       onClick={() => setAmount(String(p))}
// // // //                       className="px-3 py-1.5 rounded-lg text-sm font-semibold transition-all"
// // // //                       style={{
// // // //                         background: amount === String(p) ? 'rgba(124,58,237,0.3)' : 'rgba(255,255,255,0.06)',
// // // //                         border: `1px solid ${amount === String(p) ? 'rgba(124,58,237,0.6)' : 'rgba(255,255,255,0.1)'}`,
// // // //                         color: amount === String(p) ? '#a78bfa' : 'rgba(255,255,255,0.5)',
// // // //                       }}
// // // //                     >
// // // //                       ${p}
// // // //                     </button>
// // // //                   ))}
// // // //                 </div>
// // // //                 <input
// // // //                   type="number"
// // // //                   value={amount}
// // // //                   onChange={e => setAmount(e.target.value)}
// // // //                   placeholder="Or enter custom amount"
// // // //                   min="1"
// // // //                   className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
// // // //                   style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
// // // //                 />
// // // //               </div>

// // // //               {/* Info Banner */}
// // // //               <div style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)', borderRadius: 10 }} className="p-3 flex gap-2 items-start">
// // // //                 <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
// // // //                 <p className="text-yellow-400/80 text-xs leading-relaxed">
// // // //                   Gift cards are verified by an admin before funds are added. Please allow a few minutes for processing.
// // // //                 </p>
// // // //               </div>

// // // //               {/* Submit */}
// // // //               <button
// // // //                 onClick={handleSubmit}
// // // //                 disabled={loading}
// // // //                 className="w-full py-3 rounded-lg font-bold text-white text-sm uppercase tracking-wider transition-all disabled:opacity-50"
// // // //                 style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}
// // // //               >
// // // //                 {loading ? 'Submitting...' : 'Submit for Verification'}
// // // //               </button>
// // // //             </div>
// // // //           </>
// // // //         )}
// // // //       </motion.div>
// // // //     </motion.div>
// // // //   )
// // // // }

// // // // // ─── Main Dashboard ───────────────────────────────────────────────────────────
// // // // export default function DashboardPage() {
// // // //   const router = useRouter()
// // // //   const [user, setUser] = useState(null)
// // // //   const [events, setEvents] = useState([])
// // // //   const [tickets, setTickets] = useState([])
// // // //   const [stats, setStats] = useState({ totalTickets: 0, activeEntries: 0, totalSpent: 0, totalWinnings: 0 })
// // // //   const [selectedEvent, setSelectedEvent] = useState(null)
// // // //   const [ticketQuantity, setTicketQuantity] = useState(1)
// // // //   const [loading, setLoading] = useState(true)
// // // //   const [showTickets, setShowTickets] = useState(false)
// // // //   const [showTopUp, setShowTopUp] = useState(false)

// // // //   useEffect(() => {
// // // //     const userData = localStorage.getItem('user')
// // // //     if (!userData) { router.push('/auth/login'); return }
// // // //     const parsedUser = JSON.parse(userData)
// // // //     setUser(parsedUser)
// // // //     setEvents([
// // // //       { id: '1', name: 'Mega Jackpot 2026', description: 'Win life-changing prizes in our biggest draw ever', prize: 100000, ticketPrice: 50, totalTickets: 1000, soldTickets: 342, drawDate: new Date('2026-04-15T20:00:00'), status: 'active' },
// // // //       { id: '2', name: 'Weekly Winners Draw', description: 'Your weekly chance to win big', prize: 5000, ticketPrice: 10, totalTickets: 500, soldTickets: 189, drawDate: new Date('2026-03-28T18:00:00'), status: 'active' },
// // // //       { id: '3', name: 'Golden Fortune', description: 'Golden opportunity awaits', prize: 25000, ticketPrice: 25, totalTickets: 800, soldTickets: 621, drawDate: new Date('2026-03-31T19:00:00'), status: 'active' },
// // // //     ])
// // // //     setLoading(false)
// // // //   }, [])

// // // //   const handlePurchase = () => {
// // // //     if (!selectedEvent) return
// // // //     const totalCost = selectedEvent.ticketPrice * ticketQuantity
// // // //     if (user.balance < totalCost) { toast.error('Insufficient balance'); return }

// // // //     const newTicket = {
// // // //       id: Date.now().toString(),
// // // //       eventId: selectedEvent.id,
// // // //       eventName: selectedEvent.name,
// // // //       quantity: ticketQuantity,
// // // //       totalCost,
// // // //       purchaseDate: new Date(),
// // // //       ticketNumbers: Array.from({ length: ticketQuantity }, () => Math.floor(Math.random() * 1000000).toString().padStart(6, '0')),
// // // //     }

// // // //     const newTickets = [...tickets, newTicket]
// // // //     setTickets(newTickets)
// // // //     const updatedUser = { ...user, balance: user.balance - totalCost }
// // // //     setUser(updatedUser)
// // // //     localStorage.setItem('user', JSON.stringify(updatedUser))
// // // //     setStats({ totalTickets: newTickets.reduce((s, t) => s + t.quantity, 0), activeEntries: newTickets.length, totalSpent: newTickets.reduce((s, t) => s + t.totalCost, 0), totalWinnings: 0 })
// // // //     toast.success(`Successfully purchased ${ticketQuantity} ticket(s)!`)
// // // //     setSelectedEvent(null)
// // // //     setTicketQuantity(1)
// // // //   }

// // // //   const handleTopUpSubmit = ({ code, amount }) => {
// // // //     toast.success('Gift card submitted for admin review!')
// // // //     // In production: POST to /api/topup with { code, amount }
// // // //   }

// // // //   const handleLogout = () => {
// // // //     localStorage.removeItem('token')
// // // //     localStorage.removeItem('user')
// // // //     router.push('/')
// // // //   }

// // // //   if (loading || !user) return (
// // // //     <div className="min-h-screen bg-dark-950 flex items-center justify-center">
// // // //       <div className="text-white text-2xl font-display">Loading...</div>
// // // //     </div>
// // // //   )

// // // //   const statCards = [
// // // //     {
// // // //       label: 'Total Tickets', value: stats.totalTickets, icon: Ticket,
// // // //       color: 'from-blue-500 to-cyan-500', clickable: true,
// // // //       onClick: () => setShowTickets(true),
// // // //       hint: 'Click to view'
// // // //     },
// // // //     { label: 'Active Entries', value: stats.activeEntries, icon: Sparkles, color: 'from-purple-500 to-pink-500' },
// // // //     { label: 'Total Spent', value: `$${stats.totalSpent}`, icon: DollarSign, color: 'from-orange-500 to-red-500' },
// // // //     { label: 'Total Winnings', value: `$${stats.totalWinnings}`, icon: Trophy, color: 'from-green-500 to-emerald-500' },
// // // //   ]

// // // //   return (
// // // //     <div className="min-h-screen bg-dark-950">
// // // //       {/* Header */}
// // // //       <header className="glass border-b border-white/10 sticky top-0 z-40">
// // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
// // // //           <div className="flex justify-between items-center">
// // // //             <div className="flex items-center space-x-3">
// // // //               <Trophy className="w-8 h-8 text-primary-500" />
// // // //               <span className="text-2xl font-display gradient-text">WINVAULT</span>
// // // //             </div>
// // // //             <div className="flex items-center space-x-3">
// // // //               {/* Top Up Button */}
// // // //               <button
// // // //                 onClick={() => setShowTopUp(true)}
// // // //                 className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105"
// // // //                 style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', color: 'white' }}
// // // //               >
// // // //                 <Gift className="w-4 h-4" />
// // // //                 <span>Top Up</span>
// // // //               </button>
// // // //               <div className="glass px-4 py-2 border border-primary-500/30">
// // // //                 <span className="text-white/60 text-sm mr-2">Balance:</span>
// // // //                 <span className="text-accent-400 font-bold text-lg">${user.balance.toFixed(2)}</span>
// // // //               </div>
// // // //               <button onClick={handleLogout} className="btn-ghost flex items-center space-x-2">
// // // //                 <LogOut className="w-4 h-4" />
// // // //                 <span className="hidden sm:inline">Logout</span>
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </header>

// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// // // //         {/* Welcome Banner */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           className="bg-gradient-to-r from-primary-600 to-accent-500 p-8 mb-8 relative overflow-hidden rounded-xl"
// // // //         >
// // // //           <div className="absolute inset-0 bg-mesh opacity-20" />
// // // //           <div className="relative z-10">
// // // //             <h1 className="text-4xl font-display text-white mb-2">WELCOME BACK, {user.name.toUpperCase()}!</h1>
// // // //             <p className="text-white/90 text-lg">Your next big win is just a ticket away</p>
// // // //           </div>
// // // //         </motion.div>

// // // //         {/* Stats Grid */}
// // // //         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
// // // //           {statCards.map((stat, index) => (
// // // //             <motion.div
// // // //               key={index}
// // // //               initial={{ opacity: 0, scale: 0.9 }}
// // // //               animate={{ opacity: 1, scale: 1 }}
// // // //               transition={{ delay: index * 0.1 }}
// // // //               onClick={stat.onClick}
// // // //               className={`card p-6 relative overflow-hidden ${stat.clickable ? 'cursor-pointer group' : ''}`}
// // // //               whileHover={stat.clickable ? { scale: 1.02, y: -2 } : {}}
// // // //             >
// // // //               {stat.clickable && (
// // // //                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
// // // //                   style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(6,182,212,0.08))' }} />
// // // //               )}
// // // //               <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 rounded-lg`}>
// // // //                 <stat.icon className="w-6 h-6 text-white" />
// // // //               </div>
// // // //               <div className="text-3xl font-display gradient-text mb-1">{stat.value}</div>
// // // //               <div className="text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
// // // //               {stat.clickable && (
// // // //                 <div className="flex items-center gap-1 mt-2 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
// // // //                   <span>{stat.hint}</span>
// // // //                   <ChevronRight className="w-3 h-3" />
// // // //                 </div>
// // // //               )}
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>

// // // //         {/* Active Events */}
// // // //         <div className="mb-8">
// // // //           <h2 className="text-3xl font-display text-white mb-6">ACTIVE LOTTERY EVENTS</h2>
// // // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //             {events.map((event, index) => {
// // // //               const availability = ((event.totalTickets - event.soldTickets) / event.totalTickets * 100).toFixed(0)
// // // //               return (
// // // //                 <motion.div
// // // //                   key={event.id}
// // // //                   initial={{ opacity: 0, y: 20 }}
// // // //                   animate={{ opacity: 1, y: 0 }}
// // // //                   transition={{ delay: index * 0.1 }}
// // // //                   className="card overflow-hidden"
// // // //                 >
// // // //                   <div className="bg-gradient-to-r from-primary-600 to-accent-500 p-6">
// // // //                     <div className="text-4xl font-display text-white mb-1">${event.prize.toLocaleString()}</div>
// // // //                     <div className="text-white/90 text-lg">{event.name}</div>
// // // //                   </div>

// // // //                   <div className="p-6">
// // // //                     <p className="text-white/60 mb-4 text-sm">{event.description}</p>

// // // //                     <div className="grid grid-cols-3 gap-3 mb-4">
// // // //                       <div className="text-center">
// // // //                         <div className="text-lg font-bold text-accent-400">${event.ticketPrice}</div>
// // // //                         <div className="text-xs text-white/50 uppercase">Per Ticket</div>
// // // //                       </div>
// // // //                       <div className="text-center">
// // // //                         <div className="text-lg font-bold text-primary-400">{event.soldTickets}/{event.totalTickets}</div>
// // // //                         <div className="text-xs text-white/50 uppercase">Sold</div>
// // // //                       </div>
// // // //                       <div className="text-center">
// // // //                         <div className="text-lg font-bold text-white">{availability}%</div>
// // // //                         <div className="text-xs text-white/50 uppercase">Available</div>
// // // //                       </div>
// // // //                     </div>

// // // //                     {/* Countdown */}
// // // //                     <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8 }} className="p-3 mb-4">
// // // //                       <div className="flex items-center justify-between">
// // // //                         <div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wider">
// // // //                           <Clock className="w-3 h-3" />
// // // //                           <span>Draw In</span>
// // // //                         </div>
// // // //                         <CountdownDisplay drawDate={event.drawDate} />
// // // //                       </div>
// // // //                     </div>

// // // //                     <div className="flex items-center gap-1.5 text-white/40 text-xs mb-4">
// // // //                       <Calendar className="w-3 h-3" />
// // // //                       <span>{new Date(event.drawDate).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })} · {new Date(event.drawDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
// // // //                     </div>

// // // //                     <button onClick={() => setSelectedEvent(event)} className="btn-primary w-full">
// // // //                       BUY TICKETS
// // // //                     </button>
// // // //                   </div>
// // // //                 </motion.div>
// // // //               )
// // // //             })}
// // // //           </div>
// // // //         </div>

// // // //         {/* Ticket History Preview */}
// // // //         <div>
// // // //           <div className="flex items-center justify-between mb-6">
// // // //             <h2 className="text-3xl font-display text-white">YOUR TICKET HISTORY</h2>
// // // //             {tickets.length > 0 && (
// // // //               <button
// // // //                 onClick={() => setShowTickets(true)}
// // // //                 className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
// // // //               >
// // // //                 View All <ChevronRight className="w-4 h-4" />
// // // //               </button>
// // // //             )}
// // // //           </div>

// // // //           {tickets.length === 0 ? (
// // // //             <div className="card p-12 text-center">
// // // //               <Ticket className="w-16 h-16 text-white/20 mx-auto mb-4" />
// // // //               <p className="text-white/60 text-lg">No tickets purchased yet</p>
// // // //               <p className="text-white/40">Start playing today and win big!</p>
// // // //             </div>
// // // //           ) : (
// // // //             <div className="space-y-3">
// // // //               {tickets.slice(0, 3).map((ticket) => (
// // // //                 <motion.div
// // // //                   key={ticket.id}
// // // //                   initial={{ opacity: 0, x: -10 }}
// // // //                   animate={{ opacity: 1, x: 0 }}
// // // //                   className="card p-4 flex items-center justify-between cursor-pointer hover:border-white/20 transition-colors"
// // // //                   onClick={() => setShowTickets(true)}
// // // //                   style={{ border: '1px solid rgba(255,255,255,0.06)' }}
// // // //                 >
// // // //                   <div className="flex items-center gap-3">
// // // //                     <div style={{ background: 'rgba(124,58,237,0.2)', borderRadius: 8, padding: 8 }}>
// // // //                       <Ticket className="w-4 h-4 text-purple-400" />
// // // //                     </div>
// // // //                     <div>
// // // //                       <p className="text-white font-semibold text-sm">{ticket.eventName}</p>
// // // //                       <p className="text-white/40 text-xs">{ticket.quantity} ticket{ticket.quantity > 1 ? 's' : ''} · {new Date(ticket.purchaseDate).toLocaleDateString()}</p>
// // // //                     </div>
// // // //                   </div>
// // // //                   <div className="flex items-center gap-3">
// // // //                     <span className="text-emerald-400 font-bold">${ticket.totalCost}</span>
// // // //                     <ChevronRight className="w-4 h-4 text-white/30" />
// // // //                   </div>
// // // //                 </motion.div>
// // // //               ))}
// // // //               {tickets.length > 3 && (
// // // //                 <button onClick={() => setShowTickets(true)} className="w-full py-3 text-white/40 text-sm hover:text-white/60 transition-colors">
// // // //                   +{tickets.length - 3} more tickets
// // // //                 </button>
// // // //               )}
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>

// // // //       {/* Purchase Modal */}
// // // //       <AnimatePresence>
// // // //         {selectedEvent && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //             className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
// // // //           >
// // // //             <motion.div
// // // //               initial={{ opacity: 0, scale: 0.9 }}
// // // //               animate={{ opacity: 1, scale: 1 }}
// // // //               exit={{ opacity: 0, scale: 0.9 }}
// // // //               className="glass max-w-md w-full p-8 border-2 border-white/10 rounded-xl"
// // // //             >
// // // //               <div className="flex justify-between items-start mb-6">
// // // //                 <h2 className="text-3xl font-display text-white">PURCHASE TICKETS</h2>
// // // //                 <button onClick={() => setSelectedEvent(null)} className="text-white/40 hover:text-white transition-colors">
// // // //                   <X className="w-5 h-5" />
// // // //                 </button>
// // // //               </div>

// // // //               <div className="bg-dark-900 p-4 mb-6 border-l-4 border-primary-500 rounded-r-lg">
// // // //                 <h3 className="text-xl font-display text-white mb-1">{selectedEvent.name}</h3>
// // // //                 <div className="text-white/60 text-sm">${selectedEvent.prize.toLocaleString()} Prize</div>
// // // //                 <div className="text-accent-400 font-bold mt-1">${selectedEvent.ticketPrice} per ticket</div>
// // // //               </div>

// // // //               {/* Countdown in modal */}
// // // //               <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8 }} className="p-3 mb-6 flex items-center justify-between">
// // // //                 <div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wider">
// // // //                   <Clock className="w-3 h-3" /> Draw In
// // // //                 </div>
// // // //                 <CountdownDisplay drawDate={selectedEvent.drawDate} />
// // // //               </div>

// // // //               <div className="mb-6">
// // // //                 <label className="block text-white/70 mb-3 text-sm uppercase tracking-wider font-semibold">Number of Tickets</label>
// // // //                 <div className="flex items-center space-x-4">
// // // //                   <button onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
// // // //                     className="w-12 h-12 bg-dark-900 border-2 border-dark-800 text-white font-bold text-xl hover:border-primary-500 transition-colors rounded-lg">-</button>
// // // //                   <div className="text-4xl font-display text-white min-w-[80px] text-center">{ticketQuantity}</div>
// // // //                   <button onClick={() => setTicketQuantity(ticketQuantity + 1)}
// // // //                     className="w-12 h-12 bg-dark-900 border-2 border-dark-800 text-white font-bold text-xl hover:border-primary-500 transition-colors rounded-lg">+</button>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="bg-dark-900 p-6 mb-6 text-center border-2 border-primary-500/30 rounded-lg">
// // // //                 <div className="text-sm text-white/60 uppercase tracking-wider mb-2">Total Amount</div>
// // // //                 <div className="text-5xl font-display gradient-text">${(selectedEvent.ticketPrice * ticketQuantity).toFixed(2)}</div>
// // // //                 <div className="text-white/40 text-sm mt-1">Your balance: ${user.balance.toFixed(2)}</div>
// // // //               </div>

// // // //               <div className="flex space-x-4">
// // // //                 <button onClick={() => setSelectedEvent(null)} className="btn-secondary flex-1">Cancel</button>
// // // //                 <button onClick={handlePurchase} className="btn-primary flex-1">Confirm Purchase</button>
// // // //               </div>
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>

// // // //       {/* Ticket Detail Modal */}
// // // //       <AnimatePresence>
// // // //         {showTickets && (
// // // //           <TicketModal tickets={tickets} events={events} onClose={() => setShowTickets(false)} />
// // // //         )}
// // // //       </AnimatePresence>

// // // //       {/* Top Up Modal */}
// // // //       <AnimatePresence>
// // // //         {showTopUp && (
// // // //           <TopUpModal onClose={() => setShowTopUp(false)} onSubmit={handleTopUpSubmit} />
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </div>
// // // //   )
// // // // }


// // // 'use client'

// // // import { useState, useEffect, useCallback } from 'react'
// // // import { motion, AnimatePresence } from 'framer-motion'
// // // import { Trophy, Ticket, Sparkles, LogOut, Calendar, DollarSign, X, Gift, Clock, ChevronRight, Hash, CreditCard, CheckCircle, AlertCircle, Copy, Star } from 'lucide-react'
// // // import { useRouter } from 'next/navigation'
// // // import toast from 'react-hot-toast'

// // // // ─── Countdown Hook ───────────────────────────────────────────────────────────
// // // function useCountdown(targetDate) {
// // //   const calc = useCallback(() => {
// // //     const diff = new Date(targetDate) - new Date()
// // //     if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
// // //     return {
// // //       days: Math.floor(diff / 86400000),
// // //       hours: Math.floor((diff % 86400000) / 3600000),
// // //       minutes: Math.floor((diff % 3600000) / 60000),
// // //       seconds: Math.floor((diff % 60000) / 1000),
// // //       expired: false,
// // //     }
// // //   }, [targetDate])

// // //   const [time, setTime] = useState(calc)
// // //   useEffect(() => {
// // //     const id = setInterval(() => setTime(calc()), 1000)
// // //     return () => clearInterval(id)
// // //   }, [calc])
// // //   return time
// // // }

// // // // ─── CountdownDisplay ─────────────────────────────────────────────────────────
// // // function CountdownDisplay({ drawDate }) {
// // //   const t = useCountdown(drawDate)
// // //   if (t.expired) return <span className="text-red-400 font-bold text-xs uppercase tracking-wider">Draw Closed</span>
// // //   return (
// // //     <div className="flex items-center gap-1 text-xs font-mono">
// // //       {[['d', t.days], ['h', t.hours], ['m', t.minutes], ['s', t.seconds]].map(([label, val]) => (
// // //         <span key={label} className="flex items-center gap-0.5">
// // //           <span className="bg-white/10 px-1.5 py-0.5 rounded text-white font-bold tabular-nums">{String(val).padStart(2, '0')}</span>
// // //           <span className="text-white/40">{label}</span>
// // //         </span>
// // //       ))}
// // //     </div>
// // //   )
// // // }

// // // // ─── Ticket Detail Modal ──────────────────────────────────────────────────────
// // // function TicketModal({ tickets, events, onClose }) {
// // //   const [selected, setSelected] = useState(null)
// // //   const [copied, setCopied] = useState(null)

// // //   const copyNumber = (num) => {
// // //     navigator.clipboard.writeText(num)
// // //     setCopied(num)
// // //     setTimeout(() => setCopied(null), 1500)
// // //   }

// // //   const getEvent = (eventId) => events.find(e => e.id === eventId)

// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0 }}
// // //       animate={{ opacity: 1 }}
// // //       exit={{ opacity: 0 }}
// // //       className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
// // //       onClick={onClose}
// // //     >
// // //       <motion.div
// // //         initial={{ opacity: 0, scale: 0.95, y: 20 }}
// // //         animate={{ opacity: 1, scale: 1, y: 0 }}
// // //         exit={{ opacity: 0, scale: 0.95, y: 20 }}
// // //         onClick={e => e.stopPropagation()}
// // //         className="w-full max-w-2xl max-h-[85vh] flex flex-col"
// // //         style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16 }}
// // //       >
// // //         {/* Header */}
// // //         <div className="flex items-center justify-between p-6 border-b border-white/10">
// // //           <div className="flex items-center gap-3">
// // //             <div style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)', borderRadius: 8, padding: 8 }}>
// // //               <Ticket className="w-5 h-5 text-white" />
// // //             </div>
// // //             <div>
// // //               <h2 className="text-xl font-bold text-white">Your Tickets</h2>
// // //               <p className="text-white/50 text-sm">{tickets.length} purchase{tickets.length !== 1 ? 's' : ''} · {tickets.reduce((s, t) => s + t.quantity, 0)} total tickets</p>
// // //             </div>
// // //           </div>
// // //           <button onClick={onClose} className="text-white/40 hover:text-white transition-colors p-1">
// // //             <X className="w-5 h-5" />
// // //           </button>
// // //         </div>

// // //         {/* Content */}
// // //         <div className="flex-1 overflow-y-auto p-6 space-y-4">
// // //           {tickets.length === 0 ? (
// // //             <div className="text-center py-16 text-white/40">
// // //               <Ticket className="w-12 h-12 mx-auto mb-3 opacity-30" />
// // //               <p>No tickets yet</p>
// // //             </div>
// // //           ) : tickets.map((ticket) => {
// // //             const event = getEvent(ticket.eventId)
// // //             const isOpen = selected === ticket.id
// // //             return (
// // //               <motion.div
// // //                 key={ticket.id}
// // //                 layout
// // //                 style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12 }}
// // //               >
// // //                 {/* Ticket Summary Row */}
// // //                 <button
// // //                   onClick={() => setSelected(isOpen ? null : ticket.id)}
// // //                   className="w-full flex items-center justify-between p-4 text-left"
// // //                 >
// // //                   <div className="flex items-center gap-3">
// // //                     <div style={{ background: 'rgba(124,58,237,0.2)', borderRadius: 8, padding: 6 }}>
// // //                       <Star className="w-4 h-4 text-purple-400" />
// // //                     </div>
// // //                     <div>
// // //                       <p className="text-white font-semibold text-sm">{ticket.eventName}</p>
// // //                       <p className="text-white/40 text-xs">{new Date(ticket.purchaseDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
// // //                     </div>
// // //                   </div>
// // //                   <div className="flex items-center gap-4">
// // //                     <div className="text-right">
// // //                       <p className="text-emerald-400 font-bold text-sm">${ticket.totalCost}</p>
// // //                       <p className="text-white/40 text-xs">{ticket.quantity} ticket{ticket.quantity > 1 ? 's' : ''}</p>
// // //                     </div>
// // //                     <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
// // //                       <ChevronRight className="w-4 h-4 text-white/40" />
// // //                     </motion.div>
// // //                   </div>
// // //                 </button>

// // //                 {/* Expanded Detail */}
// // //                 <AnimatePresence>
// // //                   {isOpen && (
// // //                     <motion.div
// // //                       initial={{ height: 0, opacity: 0 }}
// // //                       animate={{ height: 'auto', opacity: 1 }}
// // //                       exit={{ height: 0, opacity: 0 }}
// // //                       style={{ overflow: 'hidden' }}
// // //                     >
// // //                       <div className="px-4 pb-4 border-t border-white/5 pt-4 space-y-4">
// // //                         {/* Event info */}
// // //                         {event && (
// // //                           <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: 12 }} className="grid grid-cols-3 gap-3 text-center">
// // //                             <div>
// // //                               <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Prize Pool</p>
// // //                               <p className="text-yellow-400 font-bold">${event.prize.toLocaleString()}</p>
// // //                             </div>
// // //                             <div>
// // //                               <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Draw Date</p>
// // //                               <p className="text-white text-sm">{new Date(event.drawDate).toLocaleDateString()}</p>
// // //                             </div>
// // //                             <div>
// // //                               <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Countdown</p>
// // //                               <CountdownDisplay drawDate={event.drawDate} />
// // //                             </div>
// // //                           </div>
// // //                         )}

// // //                         {/* Ticket Numbers */}
// // //                         <div>
// // //                           <p className="text-white/40 text-xs uppercase tracking-wider mb-2 flex items-center gap-1">
// // //                             <Hash className="w-3 h-3" /> Ticket Numbers
// // //                           </p>
// // //                           <div className="flex flex-wrap gap-2">
// // //                             {ticket.ticketNumbers.map((num, i) => (
// // //                               <button
// // //                                 key={i}
// // //                                 onClick={() => copyNumber(num)}
// // //                                 className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-sm transition-all"
// // //                                 style={{
// // //                                   background: copied === num ? 'rgba(16,185,129,0.2)' : 'rgba(124,58,237,0.15)',
// // //                                   border: `1px solid ${copied === num ? 'rgba(16,185,129,0.4)' : 'rgba(124,58,237,0.3)'}`,
// // //                                   color: copied === num ? '#10b981' : '#a78bfa',
// // //                                 }}
// // //                               >
// // //                                 {copied === num ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3 opacity-50" />}
// // //                                 {num}
// // //                               </button>
// // //                             ))}
// // //                           </div>
// // //                         </div>

// // //                         {/* Status */}
// // //                         <div className="flex items-center gap-2">
// // //                           <span style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 20, padding: '2px 10px' }} className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
// // //                             Active Entry
// // //                           </span>
// // //                           <span className="text-white/30 text-xs">Ticket #{ticket.id.slice(-6)}</span>
// // //                         </div>
// // //                       </div>
// // //                     </motion.div>
// // //                   )}
// // //                 </AnimatePresence>
// // //               </motion.div>
// // //             )
// // //           })}
// // //         </div>
// // //       </motion.div>
// // //     </motion.div>
// // //   )
// // // }

// // // // ─── Gift Card Top-Up Modal ───────────────────────────────────────────────────
// // // function TopUpModal({ onClose, onSubmit }) {
// // //   const [code, setCode] = useState('')
// // //   const [amount, setAmount] = useState('')
// // //   const [loading, setLoading] = useState(false)
// // //   const [step, setStep] = useState('form') // 'form' | 'pending'
// // //   const [cardImage, setCardImage] = useState(null)      // { file, preview, name, size }
// // //   const [dragOver, setDragOver] = useState(false)
// // //   const fileInputRef = useState(null)

// // //   const presets = [10, 25, 50, 100, 250]

// // //   const processFile = (file) => {
// // //     if (!file) return
// // //     const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/gif']
// // //     if (!allowed.includes(file.type) && !file.name.match(/\.(jpg|jpeg|png|webp|heic|gif)$/i)) {
// // //       toast.error('Please upload an image file (JPG, PNG, WEBP, HEIC)')
// // //       return
// // //     }
// // //     if (file.size > 10 * 1024 * 1024) {
// // //       toast.error('Image must be under 10MB')
// // //       return
// // //     }
// // //     const reader = new FileReader()
// // //     reader.onload = (e) => setCardImage({ file, preview: e.target.result, name: file.name, size: (file.size / 1024).toFixed(0) + ' KB' })
// // //     reader.readAsDataURL(file)
// // //   }

// // //   const handleFileChange = (e) => processFile(e.target.files[0])

// // //   const handleDrop = (e) => {
// // //     e.preventDefault()
// // //     setDragOver(false)
// // //     processFile(e.dataTransfer.files[0])
// // //   }

// // //   const handleSubmit = async () => {
// // //     if (!code.trim() || !amount) {
// // //       toast.error('Please enter a gift card code and amount')
// // //       return
// // //     }
// // //     setLoading(true)
// // //     await new Promise(r => setTimeout(r, 1200))
// // //     setLoading(false)
// // //     setStep('pending')
// // //     onSubmit({ code: code.trim(), amount: Number(amount), image: cardImage?.file || null })
// // //   }

// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0 }}
// // //       animate={{ opacity: 1 }}
// // //       exit={{ opacity: 0 }}
// // //       className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
// // //       onClick={onClose}
// // //     >
// // //       <motion.div
// // //         initial={{ opacity: 0, scale: 0.95, y: 20 }}
// // //         animate={{ opacity: 1, scale: 1, y: 0 }}
// // //         exit={{ opacity: 0, scale: 0.95, y: 20 }}
// // //         onClick={e => e.stopPropagation()}
// // //         className="w-full max-w-md max-h-[90vh] flex flex-col"
// // //         style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16 }}
// // //       >
// // //         {step === 'pending' ? (
// // //           <div className="p-8 text-center">
// // //             <motion.div
// // //               initial={{ scale: 0 }}
// // //               animate={{ scale: 1 }}
// // //               transition={{ type: 'spring', stiffness: 200 }}
// // //               className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
// // //               style={{ background: 'rgba(234,179,8,0.15)', border: '2px solid rgba(234,179,8,0.4)' }}
// // //             >
// // //               <Clock className="w-8 h-8 text-yellow-400" />
// // //             </motion.div>
// // //             <h3 className="text-xl font-bold text-white mb-2">Request Submitted!</h3>
// // //             <p className="text-white/50 text-sm mb-1">Your gift card has been sent for admin verification.</p>
// // //             <p className="text-white/40 text-xs mb-6">Funds will be added to your balance once approved. This usually takes a few minutes.</p>
// // //             <div style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)', borderRadius: 10 }} className="p-4 mb-4">
// // //               <div className="flex justify-between text-sm mb-2">
// // //                 <span className="text-white/50">Gift Card Code</span>
// // //                 <span className="text-white font-mono font-bold">{code}</span>
// // //               </div>
// // //               <div className="flex justify-between text-sm mb-2">
// // //                 <span className="text-white/50">Requested Amount</span>
// // //                 <span className="text-yellow-400 font-bold">${amount}</span>
// // //               </div>
// // //               <div className="flex justify-between text-sm">
// // //                 <span className="text-white/50">Card Image</span>
// // //                 <span className={`text-xs font-semibold ${cardImage ? 'text-emerald-400' : 'text-white/30'}`}>
// // //                   {cardImage ? '✓ Uploaded' : 'Not provided'}
// // //                 </span>
// // //               </div>
// // //             </div>
// // //             {/* Image thumbnail in success */}
// // //             {cardImage && (
// // //               <div className="mb-6 rounded-lg overflow-hidden border border-white/10">
// // //                 <img src={cardImage.preview} alt="Gift card" className="w-full h-28 object-cover" />
// // //               </div>
// // //             )}
// // //             <button onClick={onClose} className="w-full py-3 rounded-lg font-semibold text-white transition-all"
// // //               style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>
// // //               Done
// // //             </button>
// // //           </div>
// // //         ) : (
// // //           <>
// // //             {/* Header */}
// // //             <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
// // //               <div className="flex items-center gap-3">
// // //                 <div style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', borderRadius: 8, padding: 8 }}>
// // //                   <Gift className="w-5 h-5 text-white" />
// // //                 </div>
// // //                 <div>
// // //                   <h2 className="text-xl font-bold text-white">Top Up Balance</h2>
// // //                   <p className="text-white/50 text-sm">Redeem a gift card</p>
// // //                 </div>
// // //               </div>
// // //               <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
// // //                 <X className="w-5 h-5" />
// // //               </button>
// // //             </div>

// // //             {/* Scrollable body */}
// // //             <div className="overflow-y-auto flex-1 p-6 space-y-5">
// // //               {/* Gift Card Code */}
// // //               <div>
// // //                 <label className="block text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">Gift Card Code</label>
// // //                 <div className="relative">
// // //                   <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
// // //                   <input
// // //                     type="text"
// // //                     value={code}
// // //                     onChange={e => setCode(e.target.value.toUpperCase())}
// // //                     placeholder="XXXX-XXXX-XXXX-XXXX"
// // //                     className="w-full pl-10 pr-4 py-3 font-mono text-sm rounded-lg text-white placeholder-white/20 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
// // //                     style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
// // //                   />
// // //                 </div>
// // //               </div>

// // //               {/* Amount */}
// // //               <div>
// // //                 <label className="block text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">Amount ($)</label>
// // //                 <div className="flex gap-2 mb-2 flex-wrap">
// // //                   {presets.map(p => (
// // //                     <button
// // //                       key={p}
// // //                       onClick={() => setAmount(String(p))}
// // //                       className="px-3 py-1.5 rounded-lg text-sm font-semibold transition-all"
// // //                       style={{
// // //                         background: amount === String(p) ? 'rgba(124,58,237,0.3)' : 'rgba(255,255,255,0.06)',
// // //                         border: `1px solid ${amount === String(p) ? 'rgba(124,58,237,0.6)' : 'rgba(255,255,255,0.1)'}`,
// // //                         color: amount === String(p) ? '#a78bfa' : 'rgba(255,255,255,0.5)',
// // //                       }}
// // //                     >
// // //                       ${p}
// // //                     </button>
// // //                   ))}
// // //                 </div>
// // //                 <input
// // //                   type="number"
// // //                   value={amount}
// // //                   onChange={e => setAmount(e.target.value)}
// // //                   placeholder="Or enter custom amount"
// // //                   min="1"
// // //                   className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
// // //                   style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
// // //                 />
// // //               </div>

// // //               {/* Card Image Upload */}
// // //               <div>
// // //                 <label className="block text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
// // //                   Card Photo
// // //                   <span className="text-white/30 normal-case font-normal">(optional but speeds up verification)</span>
// // //                 </label>

// // //                 {cardImage ? (
// // //                   /* Preview */
// // //                   <div className="relative rounded-xl overflow-hidden" style={{ border: '1px solid rgba(16,185,129,0.3)' }}>
// // //                     <img src={cardImage.preview} alt="Gift card preview" className="w-full h-40 object-cover" />
// // //                     {/* Overlay info */}
// // //                     <div className="absolute bottom-0 inset-x-0 p-3 flex items-center justify-between"
// // //                       style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)' }}>
// // //                       <div className="flex items-center gap-2">
// // //                         <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
// // //                         <div>
// // //                           <p className="text-white text-xs font-semibold truncate max-w-[160px]">{cardImage.name}</p>
// // //                           <p className="text-white/40 text-xs">{cardImage.size}</p>
// // //                         </div>
// // //                       </div>
// // //                       <button
// // //                         onClick={() => setCardImage(null)}
// // //                         className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs text-white/60 hover:text-white transition-colors"
// // //                         style={{ background: 'rgba(255,255,255,0.1)' }}
// // //                       >
// // //                         <X className="w-3 h-3" /> Remove
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 ) : (
// // //                   /* Drop Zone */
// // //                   <div
// // //                     onDragOver={e => { e.preventDefault(); setDragOver(true) }}
// // //                     onDragLeave={() => setDragOver(false)}
// // //                     onDrop={handleDrop}
// // //                     onClick={() => document.getElementById('gc-file-input').click()}
// // //                     className="relative rounded-xl cursor-pointer transition-all"
// // //                     style={{
// // //                       border: `2px dashed ${dragOver ? 'rgba(124,58,237,0.7)' : 'rgba(255,255,255,0.12)'}`,
// // //                       background: dragOver ? 'rgba(124,58,237,0.08)' : 'rgba(255,255,255,0.03)',
// // //                       padding: '28px 16px',
// // //                     }}
// // //                   >
// // //                     <div className="flex flex-col items-center gap-2 text-center pointer-events-none">
// // //                       <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1"
// // //                         style={{ background: dragOver ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.06)' }}>
// // //                         {/* Upload icon via inline SVG to avoid new import */}
// // //                         <svg className="w-5 h-5" style={{ color: dragOver ? '#a78bfa' : 'rgba(255,255,255,0.3)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
// // //                           <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
// // //                         </svg>
// // //                       </div>
// // //                       <p className="text-white/60 text-sm font-semibold">
// // //                         {dragOver ? 'Drop to upload' : 'Drag & drop or click to upload'}
// // //                       </p>
// // //                       <p className="text-white/30 text-xs">JPG, PNG, WEBP, HEIC · Max 10MB</p>
// // //                     </div>
// // //                     <input
// // //                       id="gc-file-input"
// // //                       type="file"
// // //                       accept="image/*"
// // //                       className="hidden"
// // //                       onChange={handleFileChange}
// // //                     />
// // //                   </div>
// // //                 )}
// // //               </div>

// // //               {/* Info Banner */}
// // //               <div style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)', borderRadius: 10 }} className="p-3 flex gap-2 items-start">
// // //                 <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
// // //                 <p className="text-yellow-400/80 text-xs leading-relaxed">
// // //                   Gift cards are verified by an admin before funds are added. Uploading a clear photo of the physical card speeds up approval significantly.
// // //                 </p>
// // //               </div>

// // //               {/* Submit */}
// // //               <button
// // //                 onClick={handleSubmit}
// // //                 disabled={loading}
// // //                 className="w-full py-3 rounded-lg font-bold text-white text-sm uppercase tracking-wider transition-all disabled:opacity-50"
// // //                 style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}
// // //               >
// // //                 {loading ? 'Submitting...' : 'Submit for Verification'}
// // //               </button>
// // //             </div>
// // //           </>
// // //         )}
// // //       </motion.div>
// // //     </motion.div>
// // //   )
// // // }

// // // // ─── Main Dashboard ───────────────────────────────────────────────────────────
// // // export default function DashboardPage() {
// // //   const router = useRouter()
// // //   const [user, setUser] = useState(null)
// // //   const [events, setEvents] = useState([])
// // //   const [tickets, setTickets] = useState([])
// // //   const [stats, setStats] = useState({ totalTickets: 0, activeEntries: 0, totalSpent: 0, totalWinnings: 0 })
// // //   const [selectedEvent, setSelectedEvent] = useState(null)
// // //   const [ticketQuantity, setTicketQuantity] = useState(1)
// // //   const [loading, setLoading] = useState(true)
// // //   const [showTickets, setShowTickets] = useState(false)
// // //   const [showTopUp, setShowTopUp] = useState(false)

// // //   useEffect(() => {
// // //     const userData = localStorage.getItem('user')
// // //     if (!userData) { router.push('/auth/login'); return }
// // //     const parsedUser = JSON.parse(userData)
// // //     setUser(parsedUser)
// // //     setEvents([
// // //       { id: '1', name: 'Mega Jackpot 2026', description: 'Win life-changing prizes in our biggest draw ever', prize: 100000, ticketPrice: 50, totalTickets: 1000, soldTickets: 342, drawDate: new Date('2026-04-15T20:00:00'), status: 'active' },
// // //       { id: '2', name: 'Weekly Winners Draw', description: 'Your weekly chance to win big', prize: 5000, ticketPrice: 10, totalTickets: 500, soldTickets: 189, drawDate: new Date('2026-03-28T18:00:00'), status: 'active' },
// // //       { id: '3', name: 'Golden Fortune', description: 'Golden opportunity awaits', prize: 25000, ticketPrice: 25, totalTickets: 800, soldTickets: 621, drawDate: new Date('2026-03-31T19:00:00'), status: 'active' },
// // //     ])
// // //     setLoading(false)
// // //   }, [])

// // //   const handlePurchase = () => {
// // //     if (!selectedEvent) return
// // //     const totalCost = selectedEvent.ticketPrice * ticketQuantity
// // //     if (user.balance < totalCost) { toast.error('Insufficient balance'); return }

// // //     const newTicket = {
// // //       id: Date.now().toString(),
// // //       eventId: selectedEvent.id,
// // //       eventName: selectedEvent.name,
// // //       quantity: ticketQuantity,
// // //       totalCost,
// // //       purchaseDate: new Date(),
// // //       ticketNumbers: Array.from({ length: ticketQuantity }, () => Math.floor(Math.random() * 1000000).toString().padStart(6, '0')),
// // //     }

// // //     const newTickets = [...tickets, newTicket]
// // //     setTickets(newTickets)
// // //     const updatedUser = { ...user, balance: user.balance - totalCost }
// // //     setUser(updatedUser)
// // //     localStorage.setItem('user', JSON.stringify(updatedUser))
// // //     setStats({ totalTickets: newTickets.reduce((s, t) => s + t.quantity, 0), activeEntries: newTickets.length, totalSpent: newTickets.reduce((s, t) => s + t.totalCost, 0), totalWinnings: 0 })
// // //     toast.success(`Successfully purchased ${ticketQuantity} ticket(s)!`)
// // //     setSelectedEvent(null)
// // //     setTicketQuantity(1)
// // //   }

// // //   const handleTopUpSubmit = ({ code, amount }) => {
// // //     toast.success('Gift card submitted for admin review!')
// // //     // In production: POST to /api/topup with { code, amount }
// // //   }

// // //   const handleLogout = () => {
// // //     localStorage.removeItem('token')
// // //     localStorage.removeItem('user')
// // //     router.push('/')
// // //   }

// // //   if (loading || !user) return (
// // //     <div className="min-h-screen bg-dark-950 flex items-center justify-center">
// // //       <div className="text-white text-2xl font-display">Loading...</div>
// // //     </div>
// // //   )

// // //   const statCards = [
// // //     {
// // //       label: 'Total Tickets', value: stats.totalTickets, icon: Ticket,
// // //       color: 'from-blue-500 to-cyan-500', clickable: true,
// // //       onClick: () => setShowTickets(true),
// // //       hint: 'Click to view'
// // //     },
// // //     { label: 'Active Entries', value: stats.activeEntries, icon: Sparkles, color: 'from-purple-500 to-pink-500' },
// // //     { label: 'Total Spent', value: `$${stats.totalSpent}`, icon: DollarSign, color: 'from-orange-500 to-red-500' },
// // //     { label: 'Total Winnings', value: `$${stats.totalWinnings}`, icon: Trophy, color: 'from-green-500 to-emerald-500' },
// // //   ]

// // //   return (
// // //     <div className="min-h-screen bg-dark-950">
// // //       {/* Header */}
// // //       <header className="glass border-b border-white/10 sticky top-0 z-40">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
// // //           <div className="flex justify-between items-center">
// // //             <div className="flex items-center space-x-3">
// // //               <Trophy className="w-8 h-8 text-primary-500" />
// // //               <span className="text-2xl font-display gradient-text">WINVAULT</span>
// // //             </div>
// // //             <div className="flex items-center space-x-3">
// // //               {/* Top Up Button */}
// // //               <button
// // //                 onClick={() => setShowTopUp(true)}
// // //                 className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105"
// // //                 style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', color: 'white' }}
// // //               >
// // //                 <Gift className="w-4 h-4" />
// // //                 <span>Top Up</span>
// // //               </button>
// // //               <div className="glass px-4 py-2 border border-primary-500/30">
// // //                 <span className="text-white/60 text-sm mr-2">Balance:</span>
// // //                 <span className="text-accent-400 font-bold text-lg">${user.balance.toFixed(2)}</span>
// // //               </div>
// // //               <button onClick={handleLogout} className="btn-ghost flex items-center space-x-2">
// // //                 <LogOut className="w-4 h-4" />
// // //                 <span className="hidden sm:inline">Logout</span>
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </header>

// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// // //         {/* Welcome Banner */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           className="bg-gradient-to-r from-primary-600 to-accent-500 p-8 mb-8 relative overflow-hidden rounded-xl"
// // //         >
// // //           <div className="absolute inset-0 bg-mesh opacity-20" />
// // //           <div className="relative z-10">
// // //             <h1 className="text-4xl font-display text-white mb-2">WELCOME BACK, {user.name.toUpperCase()}!</h1>
// // //             <p className="text-white/90 text-lg">Your next big win is just a ticket away</p>
// // //           </div>
// // //         </motion.div>

// // //         {/* Stats Grid */}
// // //         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
// // //           {statCards.map((stat, index) => (
// // //             <motion.div
// // //               key={index}
// // //               initial={{ opacity: 0, scale: 0.9 }}
// // //               animate={{ opacity: 1, scale: 1 }}
// // //               transition={{ delay: index * 0.1 }}
// // //               onClick={stat.onClick}
// // //               className={`card p-6 relative overflow-hidden ${stat.clickable ? 'cursor-pointer group' : ''}`}
// // //               whileHover={stat.clickable ? { scale: 1.02, y: -2 } : {}}
// // //             >
// // //               {stat.clickable && (
// // //                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
// // //                   style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(6,182,212,0.08))' }} />
// // //               )}
// // //               <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 rounded-lg`}>
// // //                 <stat.icon className="w-6 h-6 text-white" />
// // //               </div>
// // //               <div className="text-3xl font-display gradient-text mb-1">{stat.value}</div>
// // //               <div className="text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
// // //               {stat.clickable && (
// // //                 <div className="flex items-center gap-1 mt-2 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
// // //                   <span>{stat.hint}</span>
// // //                   <ChevronRight className="w-3 h-3" />
// // //                 </div>
// // //               )}
// // //             </motion.div>
// // //           ))}
// // //         </div>

// // //         {/* Active Events */}
// // //         <div className="mb-8">
// // //           <h2 className="text-3xl font-display text-white mb-6">ACTIVE LOTTERY EVENTS</h2>
// // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //             {events.map((event, index) => {
// // //               const availability = ((event.totalTickets - event.soldTickets) / event.totalTickets * 100).toFixed(0)
// // //               return (
// // //                 <motion.div
// // //                   key={event.id}
// // //                   initial={{ opacity: 0, y: 20 }}
// // //                   animate={{ opacity: 1, y: 0 }}
// // //                   transition={{ delay: index * 0.1 }}
// // //                   className="card overflow-hidden"
// // //                 >
// // //                   <div className="bg-gradient-to-r from-primary-600 to-accent-500 p-6">
// // //                     <div className="text-4xl font-display text-white mb-1">${event.prize.toLocaleString()}</div>
// // //                     <div className="text-white/90 text-lg">{event.name}</div>
// // //                   </div>

// // //                   <div className="p-6">
// // //                     <p className="text-white/60 mb-4 text-sm">{event.description}</p>

// // //                     <div className="grid grid-cols-3 gap-3 mb-4">
// // //                       <div className="text-center">
// // //                         <div className="text-lg font-bold text-accent-400">${event.ticketPrice}</div>
// // //                         <div className="text-xs text-white/50 uppercase">Per Ticket</div>
// // //                       </div>
// // //                       <div className="text-center">
// // //                         <div className="text-lg font-bold text-primary-400">{event.soldTickets}/{event.totalTickets}</div>
// // //                         <div className="text-xs text-white/50 uppercase">Sold</div>
// // //                       </div>
// // //                       <div className="text-center">
// // //                         <div className="text-lg font-bold text-white">{availability}%</div>
// // //                         <div className="text-xs text-white/50 uppercase">Available</div>
// // //                       </div>
// // //                     </div>

// // //                     {/* Countdown */}
// // //                     <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8 }} className="p-3 mb-4">
// // //                       <div className="flex items-center justify-between">
// // //                         <div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wider">
// // //                           <Clock className="w-3 h-3" />
// // //                           <span>Draw In</span>
// // //                         </div>
// // //                         <CountdownDisplay drawDate={event.drawDate} />
// // //                       </div>
// // //                     </div>

// // //                     <div className="flex items-center gap-1.5 text-white/40 text-xs mb-4">
// // //                       <Calendar className="w-3 h-3" />
// // //                       <span>{new Date(event.drawDate).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })} · {new Date(event.drawDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
// // //                     </div>

// // //                     <button onClick={() => setSelectedEvent(event)} className="btn-primary w-full">
// // //                       BUY TICKETS
// // //                     </button>
// // //                   </div>
// // //                 </motion.div>
// // //               )
// // //             })}
// // //           </div>
// // //         </div>

// // //         {/* Ticket History Preview */}
// // //         <div>
// // //           <div className="flex items-center justify-between mb-6">
// // //             <h2 className="text-3xl font-display text-white">YOUR TICKET HISTORY</h2>
// // //             {tickets.length > 0 && (
// // //               <button
// // //                 onClick={() => setShowTickets(true)}
// // //                 className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
// // //               >
// // //                 View All <ChevronRight className="w-4 h-4" />
// // //               </button>
// // //             )}
// // //           </div>

// // //           {tickets.length === 0 ? (
// // //             <div className="card p-12 text-center">
// // //               <Ticket className="w-16 h-16 text-white/20 mx-auto mb-4" />
// // //               <p className="text-white/60 text-lg">No tickets purchased yet</p>
// // //               <p className="text-white/40">Start playing today and win big!</p>
// // //             </div>
// // //           ) : (
// // //             <div className="space-y-3">
// // //               {tickets.slice(0, 3).map((ticket) => (
// // //                 <motion.div
// // //                   key={ticket.id}
// // //                   initial={{ opacity: 0, x: -10 }}
// // //                   animate={{ opacity: 1, x: 0 }}
// // //                   className="card p-4 flex items-center justify-between cursor-pointer hover:border-white/20 transition-colors"
// // //                   onClick={() => setShowTickets(true)}
// // //                   style={{ border: '1px solid rgba(255,255,255,0.06)' }}
// // //                 >
// // //                   <div className="flex items-center gap-3">
// // //                     <div style={{ background: 'rgba(124,58,237,0.2)', borderRadius: 8, padding: 8 }}>
// // //                       <Ticket className="w-4 h-4 text-purple-400" />
// // //                     </div>
// // //                     <div>
// // //                       <p className="text-white font-semibold text-sm">{ticket.eventName}</p>
// // //                       <p className="text-white/40 text-xs">{ticket.quantity} ticket{ticket.quantity > 1 ? 's' : ''} · {new Date(ticket.purchaseDate).toLocaleDateString()}</p>
// // //                     </div>
// // //                   </div>
// // //                   <div className="flex items-center gap-3">
// // //                     <span className="text-emerald-400 font-bold">${ticket.totalCost}</span>
// // //                     <ChevronRight className="w-4 h-4 text-white/30" />
// // //                   </div>
// // //                 </motion.div>
// // //               ))}
// // //               {tickets.length > 3 && (
// // //                 <button onClick={() => setShowTickets(true)} className="w-full py-3 text-white/40 text-sm hover:text-white/60 transition-colors">
// // //                   +{tickets.length - 3} more tickets
// // //                 </button>
// // //               )}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {/* Purchase Modal */}
// // //       <AnimatePresence>
// // //         {selectedEvent && (
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
// // //           >
// // //             <motion.div
// // //               initial={{ opacity: 0, scale: 0.9 }}
// // //               animate={{ opacity: 1, scale: 1 }}
// // //               exit={{ opacity: 0, scale: 0.9 }}
// // //               className="glass max-w-md w-full p-8 border-2 border-white/10 rounded-xl"
// // //             >
// // //               <div className="flex justify-between items-start mb-6">
// // //                 <h2 className="text-3xl font-display text-white">PURCHASE TICKETS</h2>
// // //                 <button onClick={() => setSelectedEvent(null)} className="text-white/40 hover:text-white transition-colors">
// // //                   <X className="w-5 h-5" />
// // //                 </button>
// // //               </div>

// // //               <div className="bg-dark-900 p-4 mb-6 border-l-4 border-primary-500 rounded-r-lg">
// // //                 <h3 className="text-xl font-display text-white mb-1">{selectedEvent.name}</h3>
// // //                 <div className="text-white/60 text-sm">${selectedEvent.prize.toLocaleString()} Prize</div>
// // //                 <div className="text-accent-400 font-bold mt-1">${selectedEvent.ticketPrice} per ticket</div>
// // //               </div>

// // //               {/* Countdown in modal */}
// // //               <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8 }} className="p-3 mb-6 flex items-center justify-between">
// // //                 <div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wider">
// // //                   <Clock className="w-3 h-3" /> Draw In
// // //                 </div>
// // //                 <CountdownDisplay drawDate={selectedEvent.drawDate} />
// // //               </div>

// // //               <div className="mb-6">
// // //                 <label className="block text-white/70 mb-3 text-sm uppercase tracking-wider font-semibold">Number of Tickets</label>
// // //                 <div className="flex items-center space-x-4">
// // //                   <button onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
// // //                     className="w-12 h-12 bg-dark-900 border-2 border-dark-800 text-white font-bold text-xl hover:border-primary-500 transition-colors rounded-lg">-</button>
// // //                   <div className="text-4xl font-display text-white min-w-[80px] text-center">{ticketQuantity}</div>
// // //                   <button onClick={() => setTicketQuantity(ticketQuantity + 1)}
// // //                     className="w-12 h-12 bg-dark-900 border-2 border-dark-800 text-white font-bold text-xl hover:border-primary-500 transition-colors rounded-lg">+</button>
// // //                 </div>
// // //               </div>

// // //               <div className="bg-dark-900 p-6 mb-6 text-center border-2 border-primary-500/30 rounded-lg">
// // //                 <div className="text-sm text-white/60 uppercase tracking-wider mb-2">Total Amount</div>
// // //                 <div className="text-5xl font-display gradient-text">${(selectedEvent.ticketPrice * ticketQuantity).toFixed(2)}</div>
// // //                 <div className="text-white/40 text-sm mt-1">Your balance: ${user.balance.toFixed(2)}</div>
// // //               </div>

// // //               <div className="flex space-x-4">
// // //                 <button onClick={() => setSelectedEvent(null)} className="btn-secondary flex-1">Cancel</button>
// // //                 <button onClick={handlePurchase} className="btn-primary flex-1">Confirm Purchase</button>
// // //               </div>
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>

// // //       {/* Ticket Detail Modal */}
// // //       <AnimatePresence>
// // //         {showTickets && (
// // //           <TicketModal tickets={tickets} events={events} onClose={() => setShowTickets(false)} />
// // //         )}
// // //       </AnimatePresence>

// // //       {/* Top Up Modal */}
// // //       <AnimatePresence>
// // //         {showTopUp && (
// // //           <TopUpModal onClose={() => setShowTopUp(false)} onSubmit={handleTopUpSubmit} />
// // //         )}
// // //       </AnimatePresence>
// // //     </div>
// // //   )
// // // }


// // 'use client'

// // import { useState, useEffect, useCallback } from 'react'
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
// //         <div className="flex items-center justify-between p-6 border-b border-white/10">
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
// //         </div>

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
// //   const [code, setCode] = useState('')
// //   const [amount, setAmount] = useState('')
// //   const [loading, setLoading] = useState(false)
// //   const [step, setStep] = useState('form') // 'form' | 'pending'
// //   const [cardImage, setCardImage] = useState(null)      // { file, preview, name, size }
// //   const [dragOver, setDragOver] = useState(false)
// //   const fileInputRef = useState(null)

// //   const presets = [10, 25, 50, 100, 250]

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
// //     if (!code.trim() || !amount) {
// //       toast.error('Please enter a gift card code and amount')
// //       return
// //     }
// //     setLoading(true)
// //     await new Promise(r => setTimeout(r, 1200))
// //     setLoading(false)
// //     setStep('pending')
// //     onSubmit({ code: code.trim(), amount: Number(amount), image: cardImage?.file || null })
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
// //       <motion.div
// //         initial={{ opacity: 0, scale: 0.95, y: 20 }}
// //         animate={{ opacity: 1, scale: 1, y: 0 }}
// //         exit={{ opacity: 0, scale: 0.95, y: 20 }}
// //         className="w-full max-w-md flex flex-col"
// //         style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16 }}
// //       >
// //         {step === 'pending' ? (
// //           <div className="p-8 text-center">
// //             <motion.div
// //               initial={{ scale: 0 }}
// //               animate={{ scale: 1 }}
// //               transition={{ type: 'spring', stiffness: 200 }}
// //               className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
// //               style={{ background: 'rgba(234,179,8,0.15)', border: '2px solid rgba(234,179,8,0.4)' }}
// //             >
// //               <Clock className="w-8 h-8 text-yellow-400" />
// //             </motion.div>
// //             <h3 className="text-xl font-bold text-white mb-2">Request Submitted!</h3>
// //             <p className="text-white/50 text-sm mb-1">Your gift card has been sent for admin verification.</p>
// //             <p className="text-white/40 text-xs mb-6">Funds will be added to your balance once approved. This usually takes a few minutes.</p>
// //             <div style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)', borderRadius: 10 }} className="p-4 mb-4">
// //               <div className="flex justify-between text-sm mb-2">
// //                 <span className="text-white/50">Gift Card Code</span>
// //                 <span className="text-white font-mono font-bold">{code}</span>
// //               </div>
// //               <div className="flex justify-between text-sm mb-2">
// //                 <span className="text-white/50">Requested Amount</span>
// //                 <span className="text-yellow-400 font-bold">${amount}</span>
// //               </div>
// //               <div className="flex justify-between text-sm">
// //                 <span className="text-white/50">Card Image</span>
// //                 <span className={`text-xs font-semibold ${cardImage ? 'text-emerald-400' : 'text-white/30'}`}>
// //                   {cardImage ? '✓ Uploaded' : 'Not provided'}
// //                 </span>
// //               </div>
// //             </div>
// //             {/* Image thumbnail in success */}
// //             {cardImage && (
// //               <div className="mb-6 rounded-lg overflow-hidden border border-white/10">
// //                 <img src={cardImage.preview} alt="Gift card" className="w-full h-28 object-cover" />
// //               </div>
// //             )}
// //             <button onClick={onClose} className="w-full py-3 rounded-lg font-semibold text-white transition-all"
// //               style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>
// //               Done
// //             </button>
// //           </div>
// //         ) : (
// //           <>
// //             {/* Header */}
// //             <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
// //               <div className="flex items-center gap-3">
// //                 <div style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', borderRadius: 8, padding: 8 }}>
// //                   <Gift className="w-5 h-5 text-white" />
// //                 </div>
// //                 <div>
// //                   <h2 className="text-xl font-bold text-white">Top Up Balance</h2>
// //                   <p className="text-white/50 text-sm">Redeem a gift card</p>
// //                 </div>
// //               </div>
// //               <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
// //                 <X className="w-5 h-5" />
// //               </button>
// //             </div>

// //             {/* Body */}
// //             <div className="p-6 space-y-5">
// //               {/* Gift Card Code */}
// //               <div>
// //                 <label className="block text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">Gift Card Code</label>
// //                 <div className="relative">
// //                   <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
// //                   <input
// //                     type="text"
// //                     value={code}
// //                     onChange={e => setCode(e.target.value.toUpperCase())}
// //                     placeholder="XXXX-XXXX-XXXX-XXXX"
// //                     className="w-full pl-10 pr-4 py-3 font-mono text-sm rounded-lg text-white placeholder-white/20 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
// //                     style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
// //                   />
// //                 </div>
// //               </div>

// //               {/* Amount */}
// //               <div>
// //                 <label className="block text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">Amount ($)</label>
// //                 <div className="flex gap-2 mb-2 flex-wrap">
// //                   {presets.map(p => (
// //                     <button
// //                       key={p}
// //                       onClick={() => setAmount(String(p))}
// //                       className="px-3 py-1.5 rounded-lg text-sm font-semibold transition-all"
// //                       style={{
// //                         background: amount === String(p) ? 'rgba(124,58,237,0.3)' : 'rgba(255,255,255,0.06)',
// //                         border: `1px solid ${amount === String(p) ? 'rgba(124,58,237,0.6)' : 'rgba(255,255,255,0.1)'}`,
// //                         color: amount === String(p) ? '#a78bfa' : 'rgba(255,255,255,0.5)',
// //                       }}
// //                     >
// //                       ${p}
// //                     </button>
// //                   ))}
// //                 </div>
// //                 <input
// //                   type="number"
// //                   value={amount}
// //                   onChange={e => setAmount(e.target.value)}
// //                   placeholder="Or enter custom amount"
// //                   min="1"
// //                   className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
// //                   style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
// //                 />
// //               </div>

// //               {/* Card Image Upload */}
// //               <div>
// //                 <label className="block text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
// //                   Card Photo
// //                   <span className="text-white/30 normal-case font-normal">(optional but speeds up verification)</span>
// //                 </label>

// //                 {cardImage ? (
// //                   /* Preview */
// //                   <div className="relative rounded-xl overflow-hidden" style={{ border: '1px solid rgba(16,185,129,0.3)' }}>
// //                     <img src={cardImage.preview} alt="Gift card preview" className="w-full h-40 object-cover" />
// //                     {/* Overlay info */}
// //                     <div className="absolute bottom-0 inset-x-0 p-3 flex items-center justify-between"
// //                       style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)' }}>
// //                       <div className="flex items-center gap-2">
// //                         <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
// //                         <div>
// //                           <p className="text-white text-xs font-semibold truncate max-w-[160px]">{cardImage.name}</p>
// //                           <p className="text-white/40 text-xs">{cardImage.size}</p>
// //                         </div>
// //                       </div>
// //                       <button
// //                         onClick={() => setCardImage(null)}
// //                         className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs text-white/60 hover:text-white transition-colors"
// //                         style={{ background: 'rgba(255,255,255,0.1)' }}
// //                       >
// //                         <X className="w-3 h-3" /> Remove
// //                       </button>
// //                     </div>
// //                   </div>
// //                 ) : (
// //                   /* Drop Zone */
// //                   <div
// //                     onDragOver={e => { e.preventDefault(); setDragOver(true) }}
// //                     onDragLeave={() => setDragOver(false)}
// //                     onDrop={handleDrop}
// //                     onClick={() => document.getElementById('gc-file-input').click()}
// //                     className="relative rounded-xl cursor-pointer transition-all"
// //                     style={{
// //                       border: `2px dashed ${dragOver ? 'rgba(124,58,237,0.7)' : 'rgba(255,255,255,0.12)'}`,
// //                       background: dragOver ? 'rgba(124,58,237,0.08)' : 'rgba(255,255,255,0.03)',
// //                       padding: '28px 16px',
// //                     }}
// //                   >
// //                     <div className="flex flex-col items-center gap-2 text-center pointer-events-none">
// //                       <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1"
// //                         style={{ background: dragOver ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.06)' }}>
// //                         {/* Upload icon via inline SVG to avoid new import */}
// //                         <svg className="w-5 h-5" style={{ color: dragOver ? '#a78bfa' : 'rgba(255,255,255,0.3)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
// //                           <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
// //                         </svg>
// //                       </div>
// //                       <p className="text-white/60 text-sm font-semibold">
// //                         {dragOver ? 'Drop to upload' : 'Drag & drop or click to upload'}
// //                       </p>
// //                       <p className="text-white/30 text-xs">JPG, PNG, WEBP, HEIC · Max 10MB</p>
// //                     </div>
// //                     <input
// //                       id="gc-file-input"
// //                       type="file"
// //                       accept="image/*"
// //                       className="hidden"
// //                       onChange={handleFileChange}
// //                     />
// //                   </div>
// //                 )}
// //               </div>

// //               {/* Info Banner */}
// //               <div style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)', borderRadius: 10 }} className="p-3 flex gap-2 items-start">
// //                 <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
// //                 <p className="text-yellow-400/80 text-xs leading-relaxed">
// //                   Gift cards are verified by an admin before funds are added. Uploading a clear photo of the physical card speeds up approval significantly.
// //                 </p>
// //               </div>

// //               {/* Submit */}
// //               <button
// //                 onClick={handleSubmit}
// //                 disabled={loading}
// //                 className="w-full py-3 rounded-lg font-bold text-white text-sm uppercase tracking-wider transition-all disabled:opacity-50"
// //                 style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}
// //               >
// //                 {loading ? 'Submitting...' : 'Submit for Verification'}
// //               </button>
// //             </div>
// //           </>
// //         )}
// //       </motion.div>
// //       </div>
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

// import { useState, useEffect, useCallback } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Trophy, Ticket, Sparkles, LogOut, Calendar, DollarSign, X, Gift, Clock, ChevronRight, Hash, CreditCard, CheckCircle, AlertCircle, Copy, Star } from 'lucide-react'
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
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.95, y: 20 }}
//         onClick={e => e.stopPropagation()}
//         className="w-full max-w-2xl max-h-[85vh] flex flex-col"
//         style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16 }}
//       >
//         {/* Header */}
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
//           <button onClick={onClose} className="text-white/40 hover:text-white transition-colors p-1">
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Content */}
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
//               <motion.div
//                 key={ticket.id}
//                 layout
//                 style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12 }}
//               >
//                 {/* Ticket Summary Row */}
//                 <button
//                   onClick={() => setSelected(isOpen ? null : ticket.id)}
//                   className="w-full flex items-center justify-between p-4 text-left"
//                 >
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

//                 {/* Expanded Detail */}
//                 <AnimatePresence>
//                   {isOpen && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: 'auto', opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       style={{ overflow: 'hidden' }}
//                     >
//                       <div className="px-4 pb-4 border-t border-white/5 pt-4 space-y-4">
//                         {/* Event info */}
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

//                         {/* Ticket Numbers */}
//                         <div>
//                           <p className="text-white/40 text-xs uppercase tracking-wider mb-2 flex items-center gap-1">
//                             <Hash className="w-3 h-3" /> Ticket Numbers
//                           </p>
//                           <div className="flex flex-wrap gap-2">
//                             {ticket.ticketNumbers.map((num, i) => (
//                               <button
//                                 key={i}
//                                 onClick={() => copyNumber(num)}
//                                 className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-sm transition-all"
//                                 style={{
//                                   background: copied === num ? 'rgba(16,185,129,0.2)' : 'rgba(124,58,237,0.15)',
//                                   border: `1px solid ${copied === num ? 'rgba(16,185,129,0.4)' : 'rgba(124,58,237,0.3)'}`,
//                                   color: copied === num ? '#10b981' : '#a78bfa',
//                                 }}
//                               >
//                                 {copied === num ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3 opacity-50" />}
//                                 {num}
//                               </button>
//                             ))}
//                           </div>
//                         </div>

//                         {/* Status */}
//                         <div className="flex items-center gap-2">
//                           <span style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 20, padding: '2px 10px' }} className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
//                             Active Entry
//                           </span>
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
//   const [code, setCode] = useState('')
//   const [amount, setAmount] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [step, setStep] = useState('form') // 'form' | 'pending'
//   const [cardImage, setCardImage] = useState(null)      // { file, preview, name, size }
//   const [dragOver, setDragOver] = useState(false)
//   const fileInputRef = useState(null)

//   const cardDenominations = [
//     { value: 10,  color: ['#1a1a2e', '#16213e'], accent: '#60a5fa', label: 'Starter'   },
//     { value: 25,  color: ['#1a2e1a', '#16321e'], accent: '#4ade80', label: 'Popular'   },
//     { value: 50,  color: ['#2e1a1a', '#321616'], accent: '#f97316', label: 'Classic'   },
//     { value: 100, color: ['#2a1a2e', '#24163e'], accent: '#c084fc', label: 'Premium'   },
//     { value: 250, color: ['#2e2a1a', '#3e3216'], accent: '#fbbf24', label: 'Gold'      },
//     { value: 500, color: ['#1a2a2e', '#16363e'], accent: '#22d3ee', label: 'Platinum'  },
//   ]

//   const processFile = (file) => {
//     if (!file) return
//     const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/gif']
//     if (!allowed.includes(file.type) && !file.name.match(/\.(jpg|jpeg|png|webp|heic|gif)$/i)) {
//       toast.error('Please upload an image file (JPG, PNG, WEBP, HEIC)')
//       return
//     }
//     if (file.size > 10 * 1024 * 1024) {
//       toast.error('Image must be under 10MB')
//       return
//     }
//     const reader = new FileReader()
//     reader.onload = (e) => setCardImage({ file, preview: e.target.result, name: file.name, size: (file.size / 1024).toFixed(0) + ' KB' })
//     reader.readAsDataURL(file)
//   }

//   const handleFileChange = (e) => processFile(e.target.files[0])

//   const handleDrop = (e) => {
//     e.preventDefault()
//     setDragOver(false)
//     processFile(e.dataTransfer.files[0])
//   }

//   const handleSubmit = async () => {
//     if (!code.trim() || !amount) {
//       toast.error('Please enter a gift card code and amount')
//       return
//     }
//     setLoading(true)
//     await new Promise(r => setTimeout(r, 1200))
//     setLoading(false)
//     setStep('pending')
//     onSubmit({ code: code.trim(), amount: Number(amount), image: cardImage?.file || null })
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto"
//       onClick={onClose}
//     >
//       <div className="min-h-full flex items-center justify-center p-4 py-8" onClick={e => e.stopPropagation()}>
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.95, y: 20 }}
//         className="w-full max-w-md flex flex-col"
//         style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16 }}
//       >
//         {step === 'pending' ? (
//           <div className="p-8 text-center">
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ type: 'spring', stiffness: 200 }}
//               className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
//               style={{ background: 'rgba(234,179,8,0.15)', border: '2px solid rgba(234,179,8,0.4)' }}
//             >
//               <Clock className="w-8 h-8 text-yellow-400" />
//             </motion.div>
//             <h3 className="text-xl font-bold text-white mb-2">Request Submitted!</h3>
//             <p className="text-white/50 text-sm mb-1">Your gift card has been sent for admin verification.</p>
//             <p className="text-white/40 text-xs mb-6">Funds will be added to your balance once approved. This usually takes a few minutes.</p>
//             <div style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)', borderRadius: 10 }} className="p-4 mb-4">
//               <div className="flex justify-between text-sm mb-2">
//                 <span className="text-white/50">Gift Card Code</span>
//                 <span className="text-white font-mono font-bold">{code}</span>
//               </div>
//               <div className="flex justify-between text-sm mb-2">
//                 <span className="text-white/50">Requested Amount</span>
//                 <span className="text-yellow-400 font-bold">${amount}</span>
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span className="text-white/50">Card Image</span>
//                 <span className={`text-xs font-semibold ${cardImage ? 'text-emerald-400' : 'text-white/30'}`}>
//                   {cardImage ? '✓ Uploaded' : 'Not provided'}
//                 </span>
//               </div>
//             </div>
//             {/* Image thumbnail in success */}
//             {cardImage && (
//               <div className="mb-6 rounded-lg overflow-hidden border border-white/10">
//                 <img src={cardImage.preview} alt="Gift card" className="w-full h-28 object-cover" />
//               </div>
//             )}
//             <button onClick={onClose} className="w-full py-3 rounded-lg font-semibold text-white transition-all"
//               style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>
//               Done
//             </button>
//           </div>
//         ) : (
//           <>
//             {/* Header */}
//             <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
//               <div className="flex items-center gap-3">
//                 <div style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', borderRadius: 8, padding: 8 }}>
//                   <Gift className="w-5 h-5 text-white" />
//                 </div>
//                 <div>
//                   <h2 className="text-xl font-bold text-white">Top Up Balance</h2>
//                   <p className="text-white/50 text-sm">Redeem a gift card</p>
//                 </div>
//               </div>
//               <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             {/* Body */}
//             <div className="p-6 space-y-5">
//               {/* Gift Card Code */}
//               <div>
//                 <label className="block text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">Gift Card Code</label>
//                 <div className="relative">
//                   <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
//                   <input
//                     type="text"
//                     value={code}
//                     onChange={e => setCode(e.target.value.toUpperCase())}
//                     placeholder="XXXX-XXXX-XXXX-XXXX"
//                     className="w-full pl-10 pr-4 py-3 font-mono text-sm rounded-lg text-white placeholder-white/20 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
//                     style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
//                   />
//                 </div>
//               </div>

//               {/* Gift Card Denomination Picker */}
//               <div>
//                 <label className="block text-white/60 text-xs uppercase tracking-wider mb-3 font-semibold">Select Card Value</label>
//                 <div className="grid grid-cols-3 gap-2 mb-3">
//                   {cardDenominations.map(({ value, color, accent, label }) => {
//                     const selected = amount === String(value)
//                     return (
//                       <button
//                         key={value}
//                         onClick={() => setAmount(String(value))}
//                         className="relative rounded-xl overflow-hidden transition-all"
//                         style={{
//                           background: `linear-gradient(135deg, ${color[0]}, ${color[1]})`,
//                           border: selected ? `2px solid ${accent}` : '2px solid rgba(255,255,255,0.07)',
//                           boxShadow: selected ? `0 0 16px ${accent}44` : 'none',
//                           transform: selected ? 'scale(1.04)' : 'scale(1)',
//                           aspectRatio: '1.586 / 1', // standard card ratio
//                           padding: 0,
//                         }}
//                       >
//                         {/* Card shine */}
//                         <div className="absolute inset-0 pointer-events-none"
//                           style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)' }} />

//                         {/* Chip */}
//                         <div className="absolute top-2 left-2.5 w-4 h-3 rounded-sm"
//                           style={{ background: `linear-gradient(135deg, ${accent}88, ${accent}44)`, border: `1px solid ${accent}66` }} />

//                         {/* Selected check */}
//                         {selected && (
//                           <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full flex items-center justify-center"
//                             style={{ background: accent }}>
//                             <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
//                               <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                             </svg>
//                           </div>
//                         )}

//                         {/* Amount */}
//                         <div className="absolute bottom-2 inset-x-0 px-2.5 flex items-end justify-between">
//                           <div>
//                             <p className="text-white/40 text-[9px] uppercase tracking-wider leading-none mb-0.5">{label}</p>
//                             <p className="font-bold leading-none" style={{ color: accent, fontSize: 15 }}>${value}</p>
//                           </div>
//                           {/* Decorative circles */}
//                           <div className="flex -space-x-1">
//                             <div className="w-4 h-4 rounded-full opacity-40" style={{ background: accent }} />
//                             <div className="w-4 h-4 rounded-full opacity-20" style={{ background: accent }} />
//                           </div>
//                         </div>
//                       </button>
//                     )
//                   })}
//                 </div>

//                 {/* Custom amount */}
//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-sm font-bold">$</span>
//                   <input
//                     type="number"
//                     value={cardDenominations.some(d => String(d.value) === amount) ? '' : amount}
//                     onChange={e => setAmount(e.target.value)}
//                     onFocus={() => { if (cardDenominations.some(d => String(d.value) === amount)) setAmount('') }}
//                     placeholder="Custom amount"
//                     min="1"
//                     className="w-full pl-7 pr-4 py-2.5 rounded-lg text-sm text-white placeholder-white/20 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
//                     style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
//                   />
//                 </div>

//                 {/* Selected summary */}
//                 {amount && (
//                   <p className="text-xs mt-2 text-center" style={{ color: cardDenominations.find(d => String(d.value) === amount)?.accent || 'rgba(255,255,255,0.4)' }}>
//                     {cardDenominations.find(d => String(d.value) === amount)
//                       ? `${cardDenominations.find(d => String(d.value) === amount).label} card · $${amount} selected`
//                       : `Custom amount · $${amount} selected`}
//                   </p>
//                 )}
//               </div>

//               {/* Card Image Upload */}
//               <div>
//                 <label className="block text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
//                   Card Photo
//                   <span className="text-white/30 normal-case font-normal">(optional but speeds up verification)</span>
//                 </label>

//                 {cardImage ? (
//                   /* Preview */
//                   <div className="relative rounded-xl overflow-hidden" style={{ border: '1px solid rgba(16,185,129,0.3)' }}>
//                     <img src={cardImage.preview} alt="Gift card preview" className="w-full h-40 object-cover" />
//                     {/* Overlay info */}
//                     <div className="absolute bottom-0 inset-x-0 p-3 flex items-center justify-between"
//                       style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)' }}>
//                       <div className="flex items-center gap-2">
//                         <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
//                         <div>
//                           <p className="text-white text-xs font-semibold truncate max-w-[160px]">{cardImage.name}</p>
//                           <p className="text-white/40 text-xs">{cardImage.size}</p>
//                         </div>
//                       </div>
//                       <button
//                         onClick={() => setCardImage(null)}
//                         className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs text-white/60 hover:text-white transition-colors"
//                         style={{ background: 'rgba(255,255,255,0.1)' }}
//                       >
//                         <X className="w-3 h-3" /> Remove
//                       </button>
//                     </div>
//                   </div>
//                 ) : (
//                   /* Drop Zone */
//                   <div
//                     onDragOver={e => { e.preventDefault(); setDragOver(true) }}
//                     onDragLeave={() => setDragOver(false)}
//                     onDrop={handleDrop}
//                     onClick={() => document.getElementById('gc-file-input').click()}
//                     className="relative rounded-xl cursor-pointer transition-all"
//                     style={{
//                       border: `2px dashed ${dragOver ? 'rgba(124,58,237,0.7)' : 'rgba(255,255,255,0.12)'}`,
//                       background: dragOver ? 'rgba(124,58,237,0.08)' : 'rgba(255,255,255,0.03)',
//                       padding: '28px 16px',
//                     }}
//                   >
//                     <div className="flex flex-col items-center gap-2 text-center pointer-events-none">
//                       <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1"
//                         style={{ background: dragOver ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.06)' }}>
//                         {/* Upload icon via inline SVG to avoid new import */}
//                         <svg className="w-5 h-5" style={{ color: dragOver ? '#a78bfa' : 'rgba(255,255,255,0.3)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
//                           <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
//                         </svg>
//                       </div>
//                       <p className="text-white/60 text-sm font-semibold">
//                         {dragOver ? 'Drop to upload' : 'Drag & drop or click to upload'}
//                       </p>
//                       <p className="text-white/30 text-xs">JPG, PNG, WEBP, HEIC · Max 10MB</p>
//                     </div>
//                     <input
//                       id="gc-file-input"
//                       type="file"
//                       accept="image/*"
//                       className="hidden"
//                       onChange={handleFileChange}
//                     />
//                   </div>
//                 )}
//               </div>

//               {/* Info Banner */}
//               <div style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)', borderRadius: 10 }} className="p-3 flex gap-2 items-start">
//                 <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
//                 <p className="text-yellow-400/80 text-xs leading-relaxed">
//                   Gift cards are verified by an admin before funds are added. Uploading a clear photo of the physical card speeds up approval significantly.
//                 </p>
//               </div>

//               {/* Submit */}
//               <button
//                 onClick={handleSubmit}
//                 disabled={loading}
//                 className="w-full py-3 rounded-lg font-bold text-white text-sm uppercase tracking-wider transition-all disabled:opacity-50"
//                 style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}
//               >
//                 {loading ? 'Submitting...' : 'Submit for Verification'}
//               </button>
//             </div>
//           </>
//         )}
//       </motion.div>
//       </div>
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
//     const parsedUser = JSON.parse(userData)
//     setUser(parsedUser)
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
//       id: Date.now().toString(),
//       eventId: selectedEvent.id,
//       eventName: selectedEvent.name,
//       quantity: ticketQuantity,
//       totalCost,
//       purchaseDate: new Date(),
//       ticketNumbers: Array.from({ length: ticketQuantity }, () => Math.floor(Math.random() * 1000000).toString().padStart(6, '0')),
//     }

//     const newTickets = [...tickets, newTicket]
//     setTickets(newTickets)
//     const updatedUser = { ...user, balance: user.balance - totalCost }
//     setUser(updatedUser)
//     localStorage.setItem('user', JSON.stringify(updatedUser))
//     setStats({ totalTickets: newTickets.reduce((s, t) => s + t.quantity, 0), activeEntries: newTickets.length, totalSpent: newTickets.reduce((s, t) => s + t.totalCost, 0), totalWinnings: 0 })
//     toast.success(`Successfully purchased ${ticketQuantity} ticket(s)!`)
//     setSelectedEvent(null)
//     setTicketQuantity(1)
//   }

//   const handleTopUpSubmit = ({ code, amount }) => {
//     toast.success('Gift card submitted for admin review!')
//     // In production: POST to /api/topup with { code, amount }
//   }

//   const handleLogout = () => {
//     localStorage.removeItem('token')
//     localStorage.removeItem('user')
//     router.push('/')
//   }

//   if (loading || !user) return (
//     <div className="min-h-screen bg-dark-950 flex items-center justify-center">
//       <div className="text-white text-2xl font-display">Loading...</div>
//     </div>
//   )

//   const statCards = [
//     {
//       label: 'Total Tickets', value: stats.totalTickets, icon: Ticket,
//       color: 'from-blue-500 to-cyan-500', clickable: true,
//       onClick: () => setShowTickets(true),
//       hint: 'Click to view'
//     },
//     { label: 'Active Entries', value: stats.activeEntries, icon: Sparkles, color: 'from-purple-500 to-pink-500' },
//     { label: 'Total Spent', value: `$${stats.totalSpent}`, icon: DollarSign, color: 'from-orange-500 to-red-500' },
//     { label: 'Total Winnings', value: `$${stats.totalWinnings}`, icon: Trophy, color: 'from-green-500 to-emerald-500' },
//   ]

//   return (
//     <div className="min-h-screen bg-dark-950">
//       {/* Header */}
//       <header className="glass border-b border-white/10 sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center space-x-3">
//               <Trophy className="w-8 h-8 text-primary-500" />
//               <span className="text-2xl font-display gradient-text">WINVAULT</span>
//             </div>
//             <div className="flex items-center space-x-3">
//               {/* Top Up Button */}
//               <button
//                 onClick={() => setShowTopUp(true)}
//                 className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105"
//                 style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', color: 'white' }}
//               >
//                 <Gift className="w-4 h-4" />
//                 <span>Top Up</span>
//               </button>
//               <div className="glass px-4 py-2 border border-primary-500/30">
//                 <span className="text-white/60 text-sm mr-2">Balance:</span>
//                 <span className="text-accent-400 font-bold text-lg">${user.balance.toFixed(2)}</span>
//               </div>
//               <button onClick={handleLogout} className="btn-ghost flex items-center space-x-2">
//                 <LogOut className="w-4 h-4" />
//                 <span className="hidden sm:inline">Logout</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Welcome Banner */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-gradient-to-r from-primary-600 to-accent-500 p-8 mb-8 relative overflow-hidden rounded-xl"
//         >
//           <div className="absolute inset-0 bg-mesh opacity-20" />
//           <div className="relative z-10">
//             <h1 className="text-4xl font-display text-white mb-2">WELCOME BACK, {user.name.toUpperCase()}!</h1>
//             <p className="text-white/90 text-lg">Your next big win is just a ticket away</p>
//           </div>
//         </motion.div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//           {statCards.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: index * 0.1 }}
//               onClick={stat.onClick}
//               className={`card p-6 relative overflow-hidden ${stat.clickable ? 'cursor-pointer group' : ''}`}
//               whileHover={stat.clickable ? { scale: 1.02, y: -2 } : {}}
//             >
//               {stat.clickable && (
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
//                   style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(6,182,212,0.08))' }} />
//               )}
//               <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 rounded-lg`}>
//                 <stat.icon className="w-6 h-6 text-white" />
//               </div>
//               <div className="text-3xl font-display gradient-text mb-1">{stat.value}</div>
//               <div className="text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
//               {stat.clickable && (
//                 <div className="flex items-center gap-1 mt-2 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <span>{stat.hint}</span>
//                   <ChevronRight className="w-3 h-3" />
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>

//         {/* Active Events */}
//         <div className="mb-8">
//           <h2 className="text-3xl font-display text-white mb-6">ACTIVE LOTTERY EVENTS</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {events.map((event, index) => {
//               const availability = ((event.totalTickets - event.soldTickets) / event.totalTickets * 100).toFixed(0)
//               return (
//                 <motion.div
//                   key={event.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="card overflow-hidden"
//                 >
//                   <div className="bg-gradient-to-r from-primary-600 to-accent-500 p-6">
//                     <div className="text-4xl font-display text-white mb-1">${event.prize.toLocaleString()}</div>
//                     <div className="text-white/90 text-lg">{event.name}</div>
//                   </div>

//                   <div className="p-6">
//                     <p className="text-white/60 mb-4 text-sm">{event.description}</p>

//                     <div className="grid grid-cols-3 gap-3 mb-4">
//                       <div className="text-center">
//                         <div className="text-lg font-bold text-accent-400">${event.ticketPrice}</div>
//                         <div className="text-xs text-white/50 uppercase">Per Ticket</div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-lg font-bold text-primary-400">{event.soldTickets}/{event.totalTickets}</div>
//                         <div className="text-xs text-white/50 uppercase">Sold</div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-lg font-bold text-white">{availability}%</div>
//                         <div className="text-xs text-white/50 uppercase">Available</div>
//                       </div>
//                     </div>

//                     {/* Countdown */}
//                     <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8 }} className="p-3 mb-4">
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wider">
//                           <Clock className="w-3 h-3" />
//                           <span>Draw In</span>
//                         </div>
//                         <CountdownDisplay drawDate={event.drawDate} />
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-1.5 text-white/40 text-xs mb-4">
//                       <Calendar className="w-3 h-3" />
//                       <span>{new Date(event.drawDate).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })} · {new Date(event.drawDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
//                     </div>

//                     <button onClick={() => setSelectedEvent(event)} className="btn-primary w-full">
//                       BUY TICKETS
//                     </button>
//                   </div>
//                 </motion.div>
//               )
//             })}
//           </div>
//         </div>

//         {/* Ticket History Preview */}
//         <div>
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-3xl font-display text-white">YOUR TICKET HISTORY</h2>
//             {tickets.length > 0 && (
//               <button
//                 onClick={() => setShowTickets(true)}
//                 className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
//               >
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
//                 <motion.div
//                   key={ticket.id}
//                   initial={{ opacity: 0, x: -10 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   className="card p-4 flex items-center justify-between cursor-pointer hover:border-white/20 transition-colors"
//                   onClick={() => setShowTickets(true)}
//                   style={{ border: '1px solid rgba(255,255,255,0.06)' }}
//                 >
//                   <div className="flex items-center gap-3">
//                     <div style={{ background: 'rgba(124,58,237,0.2)', borderRadius: 8, padding: 8 }}>
//                       <Ticket className="w-4 h-4 text-purple-400" />
//                     </div>
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
//                 <button onClick={() => setShowTickets(true)} className="w-full py-3 text-white/40 text-sm hover:text-white/60 transition-colors">
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
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               className="glass max-w-md w-full p-8 border-2 border-white/10 rounded-xl"
//             >
//               <div className="flex justify-between items-start mb-6">
//                 <h2 className="text-3xl font-display text-white">PURCHASE TICKETS</h2>
//                 <button onClick={() => setSelectedEvent(null)} className="text-white/40 hover:text-white transition-colors">
//                   <X className="w-5 h-5" />
//                 </button>
//               </div>

//               <div className="bg-dark-900 p-4 mb-6 border-l-4 border-primary-500 rounded-r-lg">
//                 <h3 className="text-xl font-display text-white mb-1">{selectedEvent.name}</h3>
//                 <div className="text-white/60 text-sm">${selectedEvent.prize.toLocaleString()} Prize</div>
//                 <div className="text-accent-400 font-bold mt-1">${selectedEvent.ticketPrice} per ticket</div>
//               </div>

//               {/* Countdown in modal */}
//               <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8 }} className="p-3 mb-6 flex items-center justify-between">
//                 <div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wider">
//                   <Clock className="w-3 h-3" /> Draw In
//                 </div>
//                 <CountdownDisplay drawDate={selectedEvent.drawDate} />
//               </div>

//               <div className="mb-6">
//                 <label className="block text-white/70 mb-3 text-sm uppercase tracking-wider font-semibold">Number of Tickets</label>
//                 <div className="flex items-center space-x-4">
//                   <button onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
//                     className="w-12 h-12 bg-dark-900 border-2 border-dark-800 text-white font-bold text-xl hover:border-primary-500 transition-colors rounded-lg">-</button>
//                   <div className="text-4xl font-display text-white min-w-[80px] text-center">{ticketQuantity}</div>
//                   <button onClick={() => setTicketQuantity(ticketQuantity + 1)}
//                     className="w-12 h-12 bg-dark-900 border-2 border-dark-800 text-white font-bold text-xl hover:border-primary-500 transition-colors rounded-lg">+</button>
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

//       {/* Ticket Detail Modal */}
//       <AnimatePresence>
//         {showTickets && (
//           <TicketModal tickets={tickets} events={events} onClose={() => setShowTickets(false)} />
//         )}
//       </AnimatePresence>

//       {/* Top Up Modal */}
//       <AnimatePresence>
//         {showTopUp && (
//           <TopUpModal onClose={() => setShowTopUp(false)} onSubmit={handleTopUpSubmit} />
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }


'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Ticket, Sparkles, LogOut, Calendar, DollarSign, X, Gift, Clock, ChevronRight, Hash, CreditCard, CheckCircle, AlertCircle, Copy, Star } from 'lucide-react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

// ─── Countdown Hook ───────────────────────────────────────────────────────────
function useCountdown(targetDate) {
  const calc = useCallback(() => {
    const diff = new Date(targetDate) - new Date()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
      expired: false,
    }
  }, [targetDate])

  const [time, setTime] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  }, [calc])
  return time
}

// ─── CountdownDisplay ─────────────────────────────────────────────────────────
function CountdownDisplay({ drawDate }) {
  const t = useCountdown(drawDate)
  if (t.expired) return <span className="text-red-400 font-bold text-xs uppercase tracking-wider">Draw Closed</span>
  return (
    <div className="flex items-center gap-1 text-xs font-mono">
      {[['d', t.days], ['h', t.hours], ['m', t.minutes], ['s', t.seconds]].map(([label, val]) => (
        <span key={label} className="flex items-center gap-0.5">
          <span className="bg-white/10 px-1.5 py-0.5 rounded text-white font-bold tabular-nums">{String(val).padStart(2, '0')}</span>
          <span className="text-white/40">{label}</span>
        </span>
      ))}
    </div>
  )
}

// ─── Ticket Detail Modal ──────────────────────────────────────────────────────
function TicketModal({ tickets, events, onClose }) {
  const [selected, setSelected] = useState(null)
  const [copied, setCopied] = useState(null)

  const copyNumber = (num) => {
    navigator.clipboard.writeText(num)
    setCopied(num)
    setTimeout(() => setCopied(null), 1500)
  }

  const getEvent = (eventId) => events.find(e => e.id === eventId)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={e => e.stopPropagation()}
        className="w-full max-w-2xl max-h-[85vh] flex flex-col"
        style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)', borderRadius: 8, padding: 8 }}>
              <Ticket className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Your Tickets</h2>
              <p className="text-white/50 text-sm">{tickets.length} purchase{tickets.length !== 1 ? 's' : ''} · {tickets.reduce((s, t) => s + t.quantity, 0)} total tickets</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white/40 hover:text-white transition-colors p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {tickets.length === 0 ? (
            <div className="text-center py-16 text-white/40">
              <Ticket className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>No tickets yet</p>
            </div>
          ) : tickets.map((ticket) => {
            const event = getEvent(ticket.eventId)
            const isOpen = selected === ticket.id
            return (
              <motion.div
                key={ticket.id}
                layout
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12 }}
              >
                {/* Ticket Summary Row */}
                <button
                  onClick={() => setSelected(isOpen ? null : ticket.id)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div style={{ background: 'rgba(124,58,237,0.2)', borderRadius: 8, padding: 6 }}>
                      <Star className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{ticket.eventName}</p>
                      <p className="text-white/40 text-xs">{new Date(ticket.purchaseDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-emerald-400 font-bold text-sm">${ticket.totalCost}</p>
                      <p className="text-white/40 text-xs">{ticket.quantity} ticket{ticket.quantity > 1 ? 's' : ''}</p>
                    </div>
                    <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronRight className="w-4 h-4 text-white/40" />
                    </motion.div>
                  </div>
                </button>

                {/* Expanded Detail */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-4 pb-4 border-t border-white/5 pt-4 space-y-4">
                        {/* Event info */}
                        {event && (
                          <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: 12 }} className="grid grid-cols-3 gap-3 text-center">
                            <div>
                              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Prize Pool</p>
                              <p className="text-yellow-400 font-bold">${event.prize.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Draw Date</p>
                              <p className="text-white text-sm">{new Date(event.drawDate).toLocaleDateString()}</p>
                            </div>
                            <div>
                              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Countdown</p>
                              <CountdownDisplay drawDate={event.drawDate} />
                            </div>
                          </div>
                        )}

                        {/* Ticket Numbers */}
                        <div>
                          <p className="text-white/40 text-xs uppercase tracking-wider mb-2 flex items-center gap-1">
                            <Hash className="w-3 h-3" /> Ticket Numbers
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {ticket.ticketNumbers.map((num, i) => (
                              <button
                                key={i}
                                onClick={() => copyNumber(num)}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-sm transition-all"
                                style={{
                                  background: copied === num ? 'rgba(16,185,129,0.2)' : 'rgba(124,58,237,0.15)',
                                  border: `1px solid ${copied === num ? 'rgba(16,185,129,0.4)' : 'rgba(124,58,237,0.3)'}`,
                                  color: copied === num ? '#10b981' : '#a78bfa',
                                }}
                              >
                                {copied === num ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3 opacity-50" />}
                                {num}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Status */}
                        <div className="flex items-center gap-2">
                          <span style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 20, padding: '2px 10px' }} className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                            Active Entry
                          </span>
                          <span className="text-white/30 text-xs">Ticket #{ticket.id.slice(-6)}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Gift Card Top-Up Modal ───────────────────────────────────────────────────
function TopUpModal({ onClose, onSubmit }) {
  const [code, setCode] = useState('')
  const [amount, setAmount] = useState('')
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState('form') // 'form' | 'pending'
  const [cardImage, setCardImage] = useState(null)      // { file, preview, name, size }
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useState(null)

  const cardDenominations = [
    { value: 10,  color: ['#1a1a2e', '#16213e'], accent: '#60a5fa', label: 'Starter'   },
    { value: 25,  color: ['#1a2e1a', '#16321e'], accent: '#4ade80', label: 'Popular'   },
    { value: 50,  color: ['#2e1a1a', '#321616'], accent: '#f97316', label: 'Classic'   },
    { value: 100, color: ['#2a1a2e', '#24163e'], accent: '#c084fc', label: 'Premium'   },
    { value: 250, color: ['#2e2a1a', '#3e3216'], accent: '#fbbf24', label: 'Gold'      },
    { value: 500, color: ['#1a2a2e', '#16363e'], accent: '#22d3ee', label: 'Platinum'  },
  ]

  const processFile = (file) => {
    if (!file) return
    const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/gif']
    if (!allowed.includes(file.type) && !file.name.match(/\.(jpg|jpeg|png|webp|heic|gif)$/i)) {
      toast.error('Please upload an image file (JPG, PNG, WEBP, HEIC)')
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      toast.error('Image must be under 10MB')
      return
    }
    const reader = new FileReader()
    reader.onload = (e) => setCardImage({ file, preview: e.target.result, name: file.name, size: (file.size / 1024).toFixed(0) + ' KB' })
    reader.readAsDataURL(file)
  }

  const handleFileChange = (e) => processFile(e.target.files[0])

  const handleDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    processFile(e.dataTransfer.files[0])
  }

  const handleSubmit = async () => {
    if (!code.trim() || !amount) {
      toast.error('Please enter a gift card code and amount')
      return
    }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setStep('pending')
    onSubmit({ code: code.trim(), amount: Number(amount), image: cardImage?.file || null })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-full flex items-center justify-center p-4 py-8" onClick={e => e.stopPropagation()}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="w-full max-w-md flex flex-col"
        style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16 }}
      >
        {step === 'pending' ? (
          <div className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(234,179,8,0.15)', border: '2px solid rgba(234,179,8,0.4)' }}
            >
              <Clock className="w-8 h-8 text-yellow-400" />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2">Request Submitted!</h3>
            <p className="text-white/50 text-sm mb-1">Your gift card has been sent for admin verification.</p>
            <p className="text-white/40 text-xs mb-6">Funds will be added to your balance once approved. This usually takes a few minutes.</p>
            <div style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)', borderRadius: 10 }} className="p-4 mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white/50">Gift Card Code</span>
                <span className="text-white font-mono font-bold">{code}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white/50">Requested Amount</span>
                <span className="text-yellow-400 font-bold">${amount}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/50">Card Image</span>
                <span className={`text-xs font-semibold ${cardImage ? 'text-emerald-400' : 'text-white/30'}`}>
                  {cardImage ? '✓ Uploaded' : 'Not provided'}
                </span>
              </div>
            </div>
            {/* Image thumbnail in success */}
            {cardImage && (
              <div className="mb-6 rounded-lg overflow-hidden border border-white/10">
                <img src={cardImage.preview} alt="Gift card" className="w-full h-28 object-cover" />
              </div>
            )}
            <button onClick={onClose} className="w-full py-3 rounded-lg font-semibold text-white transition-all"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>
              Done
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <div style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', borderRadius: 8, padding: 8 }}>
                  <Gift className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Top Up Balance</h2>
                  <p className="text-white/50 text-sm">Redeem a gift card</p>
                </div>
              </div>
              <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-5">
              {/* Gift Card Code */}
              <div>
                <label className="block text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold">Gift Card Code</label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input
                    type="text"
                    value={code}
                    onChange={e => setCode(e.target.value.toUpperCase())}
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    className="w-full pl-10 pr-4 py-3 font-mono text-sm rounded-lg text-white placeholder-white/20 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                  />
                </div>
              </div>

              {/* Gift Card Denomination Picker */}
              <div>
                <label className="block text-white/60 text-xs uppercase tracking-wider mb-3 font-semibold">Select Card Value</label>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {cardDenominations.map(({ value, color, accent, label }) => {
                    const selected = amount === String(value)
                    return (
                      <button
                        key={value}
                        onClick={() => setAmount(String(value))}
                        className="relative rounded-xl overflow-hidden transition-all"
                        style={{
                          background: `linear-gradient(135deg, ${color[0]}, ${color[1]})`,
                          border: selected ? `2px solid ${accent}` : '2px solid rgba(255,255,255,0.07)',
                          boxShadow: selected ? `0 0 16px ${accent}44` : 'none',
                          transform: selected ? 'scale(1.04)' : 'scale(1)',
                          aspectRatio: '1.586 / 1', // standard card ratio
                          padding: 0,
                        }}
                      >
                        {/* Card shine */}
                        <div className="absolute inset-0 pointer-events-none"
                          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)' }} />

                        {/* Chip */}
                        <div className="absolute top-2 left-2.5 w-4 h-3 rounded-sm"
                          style={{ background: `linear-gradient(135deg, ${accent}88, ${accent}44)`, border: `1px solid ${accent}66` }} />

                        {/* Selected check */}
                        {selected && (
                          <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full flex items-center justify-center"
                            style={{ background: accent }}>
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}

                        {/* Amount */}
                        <div className="absolute bottom-2 inset-x-0 px-2.5 flex items-end justify-between">
                          <div>
                            <p className="text-white/40 text-[9px] uppercase tracking-wider leading-none mb-0.5">{label}</p>
                            <p className="font-bold leading-none" style={{ color: accent, fontSize: 15 }}>${value}</p>
                          </div>
                          {/* Decorative circles */}
                          <div className="flex -space-x-1">
                            <div className="w-4 h-4 rounded-full opacity-40" style={{ background: accent }} />
                            <div className="w-4 h-4 rounded-full opacity-20" style={{ background: accent }} />
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>

                {/* Selected summary */}
                {amount && (
                  <p className="text-xs mt-2 text-center" style={{ color: cardDenominations.find(d => String(d.value) === amount)?.accent || 'rgba(255,255,255,0.4)' }}>
                    {cardDenominations.find(d => String(d.value) === amount)
                      ? `${cardDenominations.find(d => String(d.value) === amount).label} card · $${amount} selected`
                      : null}
                  </p>
                )}
              </div>

              {/* Card Image Upload */}
              <div>
                <label className="block text-white/60 text-xs uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                  Card Photo
                  <span className="text-white/30 normal-case font-normal">(optional but speeds up verification)</span>
                </label>

                {cardImage ? (
                  /* Preview */
                  <div className="relative rounded-xl overflow-hidden" style={{ border: '1px solid rgba(16,185,129,0.3)' }}>
                    <img src={cardImage.preview} alt="Gift card preview" className="w-full h-40 object-cover" />
                    <div className="absolute bottom-0 inset-x-0 p-3 flex items-center justify-between"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)' }}>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <div>
                          <p className="text-white text-xs font-semibold truncate max-w-[160px]">{cardImage.name}</p>
                          <p className="text-white/40 text-xs">{cardImage.size}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setCardImage(null)}
                        className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs text-white/60 hover:text-white transition-colors"
                        style={{ background: 'rgba(255,255,255,0.1)' }}
                      >
                        <X className="w-3 h-3" /> Remove
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    {/* Upload from file */}
                    <div
                      onDragOver={e => { e.preventDefault(); setDragOver(true) }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={handleDrop}
                      onClick={() => document.getElementById('gc-file-input').click()}
                      className="relative rounded-xl cursor-pointer transition-all flex flex-col items-center justify-center gap-2 py-5"
                      style={{
                        border: `2px dashed ${dragOver ? 'rgba(124,58,237,0.7)' : 'rgba(255,255,255,0.1)'}`,
                        background: dragOver ? 'rgba(124,58,237,0.08)' : 'rgba(255,255,255,0.03)',
                      }}
                    >
                      <div className="w-9 h-9 rounded-full flex items-center justify-center"
                        style={{ background: dragOver ? 'rgba(124,58,237,0.25)' : 'rgba(255,255,255,0.07)' }}>
                        <svg className="w-4 h-4" style={{ color: dragOver ? '#a78bfa' : 'rgba(255,255,255,0.4)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                      </div>
                      <div className="text-center">
                        <p className="text-white/60 text-xs font-semibold">{dragOver ? 'Drop here' : 'Upload File'}</p>
                        <p className="text-white/25 text-[10px] mt-0.5">JPG, PNG, WEBP</p>
                      </div>
                      <input id="gc-file-input" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                    </div>

                    {/* Take photo with camera */}
                    <div
                      onClick={() => document.getElementById('gc-camera-input').click()}
                      className="relative rounded-xl cursor-pointer transition-all flex flex-col items-center justify-center gap-2 py-5 group"
                      style={{
                        border: '2px dashed rgba(255,255,255,0.1)',
                        background: 'rgba(255,255,255,0.03)',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.border = '2px dashed rgba(6,182,212,0.5)'
                        e.currentTarget.style.background = 'rgba(6,182,212,0.06)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.border = '2px dashed rgba(255,255,255,0.1)'
                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                      }}
                    >
                      <div className="w-9 h-9 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(6,182,212,0.12)' }}>
                        {/* Camera icon */}
                        <svg className="w-4 h-4" style={{ color: 'rgba(6,182,212,0.7)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                        </svg>
                      </div>
                      <div className="text-center">
                        <p className="text-white/60 text-xs font-semibold">Take Photo</p>
                        <p className="text-white/25 text-[10px] mt-0.5">Use camera</p>
                      </div>
                      <input
                        id="gc-camera-input"
                        type="file"
                        accept="image/*"
                        capture="environment"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Info Banner */}
              <div style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)', borderRadius: 10 }} className="p-3 flex gap-2 items-start">
                <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                <p className="text-yellow-400/80 text-xs leading-relaxed">
                  Gift cards are verified by an admin before funds are added. Uploading a clear photo of the physical card speeds up approval significantly.
                </p>
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-3 rounded-lg font-bold text-white text-sm uppercase tracking-wider transition-all disabled:opacity-50"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}
              >
                {loading ? 'Submitting...' : 'Submit for Verification'}
              </button>
            </div>
          </>
        )}
      </motion.div>
      </div>
    </motion.div>
  )
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [events, setEvents] = useState([])
  const [tickets, setTickets] = useState([])
  const [stats, setStats] = useState({ totalTickets: 0, activeEntries: 0, totalSpent: 0, totalWinnings: 0 })
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [ticketQuantity, setTicketQuantity] = useState(1)
  const [loading, setLoading] = useState(true)
  const [showTickets, setShowTickets] = useState(false)
  const [showTopUp, setShowTopUp] = useState(false)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (!userData) { router.push('/auth/login'); return }
    const parsedUser = JSON.parse(userData)
    setUser(parsedUser)
    setEvents([
      { id: '1', name: 'Mega Jackpot 2026', description: 'Win life-changing prizes in our biggest draw ever', prize: 100000, ticketPrice: 50, totalTickets: 1000, soldTickets: 342, drawDate: new Date('2026-04-15T20:00:00'), status: 'active' },
      { id: '2', name: 'Weekly Winners Draw', description: 'Your weekly chance to win big', prize: 5000, ticketPrice: 10, totalTickets: 500, soldTickets: 189, drawDate: new Date('2026-03-28T18:00:00'), status: 'active' },
      { id: '3', name: 'Golden Fortune', description: 'Golden opportunity awaits', prize: 25000, ticketPrice: 25, totalTickets: 800, soldTickets: 621, drawDate: new Date('2026-03-31T19:00:00'), status: 'active' },
    ])
    setLoading(false)
  }, [])

  const handlePurchase = () => {
    if (!selectedEvent) return
    const totalCost = selectedEvent.ticketPrice * ticketQuantity
    if (user.balance < totalCost) { toast.error('Insufficient balance'); return }

    const newTicket = {
      id: Date.now().toString(),
      eventId: selectedEvent.id,
      eventName: selectedEvent.name,
      quantity: ticketQuantity,
      totalCost,
      purchaseDate: new Date(),
      ticketNumbers: Array.from({ length: ticketQuantity }, () => Math.floor(Math.random() * 1000000).toString().padStart(6, '0')),
    }

    const newTickets = [...tickets, newTicket]
    setTickets(newTickets)
    const updatedUser = { ...user, balance: user.balance - totalCost }
    setUser(updatedUser)
    localStorage.setItem('user', JSON.stringify(updatedUser))
    setStats({ totalTickets: newTickets.reduce((s, t) => s + t.quantity, 0), activeEntries: newTickets.length, totalSpent: newTickets.reduce((s, t) => s + t.totalCost, 0), totalWinnings: 0 })
    toast.success(`Successfully purchased ${ticketQuantity} ticket(s)!`)
    setSelectedEvent(null)
    setTicketQuantity(1)
  }

  const handleTopUpSubmit = ({ code, amount }) => {
    toast.success('Gift card submitted for admin review!')
    // In production: POST to /api/topup with { code, amount }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/')
  }

  if (loading || !user) return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center">
      <div className="text-white text-2xl font-display">Loading...</div>
    </div>
  )

  const statCards = [
    {
      label: 'Total Tickets', value: stats.totalTickets, icon: Ticket,
      color: 'from-blue-500 to-cyan-500', clickable: true,
      onClick: () => setShowTickets(true),
      hint: 'Click to view'
    },
    { label: 'Active Entries', value: stats.activeEntries, icon: Sparkles, color: 'from-purple-500 to-pink-500' },
    { label: 'Total Spent', value: `$${stats.totalSpent}`, icon: DollarSign, color: 'from-orange-500 to-red-500' },
    { label: 'Total Winnings', value: `$${stats.totalWinnings}`, icon: Trophy, color: 'from-green-500 to-emerald-500' },
  ]

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Header */}
      <header className="glass border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Trophy className="w-8 h-8 text-primary-500" />
              <span className="text-2xl font-display gradient-text">WINVAULT</span>
            </div>
            <div className="flex items-center space-x-3">
              {/* Top Up Button */}
              <button
                onClick={() => setShowTopUp(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', color: 'white' }}
              >
                <Gift className="w-4 h-4" />
                <span>Top Up</span>
              </button>
              <div className="glass px-4 py-2 border border-primary-500/30">
                <span className="text-white/60 text-sm mr-2">Balance:</span>
                <span className="text-accent-400 font-bold text-lg">${user.balance.toFixed(2)}</span>
              </div>
              <button onClick={handleLogout} className="btn-ghost flex items-center space-x-2">
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-primary-600 to-accent-500 p-8 mb-8 relative overflow-hidden rounded-xl"
        >
          <div className="absolute inset-0 bg-mesh opacity-20" />
          <div className="relative z-10">
            <h1 className="text-4xl font-display text-white mb-2">WELCOME BACK, {user.name.toUpperCase()}!</h1>
            <p className="text-white/90 text-lg">Your next big win is just a ticket away</p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {statCards.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={stat.onClick}
              className={`card p-6 relative overflow-hidden ${stat.clickable ? 'cursor-pointer group' : ''}`}
              whileHover={stat.clickable ? { scale: 1.02, y: -2 } : {}}
            >
              {stat.clickable && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(6,182,212,0.08))' }} />
              )}
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-display gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
              {stat.clickable && (
                <div className="flex items-center gap-1 mt-2 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>{stat.hint}</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Active Events */}
        <div className="mb-8">
          <h2 className="text-3xl font-display text-white mb-6">ACTIVE LOTTERY EVENTS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => {
              const availability = ((event.totalTickets - event.soldTickets) / event.totalTickets * 100).toFixed(0)
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-primary-600 to-accent-500 p-6">
                    <div className="text-4xl font-display text-white mb-1">${event.prize.toLocaleString()}</div>
                    <div className="text-white/90 text-lg">{event.name}</div>
                  </div>

                  <div className="p-6">
                    <p className="text-white/60 mb-4 text-sm">{event.description}</p>

                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-accent-400">${event.ticketPrice}</div>
                        <div className="text-xs text-white/50 uppercase">Per Ticket</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary-400">{event.soldTickets}/{event.totalTickets}</div>
                        <div className="text-xs text-white/50 uppercase">Sold</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">{availability}%</div>
                        <div className="text-xs text-white/50 uppercase">Available</div>
                      </div>
                    </div>

                    {/* Countdown */}
                    <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8 }} className="p-3 mb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wider">
                          <Clock className="w-3 h-3" />
                          <span>Draw In</span>
                        </div>
                        <CountdownDisplay drawDate={event.drawDate} />
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-white/40 text-xs mb-4">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(event.drawDate).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })} · {new Date(event.drawDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>

                    <button onClick={() => setSelectedEvent(event)} className="btn-primary w-full">
                      BUY TICKETS
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Ticket History Preview */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-display text-white">YOUR TICKET HISTORY</h2>
            {tickets.length > 0 && (
              <button
                onClick={() => setShowTickets(true)}
                className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                View All <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {tickets.length === 0 ? (
            <div className="card p-12 text-center">
              <Ticket className="w-16 h-16 text-white/20 mx-auto mb-4" />
              <p className="text-white/60 text-lg">No tickets purchased yet</p>
              <p className="text-white/40">Start playing today and win big!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {tickets.slice(0, 3).map((ticket) => (
                <motion.div
                  key={ticket.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="card p-4 flex items-center justify-between cursor-pointer hover:border-white/20 transition-colors"
                  onClick={() => setShowTickets(true)}
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="flex items-center gap-3">
                    <div style={{ background: 'rgba(124,58,237,0.2)', borderRadius: 8, padding: 8 }}>
                      <Ticket className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{ticket.eventName}</p>
                      <p className="text-white/40 text-xs">{ticket.quantity} ticket{ticket.quantity > 1 ? 's' : ''} · {new Date(ticket.purchaseDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 font-bold">${ticket.totalCost}</span>
                    <ChevronRight className="w-4 h-4 text-white/30" />
                  </div>
                </motion.div>
              ))}
              {tickets.length > 3 && (
                <button onClick={() => setShowTickets(true)} className="w-full py-3 text-white/40 text-sm hover:text-white/60 transition-colors">
                  +{tickets.length - 3} more tickets
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Purchase Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass max-w-md w-full p-8 border-2 border-white/10 rounded-xl"
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-display text-white">PURCHASE TICKETS</h2>
                <button onClick={() => setSelectedEvent(null)} className="text-white/40 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-dark-900 p-4 mb-6 border-l-4 border-primary-500 rounded-r-lg">
                <h3 className="text-xl font-display text-white mb-1">{selectedEvent.name}</h3>
                <div className="text-white/60 text-sm">${selectedEvent.prize.toLocaleString()} Prize</div>
                <div className="text-accent-400 font-bold mt-1">${selectedEvent.ticketPrice} per ticket</div>
              </div>

              {/* Countdown in modal */}
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8 }} className="p-3 mb-6 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wider">
                  <Clock className="w-3 h-3" /> Draw In
                </div>
                <CountdownDisplay drawDate={selectedEvent.drawDate} />
              </div>

              <div className="mb-6">
                <label className="block text-white/70 mb-3 text-sm uppercase tracking-wider font-semibold">Number of Tickets</label>
                <div className="flex items-center space-x-4">
                  <button onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
                    className="w-12 h-12 bg-dark-900 border-2 border-dark-800 text-white font-bold text-xl hover:border-primary-500 transition-colors rounded-lg">-</button>
                  <div className="text-4xl font-display text-white min-w-[80px] text-center">{ticketQuantity}</div>
                  <button onClick={() => setTicketQuantity(ticketQuantity + 1)}
                    className="w-12 h-12 bg-dark-900 border-2 border-dark-800 text-white font-bold text-xl hover:border-primary-500 transition-colors rounded-lg">+</button>
                </div>
              </div>

              <div className="bg-dark-900 p-6 mb-6 text-center border-2 border-primary-500/30 rounded-lg">
                <div className="text-sm text-white/60 uppercase tracking-wider mb-2">Total Amount</div>
                <div className="text-5xl font-display gradient-text">${(selectedEvent.ticketPrice * ticketQuantity).toFixed(2)}</div>
                <div className="text-white/40 text-sm mt-1">Your balance: ${user.balance.toFixed(2)}</div>
              </div>

              <div className="flex space-x-4">
                <button onClick={() => setSelectedEvent(null)} className="btn-secondary flex-1">Cancel</button>
                <button onClick={handlePurchase} className="btn-primary flex-1">Confirm Purchase</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ticket Detail Modal */}
      <AnimatePresence>
        {showTickets && (
          <TicketModal tickets={tickets} events={events} onClose={() => setShowTickets(false)} />
        )}
      </AnimatePresence>

      {/* Top Up Modal */}
      <AnimatePresence>
        {showTopUp && (
          <TopUpModal onClose={() => setShowTopUp(false)} onSubmit={handleTopUpSubmit} />
        )}
      </AnimatePresence>
    </div>
  )
}
