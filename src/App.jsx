import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Weather from "./components/Weather"
import { sampleData } from './utils/sampleData'

function App() {
  //console.log("Sample Data: ",sampleData)
  const [weatherInfo, setWeatheInfo] = useState(null)
  const [backGroundImage, setBackGroundImage] = useState('/images/backgroundImages/Rainy.jpg')

  
  const success = (pos) => {
    //console.log(pos)
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    /*Para sta bárbara loa coords son:  lat:4.6959236, lon:-74.033657*/
    //console.log(lat.lon)
    const API_KEY = "b9710a9cee4ad0bb9b61e426263359c9"
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}4&lon=${lon}&appid=${API_KEY}`
    //console.log(URL)
    //console.log(Date.now())

    /*LLamada a servicio */
     axios.get(URL)
      .then(({ data }) => {
        //console.log("Data read:",data)
        setWeatheInfo(data)
      })
      .then((err => console.log(err)))  
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)

  }, [])


  return (
    <>
      <main  style={{backgroundImage: `url(${backGroundImage})`}} className=" text-3xl text-white min-h-screen flex justify-center items-center px-2 font-principal-font  bg-cover bg-center">
        {/*<Weather weatherInfo={weatherInfo} />*/}
        <Weather weatherInfo={weatherInfo?weatherInfo:sampleData} />
       

      </main>
    </>
  )
}

export default App
