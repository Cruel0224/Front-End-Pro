import React, { useState, useEffect } from "react";
import "./index.css";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import FavoritesList from "./components/FavoritesList";
import useWeather from "./hooks/useWeather";

function App() {
    const { weather, forecast, loading, error, fetchWeatherByCoords } = useWeather();
    const [favorites, setFavorites] = useState(() => {
        try {
            const saved = localStorage.getItem("favorites");
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    const [background, setBackground] = useState("sunny");
    const [searchError, setSearchError] = useState("");
    const [searchOptions, setSearchOptions] = useState([]);

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

    const toggleFavorite = (cityObj) => {
        if (!cityObj.latitude || !cityObj.longitude) return;

        const exists = favorites.some(
            (f) =>
                f.city === cityObj.city &&
                f.country === cityObj.country &&
                f.admin1 === cityObj.admin1
        );

        if (exists) {
            setFavorites(
                favorites.filter(
                    (f) =>
                        !(
                            f.city === cityObj.city &&
                            f.country === cityObj.country &&
                            f.admin1 === cityObj.admin1
                        )
                )
            );
        } else {
            setFavorites([...favorites, cityObj]);
        }
    };


    const handleCitySelect = async (cityObj) => {
        if (!cityObj.latitude || !cityObj.longitude) {
            setSearchError("Немає координат для цього міста");
            return;
        }
        setSearchError("");
        await fetchWeatherByCoords(cityObj);
    };

    return (
        <div className={`app ${background}`}>
            <div className="overlay">
                <div className="container">
                    <h1 className="title">Погода</h1>

                    <SearchBar
                        onSelectCity={handleCitySelect}
                        onError={setSearchError}
                        onOptionsChange={setSearchOptions}
                    />

                    {!weather && !loading && !error && !searchError && searchOptions.length === 0 && (
                        <p className="empty">
                            Введіть назву міста, щоб переглянути погоду 🌤️
                        </p>
                    )}

                    {loading && <p>Завантаження...</p>}
                    {error && <p className="error">{error}</p>}
                    {searchError && <p className="error">{searchError}</p>}

                    {weather && (
                        <WeatherCard
                            weather={weather}
                            forecast={forecast}
                            onToggleFavorite={() => toggleFavorite(weather)}
                            isFavorite={favorites.some(
                                (f) =>
                                    f.city === weather.city &&
                                    f.country === weather.country &&
                                    f.admin1 === weather.admin1
                            )}
                        />
                    )}

                    <FavoritesList
                        favorites={favorites}
                        onSelectCity={handleCitySelect}
                        onRemove={(cityObj) =>
                            setFavorites(
                                favorites.filter(
                                    (f) =>
                                        !(
                                            f.city === cityObj.city &&
                                            f.country === cityObj.country &&
                                            f.admin1 === cityObj.admin1
                                        )
                                )
                            )
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
