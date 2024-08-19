import Back2Top from "../components/Back2Top";
import Banner from "../components/Banner";
import ContactBody from "../components/body/ContactBody";
import Footer from "../components/Footer";
import Gmap from "../components/Leaflet/Gmap";
import Navbar from "../components/Navbar";




export default function ContactPage() {
    return(
        <>
        <Navbar />
        <Banner />
        <ContactBody />
        <Gmap />
        <Back2Top />
        <Footer />
        </>
    );
}