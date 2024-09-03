import Navbar from '../components/Navbar'
import IndexBody from '../components/body/IndexBody'
import Back2Top from '../components/Back2Top'
import Footer from '../components/Footer'
import AboutBanner from '../components/hero/AboutBanner'




export default function IndexPage() {
    return(
        <>
        <Navbar />
        <AboutBanner />
        <IndexBody />
        <Back2Top />
        <Footer />
        </>
    );
}