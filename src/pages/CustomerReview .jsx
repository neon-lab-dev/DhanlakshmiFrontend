import orangeThumbSvg from "../assets/icons/orange_thums-up.svg"
import quoteSvg from "../assets/icons/double_quote.svg"
import leftArrowSvg from "../assets/icons/left_arrow.svg"
import man_counting_money from "../assets/images/man_counting_money.svg"
import rightArrowSvg from "../assets/icons/right_arrow_2.svg"
import person_5 from "../assets/images/person_5_horizontal.svg"


import { useState } from "react"

const CustomerReview = () => {

    const [item, setItem] = useState(0)


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

    console.log(REVIEWS.length, item);
    return (
        <div className="my-[52px]  max-h-[952px] flex  justify-center items-center flex-col md:my-[65px]">

            <div className="   flex justify-center items-center flex-col">
                <div className="md:max-w-[717px] max-w-[396px] px-2">

                    <div className="flex justify-center items-center gap-3 self-stretch">
                        <img src={orangeThumbSvg} alt="" />
                        <h6 className="text-black text-lg font-400">Testimonials</h6>
                    </div>

                    <h6 className="my-6 text-black text-center font-700 text-[32px]">Customer Reviews</h6>
                    <p className="text-center">Explore testimonials from satisfied customers and discover the impact of Dhanlakshmi Organics firsthand. Join us and experience the difference in agricultural excellence.</p>

                </div>
            </div>


            {/* carousel start */}

            <div className="flex justify-center md:mt-[76px] mt-[42px]  items-center w-full gap-9 ">
                {/* back btn */}
                <div style={{
                    background: `linear-gradient(0deg, rgba(0, 71, 16, 0.50) 0%, rgba(0, 71, 16, 0.50) 100%), url(${man_counting_money})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"

                }} className={`hidden  w-[96px] h-[351px] rounded-lg md:flex justify-center items-center    `} >
                    <a >
                        <button
                            disabled={item === 0}
                            onClick={() => setItem(item === 0 ? item : item - 1)} type="button" className="">
                            <img src={leftArrowSvg} alt="" />
                        </button>
                    </a>
                </div>

                <div className="transition-transform duration-500">
                    {/*  */}
                    <div className="  bg-white  min-w-[385px] max-w-[385px] md:min-w-[810px] md:max-w-[810px]  mx-3 flex overflow-y-hidden  overflow-x-hidden  rounded-xl  shadow-[rgba(0, 0, 0, 0.10)] shadow-md md:h-[351px] ">
                        {
                            REVIEWS.map(card => <div style={{ transform: `translateX(-${item * 100}%)` }} className="h-full transition-all duration-500 min-w-[385px] md:min-w-[810px]">
                                <div id="item1" className=" flex md:flex-row flex-col  gap-11 items-center  w-full">
                                    <img src={card.img} className="object-cover object-center rounded-l-md rounded-md      lg:rounded-e-none  w-[385px] h-[219px] md:w-[262px] md:h-[351px]" />
                                    <div className="flex md:w-[447.3px] pb-[26px] ps-4 flex-col gap-[24.5px]">
                                        <img className="w-[54.28px] object-contain object-center h-[44.450px]" src={quoteSvg} alt="" />
                                        <p>{card.desc}</p>
                                        <div className="flex flex-col gap-2">
                                            <h6 className="text-heading text-2xl font-700">{card.name}</h6>
                                            <span className="text-bodyText font-400 text-base">{card.address}</span>
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

                }} className={`w-[96px] hidden h-[351px] rounded-lg md:flex justify-center items-center
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
            < div className="flex md:hidden justify-center mt-6 items-center gap-1" >
                {
                    REVIEWS.map((r, i) => <a>
                        <button onClick={() => setItem(i)} className={`h-2 ${+i == item ? "bg-primary" : "bg-gray"} w-2 rounded-full  `}></button>
                    </a >
                    )
                }


            </div >



            {/* carousel end */}

        </div >
    )
}

export default CustomerReview