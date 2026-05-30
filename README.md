# ⛅ WeatherNow — Daily Weather Forecast App

A clean, fully responsive weather app built with **React + Vite** that shows real-time weather, hourly forecasts, and a 5-day outlook. Works beautifully on both mobile and desktop.

---

## 📸 Screenshots
<img width="1350" height="694" alt="Screenshot 2026-05-31 003816" src="https://github.com/user-attachments/assets/a0964ac2-7066-4430-b648-4aa3c672bf21" />

<img width="1347" height="729" alt="Screenshot 2026-05-31 003838" src="https://github.com/user-attachments/assets/80d19a73-939e-4e2e-9e4c-1291f8d91e86" />


---

## ✨ Features

- 🔍 **Manual city search** — type any city and get instant results
- 📍 **Auto location detection** — uses browser Geolocation API
- 🌡️ **Current conditions** — temperature, feels-like, high/low
- ⏱️ **Hourly forecast** — next 24 hours in 3-hour intervals
- 📅 **5-day forecast** — daily high/low with weather icons
- 💧 **Weather stats** — humidity, wind speed, visibility, pressure
- 📱 **Fully responsive** — optimized for mobile and desktop
- ⚡ **Fast** — powered by Vite for instant hot reload

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Styling | Plain CSS (custom, no framework) |
| HTTP Client | Axios |
| Weather Data | OpenWeatherMap API (free tier) |
| Deployment | Vercel |

---

## 📁 Project Structure

```
weather-app/
│
├── public/
│   └── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   ├── vite.svg
│   │
│   ├── components/
│   │   ├── SearchBar.jsx        # City search + locate button
│   │   ├── HeroWeather.jsx      # Main temperature display
│   │   ├── WeatherStats.jsx     # Humidity, wind, visibility, pressure
│   │   ├── HourlyForecast.jsx   # 24-hour scrollable timeline
│   │   └── DailyForecast.jsx    # 5-day forecast list
│   │
│   ├── App.jsx                  # Root component + API logic
│   ├── App.css                  # All styles (responsive)
│   └── main.jsx                 # Entry point
│
├── .env                         # API key (not committed)
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

## 📄 License

This project is licensed under the [MIT License](LICENSE).
