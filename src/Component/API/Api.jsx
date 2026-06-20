import React from 'react'

function Api({data}) {
  
  return (
    <div className='sabr'>
      <div className='image'>
        <img src={data.image} alt="" />
        <h3>{data.name}</h3>
        <h5>{data.year}</h5>
        <p>{data.text}</p>
        <button id='ok_btn'>окуу</button>
        <button id='iz_btn'>тандалгандар</button>
      </div>
    </div>
  )
}

export default Api
