import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState, useEffect } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wonderland",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    // Dynamic background effect
    useEffect(() => {
        const body = document.body;
        if (weatherInfo.humidity > 80) {
            body.style.backgroundImage = 'var(--bg-rainy)';
        } else if (weatherInfo.temp < 15) {
            body.style.backgroundImage = 'var(--bg-cold)';
        } else {
            body.style.backgroundImage = 'var(--bg-sunny)';
        }
    }, [weatherInfo]);

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div className="weather-container">
            <h2 className="heading">Weather Pulse</h2>
            <div className="glass-card">
                <SearchBox updateInfo={updateInfo} />
                <InfoBox info={weatherInfo} />
            </div>
        </div>
    );
}
