import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/header.css'
function header() {
  return (
    <div>
       <header className="head"
       id="bash">
    <div className="heder-left">
        <nav className="nav">
           
            <Link to="/">Үй</Link> 
            <Link to="/kitepter"> китептер </Link>
            <Link className='none' to="/audio"> 
            аудио-китептер </Link>
            <Link to="/oyun">оюндар </Link>
            </nav>
    </div>  
<div className="header-right">
      <select name="name" id="">
        <option value="">KGZ</option>
        <option value="">RU</option>
        <option value="">ENG</option>
      </select>  
      <Link className='login' to="login"><button className="kir">кирүү</button></Link> 
      </div>       
     </header>

    </div>
  )
}

export default header
