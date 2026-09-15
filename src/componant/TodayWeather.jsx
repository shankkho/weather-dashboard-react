import './style.css'
import { GoClockFill } from "react-icons/go";
import { useEffect, useState } from 'react';

const TodayWeather = ({ weather, fiveday, todayD }) => {

    const [date, setDate] = useState("");
    const [datecheck, setdatecheck] = useState(false);
    const [todaydate, setTodayDate] = useState("");
    const [isloading, setLoading] = useState(false);
    const [error, setError] = useState("");


    useEffect(() => {

        const featchweather = async () => {

            // Agar weather ya coordinates nahi hain
            if (!weather?.coord?.lat || !weather?.coord?.lon) {
                return;
            }

            setLoading(true);
            setError("");

            try {

                const api = `https://api.openweathermap.org/data/2.5/forecast?lat=${weather.coord.lat}&lon=${weather.coord.lon}&appid=b6804eeabb0bf9ff9063793d5601d918`;

                const response = await fetch(api);
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || "Unable to fetch forecast");
                }

                setDate(data);
                fiveday(data);
                setdatecheck(true);

            } catch (error) {

                console.log("Forecast API Error:", error);

                setError(error.message);

                setDate("");
                setdatecheck(false);

            } finally {

                setLoading(false);

            }

        }

        featchweather();

    }, [weather]);


    useEffect(() => {

        if (datecheck && date?.list?.length > 0) {

            const currentDate = date.list[0].dt_txt.split(" ")[0];

            setTodayDate(currentDate);
            todayD(currentDate);

        }

    }, [date, datecheck]);


    const todayHrData = date?.list?.filter(item =>
        item.dt_txt.startsWith(todaydate)
    ) || [];


    return (
        <>

            <div className='d-flex gap-2'>
                <GoClockFill
                    className='mt-2 text-primary'
                    size={20}
                />

                <h3 className='text-white'>
                    Today Forecast
                </h3>
            </div>


            {/* Loading */}
            {isloading && (

                <div className="d-flex flex-column justify-content-center align-items-center py-5">

                    <div
                        className="spinner-border text-light"
                        role="status"
                        style={{
                            width: "2.5rem",
                            height: "2.5rem"
                        }}
                    >
                        <span className="visually-hidden">
                            Loading...
                        </span>
                    </div>

                    <p className="text-white mt-3 mb-0">
                        Loading forecast...
                    </p>

                </div>

            )}


            {/* Error */}
            {!isloading && error && (

                <div className="alert alert-danger mt-3 mb-0">
                    {error}
                </div>

            )}


            {/* Forecast Data */}
            {!isloading && !error && (

                <div className='today-weather-list ps-3 pe-5'>

                    {
                        todayHrData.map((item, index) => (

                            <div
                                key={index}
                                className='d-flex ps-3 pt-2 justify-content-between text-white'
                            >

                                <p className='weather-time'>
                                    {item.dt_txt.split(" ")[1].slice(0, 5)}
                                </p>


                                <div className='weather-icon'>

                                    <img
                                        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                        width="50"
                                        height="50"
                                        alt={item.weather[0].description}
                                    />

                                </div>


                                <p className='weather-temp'>
                                    {Math.round(item.main.temp)}
                                    <sup>o</sup>C
                                </p>


                                <p className='weather-description'>
                                    {item.weather[0].description}
                                </p>

                            </div>

                        ))

                    }

                </div>

            )}

        </>
    );
}

export default TodayWeather;