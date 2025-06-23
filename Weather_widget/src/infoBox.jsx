import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

// import AcUnitIcon from '@mui/icons-/AcUnit';
// import UmbrellaIcon from '@mui/icons-material/Umbrella';
// import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
     const INIT_img = "https://images.unsplash.com/photo-1545134969-8debd725b007?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVzdHl8ZW58MHx8MHx8fDA%3D"

     const HOT_URL = "https://images.unsplash.com/photo-1586902197503-e71026292412?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VtbWVyfGVufDB8fDB8fHww";
     const COLD_URL = "https://plus.unsplash.com/premium_photo-1670098277032-cc59e6cdb51b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ludGVyfGVufDB8fDB8fHww";
     const RAIN_URL = "https://images.unsplash.com/photo-1501691223387-dd0500403074?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";

     if (!info) {
          return <div className='InfoBox'>No data available</div>;
     }

     return (
          <div className='InfoBox'>
               <div className='cardContainer'>
                    <Card sx={{ maxWidth: 345 }}>
                         <CardMedia
                              sx={{ height: 140 }}
                              image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                              title="green iguana"
                         />
                         <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                   {info.city}
                                   {/* {info.humidity > 80 ? UmbrellaIcon : info.temp > 15 ? SunnyIcon : AcUnitIcon} */}
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                                   <p>
                                        Temperature =  {info.temp}&deg;C
                                   </p>

                                   <p>
                                        Humidity = {info.humidity}
                                   </p>
                                   <p>Min Temp = {info.tempMin}&deg;C</p>
                                   <p>Max Temp = {info.tempMax}&deg;C</p>
                                   <p>The Weather feels like {info.feelsLike}&deg;C</p>
                              </Typography>
                         </CardContent>



                    </Card>
               </div>
          </div>
     )
}