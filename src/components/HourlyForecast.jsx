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

export default function HourlyForecast({ data }) {
  return (
    <div className="section-card">
      <h3 className="section-title">Hourly forecast</h3>
      <div className="hourly-row">
        {data.map((item, i) => {
          const time =
            i === 0
              ? "Now"
              : new Date(item.dt * 1000).toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                });
          return (
            <div className={`hourly-cell ${i === 0 ? "now" : ""}`} key={i}>
              <p className="hourly-time">{time}</p>
              <p className="hourly-icon">
                {ICONS[item.weather[0].icon] || "🌡️"}
              </p>
              <p className="hourly-temp">{Math.round(item.main.temp)}°</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}