import React from 'react';
import ReactDOM from 'react-dom/client';
import Principal from './Pages/Principal';
import reportWebVitals from './reportWebVitals';
import './Styles/Modules.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Sobre from './Pages/Sobre';
import Time from './Pages/Time';
import Parceiros from './Pages/Parceiros';
import Contato from './Pages/Contato';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Principal/>}></Route>
        <Route path='/sobre' element={<Sobre/>}></Route>
        <Route path='/time' element={<Time/>}></Route>
        <Route path='/parceiros' element={<Parceiros/>}></Route>
        <Route path='/contato' element={<Contato/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
