import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Final() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className={`final-page ${isOpen ? 'is-open' : ''}`}>
      <div className="final-scrim" aria-hidden="true" />
      <div className="envelope-stage">
        <button
          className="envelope"
          type="button"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
        >
          <div className="letter">
            <div className={`letter-content ${isOpen ? 'is-visible' : ''}`}>
              {isOpen && (
                <button
                  className="letter-close"
                  type="button"
                  aria-label="Close letter"
                  onClick={event => {
                    event.stopPropagation()
                    setIsOpen(false)
                  }}
                >
                  X
                </button>
              )}
              <p>Write your message here...</p>
            </div>
          </div>
          <div className="envelope-body" />
          <div className="envelope-flap" />
        </button>
      </div>

      <button
        className="continue-btn final-back-btn"
        type="button"
        onClick={() => navigate('/')}
      >
        Back to start
      </button>
    </main>
  )
}
