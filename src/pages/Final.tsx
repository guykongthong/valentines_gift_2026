import { useNavigate } from 'react-router-dom'

export default function Final() {
  const navigate = useNavigate()

  return (
    <main className="app-shell">
      <p>Made it!</p>
      <button className="continue-btn" type="button" onClick={() => navigate('/')}>
        Back to start
      </button>
    </main>
  )
}
