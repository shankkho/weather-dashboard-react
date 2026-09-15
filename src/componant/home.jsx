
import './style.css';
import CurrentWeather from './CurrentWeather';
import TodayWeather from './TodayWeather';
import SunRiseSet from './SunRiseSet';
import ForeCast from './ForeCast';
import Search from './Search';
import { useEffect, useState } from 'react';

const Home = () => {

    const [apifetch, isApifetch] = useState(false);

    const [inputCity, setInputCity] = useState("");

    const [allvalues, setvalues] = useState({
        FirstCity: "",
        errorData: "",


    });

    const [weather, setWeather] = useState("");
    const [fivedaysdata, setFiveDaysData] = useState([]);
    const [todayda, settodayda] = useState("");


    useEffect(() => {

        const fetchWeather = async () => {

            if (!allvalues.FirstCity) return;

            const api = `https://api.openweathermap.org/data/2.5/weather?q=${allvalues.FirstCity}&units=metric&appid=b6804eeabb0bf9ff9063793d5601d918`
            const response = await fetch(api);
            const data = await response.json();


            if (response.ok) {
                setWeather(data);
                isApifetch(true)

            }
            else {
                setvalues({ ...allvalues, errorData: data.message });

            }

        }
        fetchWeather();
    }, [allvalues.FirstCity]);


    const enterCityName = (e) => {
        e.preventDefault();
        setvalues({ ...allvalues, FirstCity: inputCity })
    }

    const getCity = (cityName) => {
        setvalues({ ...allvalues, FirstCity: cityName })
    }
    const getfiveday = (days) => {
        setFiveDaysData(days);
        console.log("five days data");
    }
    const getDate = (todayd) => {
        settodayda(todayd);
    }

    return (

        <>
            {
                (
                    !apifetch ?

                        // search----------------

                        <div className="search-cont container-fluid min-vh-100 d-flex justify-content-center align-items-center ">

                            <div className="col-11 col-sm-9 col-md-7 col-lg-5 col-xl-4">

                                <div className="card border-0 shadow-lg rounded-4 bg-white bg-opacity-10 text-white">

                                    <div className="card-body p-4 p-md-5 text-center">

                                        {/* Weather Icon */}
                                        <div className="mb-4">

                                            <div
                                                className="bg-white bg-opacity-10 rounded-circle d-inline-flex justify-content-center align-items-center shadow"
                                                style={{
                                                    width: "100px",
                                                    height: "100px"
                                                }}
                                            >
                                                <span style={{ fontSize: "50px" }}>
                                                    🌤️
                                                </span>
                                            </div>

                                        </div>


                                        {/* Heading */}
                                        <h1 className="fw-bold mb-2">
                                            Check Your Weather
                                        </h1>

                                        <p className="text-white-50 mb-4">
                                            Search for a city and get the latest weather
                                            information instantly.
                                        </p>


                                        {/* Search */}
                                        <form onSubmit={enterCityName}>

                                            <div className="input-group input-group-lg">

                                                <input
                                                    type="search"
                                                    className="form-control bg-white bg-opacity-75 border-0 shadow-none"
                                                    placeholder="Enter city name..."
                                                    value={inputCity}
                                                    onChange={(e) =>
                                                        setInputCity(e.target.value)
                                                    }
                                                />

                                                <button
                                                    type="submit"
                                                    className="btn btn-light px-4 fw-semibold"
                                                >
                                                    Search
                                                </button>

                                            </div>

                                        </form>


                                        {/* Error */}
                                        {allvalues.errorData && (
                                            <div className="alert alert-danger py-2 mt-3 mb-0 small">
                                                {allvalues.errorData}
                                            </div>
                                        )}


                                        {/* Bottom Text */}
                                        <p className="text-white-50 small mt-4 mb-0">
                                            🌍 Get weather information for any city
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                        // search end----------------

                        :

                        <div className='main-cont w-100'>


                            <div className='ms-2 me-3 child-cont '>
                                <Search
                                    sendCity={getCity}
                                    weather={weather}
                                    todayda={todayda}
                                />
                            </div>


                            <div className='row g-3 p-3 pt-0'>


                                <div className='col-12 col-lg-8 col-md-8'>
                                    <div className='weather-card h-100'>
                                        <CurrentWeather weather={weather} />
                                    </div>
                                </div>


                                <div className='col-12 col-lg-4 col-md-4'>

                                    <div className='weather-card'>
                                        <TodayWeather
                                            weather={weather}
                                            todayD={getDate}
                                            fiveday={getfiveday}
                                        />
                                    </div>

                                    <div className='weather-card mt-3'>
                                        <SunRiseSet weather={weather} />
                                    </div>

                                </div>

                            </div>


                            <div className='px-3 pb-3'>
                                <div className='forecast-main p-3'>
                                    <ForeCast fivedaysdata={fivedaysdata} />
                                </div>
                            </div>

                        </div>



                )
            }



        </>

    );
}
export default Home;