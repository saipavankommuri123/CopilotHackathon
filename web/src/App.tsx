import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import SignupPage from './pages/Signup'
import LoginPage from './pages/Login'

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
