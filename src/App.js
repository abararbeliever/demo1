
import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { Routes } from 'react-router';
//import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState('');

const showalert=(message,type)=>
{
  setAlert({
    msg:message,
    type:type
  })

}

  let togglemode=()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor="#4f514e94";
      document.body.style.color="white";
      showalert('Dark mode enabled','success ');
      document.title="Dark mode enabled";
      setInterval(()=>
      {
        document.title="Use TextUtils";
      },1500);
      
      
    }
    else
    {
      setMode('light');

      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showalert('Light mode enabled','success ');
      document.title="Light mode enabled";
      
      
    }
  }
  return (
    <>
   
     
     
     <Navbar title="Demo" mode={mode} aboutus="about" togglemode={togglemode}/>
     <Alert alert={alert} />
     <TextForm />
   {/* <Routes>
     <Router>
          <Route exact path="/about" element={<About/>}>
          
          </Route>
          <Route exact path="/TextForm" element={<TextForm/>}>
          </Route>

    
      
     </Router>
  </Routes> */}

    </>
  );
}

export default App;
