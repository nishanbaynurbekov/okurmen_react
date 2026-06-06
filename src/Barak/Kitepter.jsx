import React, { useEffect, useState } from 'react'
import '../styles/style1.css'
import Load from '../loader/Load'

function Kitepter() {
  const [ocno, setOcno] = useState(false)
  const [ gen, setGen] = useState(true)
  const [ aytmatov, setAytmatov] = useState(false)
   const [ users, setUsers] = useState([])
   const [ loading, setLoading ] = useState(true)

  function openApp (){
    setGen(false)
   
  }
   function open () {
      setOcno(true)
  }
  function openAytmatov (){
    setAytmatov(true)
    setOcno(false)
  }
  useEffect(() => {
    fetch('https://69e59424ce4e908a155e2650.mockapi.io/Bhh/chyngyz')
     .then(res => res.json())
     .then(data =>{
      setUsers(data)
      setLoading(false)
     })
     .catch(err => console.log(err))
  }, [])  
  if (loading) { 
    return <Load/>
  }
  return (
    <div>
        <h1>Китеп– бул келечекке салынган инвестиция.</h1>
        
       { aytmatov && (
        <div className='cara'>
   {users.map((user) => (
      <div className='sabr' key={user.id}>
        <div className="image">
        <img src={user.image} alt=''/></div>
        <h3>{user.name}</h3>
        <h5>{user.year}</h5>
        <p>{user.text}</p>
        <button id="ok_btn">окуу</button>
        <button id="iz_btn">тандалгандар</button>
      </div>
    ))}
    </div>
       )}
    
       { ocno &&  <div className='adab'>
        <div onClick={openAytmatov} className="card">Чыңгыз Айтматов</div>
        <div className="card">жазуучулар</div>
        <div className="card">жазуучулар</div>
        <div className="card">жазуучулар</div>
        <div className="card">жазуучулар</div>
        <div className="card">жазуучулар</div>
        <div className="card">жазуучулар</div>
        <div className="card">жазуучулар</div></div>}
          
     { gen &&  <div class="cont1" onClick={openApp}>
            <div className="bloce wert10">Дүйнө таарыхы</div>
            <div className="bloce wert2">Кыргызстан таарыхы</div>
            <div className="bloce wert3">
                Ислам таарыхы
            </div>
            <div className="bloce wert4">Жарык жол</div>
            <div className="bloce wert5" onClick={open} > Кыргыз адабияты</div> 
            <div className="bloce wert6">Манастануу</div>
            <div className="bloce wert7">Илимий китептер</div>
            <div className="bloce wert8">Филасофия</div>
        </div> }

    </div>
  )
}

export default Kitepter
