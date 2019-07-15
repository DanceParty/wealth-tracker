import React from 'react'
import './Content.css'
import NetWorthChart from '../NetWorthChart/NetWorthChart'

function Content() {
  return (
    <div className="content">
      <div className="main">
        <NetWorthChart />
      </div>
    </div>
  )
}

export default Content
