import React from 'react'
import { Card, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import './RequirementCard.css'

interface RequirementCardProps {
  title: string
  description: string
  id: string
  user: string
  designation: string
  profilePic: string
  time: string
  contributionCount: number // Add a contributionCount prop
  domain: string
}

const RequirementCard: React.FC<RequirementCardProps> = ({
  title,
  description,
  id,
  user,
  designation,
  profilePic,
  time,
  contributionCount,
  domain,
}) => {
  const navigate = useNavigate()

  const handleViewDetails = () => {
    navigate(`/requirement/${id}`)
  }

  return (
    <Card className="requirement-card">
      <div className="requirement-card-header">
        <div className="requirement-card-user-info">
          <img src={profilePic} alt={`${user}'s profile`} className="requirement-card-profile-pic" />
          <div>
            <span className="requirement-card-user">{user}</span>
            <span className="requirement-card-designation">{designation}</span>
          </div>
        </div>
        <span className="requirement-card-time">{time}</span>
        <div className="requirement-card-button">
          <Button type="primary" onClick={handleViewDetails}>
            View Details
          </Button>
          <span>
            Domain: <span className="requirement-card-domain"> {domain}</span>
          </span>
        </div>
      </div>
      <div className="requirement-card-contribution-count">Contributions: {contributionCount}</div>
      <hr className="requirement-card-divider" />
      <div className="requirement-card-title">{title}</div>
      <div className="requirement-card-description">{description}</div>
    </Card>
  )
}

export default RequirementCard
