import { Outlet } from 'react-router-dom'
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ year, barIcon, timesIcon, handleMobileMenu }) => {
    return (
        <div>
            <Header barIcon={barIcon} timesIcon={timesIcon} handleMobileMenu={handleMobileMenu} />
            <Outlet />
            <Footer year={year} />
        </div>
    )
}

export default Layout
