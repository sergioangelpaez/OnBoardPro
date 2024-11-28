import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './components/Layout';
import Home from './pages/Home';
import EditarCurso from './pages/Instructor/EditarCurso';
import { ProtectedRoute } from './controllers/ProtectedRoute';
import styles from './styles/App.module.scss';
import { AuthProvider } from './controllers/authContext';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <Layout />
                            </ProtectedRoute>
                        }
                    >
                        <Route path="home" element={<Home />} />
                        <Route path="editar-curso" element={<EditarCurso />} />
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;