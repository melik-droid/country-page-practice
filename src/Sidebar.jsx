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
        <div className="size-auto col-span-3 p-0">
            
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
                        className={`transform active:scale-95 px-4 py-2 rounded-xl mr-2 mb-3 font-light text-sm text-[#D2D5DA] hover:bg-[#3a3d42] transition-colors duration-200 ${
                            activeRegions.includes(region)
                                ? 'bg-[#282B30] border-[#282B30] border-1'
                                : 'bg-transparent border-[#282B30] border-1'
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
                        className="min-w-[24px] min-h-[24px] appearance-none border-2 border-[#d2d5da] rounded-md bg-transparent checked:bg-[#4E80EE] checked:border-[#4E80EE] relative flex items-center justify-center text-white text-base font-medium checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:leading-none checked:after:font-sans"
                    />
                    <label htmlFor="un-member" className="ml-2">Member of the United Nations</label>
                </div>
               
                <div className="flex items-center my-2">
                    <input 
                        type="checkbox" 
                        id="independent"
                        className="min-w-[24px] min-h-[24px] appearance-none border-2 border-[#d2d5da] rounded-md bg-transparent checked:bg-[#4E80EE] checked:border-[#4E80EE] relative flex items-center justify-center text-white text-base font-medium checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:leading-none checked:after:font-sans"
                    />
                    <label htmlFor="independent" className="ml-2">Independent</label>
                </div>

            </section>
        </div>
    )
}

export default Sidebar
