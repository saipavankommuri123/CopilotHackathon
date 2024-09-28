import React from 'react'
import './Navbar.css'
import { useSelector, useDispatch } from 'react-redux'
import { Dropdown, Menu } from 'antd'
import { AppDispatch, RootState } from '../redux/store'
import { setUserData } from '../redux/slice/userSlice'
import { useNavigate } from 'react-router-dom'
import { BellOutlined, DeploymentUnitOutlined, UserOutlined } from '@ant-design/icons'

const Navbar = () => {
  const userName = useSelector((state: RootState) => state.user.firstName)
  const [dropdownVisible, setDropdownVisible] = React.useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const handleProfileClick = () => {
    setDropdownVisible(!dropdownVisible)
  }
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(
      setUserData({
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        designation: '',
      }),
    )
    navigate('/login')
    console.log('User logged out')
  }

  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  )

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <DeploymentUnitOutlined />
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-notifications">
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="1">Notification 1</Menu.Item>
              <Menu.Item key="2">Notification 2</Menu.Item>
              <Menu.Item key="3">Notification 3</Menu.Item>
            </Menu>
          }
          trigger={['click']}>
          <span className="notification-icon">
            <BellOutlined />
          </span>
        </Dropdown>
      </div>
      <Dropdown overlay={menu} visible={dropdownVisible} onVisibleChange={setDropdownVisible}>
        <div className="navbar-profile" onClick={handleProfileClick}>
          <span>Welcome, {userName}</span>

          <UserOutlined style={{ marginLeft: '8px' }} />
        </div>
      </Dropdown>
    </nav>
  )
}

export default Navbar
