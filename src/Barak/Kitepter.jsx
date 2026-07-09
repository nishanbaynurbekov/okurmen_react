import React, { useEffect, useState } from 'react'
import '../styles/style1.css'
import Load from '../loader/Load'
import apiOkur from '../axios/Api_okur'
import Api from '../Component/API/Api'
import List from '../Component/list/List'

function Kitepter() {
  const [ocno, setOcno] = useState(false)
  const [gen, setGen] = useState(true)
  const [aytmatov, setAytmatov] = useState(false)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

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

  // Чыңгыз Айтматовду басканда китептерди чыгарат
  function openAytmatov() {
    setAytmatov(true)
    setOcno(false)
  }

  async function getApi() {
    try {
      const res = await apiOkur.get()
      console.log(res.data);
      setUsers(res.data)
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    getApi()
  }, [])  

  if (loading) { 
    return <Load/>
  }

  return (
    <div>
        <h1>Китеп – бул келечекке салынган инвестиция.</h1>
        <List/>
        
        {/* КИТЕПТЕРДИН ТИЗМЕСИ (API) */}
        {aytmatov && (
          <div className='cara'>
            {users.map((user) => (
               <Api key={user.id} data={user}/>
            ))}
          </div>
        )}
    
        {/* ЖАЗУУЧУЛАР БӨЛҮГҮ */}
        {ocno && (
          <div className='adab'>
            <div onClick={openAytmatov} className="card">Чыңгыз Айтматов</div>
            <div className="card">Жазуучулар</div>
            <div className="card">Жазуучулар</div>
            <div className="card">Жазуучулар</div>
            <div className="card">Жазуучулар</div>
            <div className="card">Жазуучулар</div>
            <div className="card">Жазуучулар</div>
            <div className="card">Жазуучулар</div>
          </div>
        )}
          
        {/* БАШКЫ КАТЕГОРИЯЛАР */}
        {gen && (
          <div className="cont1">
            <div className="bloce" onClick={openApp}>Дүйнө тарыхы</div>
            <div className="bloce" onClick={openApp}>Кыргызстан тарыхы</div>
            <div className="bloce" onClick={openApp}>Ислам тарыхы</div>
            <div className="bloce" onClick={openApp}>Жарык жол</div>
            <div className="bloce" onClick={open}>Кыргыз адабияты</div> 
            <div className="bloce" onClick={openApp}>Манастануу</div>
            <div className="bloce" onClick={openApp}>Илимий китептер</div>
            <div className="bloce" onClick={openApp}>Философия</div>
          </div>
        )}
    </div>
  )
}

export default Kitepter