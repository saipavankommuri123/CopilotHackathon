import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SidePanel from './components/SidePannel'
import ContributorPage from './pages/Contributor'
import CoordinatorPage from './pages/Coordinator'
import './Home.css'
import RequirementsList from './components/RequirementsList'
import RequirementDetail from './components/RequirementDetail'
import MyRequirements from './components/MyRequirements'

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
            <Route path="/" element={<RequirementsList />} />
            <Route path="/requirement/:id" element={<RequirementDetail />} />
            <Route path="/my-requirements" element={<MyRequirements />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default HomePage
