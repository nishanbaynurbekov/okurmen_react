import React, { useState } from 'react';
import List from '../Component/list/List';
import Favorites from '../Component/Favorites/Favorites';
import '../styles/History.css';
import { toast, ToastContainer} from 'react-toastify';
// import "react-toastify/ReactToastify.css";
import { useConfirmToast } from '../redux/Codes';
import { useDispatch } from 'react-redux';
import { clearCurrentScore } from '../redux/timer/Timer';

function History() {
  const [openBtn, setOpenBtn] = useState(true);
  const [favorite, setFavorite] = useState(false);
  const [openGames, setOpenGames] = useState(true);
  const [historyGames, setHistiryGames] = useState(false);
  const [clearState, setClearState] = useState(false);
  const confirm = useConfirmToast()
  const dispatch = useDispatch();

  const [savedNumbers, setSavedNumbers] = useState(() => {
    const saved = localStorage.getItem("record");
    return saved ? JSON.parse(saved) : [];
  });

  const openFavorite = () => {
    setFavorite(true);
    setOpenBtn(false);
    setOpenGames(false);
    setClearState(true);
  };

  const backToHistory = () => {
    setOpenBtn(true);
    setOpenGames(true);
    setFavorite(false);
    setHistiryGames(false);
    setClearState(false);
  };

  const openScore = () => {
    setOpenBtn(false);
    setOpenGames(false);
    setHistiryGames(true);
    setClearState(true);
  };

  const getScoreClass = (score) => {
    if (score < 350) return 'score-red';
    if (score === 350) return 'score-green';
    return 'score-blue';
  };

  const getScoreStatus = (score) => {
    if (score < 300) return 'Төмөн';
    if (score > 360) return 'Эң мыкты';
    return 'Орточо';
  };
  
  const deleteScore = async() => {
    const confirmed = await confirm({
      message: "оюн эсептерин өчүрөсүзбү?",
      confirmText: "ооба",
      cancelText: "жок"
    })

    if (confirmed) {
      localStorage.removeItem("record");
      backToHistory();
      dispatch(clearCurrentScore());
      setSavedNumbers([]);
      window.location.reload()
      toast.success("эсептер өчүрүлдү")
    }
  }
 

  return (
    <div className='bodyHistory'>
      <ToastContainer />
      <List/>
      {/* Dynamic Header text change */}
      <h1 className='main-title'>
        {favorite 
          ? 'Тандалган китептер' 
          : historyGames 
          ? 'Оюн эсептеринин тарыхы' 
          : 'Сакталгандар жана оюн эсептери'}
      </h1>

      {/* Баскычтар / Негизги баракча */}
      {openBtn && (
        <div className="cardStyle">
          <button className='card__favorite' onClick={openFavorite}>
            Тандалган китептерди көрүү
          </button>
          <button className='card__count' onClick={openScore}>
            Оюн эсептери
          </button>
        </div>
      )}

      {/* Китептер же оюн тизмеси */}
      {favorite && <Favorites />}

      {/* Тизме компоненти */}
      {openBtn && <List />}

      {/* Оюн упайлары */}
      {historyGames && (
        <div className='cardScore'>
          <h4>🎮 Оюндардын упайлары</h4>
          {savedNumbers.length === 0 ? (
            <p className='no-score'>Азырынча оюн сактала элек</p>
          ) : (
            savedNumbers.map((item, index) => {
              const scoreClass = getScoreClass(item);
              return (
                <section className={`card__section ${scoreClass}`} key={index}>
                  <div className='section__info'>
                    <span className='game-number'>{index + 1}-оюн</span>
                    <span className='status-tag'>{getScoreStatus(item)}</span>
                  </div>
                  <span className='score-value'>{item} бал</span>
                </section>
              );
            })
          )}
          <button className="btn-clear" onClick={deleteScore}>себетти тазалоо</button>
        </div>
      )}

      {/* Артка кайтуу кнопкасы */}
      {clearState && (
        <div className='back-container'>
          <button className="btn-back" onClick={backToHistory}>Артка</button>
        </div>
      )}
    </div>
  );
}

export default History;