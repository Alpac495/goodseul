import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Main from './component/Main/Main';
import Login from './component/Login/Login';
import Join from './component/Join/Join';


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login/> }/>
        <Route path='/join' element={<Join/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
