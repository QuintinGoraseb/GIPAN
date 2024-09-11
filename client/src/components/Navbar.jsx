import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from 'react-icons/fa'
import { NavLink } from "react-router-dom";




export default function Navbar() {

    // nav is starting off false
    const [nav, setNav] = useState(false)
    // so when user clicks the hamburger button, it goes from false(!nav) to true(nav)
    const handleClick = () => setNav(!nav)

    return(
        <nav className="flex justify-between fixed max-w-full items-center nav container sm:lg-container">
                <a href="/home" className='flex items-center gap-2 py-3'>
                    <img className='size-11 sm:size-12' src="/img/logo/logo.png" alt="LOGO" />
                    <h1 className='text-[#e7e7e7d1] text-3xl logo font-["merriweather"] '>GIPAN</h1>
                </a>
                <ul className='hidden  lg:flex gap-6'>
                    <Link to='/home'><li className='hover:text-[#91be55]'>Home</li></Link>
                    <Link to='/about'><li className='hover:text-[#91be55]'>About</li></Link>
                    <Link to='/features'><li className='hover:text-[#91be55]'>Features</li></Link>
                    <Link to='/products'><li className='hover:text-[#91be55]'>Products</li></Link>
                    <NavLink to='/location'><li className='hover:text-[#91be55]'>Locations</li></NavLink>
                    <Link to='/contact'><li className='hover:text-[#91be55]'>Contact Us</li></Link>
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
                    <Link to='/'><li className='hover:text-[#91be55]'>Home</li></Link>
                    <Link to='/about'><li className='hover:text-[#91be55]'>About</li></Link>
                    <Link to='/features'><li className='hover:text-[#91be55]'>Features</li></Link>
                    <Link to='/products'><li className='hover:text-[#91be55]'>Products</li></Link>
                    <Link to='/location'><li className='hover:text-[#91be55]'>Locations</li></Link>
                    <Link to='/contact'><li className='hover:text-[#91be55]'>Contact Us</li></Link>
                    <button className='register-btn mt-4 hover:text-green font-["merriweather"] text-sm bg-[#212121]'><a href="/portal">Register Now  &#10230;</a></button>
                </ul>
                <button className='hidden lg:block register-btn hover:text-green font-["merriweather"] text-sm bg-transparent hover:bg-[#141414]'><a href="/portal">Register Now  &#10230;</a></button>
        </nav>
    );
}