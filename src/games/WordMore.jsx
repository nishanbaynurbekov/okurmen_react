import React, { useCallback, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { number, resetTimer, addScore, minusScore, updateHighScore, clearCurrentScore } from '../redux/timer/Timer'
import { toast, ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import './WordStyle.css'
import { shuffleArray } from '../redux/Codes'
import { current } from '@reduxjs/toolkit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight  } from '@fortawesome/free-solid-svg-icons'
import Load from '../loader/Load'

function WordMore({data, code}) {
   const [isActive, setIsActive] = useState(true)
   const [cancelBtn, setCancelBtn] = useState(false)
   const [currentSection, setCurrentSection] = useState(0)
    const { sekond, minut, score, recordScore } = useSelector(state => state.timer)
    const dispatch = useDispatch()
    const [ResultWord, setResultWord] = useState("")

      // БИРИНЧИ БӨЛҮМ СТАТЕРИ
  const [selectedWords1, setSelectedWords1] = useState([])
  const [result1, setResult1] = useState('')
  const tuuraJoop1 = ["Сынбасты", "өлбөстү", "жаратпаптыр"]
  const [wordsOptions1, setWordsOtions1] = useState([])


  // ЭКИНЧИ БӨЛҮМ СТАТЕРИ
  const [selectedWords2, setSelectedWords2] = useState([])
  const [result2, setResult2] = useState('')
  const tuuraJoop2 = ["Жакшылык", "кокустан", "сүйүнбө", "кыйынчылык", "бөгөгөндөй"]
  const [wordsOptions2, setWordsOtions2] = useState([])

 
  // ҮЧҮНЧҮ БӨЛҮМ СТАТЕРИ
  const [selectedWords3, setSelectedWords3] = useState([])
  const [result3, setResult3] = useState('')
  const tuuraJoop3 = ["оюну", "саркерлердин", "ишеними", "сынган", "жубата"]
  const [wordsOptions3, setWordsOtions3] = useState([])


  useEffect(() => {
    const rawOptions1 = ["Жарыкты", "кемчиликсизди", "Темирди", "акмакты", "Бузулбасты", "ааламды", "Сынбасты", "өлбөстү", "жаратпаптыр"]
    const rawOptions2 = ["Кырсык", "атайын", "наалыба", "кайгы", "Жакшылык", "кокустан", "сүйүнбө", "кыйынчылык", "бөгөгөндөй", "Бакыт", "түбөлүкө", "жамандык", "келгендей"]
    const rawOptions3 = ["чөктү", "адамдардын", "сабыры", "жибите", "оюну", "саркерлердин", "ишеними", "сынган", "жубата", "кыйналды", "досторунун", "ооруган", "сакайта", "алсырады", "жакындарынын", "мээрими", "талкаланган"]

    setWordsOtions1(shuffleArray(rawOptions1))
    setWordsOtions2(shuffleArray(rawOptions2))
    setWordsOtions3(shuffleArray(rawOptions3))
  },[])
  function showSection (index) {
   setCurrentSection(index)
  }
  function nextSection(){
    if(currentSection < 2){
      setCurrentSection(currentSection + 1)
    }
   }
   function prevSection () {
    if(currentSection > 0){
      setCurrentSection(currentSection - 1)
    }
   }
 function steps () {
   showSection(1)
  }
  function steps2 () {
   showSection(2)
  }
  const format = (time) => String(time).padStart(2, "0")

  const resetAllGames = useCallback(() => {
    dispatch(addScore(100))
    setSelectedWords1([])
    setSelectedWords2([])
    setSelectedWords3([])
    setResult1("")
    setResult2("")
    setResult3("")


    dispatch(updateHighScore())
    dispatch(clearCurrentScore())
},[dispatch])
useEffect(() => {
  if(minut == 0 && sekond == 0 && isActive){
    toast.info(`Убакыт бүттү! Оюн токтотулду. \nСиз топтогон упай: ${score} \nСиздин эң мыкты рекордуңуз: ${score > updateHighScore ? score : recordScore}`)
    setTimeout(() => {
      setIsActive(false)
    },0)
    resetAllGames()
    resetTimer()
  }
},[minut, sekond, score, recordScore, isActive, resetAllGames])

useEffect(() => {
  let interval = null
  if (isActive) {
    interval = setInterval(() => {
      dispatch(number())
    }, 1000)
  }else{
    clearInterval(interval)
  }
  return() => clearInterval(interval)
},[isActive, dispatch])
    // 
    // биринчи оюн логикалары
    // 
    function handleWordClick1(word) {
        if(selectedWords1.length < 3 && !selectedWords1.includes(word)){
            setSelectedWords1([ ...selectedWords1, word])
        }
    }
    function handleRemoveWord1(word) {
        if (!word) return
         setSelectedWords1(selectedWords1.filter( w =>  w !== word))
    }
    function handleCheck1 () {
      const isCorrect = selectedWords1.every((val, index) =>
        val == tuuraJoop1[index]
       )
       if(isCorrect){
     toast.success("Сонун!")
     setResult1("Сонун!")
     dispatch(addScore(100))
       }else{
        toast.error("Ката! Кайра аракет кылыңыз. (-20 упай)")
        dispatch(minusScore(20))
        setSelectedWords1([])
       }
    }
    // 
    // экинчи оюн логикалары
    // 
    function handleWordClick2(word) {
        if(selectedWords2.length < 5 && !selectedWords2.includes(word)){
            setSelectedWords2([...selectedWords2, word])
        }
    }
    function handleRemoveWord2(word) {
        if(!word) return
        setSelectedWords2(selectedWords2.filter( w => w !== word))
    }
    function handleCheck2() {
        const isCorrect = selectedWords2.every((val, index) =>  val == tuuraJoop2[index])
        if (isCorrect) {
            toast.success("Сонун!")
            dispatch(addScore(100))
            setResult2("Сонун!")
        }else{
            toast.error("Ката! Кайра аракет кылыңыз. (-20 упай)")
            setSelectedWords2([])
            dispatch(minusScore(20))
        }
    }
    // 
    // үчүнчү оюн логикалары
    // 
    function handleWordClick3(word) {
       if (selectedWords3.length < 5 && !selectedWords3.includes(word)
       ) {
        setSelectedWords3([...selectedWords3, word])
       }
    }
    function handleRemoveWord3 (word) {
      if(!word) return
      setSelectedWords3(selectedWords3.filter(w => w !== word))
    }
    function handleCheck3(){
     const isCorrect = selectedWords3.every((val, index) => val == tuuraJoop3[index])
     if (isCorrect) {
      toast.success("эң сонун! cиз бардык суроого туура жооп бердиңиз!")
      setResult3("Керемет")
     dispatch(addScore(100))
     }else{
      toast.error("Ката! Кайра аракет кылыңыз. (-20 упай)")
      dispatch(minusScore(20))
      setSelectedWords3([])
     }
    }
    function resultGames () {

      const newScore = score + 100
      const rekordSkore = recordScore
      toast.success(`Куттуктайбыз! Оюнду ийгиликтүү бүттүңүз! \n\n🎯 Бул оюндагы упайыңыз: ${newScore} \n🏆 Мурунку эң мыкты рекордуңуз: ${recordScore}`)

      setIsActive(false)
      setCancelBtn(true)
      showSection(false)
      resetAllGames()
    }
    const resetGames = () => {
  // resetAllGames()
  setIsActive(true)
  setCancelBtn(false)
  showSection(0)
  dispatch(resetTimer())
}
  return (
    <div>
        <ToastContainer/>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <h2>⏱ Убакыт: {format(minut)}:{format(sekond)}</h2>
          <div style={{ color: '#ff9f43', fontSize: '1.5rem', fontWeight: 'bold' }}>🎯 Азыркы упай: {score}</div>
          <div style={{ color: '#10ac84', fontSize: '1.5rem', fontWeight: 'bold' }}>🏆 Эң мыкты рекорд: {recordScore}</div>
        </div> 
        { currentSection === 0 &&  <div className='games__studio'>
                <div className='games__top'>
                  <span onClick={() => handleRemoveWord1(selectedWords1[0])}>{selectedWords1[0] || "______"} </span> уста жаратпаптыр
                  <span onClick={() => handleRemoveWord1(selectedWords1[1])} > {selectedWords1[1] || "_____"}</span> кудай 
                  <span onClick={() => handleRemoveWord1(selectedWords1[2])}> {selectedWords1[2] || "_____"}</span>
                </div>

                <div className='games__main' style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
                  {wordsOptions1.map((word, index) => (
                    <button
                      key={index}
                      className='selectGames'
                      onClick={() => handleWordClick1(word)}
                      disabled={selectedWords1.includes(word)}
                      style={{ padding: '10px 15px', cursor: 'pointer', opacity: selectedWords1.includes(word) ? 0.4 : 1 }}
                    >
                      {word}
                    </button>
                  ))}
                </div>
                   <div className='control'>
                    <FontAwesomeIcon 
                      onClick={prevSection}
                      disabled={currentSection === 0} style={{cursor: "pointer"}} icon={faArrowLeft}/>
                    <span className='stopGames' onClick={data}>оюндан чыгуу</span>
                    <FontAwesomeIcon
                      onClick={nextSection}
                      disabled={currentSection === 0} style={{cursor: "pointer"}} icon={faArrowRight}/>
                    </div>
                { selectedWords1.length == 3 && !result1 && (
                    <button className='resultGames' onClick={handleCheck1}>Текшерүү</button>
                )}
                {result1 && (
                    <h3>{result1} <br />
                    <button className='go_play'
                    onClick={steps}>кийинки</button></h3>

                )}
        </div> }
       {currentSection === 1 && <div className='games__stodio'>
        <div className='games__top'>
            <span onClick={() => handleRemoveWord2(selectedWords2[0])}>{selectedWords2[0] || "_____"}</span> алдыңдан тосуп чыкса <span onClick={() => handleRemoveWord2(selectedWords2[1])}>{ selectedWords2[1] || "_____"}</span> келгендей <span onClick={() => handleRemoveWord2(selectedWords2[2])}>{selectedWords2[2] || "_____"}, </span>
             <span onClick={() => handleRemoveWord2(selectedWords2[3])}>{selectedWords2[3] || "_____"}</span>  алдыңдан бөгөсө, кокустан <span onClick={() => handleRemoveWord2(selectedWords2[4])}>{selectedWords2[4] || "_____"}</span> кейибе!</div>
             <div className='games__main'>
                {wordsOptions2.map((word, index) => (
                    <button
                    key={index}
                    className='selectGames'
                    onClick={() => handleWordClick2(word)}
                    disabled={selectedWords2.includes(word)}>{word}
                    </button>
                )) }
             </div>
                <div className='control'>
                  <FontAwesomeIcon
                    onClick={prevSection}
                    disabled={currentSection === 0} style={{cursor: "pointer"}} icon={faArrowLeft}/>
                  <span className='stopGames' onClick={data}>оюндан чыгуу</span>
                  <FontAwesomeIcon 
                    onClick={nextSection}
                    disabled={currentSection === 0} style={{cursor: "pointer"}} icon={faArrowRight}/>
                  </div>
             {selectedWords2.length == 5 && !result2 && ( 
                <button className='resultGames' onClick={handleCheck2}>Текшерүү</button>
             )}
               {result2 && (
                    <h3>{result2} <br />
                    <button className='go_play' onClick={steps2}>кийинки</button></h3>
                )}
       </div> }
       {currentSection === 2 && (
        <div className='games__studio'>
          <div className='games__top'>
            Жигит <span onClick={() => handleRemoveWord3(selectedWords3[0])}>{selectedWords3[0] || "_____"}</span>,
             <span onClick={() => handleRemoveWord3(selectedWords3[1])}> {selectedWords3[1] || "_____"}</span> кылчоңдоосуз колдоосу, <span onClick={() => handleRemoveWord3(selectedWords3[2])}>{selectedWords3[2] || "_____"}</span> анын
            <span onClick={() => handleRemoveWord3(selectedWords3[3])}> {selectedWords3[3] || "_____"}</span> көңүлүн <span onClick={() => handleRemoveWord3(selectedWords3[4])}> {selectedWords3[4] || "_____"}</span> албады
          </div>
          <div className='games__main'>
            { wordsOptions3.map((word, index) => (
              <button key={index}
              className='selectGames'
              onClick={() => handleWordClick3(word)}
              disabled={selectedWords3.includes(word)}>
                {word}
              </button>
            ))}
          </div>
             <div className='control'>
              <FontAwesomeIcon 
                onClick={prevSection}
                disabled={currentSection === 0} style={{cursor: "pointer"}} icon={faArrowLeft}/>
              <span className='stopGames' onClick={data}>оюндан чыгуу</span>
              <FontAwesomeIcon  
                onClick={nextSection}
                disabled={currentSection === 0} style={{cursor: "pointer"}} icon={faArrowRight}/>
              </div>
           {selectedWords3.length == 5 && !result3 && (
              <button className='resultGames'
              onClick={handleCheck3}>Текшерүү</button>
            )}
            {result3 && (
              <button className='go_play'
              onClick={resultGames}
              >Оюнду аяктоо (Жыйынтык)</button>
            )}
        </div>
       )}
       {cancelBtn && <div>
        <button className='resultGames' style={{marginRight: "30px"}} 
        onClick={code}>артка кайтуу</button>
        <button className='go_play' onClick={resetGames}>Кайта ойно</button>
        </div>}

    </div>
  )
}

export default WordMore
