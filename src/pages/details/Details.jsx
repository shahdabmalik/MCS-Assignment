import Footer from "../../components/footer/Footer"
import TopBar from "../../components/topBar/TopBar"
import star from "../../assets/star.svg"
import dots from "../../assets/dots.svg"
import calender from "../../assets/calender.svg"
import DetailCard from "../../components/detailCard/DetailCard"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const Details = () => {

    const { id } = useParams()

    const [item, setItem] = useState({
        "id": 1,
        "name": "Michael Jackson",
        "image": "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?fit=crop&w=800&q=80",
        "intro": "Expertise in accounting and finance, specializing in financial statements and auditing.",
        "rating": 4.8,
        "reviewCount": 89,
        "taskComplexity": "Basic to complex tasks",
        "price": "€4,370",
        "deliveryTime": "Delivers within 2 days",
        "testimonial": {
            "text": "Exceptional service in managing personal finances and deep understanding of financial markets.",
            "author": "John Doe"
        },
        "about": {
            "from": "INDIA",
            "partnerSince": 2011,
            "averageResponseTime": "30 minutes",
            "description": "Professional Chartered Accountant offering diverse accounting and financial services.",
            "services": ["Financial accounting", "Bookkeeping", "Balance Sheets"],
            "benefits": ["One-time delivery", "24/7 support"]
        }
    })

    useEffect(() => {
        axios
            .get(`http://localhost:3000/ca/${id}`)
            .then((res) => setItem(res.data))
            .catch((err) => {
                console.log("Cannot get data.");
                console.log(err);
            })
    }, [id])

    console.log(item);

    return (
        <div className="max-w-screen-2xl mx-auto" >
            <TopBar />
            <div className="flex flex-col xl:flex-row gap-8 px-5 md:px-12 lg:px-20 xl:px-32 mt-20">
                <div className="xl:w-[515px] " >
                    <h1 className="text-3xl font-bold  font-poppins mt-2" >{item?.name} </h1>
                    <p className="mt-4 font-poppins text-xl" >{item?.intro}</p>
                    <div className="flex gap-2 mt-8 font-poppins text-xl" >
                        <img src={star} alt='star' />
                        <p className="font-bold text-primary" >{item?.rating}</p>
                        <p className="" >({item?.reviewCount})</p>
                    </div>
                    <div className="bg-white rounded-[20px] mt-8 px-7 pt-7 pb-6 shadow-lg" >
                        <div className="flex justify-between" >
                            <p className="font-poppins text-xl">{item?.taskComplexity}</p>
                            <p className="font-poppins text-2xl font-bold">{item?.price}</p>
                        </div>
                        <div className="mt-8 flex gap-2.5" >
                            <img src={calender} alt='calender' />
                            <p className="font-poppins text-xl">{item?.deliveryTime}</p>
                        </div>
                        <div className="mt-6 flex gap-6 font-poppins" >
                            <button type="button" className="px-5 py-2.5  font-bold bg-primary rounded-[10px] text-white" >Request Proposal</button>
                            <button type="button" className="px-5 py-2.5  font-bold bg-white rounded-[10px] text-primary border-2 border-primary" >Chat with me</button>
                        </div>
                    </div>
                    <div className="pt-7 pl-7 pr-6 pb-5 font-poppins bg-white mt-8 rounded-[20px] shadow-lg">
                        <h3 className=" text-4xl font-bold leading-normal ">What people say?</h3>
                        <p className="text-xl mt-4 leading-8" >{item?.testimonial?.text}</p>
                        <div className="mt-[60px] flex justify-center">
                            <img src={dots} alt="dots" />
                        </div>
                    </div>
                </div>
                <div className="flex-grow">
                    <img className="w-full rounded-[20px] " src={item?.image} alt='image' />
                    <h3 className="text-3xl font-bold font-poppins mt-4" >About {item?.name}</h3>
                    <div className="flex gap-8 font-poppins mt-[22px] flex-wrap" >
                        <div className="w-[186px]" >
                            <p className="text-medium-gray font-bold text-base leading-[32px]" >FROM</p>
                            <p className="text-black text-xl leading-[32px] " >{item?.about?.from}</p>
                        </div>
                        <div className="w-[186px]" >
                            <p className="text-medium-gray font-bold text-base leading-[32px]" >PARTNER SINCE</p>
                            <p className="text-black text-xl leading-[32px] " >{item?.about?.partnerSince}</p>
                        </div>
                        <div className="min-w-[186px]" >
                            <p className="text-medium-gray font-bold text-base leading-[32px]" >AVERAGE RESPONSE TIME</p>
                            <p className="text-black text-xl leading-[32px] " >{item?.about?.averageResponseTime}</p>
                        </div>
                    </div>
                    <h4 className="text-medium-gray text-base font-bold font-poppins mt-8" >ABOUT</h4>
                    <p className="mt-2 text-xl leading-[34px] max-w-[733px] font-poppins" >{item?.about?.description}</p>
                    <div className="flex gap-8 mt-8 justify-between flex-wrap" >
                        <div>
                            <p className="text-medium-gray font-bold text-base leading-[32px]" >SERVICES I OFFER</p>
                            <ul className="mt-2 list-disc ml-7 font-poppins" >
                                {item?.about?.services?.map((s, i) => <li key={i} className="text-xl leading-9">{s}</li>)}
                            </ul>
                        </div>
                        <div>
                            <p className="text-medium-gray font-bold text-base leading-[32px]" >WHY ME?</p>
                            <ul className="mt-2 list-disc ml-7 font-poppins" >
                                {item?.about?.benefits?.map((b, i) => <li key={i} className="text-xl leading-9">{b}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-5 md:px-12 lg:px-20 xl:px-32 mb-[132px]" >
                <h3 className="text-3xl font-bold font-poppins mt-[132px] text-center lg:text-start " >Recommended for you</h3>
                <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-8" >
                    <DetailCard
                        title={"Michael Jackson"}
                        subtitle={"I will do business evaluation and corporate services"}
                        rating={4.8}
                        ratingCount={89}
                    />
                    <DetailCard
                        title={"Stevie Wonder"}
                        subtitle={"I will do business evaluation and corporate services"}
                        rating={4}
                        ratingCount={62}
                    />
                    <DetailCard
                        title={"Ray Charles"}
                        subtitle={"I will do business evaluation and corporate services"}
                        rating={4.3}
                        ratingCount={189}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Details