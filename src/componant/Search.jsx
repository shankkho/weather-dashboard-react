
import { useState } from 'react';
import './style.css'
import { FaLocationDot, FaCalendarDays } from "react-icons/fa6";

const Search = ({sendCity}) => {

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
                    <span className='text-white'>Nagpur,India</span>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-1'>
                    <FaCalendarDays className='text-primary' />
                    <span className='text-white'>Mon,8 sept 2026</span>
                </div>

            </div>

        </>
    );
}
export default Search;