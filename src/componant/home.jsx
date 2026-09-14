
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

    const [allvalues,setvalues] = useState({
        FirstCity : "",
        errorData :"",
        
    });

    const [weather,setWeather] = useState("");

    

    useEffect(()=>{

        const fetchWeather = async()=>{

            if(!allvalues.FirstCity) return;

            const api = `https://api.openweathermap.org/data/2.5/weather?q=${allvalues.FirstCity}&units=metric&appid=b6804eeabb0bf9ff9063793d5601d918`
            const response = await fetch (api);
            const data = await response.json();
            console.log(data)

            if(response.ok){
                // console.log(data)
                setWeather(data);
                isApifetch(true)
                console.log(weather);
            }
            else{
                setvalues({...allvalues,errorData: data.message});
                
            }

        }
        fetchWeather();
    },[allvalues.FirstCity]);


    const enterCityName = (e) =>{
        e.preventDefault();
        setvalues({...allvalues,FirstCity: inputCity})
    }

    const getCity = (cityName)=>{
        setvalues({...allvalues,FirstCity:cityName})
    }

    return (

        <>
            {
                (
                    !apifetch ?

                        // search----------------

                        <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">

                            <div className="col-11 col-sm-8 col-md-6 col-lg-5">

                                <div className="bg-white shadow rounded-4 p-4 p-md-5 text-center">
                               
                                    <h1 className="fw-bold mb-2">
                                        Check Your Weather 🌤️
                                    </h1>

                                    <p className="text-secondary mb-4">
                                        Enter your city name and get the latest weather
                                        information instantly.
                                    </p>

                                    <form className="d-flex gap-2" onSubmit={enterCityName}>

                                        <input
                                            type="search"
                                            className="form-control form-control-lg"
                                            placeholder="Search city..."
                                            value={inputCity}
                                            onChange={(e)=>setInputCity(e.target.value)}
                                        />

                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg px-4"
                                        >
                                            Search
                                        </button>

                                    </form>

                                    <p className="text-danger small mt-3 mb-0">
                                        {allvalues.errorData}
                                    </p>

                                </div>

                            </div>

                        </div>

                        // search end----------------

                        :

                        <div className=' main-cont w-100 h-100vh '>

                            {/* search bar */}
                            <div className='child-cont d-flex justify-content-between p-3 pt-1 pb-2 '>
                                <Search sendCity={getCity}/>
                            </div>

                            <div className='row p-2 pb-0'>

                                {/* current weather */}
                                <div className='col-12 col-lg-8 col-md-8 pb-0' >
                                    <CurrentWeather weather = {weather} />
                                </div>

                                <div className='col-12 col-lg-4 col-md-4 ps-0 TodayWeather'>

                                    {/* today brodcast */}
                                    <div className='shadow p-2 TodayWeather'>
                                        <TodayWeather />
                                    </div>

                                    {/* sunrise and sunset */}
                                    <div className=' mt-3 shadow SunRiseSet'>
                                        <SunRiseSet />
                                    </div>
                                </div>

                            </div>

                            {/* five day forecast */}
                            <div className='p-2'>
                                <div className=' forecast-main p-2 '>
                                    <ForeCast />
                                </div>
                            </div>

                        </div>

                )
            }



        </>

    );
}
export default Home;