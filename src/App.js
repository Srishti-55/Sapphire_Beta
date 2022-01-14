import logo from './logo.svg';
//import React from 'react'
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {AuthProvider} from './Context/AuthContext'

function App() {
     return (
     <BrowserRouter>
     <AuthProvider>
     <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>

     </AuthProvider>
    </BrowserRouter>


      
   );
 }

export default App;
