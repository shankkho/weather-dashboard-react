import './style.css'
import { GoClockFill } from "react-icons/go";
import { FaSun } from "react-icons/fa";
import { useEffect, useState } from 'react';

const TodayWeather = ({ weather,fiveday}) => {


    const [date, setDate] = useState("");
    const [datecheck, setdatecheck] = useState(false);
    const [todaydate, setTodayDate] = useState("");

    useEffect(() => {

        const featchweather = async () => {

            const api = `https://api.openweathermap.org/data/2.5/forecast?lat=${weather.coord.lat}&lon=${weather.coord.lon}&appid=b6804eeabb0bf9ff9063793d5601d918`;
            const response = await fetch(api);
            const data = await response.json();

            console.log(data);
            if (response.ok) {
                console.log(data);
                setDate(data);
                fiveday(data);
                setdatecheck(true);
            }
        }
        featchweather();
    }, [weather]);

    useEffect(() => {

        if (datecheck) {
            const currentDate = date.list[0].dt_txt.split(" ")[0];
            setTodayDate(currentDate);
        }
    }, [date]);

    const todayHrData = date?.list?.filter(items =>
        items.dt_txt.startsWith(todaydate)
    ) || [];
 




    return (
        <>

            <div className='d-flex gap-2'>
                <GoClockFill className='mt-2 text-primary' size={20} />
                <h3 className='text-white'>Today Forecast</h3>
            </div>

            <div className='today-weather-list ps-3 pe-5' >
                {
                    todayHrData.map((item, index) => (
                        <div key={index} className='d-flex  ps-3 pt-2  justify-content-between text-white'>
                            <p className='weather-time'>
                                {item.dt_txt.split(" ")[1].slice(0, 5)}
                            </p>

                            <div className='weather-icon'>
                                <FaSun className='text-warning' />
                            </div>

                            <p className='weather-temp'>
                                {Math.round(item.main.temp)}<sup>o</sup>C
                            </p>

                            <p className='weather-description'>
                                {item.weather[0].description}
                            </p>
                        </div>
                    ))
                }

            </div>


        </>
    );
}
export default TodayWeather;