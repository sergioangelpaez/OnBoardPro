import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import styles from './styles/App.module.scss';
import Login from './pages/Login';
import SuperadminGui from './pages/SuperadminGui'; // Asegúrate de importar tu componente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SuperadminGui" element={<SuperadminGui />} />
      </Routes>
    </Router>
  );
}

export default App;
