import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from 'react-icons/fa'
import { NavLink } from "react-router-dom";
import { UserContext } from '../UserContext';




export default function UserNavbar() {

    // nav is starting off false
    const [nav, setNav] = useState(false)
    // so when user clicks the hamburger button, it goes from false(!nav) to true(nav)
    const handleClick = () => setNav(!nav)

    const {user} = useContext(UserContext);

    return(
        <nav className="flex justify-between fixed max-w-full items-center nav container sm:lg-container">
                <a href="/home" className='flex items-center gap-2 py-3'>
                    <img className='size-11 sm:size-12' src="/img/logo/logo.png" alt="LOGO" />
                    <h1 className='text-[#e7e7e7d1] text-3xl logo font-["merriweather"] '>GIPAN</h1>
                </a>
                <ul className='hidden  lg:flex ml-20'>
                    <Link to='/home'><li className='hover:text-[#91be55]'>Home</li></Link>
                </ul>
                {/* Hamburger or Close Icon */}
                <div className=' lg:hidden z-10 text-[#e7e7e7d1]' onClick={handleClick}>
                    {nav ? <FaTimes size={25} color='#e7e7e7d1' /> : <RxHamburgerMenu size={25}/>}
                </div>
                {/* Mobile Menu */}
                <ul className={`${
                    nav
                        ? 'text-white opacity-100 transform translate-x-0'
                        : 'opacity-0 transform -translate-y-full'
                    } transition-transform absolute top-0 left-0 w-full h-screen bg-[#212121] gap-y-2 flex flex-col justify-center items-center text-xl font-['PT Sans Narrow']`} onClick={() => setNav(false)}>
                    <Link to='/home'><li className='hover:text-[#91be55]'>Home</li></Link>
                    <Link to='/login'><li className='hover:text-[#91be55]'>Login</li></Link>
                    <Link to='/register'><li className='hover:text-[#91be55]'>Register</li></Link>
                </ul>
                <div className='hidden lg:block'>
                    <ul className='hidden  lg:flex gap-10'>
                        <Link to=''><li className='flex items-center gap-2 hover:text-[#91be55]'><ion-icon name="person-outline"></ion-icon>{!!user && (
                            <div>
                                {user.name}
                            </div>
                        )}
                        </li></Link>
                        <Link to='/portal'><li className='hover:text-[#91be55]'>Logout</li></Link>
                    </ul>
                </div>
        </nav>
    );
}