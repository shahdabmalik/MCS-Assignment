import logo from "../../assets/image1-white.png"
import line from "../../assets/line.svg"
import facebook from "../../assets/facebook.svg"
import insta from "../../assets/insta.svg"
import whatsapp from "../../assets/whatsapp.svg"

const Footer = () => {
    return (
        <>
            <div className="max-w-screen-2xl bg-gradient-to-r from-primary via-primary to-secondary px-5 md:px-12 lg:px-20  xl:px-32 pt-8" >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 pb-8 " >
                    <div className="w-[272px]" >
                        <div className="w-[138px] h-12  mr-[30px]" ><img className="w-full object-cover" src={logo} alt="logo" /></div>
                        <p className="mt-4 font-sans text-[14px] text-white" >India&apos;s first platform dedicated to simplifying partner search</p>
                    </div>
                    <div className="grid gap-12 grid-cols-2 sm:grid-cols-3 md:flex justify-between w-full font-sans" >
                        <div>
                            <p className="text-white font-bold text-[14px]" >COMPANY</p>
                            <p className="text-white  text-base mt-4" >About</p>
                            <p className="text-white  text-base mt-4" >Pricing</p>
                            <p className="text-white  text-base mt-4" >Careers</p>
                        </div>
                        <div>
                            <p className="text-white font-bold text-[14px]" >SOLUTIONS</p>
                            <p className="text-white  text-base mt-4" >Search</p>
                            <p className="text-white  text-base mt-4" >Connect</p>
                            <p className="text-white  text-base mt-4" >Research</p>
                            <p className="text-white  text-base mt-4" >Academy</p>
                        </div>
                        <div>
                            <p className="text-white font-bold text-[14px]" >RESOURCES</p>
                            <p className="text-white  text-base mt-4" >Blogs</p>
                            <p className="text-white  text-base mt-4" >Forms</p>
                        </div>
                        <div>
                            <p className="text-white font-bold text-[14px]" >SUPPORT</p>
                            <p className="text-white  text-base mt-4" >Help</p>
                            <p className="text-white  text-base mt-4" >Contact Us</p>
                        </div>
                        <div>
                            <p className="text-white font-bold text-[14px]" >LEGAL</p>
                            <p className="text-white  text-base mt-4" >Privacy</p>
                            <p className="text-white  text-base mt-4" >Terms</p>
                            <p className="text-white  text-base mt-4" >Accessibility</p>
                        </div>
                    </div>
                </div>
                <img src={line} alt="line" className="pb-8" />
                <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center pb-11">
                    <p className="font-sans text-[14px] text-white" >Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p>
                    <div className="flex gap-6" >
                        <img src={facebook} alt="facebook" />
                        <img src={insta} alt="insta" />
                        <p className="font-sans font-bold text-white text-xl" >in</p>
                        <img src={whatsapp} alt="whatsapp" />
                    </div>
                </div>
            </div>
            <div className="h-[57px] bg-black text-[12px] text-white flex items-center justify-center px-5" >Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved</div>
        </>
    )
}

export default Footer