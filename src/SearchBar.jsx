import { useState } from "react";
import { allCountries } from "./resources/CountryList"

function Search(){
    const [count, setCount] = useState(allCountries.length)

    return(
        <section className="mt-4 md:col-span-12 md:row-start-1 md:flex md:items-center md:justify-between">
            <p className="text-[#D2D5DA] font-semibold mb-6">Found {count} countries</p>

            <form className="flex bg-[#282B30] font-medium rounded-2xl md:mr-6 md:w-88 py-3 px-2 mb-6">
                <input 
                    type="image"
                    src={new URL('./resources/Search.svg', import.meta.url).href}
                    alt="search icon"
                    onClick={() => setCount(prevCount => prevCount+1)}
                    className="size-6 cursor-pointer"
                />
                <input 
                    className="text-[#D2D5DA] mx-3 w-full focus:outline-none"
                    type="text" 
                    placeholder="Search by Name, Region, Subregion"
                />
            </form>
        </section>
    )
}

export default Search