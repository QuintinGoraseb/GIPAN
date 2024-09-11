



export default function PortalBody() {
    return(
        <section className="py-24 sm:py-0 sm:pt-36">
            <div className="container lg:lg-container mx-auto">
                <div className="xl:flex items-center shadow-custom7 rounded-lg">
                    <div className="lg:w-1/2 p-5 sm:p-10">
                        <h1 className="sm:h1 font-[merriweather] mb-3 sm:mb-5">Want to join <span className="text-green">GIPAN?</span></h1>
                        <h3 className="text-[#888] mb-5 sm:mb-10">It's today or never.</h3>
                        <p className="text-justify mb-5 sm:mb-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi rem quos consequatur architecto sunt, quia laborum quidem minus quis repellat.</p>
                        <div className="">
                            <button className="btn btn-primary hero-btn">
                                <a href="/register">Get started now!</a>
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <img className="" src="https://img.freepik.com/free-photo/advisor-agent-sitting-desk-table-startup-office-analyzing-financial-graphs-report-typing-company-strategy-african-american-businessman-working-overtime-investment-report-business-concept_482257-66470.jpg?t=st=1725393979~exp=1725397579~hmac=1d9a64d485fde7b8d3d8ff5900a7744f1a178dbc89809737ca6cce3b94123b4c&w=996" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}