import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_BASE_URL = 'https://weather-dashboard-production-a5fc.up.railway.app';

  const fetchWeather = async (e) => {
    e.preventDefault();
    
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const response = await axios.get(`${API_BASE_URL}/api/weather/${city}`);
      setWeather(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('City not found. Please check the spelling and try again.');
      } else {
        setError('Failed to fetch weather data. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>🌤 Weather Dashboard</h1>
          <p>Get current weather information for any city</p>
        </header>

        <form onSubmit={fetchWeather} className="search-form">
          <div className="input-group">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name (e.g., London, New York)"
              className="city-input"
              disabled={loading}
            />
            <button type="submit" className="search-button" disabled={loading}>
              {loading ? 'Searching...' : 'Get Weather'}
            </button>
          </div>
        </form>

        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        {weather && (
          <div className="weather-card">
            <div className="weather-header">
              <h2>{weather.city}, {weather.country}</h2>
              <div className="weather-icon">
                <img 
                  src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                  alt={weather.description}
                />
              </div>
            </div>

            <div className="weather-main">
              <div className="temperature">
                <span className="temp-value">{weather.temperature}°C</span>
                <span className="temp-desc">{weather.description}</span>
              </div>
            </div>

            <div className="weather-details">
              <div className="detail-item">
                <span className="detail-label">Feels like</span>
                <span className="detail-value">{weather.feelsLike}°C</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Humidity</span>
                <span className="detail-value">{weather.humidity}%</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Wind Speed</span>
                <span className="detail-value">{weather.windSpeed} m/s</span>
              </div>
            </div>
          </div>
        )}

        <footer className="footer">
          <p>Built with React & Node.js | Weather data from OpenWeatherMap</p>
        </footer>
      </div>
    </div>
  );
}

export default App;