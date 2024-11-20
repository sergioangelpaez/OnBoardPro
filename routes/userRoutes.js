// routes/authRoutes.js
const express = require('express');
const router = express.Router();

// Importa el controlador de autenticación
const UserController = require('../control/usercontroller.js');

// Definir rutas
router.get('/get', UserController.getUsers); // Ruta para iniciar sesión
router.get('/get/email/:email', UserController.searchUsersByEmailByrequest);
router.get('/get/id/:id', UserController.searchUserByIdByRequest);
router.get('/get/type/:rol', UserController.searchUsersByRoleByRequest)
router.post('/create/new', UserController.createUserByRequest);


module.exports = router; // Exporta el router

