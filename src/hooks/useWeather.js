import { useState } from "react";

const getWeatherDescription = (code) => {
    if (code === 0 || code === 1) return "Ясно";
    if (code === 2 || code === 3 || code === 45 || code === 48) return "Хмарно";
    if (code >= 51 && code <= 67) return "Дощ";
    if (code >= 71 && code <= 77) return "Сніг";
    if (code >= 80 && code <= 99) return "Злива";
    return "Невідомо";
};

const useWeather = () => {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const fetchWeather = async (city) => {
        try {
            setLoading(true);
            setError("");

            const geoRes = await fetch(
                `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=uk`
            );
            if (!geoRes.ok) throw new Error("Помилка геокодування");

            const geoData = await geoRes.json();
            if (!geoData?.results?.length) throw new Error("Місто не знайдено");

            const { latitude, longitude, name, country } = geoData.results[0];

            const weatherRes = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
            );
            if (!weatherRes.ok) throw new Error("Помилка отримання погоди");

            const data = await weatherRes.json();

            const current = data?.current_weather;
            const daily = data?.daily;

            if (!current) throw new Error("Немає поточної погоди");

            setWeather({
                city: name,
                country,
                temperature: current?.temperature,
                windspeed: current?.windspeed,
                weathercode: current?.weathercode,
                description: getWeatherDescription(current?.weathercode),
            });

            const forecastData =
                daily?.time?.map((date, index) => ({
                    date,
                    max: daily.temperature_2m_max?.[index],
                    min: daily.temperature_2m_min?.[index],
                })) || [];

            setForecast(forecastData.slice(0, 5));
        } catch (err) {
            setError(err?.message || "Сталася невідома помилка");
        } finally {
            setLoading(false);
        }
    };

    return { weather, forecast, loading, error, fetchWeather };
};

export default useWeather;
