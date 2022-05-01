// import logo from './logo.svg';
import React, { useState } from 'react';

import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'

import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"; //#042743
      // document.body.style.color="white";
      showAlert("Dark mode is enabled", "success");
      document.title = "TextUtils - Enabled Dark Mode";

      // setInterval(() => {
      //   document.title = "TextUtils - Enabled Dark Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils install now";
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      // document.body.style.color="black";
      showAlert("Light Mode Enabled", "success");
      document.title = "TextUtils - Enabled Light Mode";


    }
  }
  return (
    <>
      <Router>
        
        <Navbar title="TEXTUTILS" about="ABOUT US" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />
        <div className="container my-3">

          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} ></Route>

            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} />}></Route>
          </Routes>
        </div>
      </Router>
      
    </>

  );
}

export default App;
