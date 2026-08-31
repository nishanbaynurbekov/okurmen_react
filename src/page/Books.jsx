import { useEffect, useState } from 'react'
import '../styles/Books.css'
import { Link } from 'react-router-dom'
import List from '../Component/list/List'

function Kitepter() {
  const [ocno, setOcno] = useState(false)
  const [gen, setGen] = useState(true)

  // Категорияны басканда иштейт
  function openApp() {
    setGen(false)
  }

  // Кыргыз адабиятын басканда жазуучулар тизмесин ачат
  function open(e) {
    e.stopPropagation(); // Башка sự окуяларга тоскоол болбошу үчүн
    setOcno(true)
    setGen(false)
  }

  return (
    <div>
          <List/>
        <h1>Китеп – бул келечекке салынган инвестиция.</h1>
        
    
    
        {/* ЖАЗУУЧУЛАР БӨЛҮГҮ */}
        {ocno && (
          <div className='overlay'>
            <Link to={"/library"}>
            <div className='overlay__card'>Чыңгыз Айтмайтов</div>
            </Link>
            <div className="overlay__card">Жазуучулар</div>
            <div className="overlay__card">Жазуучулар</div>
            <div className="overlay__card">Жазуучулар</div>
            <div className="overlay__card">Жазуучулар</div>
            <div className="overlay__card">Жазуучулар</div>
            <div className="overlay__card">Жазуучулар</div>
            <div className="overlay__card">Жазуучулар</div>
          </div>
        )}
          
        {/* БАШКЫ КАТЕГОРИЯЛАР */}
        {gen && (
          <div className="badge">
            <div className="badge__card" onClick={openApp}>Дүйнө тарыхы</div>
            <div className="badge__card" onClick={openApp}>Кыргызстан тарыхы</div>
            <div className="badge__card" onClick={openApp}>Ислам тарыхы</div>
            <div className="badge__card" onClick={openApp}>Жарык жол</div>
            <div className="badge__card" onClick={open}>Кыргыз адабияты</div> 
            <div className="badge__card" onClick={openApp}>Манастануу</div>
            <div className="badge__card" onClick={openApp}>Илимий китептер</div>
            <div className="badge__card" onClick={openApp}>Философия</div>
          </div>
        )}
    </div>
  )
}

export default Kitepter