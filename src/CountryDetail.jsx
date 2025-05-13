import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CountryDetail() {
    const { cca3 } = useParams();
    const [country, setCountry] = useState(null);
    const [error, setError] = useState(null);
    const [neighbourCountries, setNeighbourCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://restcountries.com/v3.1/alpha/${cca3}`)
            .then(res => {
                if(!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then(data => {
                setCountry(data[0]);
                setTimeout(() => setIsLoading(false), 200); 
            })
            .catch(err => {
                setError(err.message);
                setTimeout(() => setIsLoading(false), 200); 
            });
    },[cca3])

    useEffect(() => {
        if(country?.borders?.length > 0) {
            Promise.all(
                country.borders.map(code => 
                    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
                        .then(res => res.json())
                )
            ).then(results => {
                const neighbours = results.map(r => r[0]);
                setNeighbourCountries(neighbours);
            });
        } else {
            setNeighbourCountries([]);
        }
    },[country]);

    if(error) return <p className="text-red-500">Error: {error.message}</p>

    if (isLoading) {
        return (
            <div className="p-4 text-white flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
            </div>
        );
    }

    return (
        <section className="border-[#282B30] border-solid border-1 rounded-xl mx-[10%] lg:mx-[20%] md:mx-[15%] h-auto w-auto px-0 pt-2 relative -mt-8 z-20 bg-[#1e1e1e]">
            <div className="flex justify-center -mt-8 mb">
                <img src={country.flags.png} className="h-50 w-80 rounded-xl"/>
            </div>
            <div className="flex flex-col items-center mt-10">
                <h1 className="text-[#D2D5DA] text-4xl font-semibold">{country.name.common}</h1>
                <h2 className="text-[#D2D5DA] text-sm mt-2 font-light">{country.name.official}</h2>
                <div className="flex flex-row my-10">
                    <div className="flex text-[#D2D5DA] items-center bg-[#282B30] rounded-xl h-12 font-semibold text-sm mx-5">
                        <div className="m-4">Population</div>
                        <div className="border-l-2 border-[#1B1D1F] h-8"></div>
                        <div className="m-4">{country.population.toLocaleString()}</div>
                    </div>

                    <div className="flex text-[#D2D5DA] items-center bg-[#282B30] rounded-xl h-12 font-semibold text-sm mx-5">
                        <div className="m-4">Area (km²)</div>
                        <div className="border-l-2 border-[#1B1D1F] h-8"></div>
                        <div className="m-4">{country.area?.toLocaleString()}</div>
                    </div>
                </div>

                {/* Horizontal Line */}
                <div className="border-b-1 border-[#282B30] w-full"></div> 

                <div className="flex justify-between w-full m-4 px-6 text-[#D2D5DA] font-medium">
                    <p>Capital</p>
                    <p>{country.capital?.join(',') || "N/A"}</p>
                </div>

                {/* Horizontal Line */}
                <div className="border-b-1 border-[#282B30] w-full"></div> 

                <div className="flex justify-between w-full m-4 px-6 text-[#D2D5DA] font-medium">
                    <p>Subregion</p>
                    <p>{country.subregion || "N/A"}</p>
                </div>
                
                {/* Horizontal Line */}
                <div className="border-b-1 border-[#282B30] w-full"></div> 

                <div className="flex justify-between w-full m-4 px-6 text-[#D2D5DA] font-medium">
                    <p>Language</p>
                    <p>{Object.values(country.languages || {}).slice(0,3).join(',') || "N/A"}</p>
                </div>

                {/* Horizontal Line */}
                <div className="border-b-1 border-[#282B30] w-full"></div> 

                <div className="flex justify-between w-full m-4 px-6 text-[#D2D5DA] font-medium">
                    <p>Currencies</p>
                    <p>{Object.values(country.currencies || {}).map(c => c.name).join(',') || "N/A"}</p>
                </div>

                {/* Horizontal Line */}
                <div className="border-b-1 border-[#282B30] w-full"></div> 

                <div className="flex justify-between w-full m-4 px-6 text-[#D2D5DA] font-medium mb">
                    <p>Continents</p>
                    <p>{country.region || "N/A"}</p>
                </div>

                {/* Horizontal Line */}
                <div className="border-b-1 border-[#282B30] w-full"></div> 

                <div className="m-4 flex flex-col items-start text-[#D2D5DA] w-full px-6">
                    <p>Neighbouring Continents</p>
                    <div className="flex flex-wrap gap-4 mt-2">
                        {neighbourCountries.length > 0 ? (
                            neighbourCountries.map(neighbour => (
                                <Link
                                    key={neighbour.cca3}
                                    to={`/country/${neighbour.cca3}`}
                                    className="flex flex-col items-center p-2 bg-[#282b30] rounded-lg hover:bg-[#3a3d42] transition-colors duration-200 w-28"
                                >
                                    <img 
                                        src={neighbour.flags.png}    
                                        alt={neighbour.name.common}
                                        className="rounded w-full h-auto"
                                    />
                                    <p className="text-xs mt-2 text-center text-[#d1d5da]">{neighbour.name.common}</p>
                                </Link>
                            ))
                        ) : (
                            <p className="text-sm text-[#d1d5da]">No Boredering countries</p>
                        )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CountryDetail;