import React, {useState} from 'react'
import { data } from 'react-router-dom'
import Api from '../API/Api'


function History() {
  const [likes, setLikes] = useState(() => {
    const saved = localStorage.getItem("local")
     return saved ? JSON.parse(saved) : []
    
  })
  const getdata = () => {
     console.log(likes);
     
  }

  
  return (
   <div className='label'>
     {likes.map((item) => (
     <Api key={item.id} data={item}/>
     ))}
    </div>
  )
}

export default History
