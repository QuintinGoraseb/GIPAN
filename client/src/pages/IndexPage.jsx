import Navbar from '../components/Navbar'
import IndexBody from '../components/body/IndexBody'
import Back2Top from '../components/Back2Top'
import Footer from '../components/Footer'
import Hero from '../components/hero/Hero'




export default function IndexPage() {
    return(
        <>
        <Navbar />
        <Hero />
        <IndexBody />
        <Back2Top />
        <Footer />
        </>
    );
}