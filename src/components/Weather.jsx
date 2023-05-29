import React, { useState } from 'react'
import { kelvinTocelsius, kelvinToFahrenheit } from '../utils/temp'
import { getIconImage } from '../utils/WeatherIcons'

const Weather = ({ weatherInfo }) => {
    //console.log("Data Read in Weather component: ", weatherInfo)
    const [isCelsius, setIsCelsius] = useState(true)
    const [buttonLabel, setButtonLabel] = useState('Cambio a Fº')

    const handleChangeTemp = () => {
        //console.log("click")
        setIsCelsius(!isCelsius)
        isCelsius ? setButtonLabel('Cambio a Cº'): setButtonLabel('Cambio a Fº')
    }

    return (
        <main >
        <section className='text-center grid gap-6'>
            <h2 className='text-bold text-2xl text-black'>{weatherInfo?.name}, {weatherInfo?.sys.country}</h2>
            <section className='grid gap-4 sm:grid-cols-[1fr_auto] ' >
                {/* Temperatura */}
                <article className="bg-white/70 p-2 rounded-3xl grid grid-cols-2 items-center" >
                    <h3 className='col-span-2 text-black capitalize'>{weatherInfo?.weather[0].description}</h3>
                    <span className='text-5xl text-black' >{isCelsius ? kelvinTocelsius(weatherInfo?.main.temp) : kelvinToFahrenheit(weatherInfo?.main.temp)}</span>

                    <div><img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt={weatherInfo?.weather[0].description} /></div>

                </article>

                {/* Datos Adicionales */}
                <section className="bg-white/70 p-2 py-6 rounded-3xl grid grid-cols-3 justify-items-center text-lg sm:grid-cols-1 sm:items-center">

                    <article className="flex gap-2 sm:items-center">
                        <div><img src="/images/Wind.png" alt="" />
                        </div>
                        <span className="text-black ">{weatherInfo?.wind.speed} m/s </span>
                    </article >
                    <article className="flex gap-2 sm:items-center">
                        <div><img src="/images/Humidity.png" alt="" />
                        </div>
                        <span className="text-black">  {weatherInfo?.main.humidity} %</span>
                    </article  >
                    <article className="flex gap-2 sm:items-center">
                        <div><img src="/images/Pressure.png" alt="" />
                        </div>
                        <span className="text-black sm:items-center"> {weatherInfo?.main.pressure} hPa</span>
                    </article>


                </section>
            </section>
            <button className="btn bg-white text-black rounded-full text-xl" onClick={handleChangeTemp} >{buttonLabel}</button>
            {/* <div className="iconsList flex flex-wrap gap-3 justify-center">
                <img src={getIconImage("01d")} alt="" />
                <img src={getIconImage("02d")} alt="" />
                <img src={getIconImage("03d")} alt="" />
                <img src={getIconImage("04d")} alt="" />
                <img src={getIconImage("09d")} alt="" />
                <img src={getIconImage("10d")} alt="" />
                <img src={getIconImage("11d")} alt="" />
                <img src={getIconImage("13d")} alt="" />
                <img src={getIconImage("50d")} alt="" />
                 ------------------------------------
                <img src={getIconImage("01n")} alt="" />
                <img src={getIconImage("02n")} alt="" />
                <img src={getIconImage("03n")} alt="" />
                <img src={getIconImage("04n")} alt="" />
                <img src={getIconImage("09n")} alt="" />
                <img src={getIconImage("10n")} alt="" />
                <img src={getIconImage("11n")} alt="" />
                <img src={getIconImage("12n")} alt="" />
                <img src={getIconImage("50n")} alt="" />
            </div> */}
        </section>
        </main>
    )
}

export default Weather