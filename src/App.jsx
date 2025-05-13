import Header from "./Header.jsx"
import CountryTable from "./CountryTable.jsx"
import CountryDetail from "./CountryDetail.jsx";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="h-screen bg-[#1E1E1E] mb-20">
      <Header />
      <Routes>
        <Route path="/" element={<CountryTable />} />
        <Route path="/country/:cca3" element={<CountryDetail />} />
      </Routes>
    </div>
  )
}

export default App
