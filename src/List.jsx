import { Link } from "react-router-dom";
import { allCountries } from "./resources/CountryList"
import React from "react";

function List() {
    const countryList = allCountries.map((country, index) => (
        <Link 
            key={index}
            to={`/country/${country.id}`}
            state={{ country }}
            className="contents hover:bg-blue-950 cursor-pointer"
        >
            <div className="flex items-center justify-start p-[10px] text-[#D2D5DA]"><img src={new URL(country.flag, import.meta.url).href} className="h-10 w-16 rounded-[0.25rem]"/></div>
            <div className="flex items-center justify-start p-[10px] text-[#D2D5DA]">{country.name}</div>
            <div className="flex items-center justify-start p-[10px] text-[#D2D5DA]">{country.population.toLocaleString()}</div>
            <div className="flex items-center justify-start p-[10px] text-[#D2D5DA]">{country.area.toLocaleString()}</div>
            <div className="flex items-center justify-start p-[10px] text-[#D2D5DA]">{country.region}</div>
        </Link>
    ));

    return (
        <section className="col-start-4 col-span-9 row-start-2 grid grid-cols-5 w-full">
            {/* Header Row */}
            <div className="flex items-center justify-start p-[10px] text-[#D2D5DA]">Flag</div>
            <div className="flex items-center justify-start p-[10px] text-[#D2D5DA]">Name</div>
            <div className="flex items-center justify-start p-[10px] text-[#D2D5DA]">Population</div>
            <div className="flex items-center justify-start p-[10px] text-[#D2D5DA]">Area (km²)</div>
            <div className="flex items-center justify-start p-[10px] text-[#D2D5DA]">Region</div>
            
            {/* Horizontal rule */}
            <div className="col-span-5 border-b border-[#282B30] my-2"></div>

            {countryList}  
            
        </section>
    );
}

export default List;