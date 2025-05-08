import { useState } from "react";
import { allCountries } from "./resources/CountryList"

function Search(){
    const [count, setCount] = useState(allCountries.length)

    return(
        <section className="mt-4 col-span-12 row-start-1 flex items-center justify-between">
            <p className="text-[#D2D5DA] font-semibold">Found {count} countries</p>

            <form className="flex bg-[#282B30] font-medium rounded-2xl mr-6 w-88 py-3 px-2">
                <input 
                    type="image"
                    src="/src/resources/Search.svg"
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