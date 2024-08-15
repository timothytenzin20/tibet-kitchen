import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import Login from './pages/Login'
import RecipeCard from './pages/RecipeCard'
import Recipes from './pages/Recipes'
import NoPage from './pages/NoPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element= {<Landing />}/>
          <Route path ='/home' element={<Landing/>}/>
          <Route path ='/login' element={<Login/>}/>
          <Route path ='/recipes' element={<Recipes/>}/>
          <Route path ='/your-recipe' element={<RecipeCard/>}/>
          <Route path = "*" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
