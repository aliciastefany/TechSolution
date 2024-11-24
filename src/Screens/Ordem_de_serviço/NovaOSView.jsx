import React, { useState } from 'react'
import HeaderNewOSView from './components/HeaderNewOSView'
import ContentNewOSView from './components/ContentNewOSView'

function NovaOSView() {
  const [statusList, setStatusList] = useState('')

  function handlePropsStatus(user) {
    let newStatusList = statusList

    newStatusList = user
    setStatusList(newStatusList)
  }
  return (
    <div>
      <HeaderNewOSView onPushStatus={handlePropsStatus}/>
      <ContentNewOSView status={statusList}/>
    </div>
  )
}

export default NovaOSView