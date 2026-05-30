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

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function DailyForecast({ data }) {
  return (
    <div className="section-card">
      <h3 className="section-title">5-day forecast</h3>
      <div className="daily-list">
        {data.map((day, i) => {
          const d = new Date(day.date);
          const label = i === 0 ? "Today" : DAYS[d.getDay()];
          const barWidth = Math.round((day.hi / 45) * 100);

          return (
            <div className="daily-row" key={i}>
              <span className="daily-name">{label}</span>
              <span className="daily-icon">{ICONS[day.icon] || "🌡️"}</span>
              <span className="daily-desc">{day.desc}</span>
              <div className="daily-bar-wrap">
                <div
                  className="daily-bar"
                  style={{ width: `${barWidth}%` }}
                />
              </div>
              <span className="daily-range">
                {day.lo}° / {day.hi}°
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}