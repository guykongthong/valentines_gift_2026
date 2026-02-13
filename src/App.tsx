import './App.css'
import TextType from './TextType'
import Dither from './Dither'

function App() {
  return (
    <main className="app-shell">
      <div className="dither-wrap" aria-hidden="true">
        <Dither
          waveColor={[1, 0, 0.3]}
          disableAnimation={false}
          enableMouseInteraction={false}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>
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
