import Footer from "../../components/footer/Footer"
import SectionOne from "./SectionONe"
import SectionThree from "./SectionThree"
import SectionTwo from "./SectionTwo"

const Home = () => {
    return (
        <div className="max-w-screen-2xl mx-auto" >
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <Footer />
        </div>
    )
}

export default Home