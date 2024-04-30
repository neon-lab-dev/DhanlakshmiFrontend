import orangeThumbSvg from "../assets/icons/orange_thums-up.svg"
import quoteSvg from "../assets/icons/double_quote.svg"
import leftArrowSvg from "../assets/icons/left_arrow.svg"
import man_counting_money from "../assets/images/man-counting-money.png"
import rightArrowSvg from "../assets/icons/right_arrow_2.svg"
import person_5 from "../assets/images/standing-farmer.png"
import { useRef, useState } from "react"
import bg from "../assets/images/dotdotdot.svg";


const CustomerReview = () => {

    const [item, setItem] = useState(0);
    const [touchStartX, setTouchStartX] = useState(null);
    const [touchMoveX, setTouchMoveX] = useState(null);
    const carouselRef = useRef(null);

    const handleTouchStart = (event) => {
        setTouchStartX(event.touches[0].clientX);
    };

    const handleTouchMove = (event) => {
        setTouchMoveX(event.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStartX && touchMoveX) {
            const difference = touchStartX - touchMoveX;
            if (difference > 100) {
                // Swiped left
                setItem(Math.min(item + 1, REVIEWS.length - 1));
            } else if (difference < -100) {
                // Swiped right
                setItem(Math.max(item - 1, 0));
            }
        }
        setTouchStartX(null);
        setTouchMoveX(null);
    };

    const REVIEWS = [
        {
            name: "Rajesh Kumar",
            desc: "“Ever since I started using Dhanlakshmi Organics fertilizers, my crops have seen unprecedented growth! The quality of their products is unmatched.”",
            address: "Jaipur, Rajastan",
            img: person_5,
            id: 1,
        },
        {
            name: "Rajesh Kumar",
            desc: "“Ever since I started using Dhanlakshmi Organics fertilizers, my crops have seen unprecedented growth! The quality of their products is unmatched.”",
            address: "Jaipur, Rajastan",
            img: person_5,
            id: 2,
        },
        {
            name: "Rajesh Kumar",
            desc: "“Ever since I started using Dhanlakshmi Organics fertilizers, my crops have seen unprecedented growth! The quality of their products is unmatched.”",
            address: "Jaipur, Rajastan",
            id: 3,
            img: person_5
        },
        {
            name: "Rajesh Kumar",
            desc: "“Ever since I started using Dhanlakshmi Organics fertilizers, my crops have seen unprecedented growth! The quality of their products is unmatched.”",
            address: "Jaipur, Rajastan",
            id: 4,
            img: person_5
        },
        {
            name: "Rajesh Kumar",
            desc: "“Ever since I started using Dhanlakshmi Organics fertilizers, my crops have seen unprecedented growth! The quality of their products is unmatched.”",
            address: "Jaipur, Rajastan",
            id: 5,
            img: person_5
        },
    ]



    return (
        <div className="my-[52px]  max-h-[952px] flex  justify-center items-center flex-col md:my-[65px] relative py-12 bg-[#F0F6F2]"
        
        >

            <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-15" style={{
            backgroundImage: `url(${bg})`,
          }}> </div>
            <div className="flex justify-center items-center flex-col z-10" >
                <div className="md:max-w-[717px] max-w-[396px] px-2">

                    <div className="flex justify-center items-center gap-3 self-stretch">
                        <img src={orangeThumbSvg} alt="" />
                        <h6 className="text-black font-Inter text-lg font-400">Testimonials</h6>
                    </div>

                    <h6 className="my-6 text-black text-center font-Inter font-700 text-[32px]">Customer Reviews</h6>
                    <p className="text-center font-Inter text-base font-400">Explore testimonials from satisfied customers and discover the impact of Dhanlakshmi Organics firsthand. Join us and experience the difference in agricultural excellence.</p>

                </div>
            </div>
            


            {/* carousel start */}

            <div className="flex justify-center md:mt-[76px] mt-[42px]  items-center w-full  gap-9 z-10">
                {/* back btn */}
                <div style={{
                    background: `linear-gradient(0deg, rgba(0, 71, 16, 0.50) 0%, rgba(0, 71, 16, 0.50) 100%), url(${man_counting_money})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"

                }} className={`hidden  min-w-[96px] h-[351px] rounded-lg lg:flex justify-center items-center    `} >
                    <a >
                        <button
                            disabled={item === 0}
                            onClick={() => setItem(item === 0 ? item : item - 1)} type="button" className="">
                            <img src={leftArrowSvg} alt="" />
                        </button>
                    </a>
                </div>

                <div className="transition-transform duration-500 z-10">
                    {/*  */}
                    <div
                        className="min-w-[300px] max-w-[320px] sm:max-w-[385px] md:min-w-[810px] md:max-w-[810px] mx-3 flex overflow-y-hidden  overflow-x-hidden lg:overflow-x-hidden  rounded-xl bg-white shadow-[rgba(0, 0, 0, 0.10)] shadow-md md:h-[351px]"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        ref={carouselRef}>
                        {
                            REVIEWS.map(card => <div key={card.id} style={{ transform: `translateX(-${item * 100}%)` }} className="h-full transition-all duration-500 min-w-full md:min-w-[810px]">
                                <div id="item1" className=" flex md:flex-row flex-col  gap-11 items-center  w-full">
                                    <img src={card.img} className="object-cover object-center rounded-l-md rounded-md lg:rounded-e-none  
                                    w-full h-[219px] md:w-[262px] md:h-[351px]
                                    " 
                                    alt=""
                                    />
                                    <div className="flex md:w-[447.3px] pb-[26px] ps-4 flex-col gap-[24.5px]">
                                        <img className="w-[54.28px] object-contain object-center h-[44.450px]" src={quoteSvg} alt="" />
                                        <p className="font-Inter text-base font-400">{card.desc}</p>
                                        <div className="flex flex-col gap-2">
                                            <h6 className="text-heading text-2xl font-Inter font-700">{card.name}</h6>
                                            <span className="text-bodyText font-400 font-Inter text-base">{card.address}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        }


                    </div>
                    {/*  */}
                    {/* next btn */}

                </div>


                <div style={{
                    background: `linear-gradient(0deg, rgba(0, 71, 16, 0.50) 0%, rgba(0, 71, 16, 0.50) 100%), url(${man_counting_money})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}
                    className={`min-w-[96px] hidden h-[351px] rounded-lg lg:flex justify-center items-center
`}>
                    <a >
                        <button
                            disabled={item === (REVIEWS.length - 1)}
                            onClick={() => setItem(item === (REVIEWS.length - 1) ? item : item + 1)} type="button" className="">
                            <img src={rightArrowSvg} alt="" />
                        </button>
                    </a>
                </div >

            </div >
            {/* ellipse for small screen */}
            < div className="flex lg:hidden justify-center mt-6 items-center gap-1" >
                {
                    REVIEWS.map((r, i) => <a>
                        <button key={r.id} onClick={() => setItem(i)} className={`h-2 ${+i == item ? "bg-primary" : "bg-gray"} w-2 rounded-full`}></button>
                    </a >
                    )
                }


            </div >



            {/* carousel end */}

        </div >
    )
}

export default CustomerReview