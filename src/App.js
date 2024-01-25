import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About2 from './components/About2';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#474747";
      showAlert("Dark Mode Has Been Enabled", "success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode is disabled", "warning")
    }
  }
  return (
    <>
      <Router>
        { /* Navbar Section Importing */}
        {/* props means :- Sending the piece of data to the componennts from the calling place  */}
        <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />

        {/* Setting Alerts  */}
        <Alert alert={alert} />

        {/* Using Router to dynamically change the content without refreshing and here we need to use link insteat of anchor tag and href  */}
        <Routes> */
          <Route exact path="/" element={<TextForm title="Try TextUtils - Word Counter | Character Counter | Reverse word & Sentences" mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About2 mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
