const express = require('express');
const router = express.Router();

// Mock data
let contributions = [];

// Get all contributions
router.get('/', (req, res) => {
  res.json(contributions);
});

// Add a new contribution
router.post('/', (req, res) => {
  const { contribution, attachments, email, requirementId } = req.body;
  const newContribution = {
    id: contributions.length + 1,
    contribution,
    attachments,
    email,
    requirementId,
    time: new Date().toISOString(),
  };
  contributions.push(newContribution);
  res.status(201).json(newContribution);
});

module.exports = router;