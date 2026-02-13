import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import DomeGallery from '../DomeGallery'
import picture1 from '../assets/picture1.jpeg'
import picture2 from '../assets/picture2.jpeg'
import picture3 from '../assets/picture3.jpeg'
import picture4 from '../assets/picture4.jpeg'
import picture5 from '../assets/picture5.jpeg'
import picture6 from '../assets/picture6.jpeg'

export default function Next() {
  const navigate = useNavigate()
  const [dateValue, setDateValue] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (dateValue === '2025-07-13') {
      setError('')
      navigate('/final')
      return
    }
    setError('ไม่ถูกนะคับเบบี๋!!!')
  }

  return (
    <main className="gallery-page">
      <div className="gallery-bg" aria-hidden="true">
        <DomeGallery
          images={[
            picture1,
            picture2,
            picture3,
            picture4,
            picture5,
            picture6
          ]}
          fit={0.75}
          minRadius={650}
          maxVerticalRotationDeg={3}
          segments={32}
          dragDampening={2}
          grayscale={false}
        />
      </div>

      <div className="overlay-card">
        <p className="overlay-title">เราคบกันวันไหน?</p>
        <input
          className="overlay-input"
          type="date"
          value={dateValue}
          onChange={event => setDateValue(event.target.value)}
          aria-label="Pick the date"
        />
        {error && <p className="overlay-error">{error}</p>}
        <button className="continue-btn" type="button" onClick={handleSubmit}>
          ตอบ
        </button>
        <button
          className="continue-btn"
          type="button"
          onClick={() => navigate('/')}
        >
          กลับไปหน้าแรก
        </button>
      </div>
    </main>
  )
}
