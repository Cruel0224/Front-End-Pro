DZ 61. Weather Dashboard 🌤️

<strong>Goal:</strong> Create a small application that shows the weather for the entered city, with the ability to add the city to "favorites".

<strong>Basic functionality</strong>

1. <strong>City search</strong>

- Input for entering the name of the city.
- After pressing the "Search" button, the weather is downloaded via the API.
- If the city is not found, show an error message.

2. <strong>Weather display</strong>

- Name of the city, country.
- Current temperature, wind, weather description.
- Forecast for several days (min/max temperature).

3. <strong>Chosen</strong>

- "Add to favorites" / "Delete" button.
- Selected cities are stored in <strong>localStorage.</strong>
- You can quickly click on the selected city to update the weather.

<strong>API (no key)</strong>

1. <strong>Geocoding (city search):</strong> https://geocoding-api.open-meteo.com/v1/search?name={CITY}&count=1&language=uk

2. <strong>Weather:</strong> https://api.open-meteo.com/v1/forecast?latitude={LAT}&longitude={LON}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto

<strong>Components</strong>

- App — is the main component
- SearchBar — input and search button
- WeatherCard — shows the weather for the current city
- FavoritesList — list of selected cities

<strong>Use</strong>

- <strong>React Hooks: useState, useEffect</strong>
- <strong>Working with the API: fetch</strong>
- <strong>Saving to localStorage</strong>
- <strong>Conditional rendering (Loading / Error / Empty)</strong>

<strong>Additionally (optional)</strong>

- Add a <strong>custom useWeather hook.</strong>

Make a <strong>background that changes depending on the weather</strong> (sunny, rain, snow).
