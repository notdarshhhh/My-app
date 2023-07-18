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
  Route
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlerts = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeBodyCls=()=>{
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-primary");
  }

  const toggleMode = (cls) => {
    removeBodyCls();
    document.body.classList.add("bg-"+cls);

    if (mode === "light" && cls===null) {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlerts("Dark mode has been enabled", "success")
     

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
      showAlerts("Light mode has been enabled", "success")
     
    }
  }

  return (
    <>
    <Router>
      <Navbar title="My App1" aboutText="About My App" mode={mode} toggleMode={toggleMode} />

      <Alerts alert={alert} />

      <div className="container">
      
      <Routes>
        <Route exact path='/' element={<TextForm heading="Try Myapp - Word Counter,Character counter,Replace text" mode={mode} showAlerts={showAlerts}/>}></Route>
        <Route exact path='/About' element={<About mode={mode}/>}></Route>
        </Routes>
        
        </div>
      </Router>
    </>
  );
}

export default App;
