import React, { useState, useEffect } from "react";
import "./index.css";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import FavoritesList from "./components/FavoritesList";
import useWeather from "./hooks/useWeather";

function App() {
    const { weather, forecast, loading, error, fetchWeather } = useWeather();
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("favorites")) || []
    );
    const [background, setBackground] = useState("day-sunny");

    useEffect(() => {
        if (weather) {
            const code = weather.weathercode;
            if (code === 0 || code === 1) setBackground("sunny");
            else if (code === 2 || code === 3 || code === 45 || code === 48)
                setBackground("cloudy");
            else if (code >= 51 && code <= 67) setBackground("rainy");
            else if (code >= 71 && code <= 77) setBackground("snowy");
            else if (code >= 80 && code <= 99) setBackground("rainy");
            else setBackground("sunny");
        }
    }, [weather]);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (city) => {
        if (favorites.includes(city)) {
            setFavorites(favorites.filter((f) => f !== city));
        } else {
            setFavorites([...favorites, city]);
        }
    };

    return (
        <div className={`app ${background}`}>
            <div className="overlay">
                <div className="container">
                    <h1 className="title">Погода</h1>
                    <SearchBar onSearch={fetchWeather} />
                    {loading && <p>Завантаження...</p>}
                    {error && <p className="error">{error}</p>}
                    {weather && (
                        <WeatherCard
                            weather={weather}
                            forecast={forecast}
                            onToggleFavorite={toggleFavorite}
                            isFavorite={favorites.includes(weather.city)}
                        />
                    )}
                    <FavoritesList
                        favorites={favorites}
                        onSelectCity={fetchWeather}
                        onRemove={(city) =>
                            setFavorites(favorites.filter((f) => f !== city))
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
