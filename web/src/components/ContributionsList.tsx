import React from 'react';
import { Card } from 'antd';
import './ContributionsList.css';

interface Contribution {
  contribution: string;
  attachments: { name: string; url: string }[];
  user: string;
  time: string;
  designation: string;
}

interface ContributionsListProps {
  contributionsData: Contribution[];
}

const ContributionsList: React.FC<ContributionsListProps> = ({ contributionsData }) => {
  return (
    <div className="contributions-list">
      {contributionsData.length > 0 ? (
        contributionsData.map((contributionData, index) => (
          <Card key={index} className="contribution-card">
            <p>
              <strong>Contributor:</strong> {contributionData.user}
            </p>
            <p>
              <strong>Time:</strong> {contributionData.time}
            </p>
            <p>
              <strong>Designation:</strong> {contributionData.designation}
            </p>
            <p>
              <strong>Contribution:</strong> {contributionData.contribution}
            </p>
            <p>
              <strong>Attachments:</strong>{' '}
              {contributionData.attachments.map((file) => file.name).join(', ')}
            </p>
          </Card>
        ))
      ) : (
        <p>No contributions yet.</p>
      )}
    </div>
  );
};

export default ContributionsList;