import { Link } from "react-router-dom";
import { allCountries } from "./resources/CountryList"
import React from "react";

function List() {
    const countryList = allCountries.map((country, index) => (
        <div 
            key={index}
            className="group grid grid-cols-4 lg:grid-cols-5 transition-all duration-200 hover:bg-blue-900 active:bg-blue-950 cursor-pointer rounded-lg"
        >
            <Link 
                key={index}
                to={`/country/${country.id}`}
                state={{ country }}
                className="contents"
            >
                <div className="flex items-center justify-start p-4 text-[#D2D5DA] transition-colors duration-200 group-hover:text-white">
                    <img 
                        src={new URL(country.flag, import.meta.url).href} 
                        className="h-10 w-16 rounded-[0.25rem] transition-transform duration-200 group:hover-scale-105 group-active:scale-95"
                        alt={`${country.name} flag`}
                        />
                </div>
                <div className="flex items-center justify-start p-4 text-[#D2D5DA] transition-colors duration-200 ">{country.name}</div>
                <div className="flex items-center justify-start p-4 text-[#D2D5DA] transition-colors duration-200 ">{country.population.toLocaleString()}</div>
                <div className="flex items-center justify-start p-4 text-[#D2D5DA] transition-colors duration-200 ">{country.area.toLocaleString()}</div>
                <div className="hidden lg:flex items-center justify-start p-4 text-[#D2D5DA] transition-colors duration-200 ">{country.region}</div>
            </Link>
        </div>
    ));

    return (
        <section className="col-start-4 col-span-9 row-start-2 w-full">
            {/* Header Row */}
            <div className="grid grid-cols-4 lg:grid-cols-5 font-semibold border-b border-[#282B30] mb-2">
                <div className="flex items-center justify-start p-4 text-[#D2D5DA]">Flag</div>
                <div className="flex items-center justify-start p-4 text-[#D2D5DA]">Name</div>
                <div className="flex items-center justify-start p-4 text-[#D2D5DA]">Population</div>
                <div className="flex items-center justify-start p-4 text-[#D2D5DA]">Area (km²)</div>
                <div className="hidden lg:flex items-center justify-start p-4 text-[#D2D5DA]">Region</div>
            </div>

            {/* Horizontal rule */}
            {/* <div className="col-span-4 lg:col-span-5 border-b border-[#282B30] my-2"></div> */}

            <div className="grid">
                {countryList}  
            </div>
            
        </section>
    );
}

export default List;