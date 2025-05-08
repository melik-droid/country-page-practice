import { Link, useLocation } from "react-router-dom";

function CountryDetail() {
    const location = useLocation();
    const country = location.state?.country;

    if (!country) {
        return (
            <div className="p-4 text-white">
                <p>Country not found</p>
                <Link to="/404" className="text-blue-400 underline">Go to 404 page</Link>
            </div>
        );
    }

    return (
        <section className="border-[#282B30] border-solid border-1 rounded-xl mx-90 h-auto w-auto px-0 pt-2 relative -mt-8 z-20 bg-[#1e1e1e]">
            <div className="flex justify-center -mt-8">
                <img src={country.flag} className="h-50 w-80 rounded-xl"/>
            </div>
            <div className="flex flex-col items-center mt-10">
                <h1 className="text-[#D2D5DA] text-4xl font-semibold">{country.name}</h1>
                
                <div className="flex flex-row my-10">
                    <div className="flex text-[#D2D5DA] items-center bg-[#282B30] rounded-xl h-12 font-semibold text-sm mx-5">
                        <div className="m-4">Population</div>
                        <div className="border-l-2 border-[#1B1D1F] h-8"></div>
                        <div className="m-4">{country.population.toLocaleString()}</div>
                    </div>

                    <div className="flex text-[#D2D5DA] items-center bg-[#282B30] rounded-xl h-12 font-semibold text-sm mx-5">
                        <div className="m-4">Area (km²)</div>
                        <div className="border-l-2 border-[#1B1D1F] h-8"></div>
                        <div className="m-4">{country.area.toLocaleString()}</div>
                    </div>
                </div>

                {/* Horizontal Line */}
                <div className="border-b-1 border-[#282B30] w-full"></div> 

                <div className="flex justify-between w-full m-4 px-6 text-[#D2D5DA] font-medium">
                    <p>Capital</p>
                    <p>{country.capital}</p>
                </div>

                {/* Horizontal Line */}
                <div className="border-b-1 border-[#282B30] w-full"></div> 

                <div className="flex justify-between w-full m-4 px-6 text-[#D2D5DA] font-medium">
                    <p>Subregion</p>
                    <p>{country.subregion}</p>
                </div>
                
                {/* Horizontal Line */}
                <div className="border-b-1 border-[#282B30] w-full"></div> 

                <div className="flex justify-between w-full m-4 px-6 text-[#D2D5DA] font-medium">
                    <p>Language</p>
                    <p>{country.languages.join(' ')}</p>
                </div>

                {/* Horizontal Line */}
                <div className="border-b-1 border-[#282B30] w-full"></div> 

                <div className="flex justify-between w-full m-4 px-6 text-[#D2D5DA] font-medium">
                    <p>Currencies</p>
                    <p>{country.currency.name}</p>
                </div>

                {/* Horizontal Line */}
                <div className="border-b-1 border-[#282B30] w-full"></div> 

                <div className="flex justify-between w-full m-4 px-6 text-[#D2D5DA] font-medium">
                    <p>Continents</p>
                    <p>{country.region}</p>
                </div>


            </div>
        </section>
    );
}

export default CountryDetail;