const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

// Mock data for users
const users = []

// Generate a random profile picture link
const generateProfilePic = () => {
  const randomId = Math.floor(Math.random() * 1000)
  return `https://randomuser.me/api/portraits/lego/${randomId}.jpg`
}

// User signup
router.post('/signup', async (req, res) => {
  const { email, firstName, lastName, designation, role, password } = req.body

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = {
    id: users.length + 1,
    email,
    firstName,
    lastName,
    designation,
    role,
    password: hashedPassword, // Store the hashed password
    profilePic: generateProfilePic(),
  }
  users.push(newUser)
  res.status(201).json(newUser)
})

// User login
router.post('/login', async (req, res) => {
  const { email, password } = req.body

  // Find the user by email
  const user = users.find(u => u.email === email)
  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  // Compare the password
  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid password' })
  }

  // Return user data (excluding password)
  const { password: _, ...userData } = user
  res.json(userData)
})

module.exports = router
