import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React , { useState } from 'react';
import Alerts from './components/Alerts';

function App() {
  const [mode , setMode] = useState('light') ;
 
  const [alert , setAlert] = useState(null) ; 
  

  const showAlert = (message ,type) => {
        setAlert({
          msg : message , 
          type : type 
        })
        setTimeout(() => {
          setAlert(null) ;
        }, 1000);
    }
  


  const toggleMode = () => {

       if(mode === 'light'){
        setMode('dark') ; 
        document.body.style.backgroundColor = '#393053' ; 
        showAlert("Dark mode has been enabled","success") ;
        
       }
       else {
        setMode('light') ; 
        document.body.style.backgroundColor = '#B9F3FC' ; 
        showAlert("Light mode has been enabled","success") ;
       }
   
  }
  
  
  return (
  <>
     
    <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
    <Alerts alert = {alert} />
    <div className = "container my-3"> 
    <TextForm showAlert = {showAlert} heading = "Enter your text to analyze below"  mode = {mode}/>
     
    {/* <About/> */}
    </div>
   
    
  </>
  );
}

export default App;
