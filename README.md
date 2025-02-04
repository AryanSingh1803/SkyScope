# SkyScope
# Weather App

A simple, responsive weather application that fetches real-time weather data using the OpenWeatherMap API. Users can input a city name to retrieve current weather conditions, including temperature, humidity, wind speed, and a brief description.

## Features

- Dynamic weather data for any city
- Animated cloud background
- Responsive and user-friendly interface
- Displays temperature, humidity, wind speed, and weather description

## Technologies Used

- **HTML5** for structure
- **CSS3** for styling and animations
- **JavaScript** for API interaction and DOM manipulation
- **OpenWeatherMap API** for real-time weather data

## Getting Started

### Prerequisites

- A web browser (Chrome, Firefox, Safari, etc.)
- Internet connection

### Installation

1. Clone the repository or download the source code.
2. Open the `index.html` file in your preferred web browser.

### API Key Setup

1. Register on [OpenWeatherMap](https://openweathermap.org/) to get your free API key.
2. Replace the placeholder API key in `script.js`:
   ```javascript
   const API_KEY = 'YOUR_API_KEY_HERE';
   ```

## Usage

1. Enter the name of the city in the input field.
2. Click on the **Get Weather** button.
3. View the weather details displayed below the button.

## File Structure

```
├── index.html      # Main HTML structure
├── style.css       # CSS for styling and animations
└── script.js       # JavaScript for API requests and DOM manipulation
```

## Customization

- **Background Animation:** Modify the `.cloud` classes in `style.css` to change cloud size, speed, or color.
- **Weather Display:** Edit the `displayWeather` function in `script.js` to customize the weather information shown.

## Troubleshooting

- **City Not Found:** Ensure correct spelling of the city name.
- **API Errors:** Verify your API key and internet connection.
- **CORS Issues:** If running locally, consider using a local server.

## License

This project is open-source and available for personal and educational use.

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API.
- Inspiration from modern weather apps with minimalist UI designs.

