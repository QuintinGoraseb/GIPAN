//import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";



export default function ContactBody() {
    return(
        <>
        <section className="contact-intro bg-[#fff]">
            <div className="container lg:lg-container mx-auto">
                <div className="md:flex items-center justify-between md:gap-10">
                    <div className="hidden lg:block lg:w-2/5 z-50 xl:-mt-20">
                        <img src="/img/body/psd.png" alt="" />
                    </div>
                    <div className="lg:w-3/5 py-6">
                        <h1 className="lg:h1 font-[merriweather] leading-9">Consult the services you <br /><span className="text-green">need now!</span></h1>
                        <p className="text-justify mt-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo laudantium maxime fuga, perferendis neque quos a asperiores doloribus consequuntur ex!</p>
                        <div className="xl:flex items-center gap-6 my-6">
                            <span className="flex items-center gap-2"><i class="fa-solid fa-circle-check"></i>Free Delivery</span>
                            <span className="flex items-center gap-2"><i class="fa-solid fa-circle-check"></i>Personal Consulting</span>
                            <span className="flex items-center gap-2"><i class="fa-solid fa-circle-check"></i>Dedicated Consultant</span>
                            <span className="flex items-center gap-2"><i class="fa-solid fa-circle-check"></i>Dedicated Consultant</span>
                        </div>
                        <button className="btn btn-primary hero-btn">
                            <span>Register Now</span>
                            <ion-icon name="person-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-eerie contact">
	        <div className="f-container">
		        <main className="bg-contact row lg:flex p-3 sm:p-12 rounded-lg">
			        <section className="col left sm:min-w-[320px] text-ellipsis overflow-hidden ">
                        <div className="contactTitle  min-w-[220px]">
                            <h2>Get In Touch</h2>
                            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                        </div>
				        <div className="contactInfo">
					        <div className="iconGroup">
                                <div className="icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="details">
                                    <span>Phone</span>
                                    <span>+00 110 111 00</span>
                                </div>
                            </div>
                            <div className="iconGroup">
                                <div className="icon">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="details">
                                    <span>Email</span>
                                    <span>info@gipan.org</span>
                                </div>
                            </div>
                            <div className="iconGroup">
                                <div className="icon">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="details">
                                    <span>Location</span>
                                    <span>103 ABC Street</span>
                                </div>
                            </div>
				        </div>
                        <div className="socialMedia">
                            <a href="/twitter" className='hover:text-green'><FaXTwitter /></a>
                            <a href="/facebook" className='hover:text-green'><FaFacebookF /></a>
                            <a href="/instagram" className='hover:text-green'><FaInstagram /></a>
                            <a href="/linkedin" className='hover:text-green'><FaLinkedinIn /></a>
                        </div>
			        </section>
			        <section className="col right">
                        <form className="messageForm">

                            <div className="inputGroup halfWidth">
                                <input type="text" name="" required="required"/>
                                <label>Name</label>
                            </div>

                            <div className="inputGroup halfWidth">
                                <input type="email" name="" required="required"/>
                                <label>Email</label>
                            </div>

                            <div className="inputGroup fullWidth">
                                <input type="text" name="" required="required"/>
                                <label>Subject</label>
                            </div>

                            <div className="inputGroup fullWidth">
                                <textarea required="required"></textarea>
                                <label>Say Something</label>
                            </div>

                            <div className="">
                                <button className="btn btn-primary hero-btn">
                                    <span>Send Message</span>
                                    <ion-icon name="mail-outline"></ion-icon>
                                </button>
                            </div>

                        </form>
			        </section>
		        </main>
	        </div>
        </section>

        <section className="overflow-hidden bg-white py-10 sm:py-20">
            <div className="container lg:lg-container mx-auto">
                <div className="xl:flex items-center">
                    <div className="xl:w-3/5">
                        <div className="text-center">
                            <span className="font-[roboto] uppercase text-base font-semibold leading-7 text-green ">Our Offices</span>
                            <h1 className="font-[merriweather] my-6 text-3xl font-bold tracking-tight sm:text-4xl">Find An Office Close To You</h1>
                            <p className="mb-4">We've built an API that allows you to scale your podcast production workflow.</p>
                        </div>
                        <div className="hidden sm:grid w-full sm:grid-cols-1 md:grid-cols-2">
                            <div className="p-4 max-w-sm">
                                <div className="flex rounded-lg h-full dark:bg-gray-800 bg-[#2e2e2e] p-8 flex-col">
                                    <div className="mb-3">
                                        <h2 className="text-green dark:text-white text-lg font-semibold">Windhoek</h2>
                                        <span className="text-[#ddd] text-sm font-small uppercase font-semibold">Regional Office</span>
                                    </div>
                                    <div className="flex flex-col justify-between flex-grow">
                                        <div className="iconCard sm:flex items-center mb-3">
                                            <div className="icon mb-1 sm:mb-0">
                                                <i className="fa-solid fa-location-dot"></i>
                                            </div>
                                            <div className="details">
                                                <span>Address</span>
                                                <span>ABC Street, Windhoek, Namibia</span>
                                            </div>
                                        </div>
                                        <div className="iconCard sm:flex items-center mb-3">
                                            <div className="icon mb-1 sm:mb-0">
                                                <i className="fa-solid fa-phone"></i>
                                            </div>
                                            <div className="details">
                                                <span>Phone Number</span>
                                                <span>+00 110 111 00</span>
                                            </div>
                                        </div>
                                        <div className="iconCard sm:flex items-center">
                                            <div className="icon mb-1 sm:mb-0">
                                                <i className="fa-solid fa-envelope"></i>
                                            </div>
                                            <div className="details">
                                                <span>Email</span>
                                                <span>info@gipan.org</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 max-w-sm">
                                <div className="flex rounded-lg h-full dark:bg-gray-800 bg-[#2e2e2e] p-8 flex-col">
                                    <div className="mb-3">
                                        <h2 className="text-green dark:text-white text-lg font-semibold">Luderitz</h2>
                                        <span className="text-[#ddd] text-sm font-small uppercase font-semibold">Regional Office</span>
                                    </div>
                                    <div className="flex flex-col justify-between flex-grow">
                                        <div className="iconCard sm:flex items-center mb-3">
                                            <div className="icon mb-1 sm:mb-0">
                                                <i className="fa-solid fa-location-dot"></i>
                                            </div>
                                            <div className="details">
                                                <span>Address</span>
                                                <span>ABC Street, Luderitz, Namibia</span>
                                            </div>
                                        </div>
                                        <div className="iconCard sm:flex items-center mb-3">
                                            <div className="icon mb-1 sm:mb-0">
                                                <i className="fa-solid fa-phone"></i>
                                            </div>
                                            <div className="details">
                                                <span>Phone Number</span>
                                                <span>+00 110 111 00</span>
                                            </div>
                                        </div>
                                        <div className="iconCard sm:flex items-center">
                                            <div className="icon mb-1 sm:mb-0">
                                                <i className="fa-solid fa-envelope"></i>
                                            </div>
                                            <div className="details">
                                                <span>Email</span>
                                                <span>info@gipan.org</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden xl:block xl:w-2/5 h-auto max-w-full mx-auto grayscale hover:grayscale-0"><img className="object-cover rounded-lg" src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk0fHxvZmZpY2V8ZW58MHx8MHx8fDA%3D" alt="Locations-image"/></div>
                </div>

                <div className="hidden sm:grid w-full sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-10">
                    <div className="p-4 max-w-sm">
                        <div className="flex rounded-lg h-full dark:bg-gray-800 bg-[#2e2e2e] p-8 flex-col">
                            <div className="mb-3">
                                <h2 className="text-green dark:text-white text-lg font-semibold">Mariental</h2>
                                <span className="text-[#ddd] text-sm font-small uppercase font-semibold">Regional Office</span>
                            </div>
                            <div className="flex flex-col justify-between flex-grow">
                                <div className="iconCard sm:flex items-center mb-3">
                                    <div className="icon mb-1 sm:mb-0">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className="details">
                                        <span>Address</span>
                                        <span>ABC Street, Mariental, Namibia</span>
                                    </div>
                                </div>
                                <div className="iconCard sm:flex items-center mb-3">
                                    <div className="icon mb-1 sm:mb-0">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div className="details">
                                        <span>Phone Number</span>
                                        <span>+00 110 111 00</span>
                                    </div>
                                </div>
                                <div className="iconCard sm:flex items-center">
                                    <div className="icon mb-1 sm:mb-0">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className="details">
                                        <span>Email</span>
                                        <span>info@gipan.org</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 max-w-sm">
                        <div className="flex rounded-lg h-full dark:bg-gray-800 bg-[#2e2e2e] p-8 flex-col">
                            <div className="mb-3">
                                <h2 className="text-green dark:text-white text-lg font-semibold">Tsumeb</h2>
                                <span className="text-[#ddd] text-sm font-small uppercase font-semibold">Regional Office</span>
                            </div>
                            <div className="flex flex-col justify-between flex-grow">
                                <div className="iconCard sm:flex items-center mb-3">
                                    <div className="icon mb-1 sm:mb-0">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className="details">
                                        <span>Address</span>
                                        <span>ABC Street, Tsumeb, Namibia</span>
                                    </div>
                                </div>
                                <div className="iconCard sm:flex items-center mb-3">
                                    <div className="icon mb-1 sm:mb-0">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div className="details">
                                        <span>Phone Number</span>
                                        <span>+00 110 111 00</span>
                                    </div>
                                </div>
                                <div className="iconCard sm:flex items-center">
                                    <div className="icon mb-1 sm:mb-0">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className="details">
                                        <span>Email</span>
                                        <span>info@gipan.org</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 max-w-sm">
                        <div className="flex rounded-lg h-full dark:bg-gray-800 bg-[#2e2e2e] p-8 flex-col">
                            <div className="mb-3">
                                <h2 className="text-green dark:text-white text-lg font-semibold">Rundu</h2>
                                <span className="text-[#ddd] text-sm font-small uppercase font-semibold">Regional Office</span>
                            </div>
                            <div className="flex flex-col justify-between flex-grow">
                                <div className="iconCard sm:flex items-center mb-3">
                                    <div className="icon mb-1 sm:mb-0">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className="details">
                                        <span>Address</span>
                                        <span>ABC Street, Rundu, Namibia</span>
                                    </div>
                                </div>
                                <div className="iconCard sm:flex items-center mb-3">
                                    <div className="icon mb-1 sm:mb-0">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div className="details">
                                        <span>Phone Number</span>
                                        <span>+00 110 111 00</span>
                                    </div>
                                </div>
                                <div className="iconCard sm:flex items-center">
                                    <div className="icon mb-1 sm:mb-0">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className="details">
                                        <span>Email</span>
                                        <span>info@gipan.org</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 max-w-sm">
                        <div className="flex rounded-lg h-full dark:bg-gray-800 bg-[#2e2e2e] p-8 flex-col">
                            <div className="mb-3">
                                <h2 className="text-green dark:text-white text-lg font-semibold">Opuwo</h2>
                                <span className="text-[#ddd] text-sm font-small uppercase font-semibold">Regional Office</span>
                            </div>
                            <div className="flex flex-col justify-between flex-grow">
                                <div className="iconCard sm:flex items-center mb-3">
                                    <div className="icon mb-1 sm:mb-0">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className="details">
                                        <span>Address</span>
                                        <span>ABC Street, Opuwo, Namibia</span>
                                    </div>
                                </div>
                                <div className="iconCard sm:flex items-center mb-3">
                                    <div className="icon mb-1 sm:mb-0">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div className="details">
                                        <span>Phone Number</span>
                                        <span>+00 110 111 00</span>
                                    </div>
                                </div>
                                <div className="iconCard sm:flex items-center">
                                    <div className="icon mb-1 sm:mb-0">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className="details">
                                        <span>Email</span>
                                        <span>info@gipan.org</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}