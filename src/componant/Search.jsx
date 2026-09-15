
import { useState } from 'react';
import './style.css'
import { FaLocationDot, FaCalendarDays } from "react-icons/fa6";

const Search = ({sendCity,weather,todayda}) => {

    const [inputCity,setInputCity]=useState("");

    const handleSearch = (e)=>{
        e.preventDefault();
        sendCity(inputCity);
    };

    return (
        <>

            <div >
                <form className='form-cont form-control bg-transparent d-flex gap-0 'onSubmit={handleSearch}>
                    <input className='search bg-transparent form-control  shadow '
                        type='search'
                        placeholder='Search city'
                        value={inputCity}
                        onChange={(e)=>setInputCity(e.target.value)}
                         />

                    <button
                        type='submit'
                        className='search-btn btn btn-primary shadow'>Search</button>
                </form>
            </div>
            <div className='d-flex gap-3'>
                <div className='d-flex justify-content-center align-items-center gap-1'>
                    <FaLocationDot className='text-danger' />
                    <span className='text-white'>{weather.name} , {weather.sys.country}</span>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-1'>
                    <FaCalendarDays className='text-primary' />
                    <span className='text-white'>{todayda}</span>
                </div>

            </div>

        </>
    );
}
export default Search;