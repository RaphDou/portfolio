"use strict";

const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/weather', async (req, res) => {
  try {
    // Remplacez les coordonnées ci-dessous par celles de votre emplacement
    const latitude = 45.5017;  // Exemple: Québec
    const longitude = -73.5673;  // Exemple: Québec
    const apiKey = process.env.API_KEY;

    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          lat: latitude,
          lon: longitude,
          appid: apiKey,
          units: 'metric' // Utilisez 'metric' pour la température en Celsius
        }
      });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des données météorologiques' });
  }
});

module.exports = router;
