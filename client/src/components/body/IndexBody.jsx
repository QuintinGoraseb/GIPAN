import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';




export default function IndexBody() {

    const [counterState, setCounterState] = useState(false)

    return(
        <section className="py-10 sm:py-20 bg-[#1A3842]">
            <div className="container lg:lg-container mx-auto">
                <div className="xl:flex items-center justify-between intro bg-[#f8f8f8]">
                    <div className="xl:w-1/4 xs:max-xl:border-b-4 xs:border-green xl:border-r-4 xl:border-green p-6 xl:p-0 xl:m-6"><h1 className="sm:h1 font-[merriweather] text-[#434343]">Welcome <br /><span className="text-green">Message</span></h1></div>
                    <div className="xl:w-3/4 m-6">
                        <p className="text-justify pb-6 xl:pb-0">
                        Greetings and welcome to the official website of The Government Institution Pensioners’ Association of Namibia, also known as GIPAN. We are delighted to see you as a part of our community. Feel free to discover, interact, and collaborate with us to create something wonderful.
                        </p>
                    </div>
                </div>
                <div className="xl:flex items-center justify-between sm:pt-5 md:pt-10 xl:pt-20 xl:max-2xl:gap-6">
                    <div className="xl:w-1/3">
                        <img className="h-auto max-w-2xl mx-auto xl:ms-auto rounded-xl mt-6 xl:mt-0 border-r-8 sm:border-r-[10px] border-green" src="https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    </div>
                    <div className="xl:w-2/3 lg:p-16 pt-6">
                        <h2 className="font-[merriweather] text-[#595959]">A Brief<br /><span className="text-green">Look at GIPAN</span></h2>
                        <p className="text-justify my-6">The Government Institution Pensioners’ Association of Namibia (GIPAN) was established in 2007 with the aim to be a voice for the GIPF
                            pensioners. The Association is always on the look out for the
                            wellbeing of the GIPF pensioners regarding Financial matters, PSEMAS
                            related challenges as well as information sharing. The Association is
                            active in all 14 regions of Namibia. The current National Chairperson is Mr
                            Andrew Matjila and is assisted by five elected management members. The
                            Association works closely with GIPF and addresses matters of
                            concern on a regular basis.
                        </p>
                        <h3 className="font-[merriweather] text-[#595959]">Discover <span className="text-green">More:</span></h3>
                        <div className="bg-[#f8f8f8] sm:grid grid-cols-4 sm:divide-x divide-gray-300 items-center sm:text-center my-8 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-8">
                            <span className=""><h5 className="font-[merriweather] text-[#6d6d6d] mb-2 sm:mb-0">Our Vision</h5></span>
                            <span className=""><h5 className="font-[merriweather] text-[#6d6d6d] mb-2 sm:mb">Our Mission</h5></span>
                            <span className=""><h5 className="font-[merriweather] text-[#6d6d6d] mb-2 sm:mb-0">Our Strategies</h5></span>
                            <span className=""><h5 className="font-[merriweather] text-green">Our Team</h5></span>
                        </div>
                        <button className="btn btn-primary hero-btn">
                            <span>Learn More</span>
                            <ion-icon name="arrow-redo-outline"></ion-icon>
                        </button>
                    </div>
                </div>
                <div className="xl:flex items-center justify-between intro bg-header bg-center bg-cover bg-no-repeat bg-fixed relative mt-5 md:mt-10 xl:mt-20">
                    <div className="xl:w-1/4 xs:max-xl:border-b-4 xs:border-green xl:border-r-4 md:border-green p-6 xl:p-0 xl:m-6"><h1 className="sm:h1 font-[merriweather] text-white">Our <br /><span className="text-green">Statistics</span></h1></div>
                    <div className="xl:w-3/4 m-6 max-w-[1240px] mx-auto">
                        <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
                            <div className="grid sm:max-lg:grid-cols-2 lg:grid-cols-4  text-center pb-6 xl:pb-0">
                                <div>
                                    <h1 className="text-4xl sm:text-5xl text-green font-[merriweather] font-semibold mt-4 xl:mt-0">
                                    {counterState && <CountUp start={0} end={2007} duration={5.75}></CountUp>}
                                    </h1>
                                    <p className="text-white font-[merriweather] font-semibold mt-4">Established</p>
                                </div>
                                <div>
                                    <h1 className="text-4xl sm:text-5xl text-green font-[merriweather] font-semibold mt-4 xl:mt-0">
                                    {counterState && <CountUp start={0} end={14} duration={5.75}></CountUp>}
                                    </h1>
                                    <p className="text-white font-[merriweather] font-semibold mt-4">Regional Locations</p>
                                </div>
                                <div>
                                    <h1 className="text-4xl sm:text-5xl text-green font-[merriweather] font-semibold mt-4 xl:mt-0">
                                    {counterState && <CountUp start={0} end={1250} duration={5.75}></CountUp>}
                                    </h1>
                                    <p className="text-white font-[merriweather] font-semibold mt-4">Registered Members</p>
                                </div>
                                <div>
                                    <h1 className="text-4xl sm:text-5xl text-green font-[merriweather] font-semibold mt-4 xl:mt-0">
                                    {counterState && <CountUp start={0} end={38} duration={5.75}></CountUp>}
                                    </h1>
                                    <p className="text-white font-[merriweather] font-semibold mt-4">Volunteer Members</p>
                                </div>
                            </div>
                        </ScrollTrigger>
                    </div>
                </div>
            </div>
        </section>
    );
}
