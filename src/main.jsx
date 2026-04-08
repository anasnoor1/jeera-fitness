import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Workouts from './pages/Workouts'
import WorkoutDetail from './pages/WorkoutDetail'
import Diet from './pages/Diet'
import Calories from './pages/Calories'
import Bmi from './pages/Bmi'
import About from './pages/About'
import Contact from './pages/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/workouts/:slug" element={<WorkoutDetail />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/calories" element={<Calories />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
