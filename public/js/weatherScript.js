document.addEventListener('DOMContentLoaded', () => {
  fetch('/weather')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP! Statut : ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const weatherInfoElement = document.getElementById('weatherInfo');

      if (data && data.main && data.weather && data.weather[0]) {
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const weatherEmoji = getWeatherEmoji(data.weather[0].main);

        // Mise à jour du contenu de la balise li spécifique à la météo
        weatherInfoElement.innerHTML = `Il fait actuellement ${temperature}°C à Québec. <span>${weatherEmoji}</span>`;
      } else {
        console.error('Les données météorologiques ne sont pas dans le format attendu.', data);
      }
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données météorologiques', error);
    });
});

// Fonction pour obtenir l'emoji en fonction de la condition météorologique principale
function getWeatherEmoji(weatherMain) {
  switch (weatherMain) {
    case 'Clear':
      return '☀️'; // Soleil
    case 'Clouds':
      return '☁️'; // Nuage
    case 'Rain':
      return '🌧️'; // Pluie
    case 'Snow':
      return '❄️'; // Neige
    case 'Thunderstorm':
      return '⛈️'; // Orage
    case 'Drizzle':
      return '🌦️'; // Bruine
    case 'Mist':
    case 'Smoke':
    case 'Haze':
    case 'Dust':
    case 'Fog':
    case 'Sand':
    case 'Ash':
    case 'Squall':
    case 'Tornado':
      return '🌫️'; // Conditions atmosphériques spéciales
    default:
      return '🌍'; // Autre (terre)
  }
}
