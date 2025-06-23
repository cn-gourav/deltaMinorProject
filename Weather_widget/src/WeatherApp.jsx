import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
     const [weatherInfo, setWeatherInfo] = useState({
          city: "Delhi",
          feelsLike: 24.84,
          temp: 25.05,
          tempMin: 25.85,
          tempMax: 28.05,
          humidity: "haze",

     })


     let updateInfo = (newInfo) => {
          setWeatherInfo(newInfo);
     }


     return (
          <div style={{ textAlign: "center", backgroundImage: "url('https://images.unsplash.com/photo-1545134969-8debd725b007?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVzdHl8ZW58MHx8MHx8fDA%3D)" }}>
               <h2>Weather By Delta</h2>
               <SearchBox updateInfo={updateInfo} />
               <InfoBox info={weatherInfo} />
          </div>
     )
}