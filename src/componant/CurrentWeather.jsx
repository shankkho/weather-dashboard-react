
import './style.css';
import { FaLocationDot, FaSun, FaDroplet, FaWind, FaCloud } from "react-icons/fa6";
import { MdVisibility } from "react-icons/md";
import { LuClock5 } from "react-icons/lu";


const CurrentWeather = ({weather}) => {


    

    return (

        <div className='p-2 text-white   shadow'>

            <div className=' d-flex justify-content-between '>

                <div className=' d-flex gap-2'>
                    <div>
                        <h1><FaLocationDot className='' /> </h1>
                    </div>
                    <div className='mt-1'>
                        <h2 className=''>{weather.name}</h2>
                        <p>STATE,{weather.sys.country}</p>
                    </div>
                </div>

                <div className='d-flex justify-content-center align-items-center '>
                    {/* <FaSun className='text-warning fs-2' /> */}
                     <img   className=''
                                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                width="50"
                                height="50"
                            />
                    <div>
                        <h6 className='mt-3'>{weather.weather[0].description}</h6>
                        <p>Enjoy the weather</p>
                    </div>
                </div>

            </div>

            <div className='ps-5 pt-2 pb-2'>
                <div className='d-flex gap-4'>

                    
                    <img   className=''
                                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                width="150"
                                height="150"
                            />

                    <div>
                        <h1 className='current-tem'>{Math.round( weather.main.temp)}<sup>o</sup>C</h1>
                        <h3>{weather.weather[0].main}</h3>
                        <p>Feels like {Math.round(weather.main.feels_like)}<sup>o</sup>c</p>
                    </div>

                </div>
            </div>

            <div className='ps-2 pe-2 '>
                <div className=' extra-details p-3 d-flex justify-content-between border '>
                    <div className=''>
                        <FaDroplet size={25} />
                        <p className='mb-0  '>Humidity</p>
                        <h5 className='mt-2'>{weather.main.humidity}%</h5>
                    </div>
                    <div>
                        <FaWind size={25} />
                        <p className='mb-0  '>Wind Speed</p>
                        <h5 className='mt-2'>{(weather.wind.speed * 3.6).toFixed(1)} km/h</h5>
                    </div>
                    <div>
                        <LuClock5 size={25} />
                        <p className='mb-0  '>Pressure</p>
                        <h5 className='mt-2'>{weather.main.pressure} hPa</h5>
                    </div>
                    <div>
                        <MdVisibility size={25} />
                        <p className='mb-0  '>Visibility</p>
                        <h5 className='mt-2'>6{weather.sys.visibility} m</h5>
                    </div>
                    <div>
                        <FaCloud size={25} />
                        <p className='mb-0  '>Cloudiness</p>
                        <h5 className='mt-2'>{weather.clouds.all}%</h5>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default CurrentWeather;