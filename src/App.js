// ICON: https://www.freepik.com/icon/seasoning_6000111
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Browsing from './pages/Browsing';
import About from './pages/About';

import Navbar from './components/Navbar';
import RecipeOutline from './pages/RecipeOutline';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/about" element={<About/>} />
          <Route path="/browse" element={<Browsing/>} />
          <Route path="/recipe-example" element={<RecipeOutline/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
  );
}

export default App;
