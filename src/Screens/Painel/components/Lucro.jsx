import React from 'react'
import { BsGraphUpArrow } from "react-icons/bs";

function Lucro() {
  return (
    <div className='containerLucro'>
        <div className="left">
            <h1>LUCRO MENSAL</h1>
            <p>R$ 3000,00</p>
        </div>

        <BsGraphUpArrow className='icon'/>
    </div>
  )
}

export default Lucro