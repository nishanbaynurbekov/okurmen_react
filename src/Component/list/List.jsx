import React, { useState} from 'react'
import '../../styles/list.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faHome, faBook, faFileAudio, faDice, faBookOpen, faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

function List() {
    const [ list, setList ] = useState(false)
    const [ falist, setFalist] = useState(true)
    function opeHead() {
        setList(true)
        setFalist(false)
    }
    function openList() {
        setFalist(true)
        setList(false)
    }
  return (
    <div className='option'>
        { falist && <div className='font'><FontAwesomeIcon icon={faList} onClick={opeHead}/> </div> }
      {
            list && <div className='openList'>
              <Link to="/">
             <FontAwesomeIcon icon={faHome} onClick={openList} className='icon'/>
              </Link>
              <Link to="/kitepter"><FontAwesomeIcon icon={faBook} onClick={openList}
              className='icon'/></Link>
              <Link to="/audio">
              <FontAwesomeIcon icon={faFileAudio} onClick={openList}
              className='icon'/>
              </Link>
              <Link to="/oyun"><FontAwesomeIcon icon={faDice} onClick={openList}
              className='icon'/></Link>
             <Link to="/kana">
              <FontAwesomeIcon icon={faBookOpen} onClick={openList}
              className='icon'/>
             </Link>
              <FontAwesomeIcon icon={faAngleLeft} onClick={openList} className='icon'/>
            </div>
        }
      
    </div>
  )
}

export default List
