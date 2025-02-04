
const API_KEY = '222036ec48d2253cb9c9a0ea6393f942'; 

function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('City not found. Please try again.');
            }
        })
        .catch(() => alert('Error fetching data. Please try again later.'));
}

function displayWeather(weather) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <div class="weather-card">
            <h2>${weather.name}</h2>
            <p>${weather.weather[0].description}</p>
            <p>🌡️ ${weather.main.temp}°C</p>
            <p>💧 ${weather.main.humidity}%</p>
            <p>🌬️ ${weather.wind.speed} m/s</p>
        </div>
    `;
}
