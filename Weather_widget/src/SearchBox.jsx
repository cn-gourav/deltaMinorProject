import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
// import updateInfo from './infoBox';

export default function SearchBox({ updateInfo }) {
     let [city, setcity] = useState("");
     let [error, setError] = useState(false);
     const API_URL = "https://api.openweathermap.org/data/2.5/weather"
     const API_KEY = "6fcff2ffd38fa6b546f3e23be28e3358"

     let getweatherInfo = async () => {
          try {
               // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
               let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
               let jsonResponse = await response.json();
               // console.log(jsonResponse)
               let result = {
                    city: city,
                    temp: jsonResponse.main.temp,
                    tempMin: jsonResponse.main.temp_min,
                    tempMax: jsonResponse.main.temp_max,
                    humidity: jsonResponse.main.humidity,
                    feelLike: jsonResponse.main.feels_like,
                    weather: jsonResponse.weather[0].description,
               }
               // console.log(result);
               return result;
          } catch (err) {
               throw err;
          }
     }

     let handleChange = (event) => {
          setcity(event.target.value);
     }

     let handleSubmit = async (event) => {
          try {

               event.preventDefault();
               console.log(city)
               let newInfo = await getweatherInfo();
               updateInfo(newInfo)
               setcity("");
          } catch (err) {
               setError(true)
          }
     }
     return (
          <div className='SearchBox'>
               <form onSubmit={handleSubmit}>
                    <TextField id="city" label="City Name" variant="outlined" onChange={handleChange} value={city} required />
                    <br /> <br />
                    <Button variant='contained' type='submit'>Search</Button>
                    {error && <p style={{ color: "red" }}>No such place exists</p>}
               </form>
          </div>
     )
}