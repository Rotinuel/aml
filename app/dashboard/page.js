'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Ticket, TrendingUp, Sparkles, LogOut, User, Calendar, DollarSign } from 'lucide-react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [events, setEvents] = useState([])
  const [tickets, setTickets] = useState([])
  const [stats, setStats] = useState({
    totalTickets: 0,
    activeEntries: 0,
    totalSpent: 0,
    totalWinnings: 0,
  })
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [ticketQuantity, setTicketQuantity] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push('/auth/login')
      return
    }
    
    const parsedUser = JSON.parse(userData)
    setUser(parsedUser)
    
    // Fetch events and user data
    fetchEvents()
    fetchTickets(parsedUser.id)
    setLoading(false)
  }, [])

  const fetchEvents = async () => {
    // Demo events - in production, fetch from API
    const demoEvents = [
      {
        id: '1',
        name: 'Mega Jackpot 2026',
        description: 'Win life-changing prizes in our biggest draw ever',
        prize: 100000,
        ticketPrice: 50,
        totalTickets: 1000,
        soldTickets: 342,
        drawDate: new Date('2026-03-15T20:00:00'),
        status: 'active',
      },
      {
        id: '2',
        name: 'Weekly Winners Draw',
        description: 'Your weekly chance to win big',
        prize: 5000,
        ticketPrice: 10,
        totalTickets: 500,
        soldTickets: 189,
        drawDate: new Date('2026-02-14T18:00:00'),
        status: 'active',
      },
      {
        id: '3',
        name: 'Golden Fortune',
        description: 'Golden opportunity awaits',
        prize: 25000,
        ticketPrice: 25,
        totalTickets: 800,
        soldTickets: 621,
        drawDate: new Date('2026-02-28T19:00:00'),
        status: 'active',
      },
    ]
    setEvents(demoEvents)
  }

  const fetchTickets = (userId) => {
    // Demo tickets
    const demoTickets = []
    setTickets(demoTickets)
    
    // Calculate stats
    const totalTickets = demoTickets.reduce((sum, t) => sum + t.quantity, 0)
    const totalSpent = demoTickets.reduce((sum, t) => sum + t.totalCost, 0)
    setStats({
      totalTickets,
      activeEntries: demoTickets.length,
      totalSpent,
      totalWinnings: 0,
    })
  }

  const handlePurchase = () => {
    if (!selectedEvent) return
    
    const totalCost = selectedEvent.ticketPrice * ticketQuantity
    
    if (user.balance < totalCost) {
      toast.error('Insufficient balance')
      return
    }

    // Simulate purchase
    const newTicket = {
      id: Date.now().toString(),
      eventId: selectedEvent.id,
      eventName: selectedEvent.name,
      quantity: ticketQuantity,
      totalCost,
      purchaseDate: new Date(),
      ticketNumbers: Array.from({ length: ticketQuantity }, () => 
        Math.floor(Math.random() * 1000000).toString().padStart(6, '0')
      ),
    }

    setTickets([...tickets, newTicket])
    
    // Update user balance
    const updatedUser = { ...user, balance: user.balance - totalCost }
    setUser(updatedUser)
    localStorage.setItem('user', JSON.stringify(updatedUser))
    
    // Update stats
    setStats({
      ...stats,
      totalTickets: stats.totalTickets + ticketQuantity,
      activeEntries: stats.activeEntries + 1,
      totalSpent: stats.totalSpent + totalCost,
    })

    toast.success(`Successfully purchased ${ticketQuantity} ticket(s)!`)
    setSelectedEvent(null)
    setTicketQuantity(1)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/')
  }

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-white text-2xl font-display">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Header */}
      <header className="glass border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Trophy className="w-8 h-8 text-primary-500" />
              <span className="text-2xl font-display gradient-text">WINVAULT</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="glass px-4 py-2 border border-primary-500/30">
                <span className="text-white/60 text-sm mr-2">Balance:</span>
                <span className="text-accent-400 font-bold text-lg">${user.balance.toFixed(2)}</span>
              </div>
              <button onClick={handleLogout} className="btn-ghost flex items-center space-x-2">
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
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
          className="bg-gradient-to-r from-primary-600 to-accent-500 p-8 mb-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-mesh opacity-20" />
          <div className="relative z-10">
            <h1 className="text-4xl font-display text-white mb-2">
              WELCOME BACK, {user.name.toUpperCase()}!
            </h1>
            <p className="text-white/90 text-lg">Your next big win is just a ticket away</p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Tickets', value: stats.totalTickets, icon: Ticket, color: 'from-blue-500 to-cyan-500' },
            { label: 'Active Entries', value: stats.activeEntries, icon: Sparkles, color: 'from-purple-500 to-pink-500' },
            { label: 'Total Spent', value: `$${stats.totalSpent}`, icon: DollarSign, color: 'from-orange-500 to-red-500' },
            { label: 'Total Winnings', value: `$${stats.totalWinnings}`, icon: Trophy, color: 'from-green-500 to-emerald-500' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="card p-6"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-display gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Active Events */}
        <div className="mb-8">
          <h2 className="text-3xl font-display text-white mb-6">ACTIVE LOTTERY EVENTS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => {
              const availability = ((event.totalTickets - event.soldTickets) / event.totalTickets * 100).toFixed(0)
              const drawDate = new Date(event.drawDate)
              
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="bg-gradient-to-r from-primary-600 to-accent-500 p-6">
                    <div className="text-4xl font-display text-white mb-2">
                      ${event.prize.toLocaleString()}
                    </div>
                    <div className="text-white/90 text-lg">{event.name}</div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-white/60 mb-4">{event.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-accent-400">${event.ticketPrice}</div>
                        <div className="text-xs text-white/50 uppercase">Per Ticket</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary-400">{event.soldTickets}/{event.totalTickets}</div>
                        <div className="text-xs text-white/50 uppercase">Sold</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-white">{availability}%</div>
                        <div className="text-xs text-white/50 uppercase">Available</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-white/60 text-sm mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>Draw: {drawDate.toLocaleDateString()} at {drawDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>

                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="btn-primary w-full"
                    >
                      BUY TICKETS
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Purchase History */}
        <div>
          <h2 className="text-3xl font-display text-white mb-6">YOUR TICKET HISTORY</h2>
          {tickets.length === 0 ? (
            <div className="card p-12 text-center">
              <Ticket className="w-16 h-16 text-white/20 mx-auto mb-4" />
              <p className="text-white/60 text-lg">No tickets purchased yet</p>
              <p className="text-white/40">Start playing today and win big!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {tickets.map((ticket) => (
                <div key={ticket.id} className="card p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-display text-white mb-1">{ticket.eventName}</h3>
                      <p className="text-white/60 text-sm">
                        Purchased on {new Date(ticket.purchaseDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-display text-accent-400">${ticket.totalCost}</div>
                      <div className="text-sm text-white/60">{ticket.quantity} ticket(s)</div>
                    </div>
                  </div>
                  <div className="bg-dark-950 p-4 border border-white/5">
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-2">Ticket Numbers</p>
                    <div className="flex flex-wrap gap-2">
                      {ticket.ticketNumbers.map((num, i) => (
                        <span key={i} className="glass px-3 py-1 text-sm font-mono text-primary-400 border border-primary-500/30">
                          {num}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Purchase Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass max-w-md w-full p-8 border-2 border-white/10"
          >
            <h2 className="text-3xl font-display text-white mb-6">PURCHASE TICKETS</h2>
            
            <div className="bg-dark-900 p-4 mb-6 border-l-4 border-primary-500">
              <h3 className="text-xl font-display text-white mb-2">{selectedEvent.name}</h3>
              <div className="text-white/60">${selectedEvent.prize.toLocaleString()} Prize</div>
              <div className="text-accent-400 font-bold mt-2">${selectedEvent.ticketPrice} per ticket</div>
            </div>

            <div className="mb-6">
              <label className="block text-white/70 mb-3 text-sm uppercase tracking-wider font-semibold">
                Number of Tickets
              </label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
                  className="w-12 h-12 bg-dark-900 border-2 border-dark-800 text-white font-bold text-xl
                           hover:border-primary-500 transition-colors"
                >
                  -
                </button>
                <div className="text-4xl font-display text-white min-w-[80px] text-center">
                  {ticketQuantity}
                </div>
                <button
                  onClick={() => setTicketQuantity(ticketQuantity + 1)}
                  className="w-12 h-12 bg-dark-900 border-2 border-dark-800 text-white font-bold text-xl
                           hover:border-primary-500 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <div className="bg-dark-900 p-6 mb-6 text-center border-2 border-primary-500/30">
              <div className="text-sm text-white/60 uppercase tracking-wider mb-2">Total Amount</div>
              <div className="text-5xl font-display gradient-text">
                ${(selectedEvent.ticketPrice * ticketQuantity).toFixed(2)}
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => setSelectedEvent(null)}
                className="btn-secondary flex-1"
              >
                Cancel
              </button>
              <button
                onClick={handlePurchase}
                className="btn-primary flex-1"
              >
                Confirm Purchase
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
