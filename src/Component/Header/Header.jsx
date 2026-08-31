 import { Link } from 'react-router-dom'
import  "./header.css"

function header() {
  return (
    <div>
       <header className="head">
    <div className="heder-left">
        <nav className="nav">
            <Link to="/">Үй</Link> 
            <Link to="/books"> китептер </Link>
            <Link className='none' to="/audio">аудио-китептер </Link>
            <Link to="/games"> оюндар</Link>
            <Link  to="/history"> таарых</Link>
            </nav>
    </div>  
<div className="header-right">
     
      <Link className='login' to="login">
      <button className="login__btn">кирүү</button></Link> 
      </div>       
     </header>

    </div>
  )
}

export default header
