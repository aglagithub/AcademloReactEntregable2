export const getIconImage=(code)=>{
   const weatherImage ={
       "01d":"/public/images/icond/ClearSky.png",
       "02d":"/public/images/icond/FewClouds.png",
       "03d":"/public/images/icond/ScatteredClouds.png",
       "04d":"/public/images/icond/BrokenClouds.png",
       "09d":"/public/images/icond/ShowerRain.png",
       "10d":"/public/images/icond/Rain.png",
       "11d":"/public/images/icond/ThunderStorm.png",
       "13d":"/public/images/icond/Snow.png",
       "50d":"/public/images/icond/Mist.png",
       
       "01n":"/public/images/iconn/ClearSky.png",
       "03n":"/public/images/iconn/ScatteredClouds.png",
       "04n":"/public/images/iconn/BrokenClouds.png",
       "09n":"/public/images/iconn/ShowerRain.png",
       "10n":"/public/images/iconn/Rain.png",
       "11n":"/public/images/iconn/ThunderStorm.png",
       "13n":"/public/images/iconn/Snow.png",
       "50n":"/public/images/iconn/Mist.png",
       "02n":"/public/images/iconn/FewClouds.png",

    }
    return weatherImage[code]
}