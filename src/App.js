// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alerts from './Components/Alerts';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
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
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success")
      document.title = "My app-Dark Mode";

      setInterval(() => {
        document.title = "My app is amazing";
      }, 2000);

      setInterval(() => {
        document.title = "Install My app now";
      }, 1500);
    }

    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")
      document.title = "My app-Light Mode";
    }
  }

  return (
    <>
    <Router>
      <Navbar title="My App1" aboutText="About My App" mode={mode} toggleMode={toggleMode} />

      <Alerts alert={alert} />

      <div className="container">
      <Routes>
        <Route exact path='/' element={<TextForm heading="Enter text to analyze your data" mode={mode}/>}></Route>
        <Route exact path='/About' element={<About/>}></Route>
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
