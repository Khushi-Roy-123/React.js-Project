import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

export default function InfoBox({ info }) {

    const getWeatherIcon = () => {
        if (info.humidity > 80) return <ThunderstormIcon sx={{ fontSize: 80, color: '#fff', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))' }} />;
        if (info.temp < 15) return <AcUnitIcon sx={{ fontSize: 80, color: '#fff', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))' }} />;
        return <WbSunnyIcon sx={{ fontSize: 80, color: '#fff', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))' }} />;
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ margin: '30px 0' }}>
                {getWeatherIcon()}
                <h1 style={{ fontSize: '5rem', margin: '10px 0', fontWeight: 300, lineHeight: 1 }}>{Math.round(info.temp)}&deg;</h1>
                <p style={{ fontSize: '1.5rem', textTransform: 'capitalize', opacity: 0.9, letterSpacing: '1px' }}>{info.weather}</p>
                <h3 style={{ fontSize: '1.2rem', marginTop: '10px', opacity: 0.8, fontWeight: 400 }}>{info.city}</h3>
            </div>

            <div className="stat-grid">
                <div className="stat-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px' }}>
                        <WaterDropIcon sx={{ fontSize: 20 }} />
                        <span className="stat-label">Humidity</span>
                    </div>
                    <span className="stat-value">{info.humidity}%</span>
                </div>
                <div className="stat-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px' }}>
                        <DeviceThermostatIcon sx={{ fontSize: 20 }} />
                        <span className="stat-label">Feels Like</span>
                    </div>
                    <span className="stat-value">{info.feelsLike}&deg;</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Min Temp</span>
                    <span className="stat-value">{info.tempMin}&deg;</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Max Temp</span>
                    <span className="stat-value">{info.tempMax}&deg;</span>
                </div>
            </div>
        </div>
    )
}
