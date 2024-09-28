const express = require('express');
const router = express.Router();

// Mock data for requirements
const requirements = [
  {
    id: 1,
    title: 'Requirement 1',
    description: 'This is the description for requirement 1.',
    user: 'John Doe',
    contributionCount: 5,
    domain: 'Software Development',
    time: '2023-01-01 10:00:00',
    profilePic: 'https://example.com/profile-pic-john-doe.jpg',
  },
  {
    id: 2,
    title: 'Requirement 2',
    description: 'This is the description for requirement 2.',
    user: 'Jane Smith',
    contributionCount: 3,
    domain: 'Project Management',
    time: '2023-01-02 11:00:00',
    profilePic: 'https://example.com/profile-pic-jane-smith.jpg',
  },
  {
    id: 3,
    title: 'Requirement 3',
    description: 'This is the description for requirement 3.',
    user: 'Shane Smith',
    contributionCount: 2,
    domain: 'Project Management',
    time: '2023-01-02 09:00:00',
    profilePic: 'https://example.com/profile-pic-shane-smith.jpg',
  },
  {
    id: 4,
    title: 'Requirement 4',
    description: 'This is the description for requirement 4.',
    user: 'Jane Smith',
    contributionCount: 8,
    domain: 'Data Science',
    time: '2023-01-02 06:00:00',
    profilePic: 'https://example.com/profile-pic-jane-smith.jpg',
  },
];

// Get all requirements
router.get('/', (req, res) => {
  res.json(requirements);
});

// Get requirement by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const requirement = requirements.find(req => req.id === parseInt(id));
  if (requirement) {
    res.json(requirement);
  } else {
    res.status(404).json({ message: 'Requirement not found' });
  }
});

// Add a new requirement
router.post('/', (req, res) => {
  const { title, description, user, domain, profilePic } = req.body;
  const newRequirement = {
    id: requirements.length + 1,
    title,
    description,
    user,
    contributionCount: 0, // Initialize contribution count to 0
    domain,
    time: new Date().toISOString(), // Set the current time
    profilePic,
  };
  requirements.push(newRequirement);
  res.status(201).json(newRequirement);
});

module.exports = router;