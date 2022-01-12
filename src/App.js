import logo from './logo.svg';
//import React from 'react'
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
     return (
     <Router>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>

         
       
     
     </Router>


      
   );
 }

export default App;
