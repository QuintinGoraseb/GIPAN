import { Link } from 'react-router-dom'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";



export default function AboutBody() {
    return(
        <section className="about py-10 sm:py-20">
            <div className="container lg:lg-container mx-auto">
                <div className="xl:flex items-center justify-between intro bg-[#f8f8f8]">
                    <div className="xl:w-1/4 xs:max-xl:border-b-4 xs:border-green xl:border-r-4 xl:border-green p-6 xl:p-0 xl:m-6"><h1 className="sm:h1 font-[merriweather] text-[#434343]">About <br /><span className="text-green">Us</span></h1></div>
                    <div className="xl:w-3/4 m-6">
                        <p className="text-justify pb-6 xl:pb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus inventore esse sint vero consequuntur. Reiciendis aliquam praesentium molestias? Necessitatibus est aliquid impedit sequi accusantium perspiciatis unde. Obcaecati tempora corporis deleniti sunt odit! Recusandae?
                        </p>
                    </div>
                </div>
                <div className="xl:flex items-center justify-between sm:pt-5 md:pt-10 xl:pt-20 xl:max-2xl:gap-6">
                    <div className="xl:w-1/2">
                        <h4 className="mb-6 text-green">Background</h4>
                        <p className="text-justify">GIPAN is an Association established in 2007 through the request and initiative by GIPF. A noble idea on face value. that should be intended to serve as a body, and a mouthpiece that should mobilise the former civil Servants in retirement into a well formalised and cohesive body. A body mandated to address the challenges and hardships experienced by the pensioners after retirement. Even more, a harbour for the pensioners that should be a support system that is a means to mitigate the sufferings of the pensioners in isolation.</p><br />
                        <p className="text-justify">GIPAN manifested itself all over the 14 Regions with Regional Management members in all regions, who administer the functions of the Association on Regional level. The Regional Management serves on the National Executive body, together with the National Management consisting of the National Chairperson, Vice Chairperson, Secretary and the National Treasurer. This body links with the GIPF regarding issues and challenges experienced by the pensioners on the National level that includes Rules and Regulations governing the Fund, albeit being excluded from the Board of Trustees of the Fund a sorry state of affairs bordering on exclusion and discrimination.</p>
                    </div>
                    <div className="xl:w-1/2">
                        <img className="h-auto max-w-2xl mx-auto xl:ms-auto rounded-xl mt-6 xl:mt-0 border-l-8 sm:border-l-[20px] border-green" src="https://images.unsplash.com/photo-1701637410320-aff813a9891d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </div>
                <div className="xl:flex items-center justify-between intro bg-header bg-center bg-cover bg-no-repeat bg-fixed relative mt-5 md:mt-10 xl:mt-20">
                    <div className="xl:w-1/4 xs:max-xl:border-b-4 xs:border-green xl:border-r-4 md:border-green p-6 xl:p-0 xl:m-6"><h1 className="sm:h1 font-[merriweather] text-white">Our <br /><span className="text-green">Vision</span></h1></div>
                    <div className="xl:w-3/4 m-6">
                        <p className="text-justify text-white pb-6 xl:pb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus inventore esse sint vero consequuntur. Reiciendis aliquam praesentium molestias? Necessitatibus est aliquid impedit sequi accusantium perspiciatis unde. Obcaecati tempora corporis deleniti sunt odit! Recusandae?
                        </p>
                    </div>
                </div>
                <div className="md:mt-10 xl:mt-20">
                    <div className="xl:flex items-center justify-between gap-6 place-items-center ">
                        <div className='xl:w-1/3'>
                            <img className="rounded-xl" src="https://media.istockphoto.com/id/1129666774/photo/consulting-before-conference.jpg?s=612x612&w=0&k=20&c=edPY2jhqflGz5uaCLRhzvKoH8RFfqxcBCeEONVg2iRg=" alt="" />
                        </div>
                        <div className='xl:w-2/3 sm:flex items-center justify-between gap-6 place-items-center'>
                            <div className='sm:w-1/3 visionInfo'>
                                <div className="visionGroup">
                                    <div className="icon">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div className="details">
                                        <span>Phone</span>
                                        <span>+00 110 111 00</span>
                                    </div>
                                </div>
                                <div className="visionGroup">
                                    <div className="icon">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className="details">
                                        <span>Email</span>
                                        <span>info@gipan.org</span>
                                    </div>
                                </div>
                                <div className="visionGroup">
                                    <div className="icon">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className="details">
                                        <span>Location</span>
                                        <span>103 ABC Street</span>
                                    </div>
                                </div>
                            </div>
                            <div className='sm:w-1/3 visionInfo'>
                                <div className="visionGroup">
                                    <div className="icon">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div className="details">
                                        <span>Phone</span>
                                        <span>+00 110 111 00</span>
                                    </div>
                                </div>
                                <div className="visionGroup">
                                    <div className="icon">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className="details">
                                        <span>Email</span>
                                        <span>info@gipan.org</span>
                                    </div>
                                </div>
                                <div className="visionGroup">
                                    <div className="icon">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className="details">
                                        <span>Location</span>
                                        <span>103 ABC Street</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#f8f8f8] xl:flex items-center justify-between intro sm:mt-5 md:mt-10 xl:mt-20">
                    <div className="xl:w-1/4 xs:max-xl:border-b-4 xs:border-green xl:border-r-4 xl:border-green p-4 xl:p-0 xl:m-6"><h1 className="sm:h1 font-[merriweather] text-[#434343]">Our <br /><span className="text-green">Mission</span></h1></div>
                    <div className="xl:w-3/4 m-6">
                        <p className="text-justify pb-6 xl:pb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus inventore esse sint vero consequuntur. Reiciendis aliquam praesentium molestias? Necessitatibus est aliquid impedit sequi accusantium perspiciatis unde. Obcaecati tempora corporis deleniti sunt odit! Recusandae?
                        </p>
                    </div>
                </div>
                <div className='md:mt-10 xl:mt-20 bg-header bg-center bg-cover bg-no-repeat bg-fixed relative py-20 px-6'>
                    <div className='xl:flex items-center justify-center gap-6'>
                        <div className='hidden xl:block xl:w-1/3'>
                            <h1 className='h1 text-white font-[merriweather] leading-[3.5rem]'>"Good <br />Design is <br /><span className='text-green'>Good <br />Business</span></h1>
                        </div>
                        <div className='xl:w-2/3 sm:flex items-center justify-center gap-6'>
                            <div className='xl:w-1/3 visionInfo2'>
                                <div className="visionGroup2">
                                    <div className="icon">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div className="details">
                                        <span className='text-white'>Phone</span>
                                        <span className='text-white'>+00 110 111 00</span>
                                        <span className='text-white'>+00 110 111 00</span>
                                    </div>
                                </div>
                                <div className="visionGroup2 sm:pt-10">
                                    <div className="icon">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className="details">
                                        <span className='text-white'>Email</span>
                                        <span className='text-white'>info@gipan.org</span>
                                        <span className='text-white'>info@gipan.org</span>
                                    </div>
                                </div>
                            </div>
                            <div className='xl:w-1/3 visionInfo2'>
                                <div className="visionGroup2">
                                    <div className="icon">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div className="details">
                                        <span className='text-white'>Phone</span>
                                        <span className='text-white'>+00 110 111 00</span>
                                        <span className='text-white'>+00 110 111 00</span>
                                    </div>
                                </div>
                                <div className="visionGroup2 sm:pt-10">
                                    <div className="icon">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className="details">
                                        <span className='text-white'>Email</span>
                                        <span className='text-white'>info@gipan.org</span>
                                        <span className='text-white'>info@gipan.org</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:flex items-center justify-between intro bg-[#f8f8f8] mt-5 sm:mt-5 md:mt-10 xl:mt-20">
                    <div className="xl:w-1/4 xs:max-xl:border-b-4 xs:border-green xl:border-r-4 xl:border-green p-6 xl:p-0 xl:m-6"><h1 className="sm:h1 font-[merriweather] text-[#434343]">Our <br /><span className="text-green">Team</span></h1></div>
                    <div className="xl:w-3/4 m-6">
                        <p className="text-justify pb-6 xl:pb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus inventore esse sint vero consequuntur. Reiciendis aliquam praesentium molestias? Necessitatibus est aliquid impedit sequi accusantium perspiciatis unde. Obcaecati tempora corporis deleniti sunt odit! Recusandae?
                        </p>
                    </div>
                </div>
                <div className="md:mt-10 xl:mt-20">
                    <div className="">
                        <div className="grid gap-8 xl:grid-cols-2">
                            <div className="items-center bg-[#f8f8f8] rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"/>
                                </a>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a href="#">Bonnie Green</a>
                                    </h3>
                                    <span className="text-gray-500 dark:text-gray-400">CEO & Web Developer</span>
                                    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                                    <div className="flex items-center visionGroup">
                                        <div className="icon">
                                            <i className="fa-solid fa-envelope"></i>
                                        </div>
                                        <div className="details">
                                            <span>Email</span>
                                            <span className='text-gray-500 dark:text-gray-400'>info@gipan.org</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="items-center bg-[#f8f8f8] rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Avatar"/>
                                </a>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a href="#">Jese Leos</a>
                                    </h3>
                                    <span className="text-gray-500 dark:text-gray-400">CTO</span>
                                    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Jese drives the technical strategy of the flowbite platform and brand.</p>
                                    <div className="flex items-center visionGroup">
                                        <div className="icon">
                                            <i className="fa-solid fa-envelope"></i>
                                        </div>
                                        <div className="details">
                                            <span>Email</span>
                                            <span className='text-gray-500 dark:text-gray-400'>info@gipan.org</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="items-center bg-[#f8f8f8] rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Michael Avatar"/>
                                </a>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a href="#">Michael Gough</a>
                                    </h3>
                                    <span className="text-gray-500 dark:text-gray-400">Senior Front-end Developer</span>
                                    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Michael drives the technical strategy of the flowbite platform and brand.</p>
                                    <div className="flex items-center visionGroup">
                                        <div className="icon">
                                            <i className="fa-solid fa-envelope"></i>
                                        </div>
                                        <div className="details">
                                            <span>Email</span>
                                            <span className='text-gray-500 dark:text-gray-400'>info@gipan.org</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="items-center bg-[#f8f8f8] rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia Avatar"/>
                                </a>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a href="#">Lana Byrd</a>
                                    </h3>
                                    <span className="text-gray-500 dark:text-gray-400">Marketing & Sale</span>
                                    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Lana drives the technical strategy of the flowbite platform and brand.</p>
                                    <div className="flex items-center visionGroup">
                                        <div className="icon">
                                            <i className="fa-solid fa-envelope"></i>
                                        </div>
                                        <div className="details">
                                            <span>Email</span>
                                            <span className='text-gray-500 dark:text-gray-400'>info@gipan.org</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:flex items-center justify-between intro bg-header bg-center bg-cover bg-no-repeat bg-fixed relative mt-5 md:mt-10 xl:mt-20">
                    <div className="xl:w-1/4 xs:max-xl:border-b-4 xs:border-green xl:border-r-4 md:border-green p-6 xl:p-0 xl:m-6"><h1 className="sm:h1 font-[merriweather] text-white">Register <br /><span className="text-green">Now</span></h1></div>
                    <div className="xl:w-3/4 m-6">
                        <p className="text-justify text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus inventore esse sint vero consequuntur. Reiciendis aliquam praesentium molestias?
                        </p>
                        <div className="mt-3 pb-6 xl:pb-0">
                            <button className="btn btn-primary hero-btn">
                                <span>Register Now</span>
                                <ion-icon name="person-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}