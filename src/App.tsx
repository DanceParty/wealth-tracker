import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content'

const App: React.FC = () => {
  return (
    <div className="app">
      <Sidebar />
      <Content />
    </div>
  )
}

export default App
