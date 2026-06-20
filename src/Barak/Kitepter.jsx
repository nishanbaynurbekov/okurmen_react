import React, { useEffect, useState } from 'react'
import '../styles/style1.css'
import Load from '../loader/Load'
import apiOkur from '../axios/Api_okur'
import Api from '../Component/API/Api'
import List from '../Component/list/List'

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
        <h1>Китеп– бул келечекке салынган инвестиция.</h1>
        <List/>
        
       { aytmatov && (
        <div className='cara'>
   {users.map((user) => (
       <Api key={user.id} data={user}/>
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
          
     { gen &&  <div className="cont1" onClick={openApp}>
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
