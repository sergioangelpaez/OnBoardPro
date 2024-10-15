// routes/authRoutes.js
const express = require('express');
const router = express.Router();

// Importa el controlador de autenticación
const userController = require('../controllers/usercontroller.js');

// Definir rutas
router.get('/get', userController.getUsers); // Ruta para iniciar sesión


module.exports = router; // Exporta el router

