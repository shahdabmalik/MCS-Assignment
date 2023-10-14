
import logo from "../../assets/image1.png"
import downArrow from "../../assets/downarrow.svg"
import { AiOutlineMenu, AiOutlineArrowRight } from "react-icons/ai"
import { useState } from "react"
import { Link } from "react-router-dom"

const TopBar = () => {

    const [show, setShow] = useState(false)

    return (
        <div className="lg:h-[85px] h-[60px] flex justify-between items-center font-poppins font-bold px-5 md:px-12 lg:px-20 xl:px-32 " >
            <div className="flex items-center gap-2" >
                <Link to="/" className="w-[138px] mr-[30px]" ><img className="w-full" src={logo} alt="logo" /></Link>
                <div className="lg:flex items-center gap-2 hidden">
                    <div className="flex p-4" >Solutions <img src={downArrow} alt="arrow" /> </div>
                    <div className="flex p-4" >Features <img src={downArrow} alt="arrow" /> </div>
                    <div className="flex p-4" >Blogs </div>
                    <div className="flex p-4" >About <img src={downArrow} alt="arrow" /> </div>
                </div>
            </div>
            <div className="lg:flex gap-4 items-center hidden" >
                <button type='button' className="px-5 py-2.5 border-2 rounded-[10px] border-primary text-primary" >Login</button>
                <button type='button' className="px-5 py-2.5 bg-primary rounded-[10px] border-2 border-primary text-white font-semibold " >Register</button>
            </div>
            <div className="lg:hidden" onClick={() => setShow(!show)} ><AiOutlineMenu size={28} /></div>
            <div className={"fixed flex flex-col top-0 min-h-screen w-full bg-white bg-opacity-95 backdrop-blur-sm transition-all lg:hidden z-[999] " + (show ? " left-0 " : " left-[110%] ")} >
                <div className="h-[60px] w-full flex items-center justify-end px-5 md:px-16 lg:px-32" ><AiOutlineArrowRight size={28} onClick={() => setShow(false)} /></div>
                <div className="flex-grow felx flex-col" >
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex p-4" >Solutions <img src={downArrow} alt="arrow" /> </div>
                        <div className="flex p-4" >Features <img src={downArrow} alt="arrow" /> </div>
                        <div className="flex p-4" >Blogs </div>
                        <div className="flex p-4" >About <img src={downArrow} alt="arrow" /> </div>
                    </div>
                    <div className="flex gap-4 justify-center mt-16 items-center " >
                        <button type='button' className="px-5 py-2.5 border-2 rounded-[10px] border-primary text-primary" >Login</button>
                        <button type='button' className="px-5 py-2.5 bg-primary rounded-[10px] border-2 border-primary text-white font-semibold " >Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar