document.addEventListener("DOMContentLoaded", () => {
  fetch("/weather")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const weatherInfoElement = document.getElementById("weatherInfo");

      if (data && data.main && data.weather && data.weather[0]) {
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const weatherEmoji = getWeatherEmoji(data.weather[0].main);

        console.log("Weather data received:", data); // Added console.log

        // Update content of the weather-specific list item
        weatherInfoElement.innerHTML = `It is currently ${temperature}°C in Quebec. <span>${weatherEmoji}</span>`;
      } else {
        console.error("Weather data is not in the expected format.", data);
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data", error);
    });
});

// Function to get emoji based on main weather condition
function getWeatherEmoji(weatherMain) {
  switch (weatherMain) {
    case "Clear":
      return "☀️"; // Sun
    case "Clouds":
      return "☁️"; // Cloud
    case "Rain":
      return "🌧️"; // Rain
    case "Snow":
      return "❄️"; // Snow
    case "Thunderstorm":
      return "⛈️"; // Thunderstorm
    case "Drizzle":
      return "🌦️"; // Drizzle
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
      return "🌫️"; // Special atmospheric conditions
    default:
      return "🌍"; // Other (earth)
  }
}
