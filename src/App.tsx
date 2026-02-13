import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Next from './pages/Next'
import Final from './pages/Final'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/next" element={<Next />} />
      <Route path="/final" element={<Final />} />
    </Routes>
  )
}

export default App
