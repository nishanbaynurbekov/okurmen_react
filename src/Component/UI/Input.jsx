import React, {useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import './Input.css'

function Input() {

    const [ search, setSearch ] = useState("")
  const navigate = useNavigate()
  const inputRef = useRef(null)

  function goToSearch(e){
    if (e.key == 'Enter') {
      navigate(`/search/${search}`)
      setSearch(" ")
    }
  }
  const goButton = () => {
    setSearch('')
      navigate(`/search/${search}`)
  }
  const cancelInpt = () => {
    setSearch('')
  }
  const openInpt = () => {
      inputRef.current.focus()
  }


  return (
    <div>
      <div className='search' onClick={openInpt}>
        <FontAwesomeIcon 
        className='search__cancel' 
        icon={faXmark}
        onClick={cancelInpt}/>
        <input type="tex" 
        ref={inputRef}
        className='search__inpt' 
        placeholder='китипетин аты менен издеңиз'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={goToSearch}/>
        <FontAwesomeIcon 
        className='search__go' 
        icon={faMagnifyingGlass}
        onClick={goButton}/> 
     </div>
    </div>
  )
}

export default Input
