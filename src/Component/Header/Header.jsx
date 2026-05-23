import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function header() {
  return (
    <div>
       <header class="head"
       id="bash">
    <div class="heder-left">
        <nav class="nav">
            <Link to="/">Башкы бет </Link>
            <Link className='none' to="/kitepter">китептер </Link>
            <Link to="/audio">аудио-китептер </Link>
            <Link to="/oyun">оюндар </Link>
            </nav>
    </div>  
<div class="header-right">
      <select name="name" id="">
        <option value="">KGZ</option>
        <option value="">RU</option>
        <option value="">ENG</option>
      </select>  
      <Link to="/login"><button class="kir">кирүү</button></Link> 
      </div>       
     </header>

    </div>
  )
}

export default header
