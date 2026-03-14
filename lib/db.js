// lib/db.js - MongoDB connection
// Note: In production, use actual MongoDB. This is a simplified version.

let users = [];
let events = [];
let tickets = [];

// Initialize with demo data
if (typeof window === 'undefined') {
  users = [
    {
      id: '1',
      name: 'Demo User',
      email: 'user@demo.com',
      password: '$2a$10$YourHashedPasswordHere', // demo123
      role: 'user',
      balance: 1000,
      createdAt: new Date(),
    },
    {
      id: '2',
      name: 'Admin User',
      email: 'admin@demo.com',
      password: '$2a$10$YourHashedPasswordHere', // admin123
      role: 'admin',
      balance: 0,
      createdAt: new Date(),
    },
  ];

  events = [
    {
      id: '1',
      name: 'Mega Jackpot 2026',
      description: 'Win life-changing prizes',
      prize: 100000,
      ticketPrice: 50,
      totalTickets: 1000,
      soldTickets: 342,
      drawDate: new Date('2026-03-15T20:00:00'),
      status: 'active',
      createdAt: new Date(),
    },
    {
      id: '2',
      name: 'Weekly Winners',
      description: 'Weekly draws with great prizes',
      prize: 5000,
      ticketPrice: 10,
      totalTickets: 500,
      soldTickets: 189,
      drawDate: new Date('2026-02-14T18:00:00'),
      status: 'active',
      createdAt: new Date(),
    },
  ];
}

export const db = {
  users,
  events,
  tickets,
  
  // User methods
  findUserByEmail(email) {
    return this.users.find(u => u.email === email);
  },
  
  createUser(userData) {
    const user = {
      id: Date.now().toString(),
      ...userData,
      balance: 1000,
      createdAt: new Date(),
    };
    this.users.push(user);
    return user;
  },
  
  // Event methods
  getActiveEvents() {
    return this.events.filter(e => e.status === 'active');
  },
  
  getEventById(id) {
    return this.events.find(e => e.id === id);
  },
  
  createEvent(eventData) {
    const event = {
      id: Date.now().toString(),
      ...eventData,
      soldTickets: 0,
      status: 'active',
      createdAt: new Date(),
    };
    this.events.push(event);
    return event;
  },
  
  // Ticket methods
  createTicket(ticketData) {
    const ticket = {
      id: Date.now().toString(),
      ...ticketData,
      purchaseDate: new Date(),
    };
    this.tickets.push(ticket);
    return ticket;
  },
  
  getUserTickets(userId) {
    return this.tickets.filter(t => t.userId === userId);
  },
};
