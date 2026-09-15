import './style.css'
import { FaMountainSun } from "react-icons/fa6";
import { BsSunriseFill } from "react-icons/bs";
import { BsSunsetFill } from "react-icons/bs";



const SunRiseSet = ({ weather }) => {

    const sunrise = new Date(weather.sys.sunrise * 1000);
    const sunset = new Date(weather.sys.sunset * 1000);

    const sunriseTime = sunrise.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });

    const sunsetTime = sunset.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });
    return (
        <>
            <div className='d-flex gap-2 p-3'>
                <FaMountainSun className='sun mt-2' />
                <h3 className='text-white'>Sunrise & Sunset</h3>
            </div>
            <div className='d-flex justify-content-center '>
                <div className='sunrisediv d-flex  justify-content-start align-items-center gap-2 p-4 pt-0 '>
                    <BsSunriseFill className=' sunrise' size={30} />
                    <div className='d-flex flex-column ms-2'>
                        <span className='text-white'>Sunrise</span>
                        <span className='text-white'>{sunriseTime}</span>
                    </div>
                </div>
                <div className=' d-flex justify-content-start align-items-center gap-2 p-4 pt-0'>
                    <BsSunsetFill className=' sunset' size={30} />
                    <div className='d-flex flex-column ms-2'>
                        <span className='text-white'>Sunrise</span>
                        <span className='text-white'>{sunsetTime}</span>
                    </div>
                </div>

            </div>


        </>
    );

}
export default SunRiseSet;