import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

export default function InfoBox({ info }) {

    const getWeatherIcon = () => {
        if (info.humidity > 80) return <ThunderstormIcon sx={{ fontSize: 60, color: '#fff' }} />;
        if (info.temp < 15) return <AcUnitIcon sx={{ fontSize: 60, color: '#fff' }} />;
        return <WbSunnyIcon sx={{ fontSize: 60, color: '#fff' }} />;
    };

    return (
        <div style={{ padding: '0 10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <div style={{ marginRight: '20px' }}>
                    {getWeatherIcon()}
                </div>
                <div>
                    <h1 style={{ fontSize: '4rem', margin: 0, fontWeight: 300, lineHeight: 1 }}>{Math.round(info.temp)}&deg;</h1>
                    <p style={{ margin: 0, fontSize: '1.2rem', textTransform: 'capitalize', opacity: 0.9 }}>{info.weather}</p>
                </div>
            </div>

            <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '10px', marginBottom: '20px', fontSize: '1.5rem' }}>
                {info.city}
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                        <WaterDropIcon sx={{ fontSize: 20, opacity: 0.8 }} />
                        <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>Humidity</span>
                    </div>
                    <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>{info.humidity}%</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                        <DeviceThermostatIcon sx={{ fontSize: 20, opacity: 0.8 }} />
                        <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>Feels Like</span>
                    </div>
                    <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>{info.feelsLike}&deg;</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '15px' }}>
                    <span style={{ display: 'block', fontSize: '0.9rem', opacity: 0.8 }}>Min Temp</span>
                    <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>{info.tempMin}&deg;</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '15px' }}>
                    <span style={{ display: 'block', fontSize: '0.9rem', opacity: 0.8 }}>Max Temp</span>
                    <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>{info.tempMax}&deg;</span>
                </div>
            </div>
        </div>
    )
}
