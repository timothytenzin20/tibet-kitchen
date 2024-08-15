import React from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import Login from './pages/Login'
import RecipeCard from './pages/RecipeCard'
import Recipes from './pages/Recipes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element= {<Landing />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
