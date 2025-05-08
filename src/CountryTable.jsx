import Sidebar from "./Sidebar"
import Search from "./SearchBar"
import List from "./List"

function CountryTable(){
    return(
        <section className="border-[#282B30] border-solid border-1 rounded-xl mx-8 h-auto w-auto grid grid-cols-12 grid-rows-[4rem_auto] gap-8 px-6 pt-2 pb-6 relative -mt-8 z-20 bg-[#1E1E1E]">
            <Search />
            <Sidebar />
            <List />
        </section>
    )
}

export default CountryTable