import { useState } from "react";

function BoilingVerdict({ celsius }) {
    return <p>{celsius >= 100 ? "The water would boil." : "The water would not boil."}</p>;
}

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
    function handleChange(e) {
        onTemperatureChange(e.target.value);
    }

    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input value={temperature} onChange={handleChange} />
        </fieldset>
    );
}

const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit"
};

export default function SharingState() {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    function handleCelsiusChange(temp) {
        setScale("c");
        setTemperature(temp);
    }

    function handleFahrenheitChange(temp) {
        setScale("f");
        setTemperature(temp);
    }

    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <h2>Sharing State Between Components Example</h2>
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) return "";
    const output = convert(input);
    return Math.round(output * 1000) / 1000;
}
