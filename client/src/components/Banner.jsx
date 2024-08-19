




export default function Banner() {
    return(
        <main className="bg-white overflow-hidden">
            {/*** Hero Section ***/}
            <div className="bg-[#2e2e2e] bg-banner sm:banne h-[255px] sm:h-[355px] lg:h-[455px] bg-center bg-cover bg-no-repeat bg-fixed relative z-20 grid place-items-center">
                <div class="relative mt-6 text-gray-700 bg-white/10 backdrop-blur-sm shadow-md bg-clip-border h-1/2 sm:w-2/3 rounded-lg sm:rounded-tl-[90px] sm:rounded-br-[90px]">
                    <div className="container mx-auto h-full flex items-center justify-center">
                        <div className="text-[#f6f6f6]">
                            <h1 className="font-[merriweather] lg:mb-4 text-4xl md:text-5xl drop-shadow-2xl"><span className="text-white font-semibold">CONTACT US</span></h1>
                            <div className="flex justify-center items-center gap-4 pt-6 xl:pt-0">
                                <a href="/home" className="font-[oswald] hover:underline hover:text-green text-[#ffff]">HOME</a>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 fill-green">
                                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                </svg>
                                <a className="font-[oswald] text-[#ffff]">CONTACT US</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}