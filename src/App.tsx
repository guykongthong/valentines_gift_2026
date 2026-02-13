import './App.css'
import TextType from './TextType'

function App() {
  return (
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
        Continue
      </button>
    </main>
  )
}

export default App
