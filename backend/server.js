const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.json({ message: 'Weather API Backend is running!' });
});

// Weather route
app.get('/api/weather/:city', async (req, res) => {
    try {
        const { city } = req.params;
        const API_KEY = process.env.WEATHER_API_KEY;
        
        // Check if API key exists
        if (!API_KEY) {
            return res.status(500).json({ error: 'Weather API key not configured' });
        }
        
        // Make request to OpenWeatherMap API
        const weatherResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        
        // Extract relevant data
        const weatherData = {
            city: weatherResponse.data.name,
            country: weatherResponse.data.sys.country,
            temperature: Math.round(weatherResponse.data.main.temp),
            description: weatherResponse.data.weather[0].description,
            humidity: weatherResponse.data.main.humidity,
            windSpeed: weatherResponse.data.wind.speed,
            icon: weatherResponse.data.weather[0].icon,
            feelsLike: Math.round(weatherResponse.data.main.feels_like)
        };
        
        res.json(weatherData);
        
    } catch (error) {
        console.error('Weather API Error:', error.message);
        
        if (error.response && error.response.status === 404) {
            res.status(404).json({ error: 'City not found' });
        } else {
            res.status(500).json({ error: 'Failed to fetch weather data' });
        }
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Test your server: http://localhost:${PORT}`);
});