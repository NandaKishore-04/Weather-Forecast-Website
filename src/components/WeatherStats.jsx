export default function WeatherStats({ data }) {
  const stats = [
    { label: "Humidity", value: `${data.main.humidity}%`, icon: "💧" },
    { label: "Wind", value: `${data.wind.speed} m/s`, icon: "🌬️" },
    {
      label: "Visibility",
      value: `${(data.visibility / 1000).toFixed(1)} km`,
      icon: "👁️",
    },
    { label: "Pressure", value: `${data.main.pressure} hPa`, icon: "🔵" },
  ];

  return (
    <div className="stats-grid">
      {stats.map((s) => (
        <div className="stat-card" key={s.label}>
          <span className="stat-icon">{s.icon}</span>
          <p className="stat-val">{s.value}</p>
          <p className="stat-lbl">{s.label}</p>
        </div>
      ))}
    </div>
  );
}