//  WiBarometer,WiDayFog,wiCloud
import './style.css';
import { FaLocationDot, FaSun, FaDroplet, FaWind, FaCloud } from "react-icons/fa6";
import { MdVisibility } from "react-icons/md";
import { LuClock5 } from "react-icons/lu";

const CurrentWeather = () => {

    return (
        <div className='p-2 text-white   shadow'>

            <div className=' d-flex justify-content-between '>

                <div className=' d-flex gap-2'>
                    <div>
                        <h1><FaLocationDot className='' /> </h1>
                    </div>
                    <div className='mt-1'>
                        <h2 className=''>Nagpur</h2>
                        <p>Maharashtra, India</p>
                    </div>
                </div>

                <div className='d-flex justify-content-center align-items-center gap-'>
                    <FaSun className='text-warning fs-2' />
                    <div>
                        <h6 className='mt-3'>Good Day</h6>
                        <p>Enjoy the weather</p>
                    </div>
                </div>

            </div>

            <div className='ps-5 pt-2 pb-2'>
                <div className='d-flex gap-4'>

                    <FaSun className='text-warning ' size={80} />

                    <div>
                        <h1 className='current-tem'>32<sup>o</sup>C</h1>
                        <h3>Partly Cloudy</h3>
                        <p>Feels like 34<sup>o</sup>c</p>
                    </div>

                </div>
            </div>

            <div className='ps-2 pe-2 '>
                <div className=' extra-details p-3 d-flex justify-content-between border '>
                    <div className=''>
                        <FaDroplet size={25} />
                        <p className='mb-0  '>Hunidity</p>
                        <h5 className='mt-2'>62%</h5>
                    </div>
                    <div>
                        <FaWind size={25} />
                        <p className='mb-0  '>Wind Speed</p>
                        <h5 className='mt-2'>62%</h5>
                    </div>
                    <div>
                        <LuClock5 size={25} />
                        <p className='mb-0  '>Pressure</p>
                        <h5 className='mt-2'>62%</h5>
                    </div>
                    <div>
                        <MdVisibility size={25} />
                        <p className='mb-0  '>Visibility</p>
                        <h5 className='mt-2'>62%</h5>
                    </div>
                    <div>
                        <FaCloud size={25} />
                        <p className='mb-0  '>Cloudiness</p>
                        <h5 className='mt-2'>62%</h5>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default CurrentWeather;