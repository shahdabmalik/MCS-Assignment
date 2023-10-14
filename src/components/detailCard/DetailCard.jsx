import detail from "../../assets/detail.png"
import star from "../../assets/star.svg"


const DetailCard = ({title, price, subtitle, rating, ratingCount}) => {
    return (
        <div className="w-[405px] rounded-[20px] overflow-hidden pb-5 bg-white shadow-lg" >
            <img src={detail} alt='cardImage' />
            <div className="px-5" >
                <div className="flex justify-between font-poppins font-bold mt-4" >
                    <p className=" text-xl leading-normal">{title}</p>
                    <p className=" text-xl leading-normal">{price}</p>
                </div>
                <p className="mt-1 font-poppins leading-normal " >{subtitle}</p>
                <div className="flex gap-2 mt-3 font-poppins text-xl" >
                    <img src={star} alt='star' />
                    <p className="font-bold text-primary" >{rating}</p>
                    <p className="" >({ratingCount})</p>
                </div>
                <button type="button" className="px-5 py-2.5 font-poppins mt-8 w-full font-semibold bg-primary rounded-[10px] text-white" >View Services</button>
            </div>
        </div>
    )
}

export default DetailCard