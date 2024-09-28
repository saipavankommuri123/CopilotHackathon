import React, { useState } from 'react'
import { Form, Input, Button, Modal } from 'antd'
import RequirementCard from './RequirementCard'

const RequirementsList: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [requirements, setRequirements] = useState([
    {
      id: '1',
      title: 'Requirement 1',
      description: 'This is the description for requirement 1.',
      user: 'John Doe',
      designation: 'Software Engineer',
      profilePic: 'https://via.placeholder.com/40',
      time: '2023-10-01 10:00 AM',
      contributionCount: 5,
      domain: 'Web Development',
    },
    {
      id: '2',
      title: 'Requirement 2',
      description: 'This is the description for requirement 2.',
      user: 'Jane Smith',
      designation: 'Project Manager',
      profilePic: 'https://via.placeholder.com/40',
      time: '2023-10-02 11:00 AM',
      contributionCount: 3,
      domain: 'Mobile Development',
    },
    {
      id: '3',
      title: 'Requirement 3',
      description: 'This is the description for requirement 3.',
      user: 'Alice Johnson',
      designation: 'UX Designer',
      profilePic: 'https://via.placeholder.com/40',
      time: '2023-10-03 12:00 PM',
      contributionCount: 5,
      domain: 'Data Science',
    },
    // Add more requirements as needed
  ])

  const [isCoordinator] = useState(true) // Replace with actual role check
  const [form] = Form.useForm()

  const handleAddRequirement = (values: any) => {
    const newRequirement = {
      id: (requirements.length + 1).toString(),
      ...values,
      user: 'Current User', // Replace with actual user data
      designation: 'Coordinator', // Replace with actual user designation
      profilePic: 'https://via.placeholder.com/40', // Replace with actual user profile pic
      time: new Date().toLocaleString(),
      contributionCount: 0,
    }
    setRequirements([newRequirement, ...requirements])
    form.resetFields()
  }

  return (
    <>
      {isCoordinator && (
        <>
          <Button type="primary" onClick={() => setIsModalVisible(true)}>
            Add Requirement
          </Button>
          <Modal
            title="Add Requirement"
            visible={isModalVisible}
            onCancel={() => setIsModalVisible(false)}
            footer={null}>
            <Form form={form} onFinish={handleAddRequirement} layout="vertical">
              <Form.Item name="title" rules={[{ required: true, message: 'Please input the title!' }]}>
                <Input placeholder="Title" />
              </Form.Item>
              <Form.Item name="description" rules={[{ required: true, message: 'Please input the description!' }]}>
                <Input placeholder="Description" />
              </Form.Item>
              <Form.Item name="domain" rules={[{ required: true, message: 'Please input the domain!' }]}>
                <Input placeholder="Domain" />
              </Form.Item>
              <Form.Item name="skills" rules={[{ required: true, message: 'Please input the skills!' }]}>
                <Input placeholder="Skills" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Post Requirement
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </>
      )}
      {requirements.map(requirement => (
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
    </>
  )
}

export default RequirementsList
