import './App.css';
import React from 'react';
import { SignUp } from './components/LogIn'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,
         Routes,
        Route,Link} from "react-router-dom";
import "./index.css"
import {FinalLogIn} from './components/signup/signUp'


export const App = () => {
  
  return (
    <BrowserRouter>
            <Link to='/LogIn.jsx'> Create an account </Link>
            <Routes>
              <Route path='/LogIn.jsx' element={<SignUp/>}/>
              <Route path="/signUp.jsx" element={<FinalLogIn/>} />
            </Routes>
    </BrowserRouter>
  );
}


export default App;
