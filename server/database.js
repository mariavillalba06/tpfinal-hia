const mongoose = require('mongoose'); 
require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env

const URI = process.env.MONGO_URI; // Obtener la URI desde la variable de entorno

mongoose.connect(URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
})
  .then(() => console.log('DB is connected')) // Mensaje de éxito
  .catch((err) => console.error('Error connecting to the database:', err)); // Manejo de errores

module.exports = mongoose; // Exportar la conexión para usar en otros módulos