import React from 'react'
import { BsGraphDownArrow } from "react-icons/bs";
import '../styles/painel.css'

function Gastos() {
  return (
    <div className='containerGastos'>
        <div className="headerGastos">
            <h1>GASTO MENSAL</h1>
            <BsGraphDownArrow className='icon'/>
        </div>
        <p>R$ 1000,00</p>
    </div>
  )
}

export default Gastos