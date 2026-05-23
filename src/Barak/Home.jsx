import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
<>
        <div>
           <div class="opti">
        <h1>Окурмен окуу борборборунун электрондук китеп канасы</h1>
              <Link to="/kitepter"><div class="cont">
            <div class="bloc wert1">Дүйнө таарыхы</div>
            <div class="bloc wert2">Кыргызстан таарыхы</div>
            <div class="bloc wert3">
                Ислам таарыхы
            </div>
            <div class="bloc wert4">Жарык жол</div>
            <div class="bloc wert5"> Кыргыз адабияты</div>
            <div class="bloc wert6">Манастануу</div>
            <div class="bloc wert7">Илимий китептер</div>
            <div class="bloc wert8">Филасофия</div>
        </div> </Link>
        <div class="bash">
            <div class="kfc"> <div class="class">мугалимдердин эмгеги</div> 
                <div class="tun">чыгармалар
                </div>
                <div class="tun">макалалар</div>
                <div class="tun">сунуштар</div>
                <div class="tun">видео сабактар</div>
                <div class="tun"></div>
                <div class="tun"></div>
                </div>
            <div class="jash">
             <div class="ok"> Мектеп окучуларыны чыгармалары</div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            </div>
        </div>
            <div class="tash"> <div class="okur">
                <p class="pero">Окурмен окуу борбору тууралуу кененирек</p>
                <div class="go">ачылуу тарыхы</div>
                <div class="go">ийгиликтери</div>
                <div class="go">эмгек жамааты</div>
                <div class="go">мугалимдер ийгилиги</div>
                <div class="go"> студенттер</div>
                <div class="go">келечекке максаттары</div>
                <div class="go"></div>
                <div class="go"></div>
                <div class="go"></div>
              </div>
            <div class="avtor">
                <div class=" ni bit">автор туралуу кененирек</div>
                <div class=" ni bat">аңгеме</div>

            </div>
         </div>
         </div>
         </div>
    
   </>
  )
   
}

export default Home
