# Weather Dashboard

A full-stack weather application built with React and Node.js that provides real-time weather information for any city worldwide.

## 🌟 Features

- *Real-time Weather Data*: Get current weather information for any city
- *Responsive Design*: Works perfectly on desktop and mobile devices
- *Error Handling*: Graceful handling of invalid city names and network errors
- *Modern UI*: Clean, intuitive interface with weather icons
- *Full-Stack Architecture*: React frontend with Node.js/Express backend

## 🚀 Live Demo

- *Frontend*: https://weather-dashboard-three-zeta.vercel.app/
- *Backend API*: https://weather-dashboard-production-a5fc.up.railway.app/

## 🛠 Tech Stack

### Frontend
- React.js
- CSS3 with modern styling
- Axios for API calls
- Responsive design

### Backend
- Node.js
- Express.js
- OpenWeatherMap API
- CORS enabled
- Environment variables

### Deployment
- Frontend: Vercel
- Backend: Railway
- Version Control: Git/GitHub

## 📱 Screenshots

![image](https://github.com/user-attachments/assets/94ea1f61-174c-46e5-a26b-a20b1f00dc67)


## 🏃‍♂ Running Locally

### Prerequisites
- Node.js installed
- OpenWeatherMap API key

### Backend Setup
bash
cd backend
npm install
# Create .env file with WEATHER_API_KEY=your_api_key
npm run dev


### Frontend Setup
bash
cd frontend
npm install
npm start


## 🌐 API Endpoints

- GET / - Health check
- GET /api/weather/:city - Get weather data for a city

## 📝 Environment Variables

Create a .env file in the backend directory:

WEATHER_API_KEY=your_openweathermap_api_key
PORT=5000


## 🚀 Deployment

The application is deployed using:
- *Frontend*: Vercel (automatic deployments from GitHub)
- *Backend*: Railway (connected to GitHub repository)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- OpenWeatherMap for providing the weather API
- React team for the amazing framework
- Vercel and Railway for free hosting
