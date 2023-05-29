import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainApp from './Components/Main-App/MainApp';
import LandingPage from './Components/Landing-Page/LandingPage';


// create context --
export const AllContext = React.createContext();


function App() {
  // Context values --
  const [dashboardTabNum, setDashboardTabNum] = useState(1);
  const [discoverTabNum, setDiscoverTabNum] = useState(1);
  const contextObj = {
    dashboardTabNum,
    setDashboardTabNum,
    discoverTabNum,
    setDiscoverTabNum,
  }


  return (
    <div className="text-white font-title ">
      <AllContext.Provider value={contextObj}>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mainApp" element={<MainApp />} />
        </Routes>

      </AllContext.Provider>
    </div>
  )
}

export default App
