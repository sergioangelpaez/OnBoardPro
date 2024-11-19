import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import styles from './styles/App.module.scss';
import Layout from './components/Layout';
import Home from './pages/Home';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/" element={<Layout />}>
                    <Route path="home" element={<Home />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;