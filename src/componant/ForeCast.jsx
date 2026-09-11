import './style.css'
import { SlCalender } from "react-icons/sl";
import { FaCloudSun } from "react-icons/fa6";


const ForeCast = () => {

    return (
        <>

            <div className='d-flex gap-2'>
                <SlCalender className='mt-2 text-white' size={20} />
                <h3 className='text-white'>5 Day Forecast</h3>
            </div>
            <div className='d-flex'>
                <div className='shadow me-3 p-2 text-white moreday d-flex flex-column justify-content-center align-items-center border'>
                    <span>Mon, 8 Sep</span>
                    <FaCloudSun />
                    <span>32o / 24o</span>
                    <span>partly Cloudy</span>
                </div>
                <div className='p-2 me-3 text-white moreday d-flex flex-column justify-content-center align-items-center border shadow'>
                    <span>Mon, 8 Sep</span>
                    <FaCloudSun />
                    <span>32o / 24o</span>
                    <span>partly Cloudy</span>
                </div>
                <div className='p-2 me-3 text-white moreday d-flex flex-column justify-content-center align-items-center border shadow'>
                    <span>Mon, 8 Sep</span>
                    <FaCloudSun />
                    <span>32o / 24o</span>
                    <span>partly Cloudy</span>
                </div>
                <div className='p-2 me-3 text-white d-flex moreday flex-column justify-content-center align-items-center border shadow'>
                    <span>Mon, 8 Sep</span>
                    <FaCloudSun />
                    <span>32o / 24o</span>
                    <span>partly Cloudy</span>
                </div>
                <div className='p-2 me-3 text-white d-flex moreday flex-column justify-content-center align-items-center border shadow'>
                    <span>Mon, 8 Sep</span>
                    <FaCloudSun />
                    <span>32o / 24o</span>
                    <span>partly Cloudy</span>
                </div>
            </div>
        </>
    );
}
export default ForeCast;