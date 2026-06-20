import React, { useState, useEffect} from 'react'
import Api from '../Component/API/Api'
import apiOkur from '../axios/Api_okur' 
import List from '../Component/list/List'

 

function Kana() {
  const [ use, setUse ] = useState([])

   async function openBooks() {
    try {
      const res = await apiOkur.get()
      console.log(res.data);
      setUse(res.data)
      
    } catch (error) {
      console.log(error);
      
    }
   }

   useEffect(() => {
    openBooks()
   }, [])

  return (
    <div>
      <h1>Бул жер келечектеги китеп кана</h1>
      <List/>
      <div className='cara'>
      {use.map((user) => (
       <Api key={user.id} data={user}/>
    ))}
    </div>
    </div>
  )
}

export default Kana
