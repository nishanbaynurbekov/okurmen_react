import React, { useState, useEffect } from 'react'
import List from '../Component/list/List'
import '../styles/style3.css'
import { useSelector, useDispatch } from 'react-redux'
// Жаңы экшендерди импорттодук
import { number, resetTimer, addScore, minusScore, updateHighScore, clearCurrentScore } from '../redux/timer/Timer' 
import { Link } from 'react-router-dom'

function Oyun() {
  // Redux'тан highScore'ду да алып жатабыз
  const { sekond, minut, score, highScore } = useSelector(state => state.timer)
  const dispatch = useDispatch()
  const [isActive, setIsActive] = useState(false)
  const [games, setGames] = useState(false)

  const format = (time) => String(time).padStart(2, "0")

  // Оюнду башынан баштоо логикасы
  function resetAllGames() {
    setOne(true)
    setTwo(false)
    setThree(false)
    setSelectedWords1([])
    setSelectedWords2([])
    setSelectedWords3([])
    setResult1('')
    setResult2('')
    setResult3('')
    
    dispatch(updateHighScore())   // 1. Адегенде рекордду сактайбыз
    dispatch(clearCurrentScore()) // 2. Андан кийин азыркы упайды кийинки оюн үчүн 0 кылабыз
    dispatch(resetTimer())        // 3. Таймерди башынан баштайбыз
  }

  // Убакыт бүтүп калганда (Топтогон упайы жоголбойт!)
  useEffect(() => {
    if (minut === 0 && sekond === 0) {
      alert(`Убакыт бүттү! Оюн токтотулду. \nСиз топтогон упай: ${score} \nСиздин эң мыкты рекордуңуз: ${score > highScore ? score : highScore}`);
      setGames(false)
      setIsActive(false)
      resetAllGames() 
    }
  }, [minut, sekond])

  // Таймер интервалы
  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        dispatch(number())
      }, 1000)
      setGames(true)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, dispatch])

  const [one, setOne] = useState(true)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)

  // --------------------------------------------------
  // БИРИНЧИ БӨЛҮМ
  // --------------------------------------------------
  const [selectedWords1, setSelectedWords1] = useState([])
  const [result1, setResult1] = useState('')
  const tuuraJoop1 = ["Сынбасты", "өлбөстү", "жаратпаптыр"]
  const wordsOptions1 = ["Жарыкты", "кемчиликсизди", "Темирди", "акмакты", "Бузулбасты", "ааламды", "Сынбасты", "өлбөстү", "жаратпаптыр"]

  function handleWordClick1(word) {
    if (selectedWords1.length < 3 && !selectedWords1.includes(word)) {
      setSelectedWords1([...selectedWords1, word])
    }
  }

  function handleRemoveWord1(word) {
    if (!word) return;
    setSelectedWords1(selectedWords1.filter(w => w !== word))
  }

  function handleCheck1() {
    const isCorrect = selectedWords1.every((val, index) => val === tuuraJoop1[index])
    if (isCorrect) {
      setResult1("Сонун!")
      dispatch(addScore(100)) 
    } else {
      alert("Ката! Кайра аракет кылыңыз. (-20 упай)")
      setSelectedWords1([])
      dispatch(minusScore(20)) 
    }
  }

  // --------------------------------------------------
  // ЭКИНЧИ БӨЛҮМ
  // --------------------------------------------------
  const [selectedWords2, setSelectedWords2] = useState([])
  const [result2, setResult2] = useState('')
  const tuuraJoop2 = ["Жакшылык", "кокустан", "сүйүнбө", "кыйынчылык", "бөгөгөндөй"]
  const wordsOptions2 = ["Кырсык", "атайын", "наалыба", "кайгы", "Жакшылык", "кокустан", "сүйүнбө", "кыйынчылык", "бөгөгөндөй", "Бакыт", "түбөлүкө", "жамандык", "келгендей"]

  function handleWordClick2(word) {
    if (selectedWords2.length < 5 && !selectedWords2.includes(word)) {
      setSelectedWords2([...selectedWords2, word])
    }
  }

  function handleRemoveWord2(word) {
    if (!word) return;
    setSelectedWords2(selectedWords2.filter(w => w !== word))
  }

  function handleCheck2() {
    const isCorrect = selectedWords2.every((val, index) => val === tuuraJoop2[index])
    if (isCorrect) {
      setResult2("Сонун!")
      dispatch(addScore(100)) 
    } else {
      alert("Ката! Кайра аракет кылыңыз. (-20 упай)")
      setSelectedWords2([])
      dispatch(minusScore(20)) 
    }
  }

  // --------------------------------------------------
  // ҮЧҮНЧҮ БӨЛҮМ
  // --------------------------------------------------
  const [selectedWords3, setSelectedWords3] = useState([])
  const [result3, setResult3] = useState('')
  const tuuraJoop3 = ["оюну", "саркерлердин", "ишеними", "сынган", "жубата"]
  const wordsOptions3 = ["чөктү", "адамдардын", "сабыры", "жибите", "оюну", "саркерлердин", "ишеними", "сынган", "жубата", "кыйналды", "досторунун", "ооруган", "сакайта", "алсырады", "жакындарынын", "мээрими", "талкаланган"]

  function handleWordClick3(word) {
    if (selectedWords3.length < 5 && !selectedWords3.includes(word)) {
      setSelectedWords3([...selectedWords3, word])
    }
  }

  function handleRemoveWord3(word) {
    if (!word) return;
    setSelectedWords3(selectedWords3.filter(w => w !== word))
  }

  function handleCheck3() {
    const isCorrect = selectedWords3.every((val, index) => val === tuuraJoop3[index])
    if (isCorrect) {
      setResult3("Керемет!")
      dispatch(addScore(100)) 
    } else {
      alert("Ката! Кайра аракет кылыңыз. (-20 упай)")
      setSelectedWords3([])
      dispatch(minusScore(20)) 
    }
  }

  function openPlay() {
    setOne(false)
    setTwo(true)
  }
  function openPlay2() {
    setTwo(false)
    setThree(true)
  }
  
  // Оюн ийгиликтүү бүткөндө
 function openPlay3() {
    const акыркыУпай = score + 100; // Акыркы левелдин упайын кошуу
    const эскиРекорд = highScore;
    
    alert(`Куттуктайбыз! Оюнду ийгиликтүү бүттүңүз! \n\n🎯 Бул оюндагы упайыңыз: ${акыркыУпай} \n🏆 Мурунку эң мыкты рекордуңуз: ${эскиРекорд}`);
    
    setIsActive(false); // ⏱ Таймердин жүрүшүн токтотобуз
    setGames(false);    // 🎮 Оюн талаасын жаап, кайра "Ойноо" баскычын көрсөтөбүз
    resetAllGames();    // 🧼 Бардык маанилерди кийинки оюн үчүн тазалайбыз
  }

  return (
    <div>
      <List />

      <div className='style'>
        {/* 🏆 Упай тактасы: Эми мурунку рекорд да дайыма көрүнүп турат! */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <h2>⏱ Убакыт: {format(minut)}:{format(sekond)}</h2>
          <h2 style={{ color: '#ff9f43' }}>🎯 Азыркы упай: {score}</h2>
          <h2 style={{ color: '#10ac84' }}>🏆 Эң мыкты рекорд: {highScore}</h2>
        </div>
        
        <button onClick={() => setIsActive(!isActive)} disabled={isActive}>Ойноо</button>

        {games && (
          <div className='topGames'>

            {/* БӨЛҮМ 1 */}
            {one && (
              <div className='onePlay'>
                <div className='head1'>
                  <span onClick={() => handleRemoveWord1(selectedWords1[0])} style={{ cursor: 'pointer', color: selectedWords1[0] ? '#007bff' : 'inherit', textDecoration: selectedWords1[0] ? 'underline' : 'none' }}>
                    {selectedWords1[0] || "______"}
                  </span> уста жаратпаптыр, {' '}
                  <span onClick={() => handleRemoveWord1(selectedWords1[1])} style={{ cursor: 'pointer', color: selectedWords1[1] ? '#007bff' : 'inherit', textDecoration: selectedWords1[1] ? 'underline' : 'none' }}>
                    {selectedWords1[1] || "_____"}
                  </span> кудай {' '}
                  <span onClick={() => handleRemoveWord1(selectedWords1[2])} style={{ cursor: 'pointer', color: selectedWords1[2] ? '#007bff' : 'inherit', textDecoration: selectedWords1[2] ? 'underline' : 'none' }}>
                    {selectedWords1[2] || "_____"}
                  </span>
                </div>

                <div className='body1' style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
                  {wordsOptions1.map((word, index) => (
                    <button
                      key={index}
                      className='select'
                      onClick={() => handleWordClick1(word)}
                      disabled={selectedWords1.includes(word)}
                      style={{ padding: '10px 15px', cursor: 'pointer', opacity: selectedWords1.includes(word) ? 0.4 : 1 }}
                    >
                      {word}
                    </button>
                  ))}
                </div>

                {selectedWords1.length === 3 && !result1 && (
                  <button onClick={handleCheck1} className='check_btn' style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
                    Текшерүү
                  </button>
                )}

                {result1 && (
                  <h3>{result1} <br />
                    <button onClick={openPlay} className='go_play'>кийинки</button>
                  </h3>
                )}
              </div>
            )}

            {/* БӨЛҮМ 2 */}
            {two && (
              <div className='onePlay'>
                <div className='head1'>
                  <span onClick={() => handleRemoveWord2(selectedWords2[0])} style={{ cursor: 'pointer', color: selectedWords2[0] ? '#007bff' : 'inherit', textDecoration: selectedWords2[0] ? 'underline' : 'none' }}>{selectedWords2[0] || "______"}</span> алдыңдан тосуп чыкса,{' '}
                  <span onClick={() => handleRemoveWord2(selectedWords2[1])} style={{ cursor: 'pointer', color: selectedWords2[1] ? '#007bff' : 'inherit', textDecoration: selectedWords2[1] ? 'underline' : 'none' }}>{selectedWords2[1] || "______"}</span> келгендей{' '}
                  <span onClick={() => handleRemoveWord2(selectedWords2[2])} style={{ cursor: 'pointer', color: selectedWords2[2] ? '#007bff' : 'inherit', textDecoration: selectedWords2[2] ? 'underline' : 'none' }}>{selectedWords2[2] || "______"}</span>,{' '}
                  <span onClick={() => handleRemoveWord2(selectedWords2[3])} style={{ cursor: 'pointer', color: selectedWords2[3] ? '#007bff' : 'inherit', textDecoration: selectedWords2[3] ? 'underline' : 'none' }}>{selectedWords2[3] || "______"}</span> алдыңдан бөгөсө кокустан{' '}
                  <span onClick={() => handleRemoveWord2(selectedWords2[4])} style={{ cursor: 'pointer', color: selectedWords2[4] ? '#007bff' : 'inherit', textDecoration: selectedWords2[4] ? 'underline' : 'none' }}>{selectedWords2[4] || "______"}</span> кейибе!
                </div>
                <div className='body1' style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
                  {wordsOptions2.map((word, index) => (
                    <button
                      key={index}
                      className='select'
                      onClick={() => handleWordClick2(word)}
                      disabled={selectedWords2.includes(word)}
                      style={{ padding: '10px 15px', cursor: 'pointer', opacity: selectedWords2.includes(word) ? 0.4 : 1 }}
                    >
                      {word}
                    </button>
                  ))}
                </div>

                {selectedWords2.length === 5 && !result2 && (
                  <button onClick={handleCheck2} className='check_btn' style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
                    Текшерүү
                  </button>
                )}

                {result2 && (
                  <h3>{result2} <br />
                    <button onClick={openPlay2} className='go_play'>кийинки</button>
                  </h3>
                )}
              </div>
            )}

            {/* БӨЛҮМ 3 */}
            {three && (
              <div className='onePlay'>
                <div className='head1'>
                  Жигит <span onClick={() => handleRemoveWord3(selectedWords3[0])} style={{ cursor: 'pointer', color: selectedWords3[0] ? '#007bff' : 'inherit', textDecoration: selectedWords3[0] ? 'underline' : 'none' }}>{selectedWords3[0] || "______"}</span>,{' '}
                  <span onClick={() => handleRemoveWord3(selectedWords3[1])} style={{ cursor: 'pointer', color: selectedWords3[1] ? '#007bff' : 'inherit', textDecoration: selectedWords3[1] ? 'underline' : 'none' }}>{selectedWords3[1] || "______"}</span> кылчоңдоосуз колдоосу,{' '}
                  <span onClick={() => handleRemoveWord3(selectedWords3[2])} style={{ cursor: 'pointer', color: selectedWords3[2] ? '#007bff' : 'inherit', textDecoration: selectedWords3[2] ? 'underline' : 'none' }}>{selectedWords3[2] || "______"}</span> анын{' '}
                  <span onClick={() => handleRemoveWord3(selectedWords3[3])} style={{ cursor: 'pointer', color: selectedWords3[3] ? '#007bff' : 'inherit', textDecoration: selectedWords3[3] ? 'underline' : 'none' }}>{selectedWords3[3] || "______"}</span> көңүлүн{' '}
                  <span onClick={() => handleRemoveWord3(selectedWords3[4])} style={{ cursor: 'pointer', color: selectedWords3[4] ? '#007bff' : 'inherit', textDecoration: selectedWords3[4] ? 'underline' : 'none' }}>{selectedWords3[4] || "______"}</span>албады
                </div>
                <div className='body1' style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
                  {wordsOptions3.map((word, index) => (
                    <button
                      key={index}
                      className='select'
                      onClick={() => handleWordClick3(word)}
                      disabled={selectedWords3.includes(word)}
                      style={{ padding: '10px 15px', cursor: 'pointer', opacity: selectedWords3.includes(word) ? 0.4 : 1 }}
                    >
                      {word}
                    </button>
                  ))}
                </div>

                {selectedWords3.length === 5 && !result3 && (
                  <button onClick={handleCheck3} className='check_btn' style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
                    Текшерүү
                  </button>
                )}

                {result3 && (
                  <h3>{result3} <br />
                    <button className='go_play' onClick={openPlay3}>
                      Оюнду аяктоо (Жыйынтык)
                    </button>
                  </h3>
                )}
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  )
}

export default Oyun