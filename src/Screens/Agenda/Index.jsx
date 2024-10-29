import React, { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Agendar from './components/Agendar'

function Agenda() {
  const [passarDados, setPassarDados] = useState('')

  function handlePropsSearch(user) {
    let newSearchData = passarDados

    newSearchData = user
    setPassarDados(newSearchData)
  }

  
  return (
    <div>
      <Header onPushSearch={handlePropsSearch}/>
      <Content search={passarDados}/>
    </div>
  )
}

export default Agenda