import { useEffect, useState } from 'react'
import './App.css'
import weather from './logic/weather'

function App() {
  const [meteo, setMeteo] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      const result = await weather.doGet();
      setMeteo(result)
    };

    fetchWeather();
  });

  return (
    <div className='weather_wrapper' style={meteo === "Clear" ? { backgroundColor: "green" } : { backgroundColor: "red" }}>
      {meteo === "Clear" ?
        <h1>NO</h1> : <h1>SI</h1>}
    </div >
  )
}

export default App
