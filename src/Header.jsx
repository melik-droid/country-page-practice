import { Link } from "react-router-dom"

function Header(){
    return (
        <header 
            className="flex justify-center items-center h-3/12 bg-cover bg-center relative"
            style={{ backgroundImage: "url('/src/resources/hero-image.jpg')" }}
        >
            <Link to="/">
                <img src="/src/resources/Logo.svg" alt="Logo" className="z-10" />
            </Link>
        </header>
    )
}

export default Header;