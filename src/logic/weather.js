import axios from "axios"

const endpoint = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=Lonigo&aqi=no`;

async function doGet() {
    try {
        const response = await axios.get(endpoint)
        console.log(response);

        return response.data.current.condition.text
    } catch (error) {
        console.warn(error);
    }
}

const weather = {
    doGet
}

export default weather
