import logo from './logo.svg';
//import React from 'react'
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Feed from './Components/Feed';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {AuthProvider} from './Context/AuthContext'
import PrivateRoute from './Components/PrivateRoute'

function App() {
     return (
      <BrowserRouter>
        <AuthProvider>
        <Routes>
               <Route path="/login" element={<Login/>}/>
               <Route path="/signup" element={<Signup/>}/>
              {/* <Route path="/" element={<PrivateRoute><Feed/></PrivateRoute>}/>*/} 
              <Route path="/" element={<Feed/>}/>
            </Routes>
       </AuthProvider>
            
         
      </BrowserRouter>


      
   );
 }

export default App;
