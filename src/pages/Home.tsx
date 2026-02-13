import TextType from '../TextType'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <main className="app-shell">
      <TextType
        text={['Happy Valentines Day', 'นะอ้วน', 'I love you <3']}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor
        cursorCharacter="|"
        deletingSpeed={50}
        variableSpeed={{ min: 60, max: 120 }}
        cursorBlinkDuration={0.5}
      />
      <button
        className="continue-btn"
        type="button"
        onClick={() => navigate('/next')}
      >
        ไปหน้าต่อไป
      </button>
    </main>
  )
}
