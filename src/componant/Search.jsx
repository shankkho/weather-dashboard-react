
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

<div className="container-fluid  ">

    <div className="row align-items-center ">

        {/* Search */}
        <div className="col-12 col-lg-6">

            <form
                onSubmit={handleSearch}
                className="input-group shadow-sm"
                style={{ maxWidth: "400px" }}
            >

                <input
                    type="search"
                    className="form-control bg-transparent text-white border-secondary"
                    placeholder="City"
                    value={inputCity}
                    onChange={(e) => setInputCity(e.target.value)}
                />

                <button
                    type="submit"
                    className="btn btn-primary px-3"
                >
                    Search
                </button>

            </form>

        </div>


        {/* Location */}
        <div className="col-12 col-sm-6 col-lg-3">

            <div className="
                text-white
                d-flex
                align-items-center
                gap-2
                p-2
                px-3
                rounded-3
                bg-white
                bg-opacity-10
                border
                border-white
                border-opacity-10
            ">

                <FaLocationDot className="text-danger fs-5" />

                <div className="lh-sm">

                    <small className="text-white-50 d-block">
                        Location
                    </small>

                    <span className="text-white fw-semibold">
                        {weather?.name || "--"}
                        {weather?.sys?.country &&
                            `, ${weather.sys.country}`
                        }
                    </span>

                </div>

            </div>

        </div>


        {/* Date */}
        <div className="col-12 col-sm-6 col-lg-3">

            <div className="
                d-flex
                align-items-center
                gap-2
                p-2
                px-3
                rounded-3
                bg-white
                bg-opacity-10
                border
                border-white
                border-opacity-10
            ">

                <FaCalendarDays className="text-info fs-5" />

                <div className="lh-sm">

                    <small className="text-white-50 d-block">
                        Date
                    </small>

                    <span className="text-white fw-semibold">
                        {todayda || "--"}
                    </span>

                </div>

            </div>

        </div>

    </div>

</div>




        </>
    );
}
export default Search;