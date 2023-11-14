// cors.js

const cors = require('cors');

// Configurer les options CORS selon vos besoins
const corsOptions = {
  origin: 'https://portfolio-raphael-doucet.onrender.com',  // Remplacez par l'URL de votre front-end
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

module.exports = cors(corsOptions);
