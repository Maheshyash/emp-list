import './App.css';
import React,{useState,useEffect} from 'react'
import Create from './components/create/Create';
import Read from './components/read/Read';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import { getEmpData } from './components/ApiCall/ApiServices';
const baseURL = "https://pocemployeeapi.azurewebsites.net/";
function App() {
  const [empData, setEmpData] = useState([])
  useEffect(() => {
      getEmpData().then(res=>setEmpData(res));
  }, []);
  return (
    
        <Router>
          <Header/>
          <div className="container">
          <Routes>
            <Route path='/' element={<Create baseURL={baseURL}empData = {empData}/>}/>
            <Route path ='/read' element={<Read/>}/>
          </Routes>
          </div>
        </Router>
      
      
    
  );
}

export default App;
