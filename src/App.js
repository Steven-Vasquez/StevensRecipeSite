// ICON: https://www.freepik.com/icon/seasoning_6000111
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';

import Home from './pages/Home';
import Browsing from './pages/Browsing';
import About from './pages/About';
import RecipePage from './pages/RecipePage';

import Navbar from './components/Navbar';

import recipeRoutesConfig from './recipeRoutesConfig';


function App() {
  return (
    <Router>
      <Navbar/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/about" element={<About/>} />
          <Route path="/browse" element={<Browsing/>} />
          <Route path="/recipes/:recipe_slug" element={<RecipePage />} />
          
          {recipeRoutesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
