import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import ContributionsList from '../components/ContributionsList';
import './RequirementDetail.css';

const RequirementDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [hasContributed, setHasContributed] = useState(true); // State to manage contribution status
  const [contributionsData, setContributionsData] = useState<any>([
    {
      contribution: '1 contribution data',
      attachments: [
        { name: 'file1.txt', url: '/path/to/file1.txt' },
        { name: 'file2.jpg', url: '/path/to/file2.jpg' },
      ],
      user: 'John Doe',
      time: '2023-10-01 10:00 AM',
      designation: 'Software Engineer',
    },
    {
      contribution: '2 contribution data',
      attachments: [
        { name: 'file1.txt', url: '/path/to/file1.txt' },
        { name: 'file2.jpg', url: '/path/to/file2.jpg' },
      ],
      user: 'Jane Smith',
      time: '2023-10-02 11:00 AM',
      designation: 'Project Manager',
    },
  ]); // State to store contribution data
  const [contributedData, setContributedData] = useState<any>(null);

  const handleSubmit = (values: any) => {
    console.log('Form values:', values);
    setContributedData(values); // Save contribution data
    setHasContributed(true); // Set contribution status to true
  };

  const handleEdit = () => {
    setHasContributed(false); // Set contribution status to false to show the form
  };

  const coordinatorEmail: string = 'sakkommuri';
  const requirementEmail: string = 'sakkommuri';

  return (
    <div className="requirement-detail-container">
      <h1>Requirement Detail</h1>
      <p>Requirement ID: {id}</p>
      {/* Display more details about the requirement here */}

      {coordinatorEmail === requirementEmail ? (
        <div>
          <h2>All Contributions</h2>
          <ContributionsList contributionsData={contributionsData} />
        </div>
      ) : hasContributed ? (
        <div>
          <h2>Your Contribution</h2>
          <p>
            <strong>Contribution:</strong> {contributedData?.contribution}
          </p>
          <p>
            <strong>Attachments:</strong> {contributedData?.attachments?.map((file: any) => file.name).join(', ')}
          </p>
          <Button type="primary" onClick={handleEdit}>
            Edit Contribution
          </Button>
        </div>
      ) : (
        <div>
          <h2>Contribute Data</h2>
          <Form onFinish={handleSubmit}>
            <Form.Item
              name="contribution"
              label="Contribution"
              rules={[{ required: true, message: 'Please input your contribution!' }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item
              name="attachments"
              label="Attachments"
              valuePropName="fileList"
              getValueFromEvent={(e: any) => (Array.isArray(e) ? e : e && e.fileList)}
            >
              <Upload name="files" action="/upload.do" listType="text">
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
  );
};

export default RequirementDetail;