import { useEffect, useState } from 'react'
import './App.css'
import weather from './logic/weather'

function App() {
  const [meteo, setMeteo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      const result = await weather.doGet();
      setMeteo(result);

      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };

    fetchWeather();
  }, []);

  if (loading || meteo === null) {
    return (
      <div className='loading_wrapper' style={{ backgroundColor: "gray" }}>
        <h1 className='waiting'>Piove oggi a Lonigo?</h1>
        <p>Aspetta un attimo...</p>
      </div>
    )
  }

  return (
    <div className='weather_wrapper' style={meteo === "Clear" || meteo === "Partly cloudy" ? { backgroundColor: "green" } : { backgroundColor: "red" }}>
      {meteo === "Clear" || meteo === "Partly cloudy" ? <h1 className='rain_today'>NO</h1> : <h1 className='rain_today'>SI</h1>}
    </div >
  )
}

export default App;
