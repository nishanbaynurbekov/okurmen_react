import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        
        {/* 1-бөлүк: Борбор жөнүндө кыскача */}
        <div className="footer__col">
          <h3 className="footer__title">Окурмен Китепканасы</h3>
          <p className="footer__text">
            Билим алууга умтулган окуучулар жана мугалимдер үчүн электрондук китептердин жана агартуучу материалдардын ачык базасы.
          </p>
        </div>

        {/* 2-бөлүк: Навигация шилтемелери */}
        <div className="footer__col">
          <h4 className="footer__subtitle">Бөлүмдөр</h4>
          <ul className="footer__links">
            <li><Link to="/">Башкы барак</Link></li>
            <li><Link to="/library">Китептер</Link></li>
            <li><Link to="/audio">Аудио-китептер</Link></li>
            <li><Link to="/games">Оюндар</Link></li>
          </ul>
        </div>

        {/* 3-бөлүк: Байланыш & Соцтармактар */}
        <div className="footer__col">
          <h4 className="footer__subtitle">Байланыш</h4>
          <p className="footer__info">📍 Бишкек ш.</p>
          <p className="footer__info">📧  nishanbaynurbekov@gmail.com</p>
          <p className="footer__info">📞 +996 (223) 544-667</p>
        </div>

      </div>

      {/* Төмөнкү автордук укук бөлүгү */}
      <div className="footer__bottom">
        <p>© 2026 Окурмен окуу борбору. Бардык укуктар корголгон.</p>
      </div>
    </footer>
  )
}

  export default Footer