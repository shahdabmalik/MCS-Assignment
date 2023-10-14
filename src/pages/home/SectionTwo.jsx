
import vector from "../../assets/sectiontwovector.svg"
import HeroCard from "../../components/heroCard/HeroCard"

const SectionTwo = () => {
    return (
        <>
            <div className="px-5 md:px-12 lg:px-20 xl:px-32 mt-28 relative overflow-hidden pb-8" >
                <h2 className="font-poppins text-4xl md:text-[65px] font-bold leading-normal text-center" >Want to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary" >Join</span> us?</h2>
                <p className="font-poppins text-2xl leading-9 text-center mt-4 text-black z-10 relative" >To remain with us, it is essential that you diligently follow the steps provided</p>
                <div className="mt-[84px] flex flex-wrap justify-center gap-x-8 gap-y-11 " >
                    <HeroCard
                        title={"Commencement of business "}
                        subtitle={"Invested shareholders must confirm payment and office address "}
                        dueDate={"Within 180 days "}
                        penaltyFeesOneAmount={"₹50,000"}
                        penaltyFeesOneText={"for the company"}
                        penaltyFeesTwoAmount={"₹1,000"}
                        penaltyFeesTwoText={"/day for directors"}
                        cardNum={"1"}
                        cardNumText={"st"}
                    />
                    <HeroCard
                        title={"Auditor Appointment "}
                        subtitle={"Company informs new auditor and submits ADT.1 form to ROC. "}
                        dueDate={"Within 30 days "}
                        penaltyFeesOneAmount={"₹300"}
                        penaltyFeesOneText={"per month"}
                        cardNum={"2"}
                        cardNumText={"nd"}
                    />
                    <HeroCard
                        title={"DIN eKYC "}
                        subtitle={"Directors share personal information for identification & verification "}
                        dueDate={"Every year"}
                        penaltyFeesOneAmount={"₹5,000"}
                        penaltyFeesOneText={"one time"}
                        cardNum={"3"}
                        cardNumText={"rd"}
                    />
                    <HeroCard
                        title={"DPT-3 "}
                        subtitle={"Companies report money taken from people to ROC; auditors confirm details. "}
                        dueDate={"Within 30 days "}
                        penaltyFeesOneAmount={"₹300"}
                        penaltyFeesOneText={"per month"}
                        cardNum={"4"}
                        cardNumText={"th"}
                    />
                    <HeroCard
                        title={"MCA Form AOC-4 "}
                        subtitle={"It's like an official report card for a company's documents "}
                        dueDate={"On or Before 30th November  "}
                        penaltyFeesOneAmount={"₹200"}
                        penaltyFeesOneText={"per day"}
                        penaltyFeesTwoText={"(No upper limit)*"}
                        cardNum={"5"}
                        cardNumText={"th"}
                    />
                    <HeroCard
                        title={"MCA Form MGT-7 "}
                        subtitle={"Companies must annually report activities and finances to the registrar. "}
                        dueDate={"On or Before 31st December "}
                        penaltyFeesOneAmount={"₹200"}
                        penaltyFeesOneText={"per day"}
                        penaltyFeesTwoText={"(No upper limit)*"}
                        cardNum={"6"}
                        cardNumText={"th"}
                    />
                </div>
                <div className="absolute bottom-0 right-0 " >
                    <img className="h-full" src={vector} alt="graphic" />
                </div>
                <div className="h-40 w-full absolute bottom-0 right-0  bg-gradient-to-t from-background-white  to-sky-blue" ></div>
            </div>
            <p className="xl:px-32 px-5 md:px-12 lg:px-20 text-[17px] leading-[26px]" >* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 <b>every day</b> until you file the form . There is no maximum penalty amount. So, if you don&apos;t file the form for a year, you will owe ₹73,000 per form</p>
        </>
    )
}

export default SectionTwo