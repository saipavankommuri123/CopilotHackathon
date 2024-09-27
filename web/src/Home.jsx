import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SidePanel from './components/SidePannel'
import ContributorPage from './pages/Contributor'
import CoordinatorPage from './pages/Coordinator'
import './Home.css'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <SidePanel />
        <div className="content">
          <Routes>
            <Route path="contributor" element={<ContributorPage />} />
            <Route path="coordinator" element={<CoordinatorPage />} />
            <Route
              path="/"
              element={
                <div>
                  <h1>Welcome to the Home Page</h1>
                  <p>Scroll down to see the fixed navbar in action.</p>
                  <div style={{ height: '2000px' }}>
                    <p>Content goes here...</p>
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default HomePage
