import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Next from './pages/Next'
import Final from './pages/Final'

function App() {
  return (
<<<<<<< HEAD
    <main className="app-shell">
      <TextType
        text={[
          'Happy Valentines Day',
          'นะอ้วน',
          'I love you <3'
        ]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor
        cursorCharacter="|"
        deletingSpeed={50}
        variableSpeed={{ min: 60, max: 120 }}
        cursorBlinkDuration={0.5}
      />
      <button className="continue-btn" type="button">
        ไปต่อ
      </button>
    </main>
=======
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/next" element={<Next />} />
      <Route path="/final" element={<Final />} />
    </Routes>
>>>>>>> development/feature/domeGalleryPage
  )
}

export default App
