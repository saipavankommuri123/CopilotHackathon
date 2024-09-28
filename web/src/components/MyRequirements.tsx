import React from 'react'

import RequirementCard from '../components/RequirementCard'
import './MyRequirements.css'

const UserRequirementsPage = () => {
  // Mock data for user's posted requirements
  const userRequirements = [
    {
      id: '1',
      title: 'User Requirement 1',
      description: 'This is the description for user requirement 1.',
      user: 'John Doe',
      designation: 'Software Engineer',
      profilePic: 'https://via.placeholder.com/40',
      time: '2023-10-01 10:00 AM',
      contributionCount: 5,
      domain: 'Web Development',
    },
    {
      id: '2',
      title: 'User Requirement 2',
      description: 'This is the description for user requirement 2.',
      user: 'John Doe',
      designation: 'Software Engineer',
      profilePic: 'https://via.placeholder.com/40',
      time: '2023-10-02 11:00 AM',
      contributionCount: 3,
      domain: 'Mobile Development',
    },
    // Add more user requirements as needed
  ]

  return (
    <div>
      {userRequirements.map(requirement => (
        <RequirementCard
          key={requirement.id}
          id={requirement.id}
          title={requirement.title}
          description={requirement.description}
          user={requirement.user}
          designation={requirement.designation}
          profilePic={requirement.profilePic}
          time={requirement.time}
          contributionCount={requirement.contributionCount}
          domain={requirement.domain}
        />
      ))}
    </div>
  )
}

export default UserRequirementsPage
