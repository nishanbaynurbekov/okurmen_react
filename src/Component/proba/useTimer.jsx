import React, { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { number } from '../../redux/timer/Timer'
 


function Home() {
   const {sekond, minut} = useSelector(state => state.timer)
   const dispatch = useDispatch()
   const [ isActive, setIsActive ] = useState(false)
   const format = (time) => String(time).padStart(2, "0")
   useEffect(() => {
    let interval = null
    if(isActive) {
      interval = setInterval(() => {
        dispatch (number())
      }, 1000);
    }
    else{
      clearInterval(interval)
    }
   }, [isActive, dispatch])
  return (
    <div>
      Home
      <h3>{minut}:{sekond}</h3>
      <button onClick={() => setIsActive(!isActive)}>click</button>
    </div>
  )
}

export default Home
