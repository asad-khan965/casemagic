import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useEffect } from "react";
import { initializeTagManager } from "./gtm";






function App() {
  useEffect(() => {
    initializeTagManager();
  }, []);
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState('null');
  

  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 1500);

  }
  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#031837'
      showAlert('Dark mode has been enabled','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light mode has been enabled','success')
    }
  }

  return (
    <>
    
    
      
      
      
    <Router>
      <Navbar title='Textutils' mode={mode}  toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
      
        
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
    </Router>
      
    </>
  );
}

export default App;
