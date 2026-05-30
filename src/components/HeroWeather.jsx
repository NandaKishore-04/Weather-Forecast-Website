const ICONS = {
  "01d": "☀️",
  "01n": "🌙",
  "02d": "🌤️",
  "02n": "🌤️",
  "03d": "⛅",
  "03n": "⛅",
  "04d": "☁️",
  "04n": "☁️",
  "09d": "🌧️",
  "09n": "🌧️",
  "10d": "🌦️",
  "10n": "🌦️",
  "11d": "⛈️",
  "11n": "⛈️",
  "13d": "❄️",
  "13n": "❄️",
  "50d": "🌫️",
  "50n": "🌫️",
};

export default function HeroWeather({ data }) {
  const icon = ICONS[data.weather[0].icon] || "🌡️";

  const now = new Date();
  const dateStr = now.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="hero-card">
      <p className="hero-location">
        📍 {data.name}, {data.sys.country}
      </p>
      <p className="hero-date">{dateStr}</p>
      <div className="hero-temp-row">
        <span className="hero-icon">{icon}</span>
        <span className="hero-temp">{Math.round(data.main.temp)}°C</span>
      </div>
      <p className="hero-desc">{data.weather[0].description}</p>
      <p className="hero-feels">
        Feels like {Math.round(data.main.feels_like)}°C &nbsp;·&nbsp; H:{" "}
        {Math.round(data.main.temp_max)}° &nbsp; L:{" "}
        {Math.round(data.main.temp_min)}°
      </p>
    </div>
  );
}