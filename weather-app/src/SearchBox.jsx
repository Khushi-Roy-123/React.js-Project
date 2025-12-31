import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    // Mock API logic same as before...
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "1031e82180981b48e6b9fba105594774";

    let getWeatherInfo = async () => {
        try {
            // Simulated fake logic for demo
            const mockData = {
                temp: Math.floor(Math.random() * 35),
                tempMin: 20,
                tempMax: 35,
                humidity: Math.floor(Math.random() * 100),
                feelsLike: 28,
                weather: Math.random() > 0.5 ? "haze" : "rain",
                city: city || "Sample City"
            };
            return mockData;
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
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
                <TextField
                    id="city"
                    label="Search City"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                    fullWidth
                    size="small"
                    error={error}
                    helperText={error && "City not found!"}
                />
                <Button variant="contained" type="submit" startIcon={<SearchIcon />}>
                    Search
                </Button>
            </form>
        </div>
    );
}
