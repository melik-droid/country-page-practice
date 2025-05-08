import { Link } from "react-router-dom"

function Header(){
    return (
        <header 
            className="flex justify-center items-center h-3/12 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${new URL('./resources/hero-image.jpg', import.meta.url).href})` }}
        >
            <Link to="/">
                <img src={new URL('./resources/Logo.svg', import.meta.url).href} alt="Logo" className="z-10" />
            </Link>
        </header>
    )
}

export default Header;