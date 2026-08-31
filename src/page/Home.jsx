import { useState, useRef } from 'react'
import '../styles/Home.css'
import { Link, } from 'react-router-dom'
import List from '../Component/list/List'
import Input from '../Component/UI/Input'

function Home() {
  
  return (
    <div className="home-container">
        <h1>Окурмен окуу борборунун электрондук китепканасы</h1>
        <List />
        <Input/>
     

      <main className="main-content">
        {/* 1-БӨЛҮК: КАТЕГОРИЯЛАР */}
        <section className="section-card">
          <h2 className="section-title teacher-title">Мектептеги жаңылыктар</h2>
       
            <div className="card-grid">
              <div className="bloc">Алдыңкы мугалимдер</div>
              <div className="bloc">Алдыңкы окуучулар</div>
              <div className="bloc">ЖРТда алтын сертификад алгандар</div>
              <div className="bloc">Олимпиада Жыйынтыктары</div>
              <div className="bloc"></div>
              <div className="bloc"></div>
              <div className="bloc"></div>
              <div className="bloc"></div>
            </div>
 

          
        </section>

        {/* 2-БӨЛҮК: МУГАЛИМДЕР ЖАНА МЕКТЕП ОКУУЧУЛАРА БӨЛҮГҮ */}
        <section className="section-card">
    
            <h2 className="section-title teacher-title">Мугалимдердин эмгеги</h2>
            <div className="card-grid-3">
              <div className="tun-card">Чыгармалар</div>
              <div className="tun-card">Макалалар</div>
              <div className="tun-card">Сунуштар</div>
              <div className="tun-card">Видео сабактар</div>
              <div className="tun-card">Изилдөөлөр</div>
              <div className="tun-card">Усулдук ийрим</div>
              <div className="tun-card"></div>
              <div className="tun-card"></div>
              <div className="tun-card"></div>
              <div className="tun-card"></div>
              <div className="tun-card"></div>
              <div className="tun-card"></div>
       
          </div>
        </section>

        {/* 3-БӨЛҮК: БОРБОР ТУУРАЛУУ */}
        <section className="section-card info-section">
          <h2 className="section-title teacher-title">Окуучулардын эмгектери</h2>
          <div className="card-grid-3">
            <div className="go-card">ырлар</div>
            <div className="go-card">аңгемелер</div>
            <div className="go-card">дилбаяндар</div>
            <div className="go-card"></div>
            <div className="go-card"></div>
            <div className="go-card"></div>
            <div className="go-card"></div>
            <div className="go-card"></div>
            <div className="go-card"></div>
            <div className="go-card"></div>
            <div className="go-card"></div>
            <div className="go-card"></div>

          </div>
        </section>
      </main>
    </div>
  )
}

export default Home