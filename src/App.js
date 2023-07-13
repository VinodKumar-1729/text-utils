//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import { Link } from "react-router-dom";
//import {BrowserRouter} from 'react-router-dom';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const[mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#00163e';
      showAlert("Dark Mode has been Enabled!","success");
      //document.title = "TextUtils-DarkMode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled!","success");
      //document.title = "TextUtils-LightMode";
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar title='TextAnalyzer' aboutText='About' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes>
        <Route exact path="/about" element={<About/>} /> */}
        {/* <Route exact path="/" element={ */}
        <TextForm showAlert={showAlert} heading="Text Analyzer : word counter, character counter, remove extra spaces"  mode={mode} />
        {/* } /> */}
      {/* </Routes> */}
      
      {/* <About/> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
