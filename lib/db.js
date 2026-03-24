import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Please define MONGODB_URI in your .env.local file')
}

// ─── Connection Cache (prevents multiple connections during hot reload) ────────
let cached = global._mongoose

if (!cached) {
  cached = global._mongoose = { conn: null, promise: null }
}

export async function connectDB() {
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    })
  }

  cached.conn = await cached.promise
  return cached.conn
}

// ─── User Schema ──────────────────────────────────────────────────────────────

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    balance: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  { timestamps: true }
)

// ─── Event Schema ─────────────────────────────────────────────────────────────

const EventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    prize: { type: Number, required: true },
    ticketPrice: { type: Number, required: true },
    totalTickets: { type: Number, required: true },
    soldTickets: { type: Number, default: 0 },
    drawDate: { type: Date, required: true },
    status: { type: String, enum: ['active', 'completed', 'cancelled'], default: 'active' },
  },
  { timestamps: true }
)

// ─── Ticket Schema ────────────────────────────────────────────────────────────

const TicketSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    eventName: { type: String },
    quantity: { type: Number, required: true, min: 1 },
    totalCost: { type: Number, required: true },
    ticketNumbers: [{ type: String }],
    purchaseDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

// ─── Models (guard against re-compilation in dev) ─────────────────────────────

export const User  = mongoose.models.User  || mongoose.model('User',  UserSchema)
export const Event = mongoose.models.Event || mongoose.model('Event', EventSchema)
export const Ticket = mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema)

// ─── db object — same interface your API routes already use ───────────────────
// Every method is now async and talks to MongoDB instead of the in-memory array.

export const db = {
  // ── User methods ────────────────────────────────────────────────────────────

  async findUserByEmail(email) {
    await connectDB()
    return User.findOne({ email: email.toLowerCase().trim() })
  },

  async findUserById(id) {
    await connectDB()
    return User.findById(id)
  },

  async createUser(userData) {
    await connectDB()
    return User.create(userData)
  },

  async updateUserBalance(userId, newBalance) {
    await connectDB()
    return User.findByIdAndUpdate(userId, { balance: newBalance }, { new: true })
  },

  async getAllUsers() {
    await connectDB()
    return User.find({}, '-password').sort({ createdAt: -1 })
  },

  // ── Event methods ────────────────────────────────────────────────────────────

  async getActiveEvents() {
    await connectDB()
    return Event.find({ status: 'active' }).sort({ drawDate: 1 })
  },

  async getEventById(id) {
    await connectDB()
    return Event.findById(id)
  },

  async createEvent(eventData) {
    await connectDB()
    return Event.create({ ...eventData, soldTickets: 0, status: 'active' })
  },

  async updateEvent(id, updates) {
    await connectDB()
    return Event.findByIdAndUpdate(id, updates, { new: true })
  },

  async getAllEvents() {
    await connectDB()
    return Event.find({}).sort({ createdAt: -1 })
  },

  // ── Ticket methods ───────────────────────────────────────────────────────────

  async createTicket(ticketData) {
    await connectDB()
    const ticket = await Ticket.create(ticketData)

    // Increment soldTickets on the event
    await Event.findByIdAndUpdate(ticketData.eventId, {
      $inc: { soldTickets: ticketData.quantity },
    })

    return ticket
  },

  async getUserTickets(userId) {
    await connectDB()
    return Ticket.find({ userId }).populate('eventId').sort({ createdAt: -1 })
  },

  async getAllTickets() {
    await connectDB()
    return Ticket.find({}).populate('userId', 'name email').populate('eventId', 'name').sort({ createdAt: -1 })
  },
}
