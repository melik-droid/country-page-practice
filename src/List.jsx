import { Link } from "react-router-dom";
import { allCountries } from "./resources/CountryList";
import { useEffect, useState } from "react";

function List() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); 
      })
      .then((data) => {
        const sortedData = data.sort((a,b) => 
            a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);


  const countryList = countries.map((country, index) => (
    <div
      key={index}
      className="group grid grid-cols-4 lg:grid-cols-5 transition-all duration-200 hover:bg-blue-900 active:bg-blue-950 cursor-pointer rounded-lg"
    >
      <Link
        key={index}
        to={`/country/${country.cca3}`}
        state={{ country }}
        className="contents"
      >
        <div className="flex items-center justify-start p-4 text-[#D2D5DA] transition-colors duration-200 group-hover:text-white">
          <img
            src={country.flags.png}
            className="h-10 w-16 rounded-[0.25rem] transition-transform duration-200 group:hover-scale-105 group-active:scale-95"
            alt={`${country.name.common} flag`}
          />
        </div>
        <div className="flex items-center justify-start p-4 text-[#D2D5DA] transition-colors duration-200 ">
          {country.name.common}
        </div>
        <div className="flex items-center justify-start p-4 text-[#D2D5DA] transition-colors duration-200 ">
          {country.population.toLocaleString()}
        </div>
        <div className="flex items-center justify-start p-4 text-[#D2D5DA] transition-colors duration-200 ">
          {country.area?.toLocaleString() || "N/A"}
        </div>
        <div className="hidden lg:flex items-center justify-start p-4 text-[#D2D5DA] transition-colors duration-200 ">
          {country.region}
        </div>
      </Link>
    </div>
  ));

  return (
    <section className="col-start-4 col-span-9 row-start-2 w-full">
      
      {loading && (
        <div className="flex justify-center items-center p-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
          <span className="text-white ml-2">Loading...</span>
        </div>
      )}
      {error && <p className="text-red-500 p-4">Error: {error}</p>}

      
      {/* Header Row */}
      {!loading && !error && (
        <>
        <div className="grid grid-cols-4 lg:grid-cols-5 font-semibold border-b border-[#282B30] mb-2">
            <div className="flex items-center justify-start p-4 text-[#D2D5DA]">Flag</div>
            <div className="flex items-center justify-start p-4 text-[#D2D5DA]">Name</div>
            <div className="flex items-center justify-start p-4 text-[#D2D5DA]">Population</div>
            <div className="flex items-center justify-start p-4 text-[#D2D5DA]">Area (km²)</div>
            <div className="hidden lg:flex items-center justify-start p-4 text-[#D2D5DA]">Region</div>
        </div>

        <div className="grid">{countryList}</div>
        </>
      )}

    </section>
  );
}

export default List;
