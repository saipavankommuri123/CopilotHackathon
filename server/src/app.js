const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contributionsRoutes = require('./routes/contributions');
const requirementsRoutes = require('./routes/requirements');
const usersRoutes = require('./routes/user');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/contributions', contributionsRoutes);
app.use('/api/requirements', requirementsRoutes);
app.use('/api/users', usersRoutes);

module.exports = app;