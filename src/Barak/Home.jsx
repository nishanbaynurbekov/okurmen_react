import React, { useState, useEffect} from 'react'
import '../styles/style.css'
import { Link } from 'react-router-dom'
import apiOkur from '../axios/Api_okur'
import Api from '../Component/API/Api'
import List from '../Component/list/List'

function Home() {
    const [ gen, setGen ] = useState(true)
    const [ ocno, setOcno ] = useState(false)
    const [ user, setUser ] = useState([])
    function openApp(){
         setGen(false)
          setOcno(true)
    }
    function openAytmatov() {
       setOcno(false)
       setAytmatov(true)
    }
  
    async function getApi() {
        try {
          const res = await apiOkur.get()
          console.log(res.data);
          setUser(res.data)
             
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        getApi()
    }, [])

  return (
<>
        <div>
            
           <div className="opti">
        <h1>Окурмен окуу борборборунун электрондук китеп канасы</h1>
        <List/>
            <div className='barak'>
                { gen && <div className="cont">
            <div className="bloc wert1">Дүйнө таарыхы</div>
            <div className="bloc wert2">Кыргызстан таарыхы</div>
            <div className="bloc wert3">
                Ислам таарыхы
            </div>
            <div className="bloc wert4">Жарык жол</div>
            <div onClick={openApp} className="bloc wert5"> Кыргыз адабияты</div>
            <div className="bloc wert6">Манастануу</div>
            <div className="bloc wert7">Илимий китептер</div>
            <div className="bloc wert8">Филасофия</div>
        </div>}
       { ocno &&  <div className='cont'>
        <Link to="/kana">
         <div className="bloc">Чыңгыз Айтматов</div>
        </Link>
        <div className="bloc">жазуучулар</div>
        <div className="bloc">жазуучулар</div>
        <div className="bloc">жазуучулар</div>
        <div className="bloc">жазуучулар</div>
        <div className="bloc">жазуучулар</div>
        <div className="bloc">жазуучулар</div>
        <div className="bloc">жазуучулар</div></div>}
                </div>  
        <div className="bash">
            <div className="kfc"> 
                <div className="class">мугалимдердин эмгеги</div> 
                <div className="tun">чыгармалар</div>
                <div className="tun">макалалар</div>
                <div className="tun">сунуштар</div>
                <div className="tun">видео сабактар</div>
                <div className="tun"></div>
                <div className="tun"></div>
                </div>
            <div className="jash">
            <div className="ok"> Мектеп окучуларыны чыгармалары</div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            </div>
        </div>
            <div className="tash"> 
                <div className="okur">
                <p className="pero">Окурмен окуу борбору тууралуу кененирек</p>
                <div className="go">ачылуу тарыхы</div>
                <div className="go">ийгиликтери</div>
                <div className="go">эмгек жамааты</div>
                <div className="go">мугалимдер ийгилиги</div>
                <div className="go"> студенттер</div>
                <div className="go">келечекке максаттары</div>
                <div className="go"></div>
                <div className="go"></div>
                <div className="go"></div>
              </div>
            <div className="avtor">
                <div className=" ni bit">автор туралуу кененирек</div>
                <div className=" ni bat">аңгеме</div>

            </div>
         </div>
         </div>
         </div>
    
   </>
  )
   
}

export default Home
