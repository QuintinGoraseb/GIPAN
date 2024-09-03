import { FaPeoplePulling } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa6";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";



export default function AboutBanner() {
    return(
        <main className="bg-white overflow-hidden">
            {/*** Hero Section ***/}
            <div className= "bg-[#2e2e2e] bg-banner sm:banner h-[255px] sm:h-[355px] lg:h-[455px] bg-center bg-cover bg-no-repeat bg-fixed relative z-20">

                <div className="grid place-items-start">
                    <div class="brick relative bg-[#3C4C59] shadow-md bg-clip-border mt-24 h-28 sm:mt-32 sm:h-40 lg:mt-30 lg:h-56 lg:w-2/6 rounded-e-lg">
                        <div className="container mx-auto h-full flex items-center justify-center">
                            <div className="title">
                                <h1 className="lg:mb-4 text-4xl md:text-5xl drop-shadow-2xl">ABOUT US</h1>
                                <div className="flex justify-center items-center gap-4 pt-6 xl:pt-0">
                                    <a href="/home" className="font-[oswald] hover:underline hover:text-green text-[#ffff]">HOME</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 fill-green">
                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                    </svg>
                                    <a className="font-[oswald] text-[#ffff]">ABOUT US</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid place-items-end">
                    <div className="brick relative sm:bg-white/20 backdrop-blur-sm shadow-md bg-clip-border 2xl:h-[90px] 2xl:w-3/5 rounded-xl 2xl:mr-4" >
                        <div className="hidden 2xl:grid grid-cols-4 divide-x justify-between text-center pt-7">
                            <span><h4 className="flex items-center gap-2 text-white font-[merriweather]"><span className="ml-4 text-4xl text-green"><FaPeoplePulling /></span>LEADERSHIP</h4></span>
                            <span><h4 className="flex items-center gap-2 text-white font-[merriweather]"><span className="ml-4 text-4xl text-green"><FaHandshake /></span>RELIABILITY</h4></span>
                            <span><h4 className="flex items-center gap-2 text-white font-[merriweather]"><span className="ml-4 text-4xl text-green"><FaHandsHoldingChild />
                            </span>GROWTH</h4></span>
                            <span><h4 className="flex items-center gap-2 text-white font-[merriweather]"><span className="ml-4 text-4xl text-green"><FaAward /></span>QUALITY</h4></span>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}