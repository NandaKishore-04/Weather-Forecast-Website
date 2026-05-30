import { useState } from "react";

export default function SearchBar({ onSearch, onLocate }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <div className="search-bar">
      <div className="search-input-wrap">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search for a city…"
        />
      </div>
      <button className="btn-search" onClick={handleSearch}>
        Search
      </button>
      <button className="btn-locate" onClick={onLocate} title="Use my location">
        📍
      </button>
    </div>
  );
}