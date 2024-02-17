// ICON: https://www.freepik.com/icon/spice_6000133
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Test from './pages/Test';
import Test2 from './pages/Test2';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Test/>} /> 
          <Route path="/test" element={<Test2/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
  );
}

export default App;
