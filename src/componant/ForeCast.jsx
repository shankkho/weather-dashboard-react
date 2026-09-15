import './style.css'
import { SlCalender } from "react-icons/sl";
import { FaCloudSun } from "react-icons/fa6";
import { useEffect, useState } from 'react';


const ForeCast = ({ fivedaysdata }) => {

    console.log(fivedaysdata);

    const [sortfivedaysdate, setSortFiveDaysDate] = useState([]);

    useEffect(() => {

        if (!fivedaysdata?.list) return;

        const fiveDays = [];

        fivedaysdata.list.forEach((items) => {

            const currentDate = items.dt_txt.split(" ")[0];

            const existsdate = fiveDays.find(
                item => item.date === currentDate
            );

            if (!existsdate) {
                fiveDays.push({
                    date: currentDate,
                    icon: items.weather[0].icon,
                    temp: items.main.temp,
                    main: items.weather[0].main
                });
            }

        });

        setSortFiveDaysDate(fiveDays);

    }, [fivedaysdata]);

    return (
        <>

            <div className='d-flex gap-2'>
                <SlCalender className='mt-2 text-white' size={20} />
                <h3 className='text-white'>5 Day Forecast</h3>
            </div>
            <div className='d-flex'>
                {
                    sortfivedaysdate.map((items, index) =>
                        <div  key={index}  className='shadow me-3 p-2 text-white moreday d-flex flex-column justify-content-center align-items-center border'>
                            <span>{items.date}</span>
                            <img
                                src={`https://openweathermap.org/img/wn/${items.icon}@2x.png`}
                                alt={items.main}
                                width="50"
                                height="50"
                            />
                            <span>{Math.round(items.temp)}<sup>o</sup>c</span>
                            <span>{items.main}</span>
                        </div>
                    )
                }



                {/* <div className='p-2 me-3 text-white moreday d-flex flex-column justify-content-center align-items-center border shadow'>
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
                </div> */}
            </div>
        </>
    );
}
export default ForeCast;