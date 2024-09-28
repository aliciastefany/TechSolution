import React from 'react'
import { MdCurrencyExchange } from "react-icons/md";
import '../styles/painel.css'

function Vendas() {
  return (
    <div className='containerVendas'>
        <div className="headerVendas">
            <h1>VENDAS MENSAIS</h1>
            <MdCurrencyExchange className='icon' />
        </div>
        <div className="contentVendas">
            <table>
                <thead>
                    <tr>
                        <th>CLIENTE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Kayke</td>
                        <td>R$ 700,00</td>
                    </tr>
                    <tr>
                        <td>Enryco</td>
                        <td>R$ 200,00</td>
                    </tr>
                    <tr>
                        <td>Bruna</td>
                        <td>R$ 2000,00</td>
                    </tr>
                    <tr>
                        <td>Willian</td>
                        <td>R$ 500,00</td>
                    </tr>
                    <tr>
                        <td>Raphaella</td>
                        <td>R$ 75,00</td>
                    </tr>
                    <tr>
                        <td>Yasmin</td>
                        <td>R$ 150,00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Vendas