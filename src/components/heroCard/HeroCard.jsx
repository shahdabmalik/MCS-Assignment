
const HeroCard = ({
    title,
    subtitle,
    dueDate,
    penaltyFeesOneAmount,
    penaltyFeesOneText,
    penaltyFeesTwoAmount,
    penaltyFeesTwoText,
    cardNum,
    cardNumText
}) => {
    return (
        <div className=" max-w-[400px]  rounded-[20px] bg-white px-8 pt-6 pb-[26px] shadow-lg relative z-50" >
            <div className="font-poppins text-center">
                <h4 className=" text-xl font-bold " >{title} </h4>
                <p className="leading-[26px] mt-[5px]">{subtitle} </p>
            </div>
            <div className="mt-4 rounded-[10px] bg-background-light-gray px-4 pt-3 pb-[18px] flex " >
                <div className="w-[115px]" >
                    <h5 className="font-sans text-lg font-bold leading-7 text-primary" >Due Date</h5>
                    <p className="mt-1 leading-[26px] text-base font-sans pr-2" >{dueDate}</p>
                </div>
                <div>
                    <h5 className="font-sans text-lg font-bold leading-7 text-custom-orange" >Penalty fees</h5>
                    <p className="mt-2 leading-7 text-base font-sans" ><span className="font-bold underline underline-offset-1 decoration-gray-300" >{penaltyFeesOneAmount}</span> {penaltyFeesOneText}</p>
                    {penaltyFeesTwoAmount || penaltyFeesTwoText && <p className="mt-1 leading-7 text-base font-sans" ><span className="font-bold underline underline-offset-1 decoration-gray-300" >{penaltyFeesTwoAmount}</span> {penaltyFeesTwoText}</p>}
                </div>
                <div className="absolute -top-3 -left-3 w-[46px] aspect-square bg-gradient-to-r from-primary to-secondary font-poppins text-2xl font-bold rounded-[10px] text-white flex items-center justify-center" >
                    <div className="flex">{cardNum}<span className="self-start text-base">{cardNumText}</span></div>
                </div>
            </div>
        </div>
    )
}

export default HeroCard