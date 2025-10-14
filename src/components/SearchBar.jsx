import React, { useState } from "react";

function SearchBar({ onSearch }) {
    const [city, setCity] = useState("");

    const handleSearch = () => {
        if (city.trim() !== "") {
            onSearch(city.trim());
            setCity("");
        }
    };
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Введіть місто..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleSearch}>Пошук</button>
        </div>
    );
}

export default SearchBar;
