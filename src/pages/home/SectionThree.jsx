import search from "../../assets/search.svg"
import twopeople from "../../assets/twopeople.svg"
import notebook from "../../assets/notebook.svg"
import vector2 from "../../assets/sectionthreevector2.svg"
import image2 from "../../assets/sectionthreeimage2.png"
import image1 from "../../assets/sectionthreeimage1.png"
import vector1 from "../../assets/sectionthreevector1.svg"
import cap from "../../assets/cap.svg"

const SectionThree = () => {
    return (
        <div className="my-32 px-5 md:px-12 lg:px-20 xl:px-32 flex flex-col 2xl:flex-row items-center" >
            <div className="">
                <h2 className="font-poppins text-4xl md:text-[65px] font-bold leading-normal md:w-[670px]" ><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary" >All-in-One</span> platform that Makes Easier</h2>
                <p className="font-poppins text-2xl leading-[38px] mt-[14px]" >We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</p>
                <div className="flex flex-wrap gap-x-8 gap-y-16 mt-8 pr-[56px]" >
                    <div className="flex gap-4" >
                        <img className="w-16 self-start" src={search} alt="icon" />
                        <p className="text-xl leading-8 w-[205px] overflow-hidden"><span className="font-bold"> SEARCH </span> for vital company information</p>
                    </div>
                    <div className="flex gap-4" >
                        <img className="w-16 self-start" src={twopeople} alt="icon" />
                        <p className="text-xl leading-8 w-[205px] overflow-hidden"><span className="font-bold"> CONNECT</span>  with the resources to meet your business needs</p>
                    </div>
                    <div className="flex gap-4" >
                        <img className="w-16 self-start" src={notebook} alt="icon" />
                        <p className="text-xl leading-8 w-[205px] overflow-hidden"><span className="font-bold"> RESEARCH </span> and generate reports that drive growth </p>
                    </div>
                    <div className="flex gap-4" >
                        <img className="w-16 self-start" src={cap} alt="icon" />
                        <p className="text-xl leading-8 w-[205px] overflow-hidden"><span className="font-bold"> ACADEMY </span> to give you the skills for success in your career</p>
                    </div>
                </div>
            </div>
            <div className=" relative mt-40 2xl:mt-12 h-[570px] sm:block hidden w-[600px] 2xl:w-full">
                <p className="font-sans text-[14px] leading-6 absolute bg-ligth-purple px-4 py-2 rounded-[15px] rounded-br-[3px] top-0 left-12" >Hey, check out loreumipsum services.</p>
                <p className="font-sans text-[14px] leading-6 absolute bg-ligth-purple px-4 py-2 rounded-[15px] rounded-br-[3px] top-12 left-3" >I learned from their videos, got my first job.</p>
                <p className="font-sans text-[14px] leading-6 absolute bg-ligth-purple px-4 py-2 rounded-[15px] rounded-br-[3px] top-24 -left-1" >You won&apos;t be disappointed with their services.</p>
                <p className="font-sans text-[14px] leading-6 absolute bg-sky-blue px-4 py-2 rounded-[15px] rounded-br-[3px] top-[170px] -left-1" >You won&apos;t be disappointed with their services.</p>
                <p className="font-sans text-[14px] leading-6 absolute bg-sky-blue px-4 py-2 rounded-[15px] rounded-br-[3px] top-[216px] left-48" >Oh, that&apos;s great.</p>
                <img className="absolute -top-4 right-0" src={vector2} alt="graphic" />
                <img className="absolute -top-[52px] -right-4 rounded-full" src={image2} alt="graphic" />
                <img className="absolute -bottom-0 left-0" src={vector1} alt="graphic" />
                <img className="absolute -bottom-0 -left-3 rounded-full" src={image1} alt="graphic" />
            </div>
        </div>
    )
}

export default SectionThree