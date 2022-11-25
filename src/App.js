// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React,{useState} from "react";
import Alert from "./Components/Alert";
// import About from "./Components/About";
// import {
//   BrowserRouter,
//   // Routes,
//   Route,
//   Link
// } from "react-router-dom";
// import { Routes } from "react-router";
// import About from "./Components/About";

function App() {
  const [mode, setMode] = useState(`light`);
  const [alert, setAlert] = useState(null);
  const showAlert= (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode=()=>{
    if(mode===`light`){ 
      setMode(`dark`);
      document.body.style.backgroundColor='black';
      showAlert("dark mode has been enabled","success");

    }else{
      setMode(`light`);
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");      

    }

  }
  return (
    <>
    
{/* <BrowserRouter> */}
<Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
{/* <Routes> */}

          {/* <Route path="/about" element={<About/>} /> */}
          <Textform heading="Enter the text to analyse: " mode={mode}/>
          {/* < Route path="/"
            element= {<Textform heading="Enter the text to analyse: " mode={mode}/>} />  */}
          {/* </Routes> */}
          {/* </BrowserRouter> */}
    </>
  );
}

export default App;
