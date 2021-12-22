import { Link } from "react-router-dom"
import { FaBars, FaTimes, FaPlusSquare } from 'react-icons/fa'

const Header = ({ barIcon, timesIcon, handleMobileMenu }) => {
    return (
        <div className="Header">
            <div className="Header-Inner">
                <Link to="/" className="brand-link">BOOK MANAGER V1</Link>
                <Link to="create" className="plus-link" title="click to add new book"><FaPlusSquare /></Link>
                    <nav className='nav'>
                        <Link to="/" className="links" onClick={handleMobileMenu}>Home</Link>
                        <Link to="about" className="links" onClick={handleMobileMenu}>About</Link>
                    </nav>
                <button className="barTimes" onClick={handleMobileMenu}>
                    {barIcon && <FaBars />}
                    {timesIcon && <FaTimes />}
                </button>
            </div>
        </div>
    )
}

export default Header
