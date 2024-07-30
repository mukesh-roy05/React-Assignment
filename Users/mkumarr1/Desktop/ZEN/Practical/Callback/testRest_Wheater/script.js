// script.js
document.addEventListener('DOMContentLoaded', function() {
  const countryCodes = ['US', 'CA', 'GB', 'DE', 'JP']; // Example country codes, add more as needed

  const weatherInfoContainer = document.getElementById('weatherInfo');

  countryCodes.forEach(countryCode => {
    fetchCountryAndWeather(countryCode);
  });

  function fetchCountryAndWeather(countryCode) {
    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      .then(response => response.json())
      .then(data => {
        const countryName = data.name.common;
        const capital = data.capital[0];
        const region = data.region;
        const lat = data.latlng[0];
        const lon = data.latlng[1];

        // Create country card HTML
        const countryCard = document.createElement('div');
        countryCard.classList.add('country-card');
        countryCard.innerHTML = `
          <h2>${countryName}</h2>
          <p><strong>Capital:</strong> ${capital}</p>
          <p><strong>Country Code:</strong> ${countryCode}</p>
          <p><strong>Region:</strong> ${region}</p>
          <p><strong>LatIng:</strong> ${lat}, ${lon}</p>
          <h3>Weather Information:</h3>
          <div class="weather-details">Loading...</div>
        `;
        weatherInfoContainer.appendChild(countryCard);

        // Fetch weather temperature
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1fad12a685f4bdd2480a6a2978959fa4&units=metric`)
          .then(response => response.json())
          .then(weatherData => {
            const temperature = weatherData.main.temp;
            const weatherDetails = countryCard.querySelector('.weather-details');
            weatherDetails.innerHTML = `<p><strong>Temperature:</strong> ${temperature} °C</p>`;
          })
          .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherDetails = countryCard.querySelector('.weather-details');
            weatherDetails.innerHTML = '<p>Failed to fetch weather data.</p>';
          });
      })
      .catch(error => {
        console.error('Error fetching country information:', error);
        const countryCard = document.createElement('div');
        countryCard.classList.add('country-card');
        countryCard.innerHTML = `<h2>Country ${countryCode}</h2><p>Error: Country not found.</p>`;
        weatherInfoContainer.appendChild(countryCard);
      });
  }
});
