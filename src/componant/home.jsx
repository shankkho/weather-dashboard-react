
import { useEffect } from 'react';
import { FaLocationDot, FaCalendarDays } from "react-icons/fa6";
import './style.css';
import CurrentWeather from './CurrentWeather';
import TodayWeather from './TodayWeather';
import SunRiseSet from './SunRiseSet';
import ForeCast from './ForeCast';

const Home = () => {


    useEffect(() => {
        const weatherData = async () => {

            const api = "https://api.openweathermap.org/data/2.5/weather?q=nagpur&appid=b6804eeabb0bf9ff9063793d5601d918";
            const response = await fetch(api);
            const data = await response.json();
            console.log(data);

        }

        weatherData();
    }, []);





    return (

        <>
            <div className='w-100 h-100vh'>
                <div className='child-cont d-flex justify-content-between p-3 '>
                    <div >
                        <form className='form-cont form-control bg-transparent d-flex gap-0'>
                            <input className='search bg-transparent form-control  shadow ' type='search' placeholder='Search city' />
                            <button className='search-btn btn btn-primary shadow'>Search</button>
                        </form>
                    </div>
                    <div className='d-flex gap-3'>
                        <div className='d-flex justify-content-center align-items-center gap-1'>
                            <FaLocationDot className='text-danger' />
                            <span className='text-white'>Nagpur,India</span>
                        </div>
                        <div className='d-flex justify-content-center align-items-center gap-1'>
                            <FaCalendarDays className='text-primary' />
                            <span className='text-white'>Mon,8 sept 2026</span>
                        </div>

                    </div>
                </div>

                <div className='row  bg-primary '>

                    <div className='col-12 col-lg-8 col-md-8  ' >
                        <CurrentWeather />
                    </div>

                    <div className='col-12 col-lg-4 col-md-4  '>
                        <div className='bg-secondary'>
                            <TodayWeather />
                        </div>

                        <div className='bg-white'>
                            <SunRiseSet />
                        </div>
                    </div>

                </div>


                <div>
                    <ForeCast />
                </div>
            </div>
        </>


    );
}
export default Home;