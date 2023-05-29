export const getBackgroundImage=(imageCode)=>{
const backgroundImage ={
       "01d":"/src/images/backgroundImages/ClearSky.jpg",
       "02d":"/src/images/backgroundImages/FewClouds.jpg",
       "03d":"/src/images/backgroundImages/ScatterdedClouds.jpg",
       "04d":"/src/images/backgroundImages/BrokenClouds.jpg",
       "09d":"/src/images/backgroundImages/ShowerRainy.jpg",
       "10d":"/src/images/backgroundImages/Rainy.jpg",
       "11d":"/src/images/backgroundImages/thunderstormy.jpg",
       "13d":"/src/images/backgroundImages/Smowy.jpg",
       "50d":"/src/images/backgroundImages/Misty.jpg",

       "01n":"/src/images/backgroundImages/ClearSky.jpg",
       "02n":"/src/images/backgroundImages/FewClouds.jpg",
       "03n":"/src/images/backgroundImages/ScatterdedClouds.jpg",
       "04n":"/src/images/backgroundImages/BrokenClouds.jpg",
       "09n":"/src/images/backgroundImages/ShowerRainy.jpg",
       "10n":"/src/images/backgroundImages/Rainy.jpg",
       "11n":"/src/images/backgroundImages/thunderstormy.jpg",
       "13n":"/src/images/backgroundImages/Smowy.jpg",
       "50n":"/src/images/backgroundImages/Misty.jpg",

}
return backgroundImage[imageCode]

}