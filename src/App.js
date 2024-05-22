
import './App.css';


import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path='/business' element={<News key='business' page={6} category='business'/>} />
          <Route exact path='/sports' element={<News key='sports' page={6} category='sports'/>} />
          <Route exact path='/' element={<News key='general' page={6} category='general'/>} />
          <Route exact path='/health' element={<News key='health' page={6} category='health'/>} />
          <Route exact path='/science' element={<News key='science' page={6} category='science'/>} />
          <Route exact path='/technology' element={<News key='technology' page={6} category='technology'/>} />
        </Routes>
      </div>
      </BrowserRouter>
    )
  }
}
