 import React,{useState} from 'react'
 import WordMore from '../games/WordMore'
 import '../styles/Games.css'
 import List from '../Component/list/List'
 import { useConfirmToast } from '../redux/Codes'
 import { useDispatch } from 'react-redux'
 import { toast } from 'react-toastify'
 
 function Games() {
  const confirm = useConfirmToast()
  const dispatch = useDispatch()

  const backToGames = async() => {
    const confrimed = await confirm({
      message: "чыгууну каалайсызбы?",
      confirmText: "ооба",
      cancelText: "жок"
    })
    if (confrimed) {
     setGamesWord(false)
     setkeyGames(true)
    } 
  }
  const notConfirm = () => {
     setGamesWord(false)
     setkeyGames(true)
  }

  const [ gamesWord, setGamesWord ] = useState(false)
  const [ keyGames, setkeyGames ] = useState(true)
  function goToPlay () {
    setGamesWord(true)
    setkeyGames(false)
  }
   return (
     <div>
      <h1>Сөз оюндары</h1>
      <List/>
      { keyGames && <button className='games__word'
      onClick={goToPlay}>Сүйлөм толулктоо</button>}
       { gamesWord && <WordMore data={backToGames} code={notConfirm}/> }
     </div>
   )
 }
 
 export default Games
 