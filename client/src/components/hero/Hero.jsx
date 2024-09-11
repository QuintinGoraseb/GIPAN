


export default function Hero() {
    return(
        <>
        <section className="hero bg-eerie" id="home">
            <div className="container">

                <h2 className="h1 hero-title lg:text-6xl lg:leading-normal">
                    Give Love for Saving <br /><span className="font-bold leading-[48px]">World Animals</span>
                </h2>

                <p className="hero-text leading-8">
                    Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua suspendisse ultrices gravida.
                </p>

                <div className="sm:flex sm:gap-6 items-center">
                    <button className="btn btn-primary">
                        <span>Learn More</span>
                        <ion-icon name="arrow-redo-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </section>

        <section className="features">
            <div className="container mx-auto">

                <ul className="features-list">

                    <li className="features-item">
                        <div className="item-icon">
                            <ion-icon name="shield-checkmark-outline"></ion-icon>
                        </div>

                        <div>
                            <h3 className="h4 item-title">Safe Shelter</h3>

                            <p className="item-text">
                                Sit amet consecte adiscine
                                eiusm temor ultrices.
                            </p>
                        </div>
                    </li>

                    <li className="features-item">
                        <div className="item-icon">
                            <ion-icon name="water-outline"></ion-icon>
                        </div>

                        <div>
                            <h3 className="h4 item-title">Safe Water</h3>

                            <p className="item-text">
                                Sit amet consecte adiscine
                                eiusm temor ultrices.
                            </p>
                        </div>
                    </li>

                    <li className="features-item">
                        <div className="item-icon">
                            <ion-icon name="leaf-outline"></ion-icon>
                        </div>

                        <div>
                            <h3 className="h4 item-title">Ecology Save</h3>

                            <p className="item-text">
                                Sit amet consecte adiscine
                                eiusm temor ultrices.
                            </p>
                        </div>
                    </li>

                    <li className="features-item">
                        <div className="item-icon">
                            <ion-icon name="snow-outline"></ion-icon>
                        </div>

                        <div className="pb-20 lg:pb-0">
                            <h3 className="h4 item-title">Environment</h3>

                            <p className="item-text">
                                Sit amet consecte adiscine
                                eiusm temor ultrices.
                            </p>
                        </div>
                    </li>

                </ul>

            </div>
        </section>
        </>
    );
}