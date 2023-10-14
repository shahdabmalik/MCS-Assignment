import TopBar from "../../components/topBar/TopBar"
import hero1 from "../../assets/hero1.png"
import hero2 from "../../assets/hero2.png"
import hero3 from "../../assets/hero3.png"
import heroVector from "../../assets/heroVector.svg"
import SearchBar from "../../components/searchBar/SearchBar"

const SectionOne = () => {





    return (
        <div className="flex flex-col h-[800px] bg-hero-gradient relative" >
            <TopBar />
            <div className="px-5 md:px-12 lg:px-20 xl:pl-32 xl:pr-10 flex-grow flex items-center" >
                <div className="2xl:w-1/2" >
                    <h1 className="font-poppins text-4xl sm:text-5xl leading-relaxed md:text-[65px] font-bold sm:leading-[80px]" >Find  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary" >Partners</span> (CAs) available online</h1>
                    <p className="font-sans text-xl leading-8 mt-4 text-gray-500" ><span className=" font-bold " >CONNECT</span>with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>
                    <SearchBar />
                </div>
                <div className="w-1/2 2xl:flex gap-4 z-10 justify-end hidden" >
                    <img className="pt-[83px]" src={hero1} alt="bannerImg" />
                    <img className="mb-[83px]" src={hero2} alt="bannerImg" />
                    <img className="py-10" src={hero3} alt="bannerImg" />
                </div>
            </div>
            <img className="absolute hidden 2xl:block -bottom-1 right-0 h-[210px]" src={heroVector} alt="vector" />
        </div>
    )
}

export default SectionOne