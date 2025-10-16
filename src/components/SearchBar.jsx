import React, { useState } from "react";

function SearchBar({ onSelectCity, onError, onOptionsChange }) {
    const [cityName, setCityName] = useState("");
    const [options, setOptions] = useState([]);

    const handleSearch = async () => {
        const trimmed = cityName.trim();
        if (!trimmed) {
            onError("Введіть назву міста");
            return;
        }

        try {
            onError("");
            setOptions([]);

            const geoRes = await fetch(
                `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
                    trimmed
                )}&count=5&language=uk`
            );

            if (!geoRes.ok) throw new Error("Помилка геокодування");

            const geoData = await geoRes.json();
            if (!geoData?.results?.length) throw new Error("Місто не знайдено");

            const cities = geoData.results.map((cityObj) => ({
                city: cityObj.name,
                country: cityObj.country,
                admin1: cityObj.admin1,
                latitude: cityObj.latitude,
                longitude: cityObj.longitude,
            }));

            setOptions(cities);
            onOptionsChange(cities);
        } catch (err) {
            onError(err.message || "Сталася невідома помилка");
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Введіть місто..."
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
            />
            <button onClick={handleSearch}>Пошук</button>

            {options.length > 0 && (
                <ul className="city-options">
                    {options.map((opt, i) => (
                        <li
                            key={i}
                            onClick={() => {
                                onSelectCity(opt);
                                setOptions([]);
                                setCityName("");
                            }}
                        >
                            {opt.city}, {opt.country} {opt.admin1 ? `, ${opt.admin1}` : ""}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchBar;
