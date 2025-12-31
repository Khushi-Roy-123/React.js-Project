import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    // Mock API logic same as before...
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            if (jsonResponse.cod !== 200) throw new Error(jsonResponse.message);

            let result = {
                city: jsonResponse.name,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            return result;
        } catch (err) {
            throw err;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
            setError(false);
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div style={{ marginBottom: '2rem' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flex: 1, position: 'relative' }}>
                    <input
                        className={`glass-input ${error ? 'error' : ''}`}
                        placeholder={error ? "City not found!" : "Search City..."}
                        value={city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="glass-btn" type="submit">
                    <SearchIcon />
                    Search
                </button>
            </form>
        </div>
    );
}
