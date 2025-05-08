import { useState } from "react";

function Sidebar(){

    const [activeRegions, setActiveRegions] = useState([]);

    const regions = ['Americas', 'Antartic', 'Africa', 'Asia', 'Europe', 'Oceania'];

    const toggleRegion = (region) => {
        setActiveRegions((prev) =>
            prev.includes(region)
                ? prev.filter((r) => r !== region)
                : [...prev, region]
        );
    }

    return (
        <div className="size-auto col-span-3 p-4">
            
            <label className="block text-[#D2D5DA] text-sm font-bold" htmlFor="sort-option">Sort by</label>
            <select id="sort-option" className="text-sm font-semibold border-[#6C727F] border-1 rounded-2xl mr-6 w-full py-3 px-2 text-[#d2d5da] mt-3 focus:outline-none">
                <option value="population">Population</option>
                <option value="name">Name</option>
                <option value="area">Area</option>
                <option value="region">Region</option>
            </select>

            <label className="block text-[#D2D5DA] text-sm font-bold mt-6" htmlFor="region">Region</label>
            <section id="region" className="flex flex-wrap mt-2">
                {regions.map((region) => (
                    <button
                        key={region}
                        onClick={() => toggleRegion(region)}
                        className={`px-4 py-2 rounded-xl border-0 mr-2 mb-3 font-medium text-sm ${
                            activeRegions.includes(region)
                                ? 'bg-[#282B30] text-[#D2D5DA]'
                                : 'bg-transparent text-[#d2d5da] border-[#d2d5da]'
                        }`}
                    >
                        {region}
                    </button>
                ))}
            </section>

            <label className="block text-[#d2d5da] text-sm font-bold mt-6" htmlFor="status">Status</label>
            <section id="status" className="text-[#d2d5da] mt-2">
                
                <div className="flex items-center my-2">
                    <input 
                        type="checkbox" 
                        id="un-member"
                        className="w-5 h-5 appearance-none border-2 border-[#d2d5da] rounded-md checked:bg-[#4E80EE] checked:border-[#4E80EE] relative focus:outline-none checked:after:content-['✓'] checked:after:text-white checked:after:absolute checked:after:top-[-3px] checked:after:left-[2px] checked:after:text-sm"
                    />
                    <label htmlFor="un-member" className="ml-2">Member of the United Nations</label>
                </div>
               
                <div className="flex items-center my-2">
                    <input 
                        type="checkbox" 
                        id="independent"
                        className="w-5 h-5 appearance-none border-2 border-[#d2d5da] rounded-md checked:bg-[#4E80EE] checked:border-[#4E80EE] relative focus:outline-none checked:after:content-['✓'] checked:after:text-white checked:after:absolute checked:after:top-[-3px] checked:after:left-[2px] checked:after:text-sm"
                    />
                    <label htmlFor="independent" className="ml-2">Independent</label>
                </div>

            </section>
        </div>
    )
}

export default Sidebar

