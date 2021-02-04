import React, { FC } from 'react';
import { WeatherData } from '../store/types';

interface WeatherProps {
    weatherData: WeatherData
}

const Weather:FC<WeatherProps> = ({ weatherData }) => {

    return (
        <div>
            {`Miasto: ${weatherData.name}, Temperatura: ${weatherData.main.temp}`}
        </div>
    )
}

export default Weather
