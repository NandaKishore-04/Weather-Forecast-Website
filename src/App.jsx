import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import HeroWeather from "./components/HeroWeather";
import WeatherStats from "./components/WeatherStats";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import "./App.css";

const KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE = "https://api.openweathermap.org/data/2.5";

export default function App() {
  const [current, setCurrent] = useState(null);
  const [hourly, setHourly] = useState([]);
  const [daily, setDaily] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (p) => fetchByCoords(p.coords.latitude, p.coords.longitude),
        () => fetchByCity("Nellore")
      );
    } else {
      fetchByCity("Nellore");
    }
  }, []);

  const fetchByCity = async (city) => {
    setLoading(true);
    setError("");
    try {
      const [c, f] = await Promise.all([
        axios.get(`${BASE}/weather?q=${city}&appid=${KEY}&units=metric`),
        axios.get(`${BASE}/forecast?q=${city}&appid=${KEY}&units=metric`),
      ]);
      setCurrent(c.data);
      setHourly(f.data.list.slice(0, 8));
      setDaily(groupByDay(f.data.list));
    } catch {
      setError("City not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchByCoords = async (lat, lon) => {
    setLoading(true);
    setError("");
    try {
      const [c, f] = await Promise.all([
        axios.get(`${BASE}/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`),
        axios.get(`${BASE}/forecast?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`),
      ]);
      setCurrent(c.data);
      setHourly(f.data.list.slice(0, 8));
      setDaily(groupByDay(f.data.list));
    } catch {
      setError("Could not fetch location weather.");
    } finally {
      setLoading(false);
    }
  };

  const groupByDay = (list) => {
    const days = {};
    list.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];
      if (!days[date]) days[date] = [];
      days[date].push(item);
    });
    return Object.entries(days)
      .slice(0, 5)
      .map(([date, items]) => ({
        date,
        icon: items[Math.floor(items.length / 2)].weather[0].icon,
        desc: items[Math.floor(items.length / 2)].weather[0].main,
        hi: Math.round(Math.max(...items.map((i) => i.main.temp_max))),
        lo: Math.round(Math.min(...items.map((i) => i.main.temp_min))),
      }));
  };

  return (
    <div className="app">
      <div className="app-inner">
        <SearchBar
          onSearch={fetchByCity}
          onLocate={() =>
            navigator.geolocation.getCurrentPosition((p) =>
              fetchByCoords(p.coords.latitude, p.coords.longitude)
            )
          }
        />
        {loading && <div className="status">Loading weather data…</div>}
        {error && <div className="error">{error}</div>}
        {current && (
          <>
            <HeroWeather data={current} />
            <WeatherStats data={current} />
            <HourlyForecast data={hourly} />
            <DailyForecast data={daily} />
          </>
        )}
      </div>
    </div>
  );
}