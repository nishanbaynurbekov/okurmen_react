import React, { useState, useEffect } from 'react'
import '../styles/style.css'
import { Link } from 'react-router-dom'
import apiOkur from '../axios/Api_okur'
import List from '../Component/list/List'

function Home() {
    const [gen, setGen] = useState(true)
    const [ocno, setOcno] = useState(false)
    const [user, setUser] = useState([])

    function openApp() {
        setGen(false)
        setOcno(true)
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
        <div className="opti">
            <h1>Окурмен окуу борборунун электрондук китепканасы</h1>
            <List /> 

            <div className='barak'>
                {/* 1-БӨЛҮК: КАТЕГОРИЯЛАР */}
                {gen && (
                    <div className="cont">
                        <div className="bloc">Дүйнө тарыхы</div>
                        <div className="bloc">Кыргызстан тарыхы</div>
                        <div className="bloc">Ислам тарыхы</div>
                        <div className="bloc">Жарык жол</div>
                        <div onClick={openApp} className="bloc">Кыргыз адабияты</div>
                        <div className="bloc">Манастануу</div>
                        <div className="bloc">Илимий китептер</div>
                        <div className="bloc">Философия</div>
                    </div>
                )}

                {ocno && (
                    <div className='cont'>
                        <Link to="/kana" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="bloc">Чыңгыз Айтматов</div>
                        </Link>
                        <div className="bloc">Жазуучулар</div>
                        <div className="bloc">Жазуучулар</div>
                        <div className="bloc">Жазуучу authorities</div>
                        <div className="bloc">Жазуучулар</div>
                        <div className="bloc">Жазуучулар</div>
                        <div className="bloc">Жазуучулар</div>
                        <div className="bloc">Жазуучулар</div>
                    </div>
                )}
            </div>  

            {/* 2-БӨЛҮК: МУГАЛИМДЕР ЖАНА МЕКТЕП ОКУУЧУЛАРЫ */}
            <div className="bash">
                <div className="kfc">
                      <div className="class">Мугалимдердин эмгеги</div>
                      <div className="tun">Чыгармалар</div>
                      <div className="tun">Макалалар</div>
                      <div className="tun">Сунуштар</div>
                      <div className="tun">Видео сабактар</div>
                      <div className="tun">Изилдөөлөр</div>  
                      <div className="tun">Усулдук ийрим</div> 
                </div>
                
                <div className="jash">
                    <div className="ok">Мектеп окуучуларынын чыгармалары</div>
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                </div>
            </div>

            {/* 3-БӨЛҮК: БОРБОР ТУУРАЛУУ */}
            <div className="tash">
                <div className="okur">
                    <p className="pero">Окурмен окуу борбору тууралуу кененирээк</p>
                    <div className="go">Ачылуу тарыхы</div>
                    <div className="go">Ийгиликтери</div>
                    <div className="go">Эмгек жамааты</div>
                    <div className="go">Мугалимдер ийгилиги</div>
                    <div className="go">Студенттер</div>
                    <div className="go">Келечекке максаттары</div>
                </div>
                
                <div className="avtor">
                    <div className="ni bit">Автор тууралуу кененирээк</div>
                    <div className="ni bat">Аңгеме</div>
                </div>
            </div>
        </div>
    )
}

export default Home