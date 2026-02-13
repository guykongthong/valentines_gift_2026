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
              <p>Happy Valentines day นะอ้วน ิิ<br></br>
              วันนี้เป็น valentines ปีแรกของพวกเรานะะะะ<br></br>
              แล้วเมื่อวานเราสองคนคบกันได้ 7 เดือนแล้วนะ<br></br>
              เค้าดีใจมากๆเลยที่ได้เจออ้วนนะ<br></br>
              อ้วนจีบเค้าตอนวันที่ 1 พฤษภาคมอ้วนจำได้ไหม ิิิิ<br></br>
              ตอนนั้นเค้าก็ไม่ได้คิดอะไรมากแต่ตอนนี้อ้วนห้ามไปไหนห้ามไปไหนเด็ดคาด!<br></br>
              ครั้งนี้ของขวันอาจจะไม่ได้ใหญ่มาก (มีอย่างอืนใหญ่กว่า ิิ + ตังค์หมด) แต่เค้าก็หวังว่าอ้วนจะชอบนะ<br></br>
              เค้าเดินดูนานมากๆๆ<br></br>
              จากวันนี้ไปเค้าจะรักอ้วนแล้วพาอ้วนไปกินของอร่อยๆเยอะเลยเราสองคนจะได้เป็นปีศาจหมู!!!<br></br><br></br>
              เค้ารักอ้วนน้าา ❤️
              </p>
            </div>
          </div>
          <div className="envelope-body" />
          <div className="envelope-flap" />
        </button>
      </div>

      {!isOpen && (
        <button
          className="continue-btn final-back-btn"
          type="button"
          onClick={() => navigate('/')}
        >
          กลับไปหน้าแรก
        </button>
      )}
    </main>
  )
}
