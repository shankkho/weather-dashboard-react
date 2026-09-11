import './style.css'
import { GoClockFill } from "react-icons/go";
import { FaSun } from "react-icons/fa";

const TodayWeather = () => {

    return (
        <>
          
                <div className='d-flex gap-2'>
                    <GoClockFill className='mt-2 text-primary' size={20} />
                    <h3 className='text-white'>Today Forecast</h3>
                </div>

                <div  className='ps-3 pe-5' >
                    <div className='d-flex ps-3 pt-2  justify-content-between text-white'>
                        <p>9:00AM</p>
                        <FaSun className='text-warning' />
                        <p>28oc</p>
                        <p>Sunny</p>
                    </div>
                    <div className='d-flex  ps-3  justify-content-between text-white'>
                        <p>9:00AM</p>
                        <FaSun className='text-warning' />
                        <p>28oc</p>
                        <p>Sunny</p>
                    </div>
                    <div className='d-flex  ps-3  justify-content-between text-white'>
                        <p>9:00AM</p>
                        <FaSun className='text-warning' />
                        <p>28oc</p>
                        <p>Sunny</p>
                    </div>
                    <div className='d-flex  ps-3  justify-content-between text-white'>
                        <p>9:00AM</p>
                        <FaSun className='text-warning' />
                        <p>28oc</p>
                        <p>Sunny</p>
                    </div>
                    <div className='d-flex  ps-3  justify-content-between text-white'>
                        <p>9:00AM</p>
                        <FaSun className='text-warning' />
                        <p>28oc</p>
                        <p>Sunny</p>
                    </div>

                </div>

           
        </>
    );
}
export default TodayWeather;