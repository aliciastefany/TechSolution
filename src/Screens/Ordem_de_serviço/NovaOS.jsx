import React, { useState } from 'react'
import HeaderNewOS from './components/HeaderNewOS'
import ContentNewOS from './components/ContentNewOS'

function NovaOS() {
  const [statusList, setStatusList] = useState('')

  function handlePropsStatus(user) {
    let newStatusList = statusList

    newStatusList = user
    setStatusList(newStatusList)
  }
  return (
    <div>
      <HeaderNewOS onPushStatus={handlePropsStatus}/>
      <ContentNewOS status={statusList}/>
    </div>
  )
}

export default NovaOS