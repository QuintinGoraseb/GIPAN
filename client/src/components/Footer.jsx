import { Link } from 'react-router-dom'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";





export default function Footer() {
    return(
        <footer className="footer lg-footer sm:rounded-tl-[110px]">
            <div className="container sm:lg-container mx-auto sb_footer">
                <div className="sb_footer-links">
                    <div className="sb_footer-links-div">
                        <a href="/home" className='flex items-center gap-2'>
                            <img className='size-11 sm:size-12' src="/img/logo/logo.png" alt="LOGO" />
                            <h1 className='text-[#e7e7e7d1] text-3xl logo font-["merriweather"] '>GIPAN</h1>
                        </a>
                        <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, perspiciatis?</p>
                        <div className='socialmedia flex items-center gap-4 pb-4 text-[20px] lg:text-xl'>
                            <a href="/twitter" className='hover:text-green'><FaXTwitter /></a>
                            <a href="/facebook" className='hover:text-green'><FaFacebookF /></a>
                            <a href="/instagram" className='hover:text-green'><FaInstagram /></a>
                            <a href="/linkedin" className='hover:text-green'><FaLinkedinIn /></a>
                        </div>
                    </div>
                    <div className="sb_footer-links-div mb-4">
                        <h5 className='font-[inter] font-bold'><span>Quick Links</span></h5>
                        <ul className=''>
                            <Link to='/'><li className='hover:text-[#91be55] flex gap-2 items-center mt-3'><ion-icon name="caret-forward-outline"></ion-icon>Home</li></Link>
                            <Link to='/features'><li className='hover:text-[#91be55] flex gap-2 items-center'><ion-icon name="caret-forward-outline"></ion-icon>Features</li></Link>
                            <Link to='/products'><li className='hover:text-[#91be55] flex gap-2 items-center'><ion-icon name="caret-forward-outline"></ion-icon>Products</li></Link>
                            <Link to='/about'><li className='hover:text-[#91be55] flex gap-2 items-center'><ion-icon name="caret-forward-outline"></ion-icon>About</li></Link>
                            <Link to='/locations'><li className='hover:text-[#91be55] flex gap-2 items-center'><ion-icon name="caret-forward-outline"></ion-icon>Locations</li></Link>
                            <Link to='/contact'><li className='hover:text-[#91be55] flex gap-2 items-center'><ion-icon name="caret-forward-outline"></ion-icon>Contact Us</li></Link>
                        </ul>
                    </div>
                    <div className="sb_footer-links-div mb-4">
                    <h5 className='font-[inter] font-bold'><span>Let&apos;s Get In Touch</span></h5>
                        <div>
                            <div className='flex items-center gap-4 mt-4 sm:text-lg'><span className='text-green sm:text-2xl'><FaEnvelope /></span><span>info@gipan.org</span></div>
                            <div className='flex items-center gap-4 mt-4 sm:text-lg'><span className='text-green sm:text-2xl'><FaPhone /></span><span>+264 000 0000</span></div>
                            <div className='flex items-center gap-4 mt-4 sm:text-lg'><span className='text-green sm:text-2xl'><FaMapLocationDot /></span><span>
                            Cnr Kenneth Kaunda &<br />Goethe Street, Windhoek, Namibia</span></div>
                        </div>
                    </div>
                    <div className='sb_footer-links-div sm:w-[400px]'>
                        <h2 className="text-3xl font-bold tracking-tight text-[#91be55]">Subscribe to our newsletter</h2>
                        <p className="mt-4">To be updated with all our latest news and events.</p>
                        <div className="mt-6 sm:flex max-w-md gap-x-4">
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" required placeholder="Enter your email" autoComplete="email" className="min-w-0 flex-auto rounded-sm border-0 px-3.5 py-2 text-[#e7e7e7d1] shadow-sm ring-1 ring-inset ring-[#e7e7e7d1] sm:text-sm sm:leading-6" />
                            <button type="submit" className="flex-none rounded-sm bg-[#91BE55] mt-4 sm:mt-0 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#91be55] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#91be55]" >Subscribe
                            </button>
                        </div>
                        <p className='text-xs mt-4'>By submitting this form you agree to our <span className='text-green hover:underline'><a href="/terms">Terms & Conditions</a></span> and our <span className='text-green hover:underline'><a href="/privacy">Privacy Policy</a></span>.</p>
                    </div>
                </div>
                <hr
                className="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-100 to-transparent opacity-25 dark:opacity-100 z-10"/>
                <div className="text-center xl:flex justify-between items-center">
                    <div className="text-sm text-center">
                        Copyright <span className='footer_icon'>&copy;</span> GIPAN {new Date().getFullYear()}. All Rights Reserved <span className='footer_icon'>|</span> Developed by: <a className="footer_icon font-[playfair] hover:text-green text-sm" href="/">PARALLAX</a>
                    </div>
                    <div className='hidden xl:flex gap-4'>
                        <a href="/terms"><div><p className='hover:text-green hover:underline text-sm'>Terms & Conditions</p></div></a>
                        <a href="/privacy"><div><p className='hover:text-green hover:underline text-sm'>Privacy Policy</p></div></a>
                        <a href="/cookies"><div><p className='hover:text-green hover:underline text-sm'>Cookie Policy</p></div></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}