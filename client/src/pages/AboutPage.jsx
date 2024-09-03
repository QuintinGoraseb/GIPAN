import Back2Top from "../components/Back2Top";
import AboutBody from "../components/body/AboutBody";
import Footer from "../components/Footer";
import AboutBanner from "../components/hero/AboutBanner";
import Navbar from "../components/Navbar";




export default function AboutPage() {
    return(
        <>
        <Navbar />
        <AboutBanner />
        <AboutBody />
        <Back2Top />
        <Footer />
        </>
    );
}