import React from "react";

function WeatherCard({ weather, forecast, onToggleFavorite, isFavorite }) {
    return (
        <div className="weather-card">
            <h2>
                {weather.city}, {weather.country}
            </h2>
            <p className="temp">{weather.temperature}°C</p>
            <p>{weather.description}</p>
            <p>Вітер: {weather.windspeed} км/год</p>
            <button onClick={() => onToggleFavorite(weather.city)}>
                {isFavorite ? "Видалити з обраних" : "Додати в обрані"}
            </button>
            {forecast && (
                <div className="forecast">
                    <h3>Прогноз на кілька днів:</h3>
                    <div className="forecast-list">
                        {forecast.map((day, index) => (
                            <div key={index} className="forecast-item">
                                <p>{day.date}</p>
                                <p>Макс: {day.max}°C</p>
                                <p>Мін: {day.min}°C</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default WeatherCard;
