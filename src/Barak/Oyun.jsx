import React, { useState, useEffect} from 'react'
import List from '../Component/list/List'
import '../styles/style3.css'
import { useSelector, useDispatch } from 'react-redux'
import { number } from '../redux/timer/Timer'
import { Link } from 'react-router-dom'

function Oyun() {
  const {sekond, minut} = useSelector(state => state.timer)
   const dispatch = useDispatch()
   const [ isActive, setIsActive ] = useState(false)

   const format = (time) => String(time).padStart(2, "0")
   
   useEffect(() => {
    if(minut === 0 && sekond === 0) {
      alert("salam")
      setgames(false)
      
    }
   }, [minut, sekond])
   function reset(){
     setgames(true)
   }

      useEffect(() => {
         
       let interval = null
       if(isActive) {
         interval = setInterval(() => {
           dispatch (number())
         }, 1000);
         setgames(true)
       }
       else{
         clearInterval(interval)
       }
       return () => clearInterval(interval)
      }, [isActive, dispatch])

  //  
  // Биринчи бөлүм
  // 

  const [ games, setgames ] = useState( false)
  const [ one, setOne ] = useState(true)
  const [ two, setTwo ] = useState(false)
  const [ threen, setThreen ] = useState(false)

  // 
  // биринчи бөлүм
  // 

  const [ ansvar1, setAnsvar1 ] = useState("______")
  const [ ansvar2, setAnsvar2 ] = useState("_____")
  const [ ansvar3, setAnsvar3 ] = useState("_____")
  const [ result, setResult ] = useState('')
  const tuuraJoop = "Сынбасты/өлбөстү/жаратпаптыр"
// 
// экинчи бөлүм
// 
  const [ ansar1, setAnsar1 ] = useState("______")
  const [ ansar2, setAnsar2 ] = useState("______")
  const [ ansar3, setAnsar3 ] = useState("______")
  const [ ansar4, setAnsar4 ] = useState("______")
  const [ ansar5, setAnsar5 ] = useState("______")

  const [ result2, setResult2 ] = useState('') 
  const tuuraJoop2 = "Жакшылык/кокустан/сүйүнбө/кыйынчылык/бөгөгөндөй"

  // 
  // үчүнчү бөүлүм
  // 
   
  const [ anar1, setAnar1 ] = useState("______")
  const [ anar2, setAnar2 ] = useState("______")
  const [ anar3, setAnar3 ] = useState("______")
  const [ anar4, setAnar4 ] = useState("______")
  const [ anar5, setAnar5 ] = useState("______")
  const [ result3, setResult3 ] = useState("")
  const tuuraJoop3 = "оюну/саркерлердин/ишеними/сынган/жубата"

  function startGames(){
    setgames(true)
  }

function openPlay(){
  setOne(false)
  setTwo(true)
}
function openPlay2(){
  setOne(false)
  setTwo(false)
  setThreen(true)
}
function openPlay3(){
  setThreen(false)
  setTwo(false)
  setOne(true)
}
   

   function selectWord(word){
 
    if (word === tuuraJoop) {
      setResult("sonun!")
      setAnsvar1("Сынбасты")
      setAnsvar2("өлбөстү")
      setAnsvar3("жаратпаптыр")
      }
    else{
      alert("kata")
    }   
   }
   function selectWorld2(word1){
     
    if (word1 === tuuraJoop2){
      setResult2("sonun!")
      setAnsar1("Жакшылык")
      setAnsar2("кокустан")
      setAnsar3("сүйүнбө")
      setAnsar4("кыйынчылык")
      setAnsar5("бөгөгөндөй")
    }
      else{
       alert("kata")
      }

   }
   function selectWorld3 (word3){
    if (word3 === tuuraJoop3) {
      setResult3("керемет!")
      setAnar1("оюну")
      setAnar2("саркерлердин")
      setAnar3("ишеними")
      setAnar4("сынган")
      setAnar5("жубата")

    }
    else{
      alert("kata")
    }
   }
 
     
  return (
    <div>
      <List/>
      
   
      <div className='style'>
        <h2>{format(minut)}:{format(sekond)}</h2>
        <button onClick={() => setIsActive(!isActive)}
        disabled={isActive} >Ойноо</button>
      
        
       {
         games && 
         <div className='topGames'> 
          
      { one &&  <div className='onePlay'>
          <div className='head1'> {ansvar1} уста жаратпаптыр,  {ansvar2} кудай {ansvar3} </div>


      <div className='body1'>
         {[
           "Жарыкты/кемчиликсизди/жаратпаптыр", 
           "Темирди/акмакты/жаратыптыр",
           "Бузулбасты/ааламды/жаратыптыр",
           "Сынбасты/өлбөстү/жаратпаптыр"
         ].map((word) => (
          <div key={word} className='select'
            onClick={() => selectWord(word)}>          
            {word}
          </div>
         ))}
       </div>
       { result && <h3>{result} <br />
        <button onClick={openPlay} className='go_play'>кийинки</button></h3>}
      </div>}
      { two && <div className='onePlay'>
        <div className='head1'>
           {ansar1} алдыңдан тосуп чыкса, {ansar2} келгендей {ansar3}, {ansar4} алдыңдан бөгөсө кокустан {ansar5} кейибе!
        </div>
        <br />
        <br />
        <div className='body1'>
         {[
          "Кырсык/атайын/наалыба/кайгы/бөгөгөндөй", 
          "Жакшылык/кокустан/сүйүнбө/кыйынчылык/бөгөгөндөй",
           "Бакыт/түбөлүкө/сүйүнбө/жамандык/келгендей"
         ].map((word1) => (
          <div 
          key={word1}
           className='select' 
          onClick={() => selectWorld2(word1)}>
            {word1}</div>
         ))}
        </div>
         { result2 && <h3>{result2} <br />
        <button onClick={openPlay2} className='go_play'>кийинки</button></h3>}
        </div>}
      { threen && 
      <div className='onePlay'>
        <div className='head1'>
          Жигит {anar1}, {anar2}  кылчоңдоосуз колдоосу, {anar3} анын {anar4} көңүлүн {anar5}албады
        </div>
        <div className='body1'>
          {[
            "чөктү/адамдардын/сабыры/сынган/жибите",
            "оюну/саркерлердин/ишеними/сынган/жубата",
            "кыйналды/досторунун/жагымдуу сөздөрү/ооруган/сакайта",
            "алсырады/жакындарынын/мээрими/талкаланган/жубата"
          ].map((word3) =>(
            <div key={word3}
            className='select'
            onClick={() => selectWorld3(word3)}
            >{word3}</div>
          ))}
        </div>
        { result3 && <h3>{result3} <br /> 
        <button 
         className='go_play'
         onClick={openPlay3}>
          Сонун сиз жакшы оюн көрсөттүнүз</button></h3> }
      </div>

        }
       </div>
       }

       

      </div>

    </div>
  )
}

export default Oyun
