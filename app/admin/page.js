'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Users, DollarSign, TrendingUp, Calendar, Ticket, Plus, Edit, Trash2, Award, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function AdminPage() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [events, setEvents] = useState([])
  const [users, setUsers] = useState([])
  const [tickets, setTickets] = useState([])
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showDrawModal, setShowDrawModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push('/auth/login')
      return
    }
    
    const parsedUser = JSON.parse(userData)
    
    // Check if user is admin
    if (parsedUser.role !== 'admin') {
      toast.error('Access denied. Admin only.')
      router.push('/dashboard')
      return
    }
    
    setUser(parsedUser)
    fetchData()
    setLoading(false)
  }, [])

  const fetchData = () => {
    // Fetch events from localStorage or initialize
    const storedEvents = localStorage.getItem('admin_events')
    const storedUsers = localStorage.getItem('admin_users')
    const storedTickets = localStorage.getItem('admin_tickets')

    if (storedEvents) {
      setEvents(JSON.parse(storedEvents))
    } else {
      // Initialize with demo events
      const demoEvents = [
        {
          id: '1',
          name: 'Mega Jackpot 2026',
          description: 'Win life-changing prizes in our biggest draw ever',
          prize: 100000,
          ticketPrice: 50,
          totalTickets: 1000,
          soldTickets: 342,
          drawDate: new Date('2026-03-15T20:00:00').toISOString(),
          status: 'active',
          createdAt: new Date().toISOString(),
        },
        {
          id: '2',
          name: 'Weekly Winners Draw',
          description: 'Your weekly chance to win big',
          prize: 5000,
          ticketPrice: 10,
          totalTickets: 500,
          soldTickets: 189,
          drawDate: new Date('2026-02-14T18:00:00').toISOString(),
          status: 'active',
          createdAt: new Date().toISOString(),
        },
        {
          id: '3',
          name: 'Golden Fortune',
          description: 'Golden opportunity awaits',
          prize: 25000,
          ticketPrice: 25,
          totalTickets: 800,
          soldTickets: 621,
          drawDate: new Date('2026-02-28T19:00:00').toISOString(),
          status: 'active',
          createdAt: new Date().toISOString(),
        },
      ]
      setEvents(demoEvents)
      localStorage.setItem('admin_events', JSON.stringify(demoEvents))
    }

    if (storedUsers) {
      setUsers(JSON.parse(storedUsers))
    } else {
      // Initialize with demo users
      const demoUsers = [
        {
          id: '1',
          name: 'John Doe',
          email: 'john@example.com',
          role: 'user',
          balance: 1250,
          totalTickets: 12,
          totalSpent: 450,
          createdAt: new Date('2026-01-15').toISOString(),
        },
        {
          id: '2',
          name: 'Jane Smith',
          email: 'jane@example.com',
          role: 'user',
          balance: 780,
          totalTickets: 8,
          totalSpent: 220,
          createdAt: new Date('2026-01-20').toISOString(),
        },
        {
          id: '3',
          name: 'Mike Johnson',
          email: 'mike@example.com',
          role: 'user',
          balance: 2100,
          totalTickets: 25,
          totalSpent: 900,
          createdAt: new Date('2026-01-10').toISOString(),
        },
      ]
      setUsers(demoUsers)
      localStorage.setItem('admin_users', JSON.stringify(demoUsers))
    }

    setTickets(storedTickets ? JSON.parse(storedTickets) : [])
  }

  const handleCreateEvent = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    
    const newEvent = {
      id: Date.now().toString(),
      name: formData.get('name'),
      description: formData.get('description'),
      prize: parseFloat(formData.get('prize')),
      ticketPrice: parseFloat(formData.get('ticketPrice')),
      totalTickets: parseInt(formData.get('totalTickets')),
      soldTickets: 0,
      drawDate: new Date(formData.get('drawDate')).toISOString(),
      status: 'active',
      createdAt: new Date().toISOString(),
    }

    const updatedEvents = [...events, newEvent]
    setEvents(updatedEvents)
    localStorage.setItem('admin_events', JSON.stringify(updatedEvents))
    
    toast.success('Event created successfully!')
    setShowCreateModal(false)
    e.target.reset()
  }

  const handleDeleteEvent = (eventId) => {
    if (confirm('Are you sure you want to delete this event?')) {
      const updatedEvents = events.filter(e => e.id !== eventId)
      setEvents(updatedEvents)
      localStorage.setItem('admin_events', JSON.stringify(updatedEvents))
      toast.success('Event deleted')
    }
  }

  const handleDrawWinner = (event) => {
    if (event.soldTickets === 0) {
      toast.error('No tickets sold for this event')
      return
    }

    // Simulate drawing a winner
    const winnerUser = users[Math.floor(Math.random() * users.length)]
    const winningTicket = Math.floor(Math.random() * 1000000).toString().padStart(6, '0')

    const updatedEvents = events.map(e => {
      if (e.id === event.id) {
        return {
          ...e,
          status: 'completed',
          winner: {
            userId: winnerUser.id,
            name: winnerUser.name,
            email: winnerUser.email,
            ticketNumber: winningTicket,
          },
          drawnAt: new Date().toISOString(),
        }
      }
      return e
    })

    setEvents(updatedEvents)
    localStorage.setItem('admin_events', JSON.stringify(updatedEvents))
    
    toast.success(`Winner drawn! ${winnerUser.name} wins $${event.prize.toLocaleString()}!`)
    setShowDrawModal(false)
    setSelectedEvent(null)
  }

  const handleAddBalance = (userId) => {
    const amount = prompt('Enter amount to add:')
    if (amount && !isNaN(amount)) {
      const updatedUsers = users.map(u => {
        if (u.id === userId) {
          return { ...u, balance: u.balance + parseFloat(amount) }
        }
        return u
      })
      setUsers(updatedUsers)
      localStorage.setItem('admin_users', JSON.stringify(updatedUsers))
      toast.success(`Added $${amount} to user balance`)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/')
  }

  // Calculate analytics
  const analytics = {
    totalUsers: users.length,
    totalEvents: events.length,
    activeEvents: events.filter(e => e.status === 'active').length,
    totalRevenue: events.reduce((sum, e) => sum + (e.soldTickets * e.ticketPrice), 0),
    totalTicketsSold: events.reduce((sum, e) => sum + e.soldTickets, 0),
    completedDraws: events.filter(e => e.status === 'completed').length,
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
              <div>
                <span className="text-2xl font-display gradient-text">WINVAULT</span>
                <p className="text-xs text-white/60 uppercase tracking-wider">Admin Panel</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="glass px-4 py-2 border border-accent-500/30">
                <span className="text-white/60 text-sm mr-2">Admin:</span>
                <span className="text-accent-400 font-bold">{user.name}</span>
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
        {/* Tabs */}
        <div className="flex space-x-2 mb-8 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview', icon: TrendingUp },
            { id: 'events', label: 'Events', icon: Calendar },
            { id: 'users', label: 'Users', icon: Users },
            { id: 'analytics', label: 'Analytics', icon: DollarSign },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 font-bold uppercase tracking-wider text-sm transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white'
                  : 'bg-dark-900 text-white/60 hover:text-white border-2 border-dark-800 hover:border-primary-500/50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {[
                { label: 'Total Users', value: analytics.totalUsers, icon: Users, color: 'from-blue-500 to-cyan-500' },
                { label: 'Total Events', value: analytics.totalEvents, icon: Calendar, color: 'from-purple-500 to-pink-500' },
                { label: 'Active Events', value: analytics.activeEvents, icon: Trophy, color: 'from-green-500 to-emerald-500' },
                { label: 'Total Revenue', value: `$${analytics.totalRevenue.toLocaleString()}`, icon: DollarSign, color: 'from-orange-500 to-red-500' },
                { label: 'Tickets Sold', value: analytics.totalTicketsSold, icon: Ticket, color: 'from-yellow-500 to-accent-500' },
                { label: 'Completed Draws', value: analytics.completedDraws, icon: Award, color: 'from-primary-500 to-pink-500' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="card p-6"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-display gradient-text mb-1">{stat.value}</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Recent Events */}
              <div className="card p-6">
                <h3 className="text-xl font-display text-white mb-4">Recent Events</h3>
                <div className="space-y-3">
                  {events.slice(0, 5).map((event) => (
                    <div key={event.id} className="bg-dark-950 p-4 border-l-4 border-primary-500">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-white">{event.name}</h4>
                        <span className={`text-xs px-2 py-1 uppercase tracking-wider ${
                          event.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-white/10 text-white/60'
                        }`}>
                          {event.status}
                        </span>
                      </div>
                      <div className="text-sm text-white/60">
                        Prize: ${event.prize.toLocaleString()} • {event.soldTickets}/{event.totalTickets} sold
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Users */}
              <div className="card p-6">
                <h3 className="text-xl font-display text-white mb-4">Recent Users</h3>
                <div className="space-y-3">
                  {users.slice(0, 5).map((u) => (
                    <div key={u.id} className="bg-dark-950 p-4 border-l-4 border-accent-500">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold text-white">{u.name}</h4>
                          <p className="text-xs text-white/60">{u.email}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-accent-400 font-bold">${u.balance}</div>
                          <div className="text-xs text-white/60">{u.totalTickets} tickets</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-display text-white">Manage Events</h2>
              <button
                onClick={() => setShowCreateModal(true)}
                className="btn-primary flex items-center space-x-2"
              >
                <Plus className="w-5 h-5" />
                <span>Create Event</span>
              </button>
            </div>

            <div className="card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-dark-900">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold text-white/60 uppercase tracking-wider">Event</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-white/60 uppercase tracking-wider">Prize</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-white/60 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-white/60 uppercase tracking-wider">Sold/Total</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-white/60 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-white/60 uppercase tracking-wider">Draw Date</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-white/60 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {events.map((event) => (
                      <tr key={event.id} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-bold text-white">{event.name}</div>
                          <div className="text-sm text-white/60">{event.description}</div>
                        </td>
                        <td className="px-6 py-4 text-accent-400 font-bold">${event.prize.toLocaleString()}</td>
                        <td className="px-6 py-4 text-white">${event.ticketPrice}</td>
                        <td className="px-6 py-4">
                          <div className="text-white font-bold">{event.soldTickets}/{event.totalTickets}</div>
                          <div className="text-xs text-white/60">
                            {((event.soldTickets / event.totalTickets) * 100).toFixed(0)}% sold
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 text-xs uppercase tracking-wider font-bold ${
                            event.status === 'active' ? 'bg-green-500/20 text-green-400' :
                            event.status === 'completed' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-white/10 text-white/60'
                          }`}>
                            {event.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-white/60 text-sm">
                          {new Date(event.drawDate).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            {event.status === 'active' && event.soldTickets > 0 && (
                              <button
                                onClick={() => {
                                  setSelectedEvent(event)
                                  setShowDrawModal(true)
                                }}
                                className="px-3 py-1 bg-primary-600 text-white text-xs font-bold uppercase hover:bg-primary-500 transition-colors"
                              >
                                Draw Winner
                              </button>
                            )}
                            <button
                              onClick={() => handleDeleteEvent(event.id)}
                              className="px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase hover:bg-red-500 transition-colors"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-display text-white mb-6">User Management</h2>

            <div className="card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-dark-900">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold text-white/60 uppercase tracking-wider">User</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-white/60 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-white/60 uppercase tracking-wider">Balance</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-white/60 uppercase tracking-wider">Tickets</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-white/60 uppercase tracking-wider">Spent</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-white/60 uppercase tracking-wider">Joined</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-white/60 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {users.map((u) => (
                      <tr key={u.id} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-bold text-white">{u.name}</div>
                        </td>
                        <td className="px-6 py-4 text-white/60">{u.email}</td>
                        <td className="px-6 py-4 text-accent-400 font-bold">${u.balance.toFixed(2)}</td>
                        <td className="px-6 py-4 text-white">{u.totalTickets}</td>
                        <td className="px-6 py-4 text-white">${u.totalSpent}</td>
                        <td className="px-6 py-4 text-white/60 text-sm">
                          {new Date(u.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => handleAddBalance(u.id)}
                            className="px-3 py-1 bg-accent-600 text-dark-950 text-xs font-bold uppercase hover:bg-accent-500 transition-colors"
                          >
                            Add Balance
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-display text-white mb-6">Platform Analytics</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Revenue Breakdown */}
              <div className="card p-6">
                <h3 className="text-xl font-display text-white mb-6">Revenue by Event</h3>
                <div className="space-y-4">
                  {events.map((event) => {
                    const revenue = event.soldTickets * event.ticketPrice
                    const percentage = (revenue / analytics.totalRevenue * 100).toFixed(1)
                    
                    return (
                      <div key={event.id}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-semibold">{event.name}</span>
                          <span className="text-accent-400 font-bold">${revenue.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-dark-900 h-2">
                          <div
                            className="h-full bg-gradient-to-r from-primary-600 to-accent-500"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <div className="text-xs text-white/60 mt-1">{percentage}% of total revenue</div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* User Engagement */}
              <div className="card p-6">
                <h3 className="text-xl font-display text-white mb-6">Top Users by Spending</h3>
                <div className="space-y-4">
                  {users
                    .sort((a, b) => b.totalSpent - a.totalSpent)
                    .slice(0, 5)
                    .map((u, index) => (
                      <div key={u.id} className="flex items-center justify-between p-4 bg-dark-950 border-l-4 border-primary-500">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center font-bold text-white">
                            #{index + 1}
                          </div>
                          <div>
                            <div className="font-bold text-white">{u.name}</div>
                            <div className="text-xs text-white/60">{u.totalTickets} tickets purchased</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-accent-400 font-bold text-lg">${u.totalSpent}</div>
                          <div className="text-xs text-white/60">total spent</div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Create Event Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass max-w-2xl w-full p-8 border-2 border-white/10 my-8"
          >
            <h2 className="text-3xl font-display text-white mb-6">CREATE NEW EVENT</h2>
            
            <form onSubmit={handleCreateEvent} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 mb-2 text-sm uppercase tracking-wider font-semibold">
                    Event Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="input"
                    placeholder="Summer Mega Draw"
                  />
                </div>

                <div>
                  <label className="block text-white/70 mb-2 text-sm uppercase tracking-wider font-semibold">
                    Prize Amount ($)
                  </label>
                  <input
                    type="number"
                    name="prize"
                    required
                    min="1"
                    className="input"
                    placeholder="10000"
                  />
                </div>

                <div>
                  <label className="block text-white/70 mb-2 text-sm uppercase tracking-wider font-semibold">
                    Ticket Price ($)
                  </label>
                  <input
                    type="number"
                    name="ticketPrice"
                    required
                    min="1"
                    className="input"
                    placeholder="50"
                  />
                </div>

                <div>
                  <label className="block text-white/70 mb-2 text-sm uppercase tracking-wider font-semibold">
                    Total Tickets
                  </label>
                  <input
                    type="number"
                    name="totalTickets"
                    required
                    min="1"
                    className="input"
                    placeholder="1000"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-white/70 mb-2 text-sm uppercase tracking-wider font-semibold">
                    Draw Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    name="drawDate"
                    required
                    className="input"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-white/70 mb-2 text-sm uppercase tracking-wider font-semibold">
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    required
                    className="input"
                    placeholder="Win amazing prizes in our biggest draw yet!"
                  />
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="btn-secondary flex-1"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary flex-1">
                  Create Event
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Draw Winner Modal */}
      {showDrawModal && selectedEvent && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass max-w-md w-full p-8 border-2 border-white/10"
          >
            <div className="text-center mb-6">
              <Trophy className="w-16 h-16 text-accent-400 mx-auto mb-4" />
              <h2 className="text-3xl font-display text-white mb-2">DRAW WINNER</h2>
              <p className="text-white/60">Are you ready to select the lucky winner?</p>
            </div>

            <div className="bg-dark-900 p-6 mb-6 border-l-4 border-primary-500">
              <h3 className="text-xl font-display text-white mb-2">{selectedEvent.name}</h3>
              <div className="text-white/60">Prize: ${selectedEvent.prize.toLocaleString()}</div>
              <div className="text-white/60">Tickets Sold: {selectedEvent.soldTickets}</div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => {
                  setShowDrawModal(false)
                  setSelectedEvent(null)
                }}
                className="btn-secondary flex-1"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDrawWinner(selectedEvent)}
                className="btn-primary flex-1"
              >
                Draw Winner
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
