// ICON: https://www.freepik.com/icon/seasoning_6000111
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';

import Home from './pages/Home';
import Browsing from './pages/Browsing';
import About from './pages/About';

import Navbar from './components/Navbar';

import recipeRoutesConfig from './recipeRoutesConfig';

import RecipeOutline from './pages/RecipeOutline';
import RecipeOutline2 from './pages/RecipeOutline2';

function App() {
  return (
    <Router>
      <Navbar/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/about" element={<About/>} />
          <Route path="/browse" element={<Browsing/>} />
          <Route path="/recipe-example" element={<RecipeOutline/>} />
          <Route path="/recipe-example2" element={<RecipeOutline2/>} />

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
