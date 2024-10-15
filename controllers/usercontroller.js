const functions = require('firebase-functions'); // Importar funciones de Firebase
const { getdb } = require('../Apis/firebase/firebaseinit.js'); // Importar la instancia de Firestore

class UserController {

    // Método para obtener usuarios
    async getUsers(req, res) {
        const db = getdb(); // Obtener la instancia de Firestore
        try {
            // Obtener todos los documentos de la colección 'users'
            const snapshot = await db.collection('users').get();
            
            // Crear un arreglo para almacenar los datos de los documentos
            const users = [];
    
            // Iterar sobre los documentos y agregar sus datos al arreglo
            snapshot.forEach(doc => {
                users.push({ id: doc.id, ...doc.data() });
            });
    
            // Enviar la respuesta con los datos
            res.status(200).send(users);
        } catch (error) {
            console.error("Error al obtener los usuarios: ", error);
            res.status(500).send("Error al obtener los usuarios");
        }
    }

    

    async 
}

module.exports = new UserController();
