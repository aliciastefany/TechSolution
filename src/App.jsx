import './App.css'

import NavBar from './components/NavBar'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="dashboard">
      <NavBar />
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  )
}

export default App
