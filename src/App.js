import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import CharactersList from './components/CharactersList/CharactersList';
import Alive from './components/Alive/Alive';



const App = ({ defaultValue = [] }) => {

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/alive">Alive</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="alive" element={<Alive />} />
      </Routes>
    </div>
  )
}

export default App