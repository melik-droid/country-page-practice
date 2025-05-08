import Sidebar from "./Sidebar"
import Search from "./SearchBar"
import List from "./List"

function CountryTable(){
    return(
        <section className="border-[#282B30] border-solid border-1 rounded-xl mx-8 h-auto w-auto md:grid md:grid-cols-12 md:grid-rows-[4rem_auto] md:gap-8 px-6 pt-2 pb-6 relative -mt-8 z-20 bg-[#1E1E1E] sm:flex sm:flex-col">
            <Search />
            <Sidebar />
            <List />
        </section>
    )
}

export default CountryTable