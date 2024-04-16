import dhanLakshamiLogo from "../assets/icons/dhanlakshami.svg"
import upArrowGreen from "../assets/icons/up_arrow_green.svg"
import facebook from "../assets/icons/facebook.svg"
import twitter from "../assets/icons/twitter.svg"
import instagram from "../assets/icons/instagram.svg"
import linkedin from "../assets/icons/linkedin.svg"
import copyRight from "../assets/icons/copyright.svg"


const Footer = () => {
  return <div className="">
    <hr style={{ color: "rgba(106, 106, 106, 0.40)" }} />

    <div className="w-full md:pt-[68px] py-[27px] px-4   md:px-[42px]  ">


      <div className="flex w-full  flex-col  md:flex-row pb-[50.5px]  justify-center md:justify-evenly items-start   md:gap-[50.5px] gap-[52px]">

        <div className=" md:max-w-[295px] min-w-[378px] max-w-[378px] md:min-w-[295px] flex flex-col gap-4 justify-center items-start">
          <div className="flex items-center gap-[7.329px]">
            <img className="w-[53.526px] h-[43.258px]" src={dhanLakshamiLogo} alt="" />
            <div className="flex flex-col ">
              <h6 className="text-[20.253px] font-800 text-brown">Dhanlakshmi Organics</h6>
              <span className="text-primary font-Inter text-[11.102px] font-500">Let's Build Organic</span>
            </div>
          </div>
          <div className="">
            <p className="text-bodyText font-400 text-sm">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
          </div>

        </div>

        <div className="">
          <h6 className="text-black font-Inter text-base font-600 ">Pages</h6>
          <div className="flex flex-col">
            <p className="text-bodyText text-sm font-400 leading-[35px]">Home</p>
            <p className="text-bodyText text-sm font-400 leading-[35px]">Become a Seller</p>
            <p className="text-bodyText text-sm font-400 leading-[35px]">Products</p>
          </div>
        </div>


        <div className="">
          <h6 className="text-black font-Inter text-base font-600 ">Contact Us</h6>
          <div className="flex flex-col">
            <p className="text-bodyText text-sm font-400 leading-[35px]">91355675556</p>
            <p className="text-bodyText text-sm font-400 leading-[35px]">rjdtkhx@gmail.com</p>
            <p className="text-bodyText text-sm font-400 leading-[35px]">2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
          </div>
        </div>


        <div className="">
          <div className="inline-flex md:flex-col w-full md:w-auto justify-between items-center  gap-[88px] shrink-0">
            <div className="flex items-start gap-[18px]">
              <button className="w-6 h-6"> <img className="w-6 h-6" src={facebook} alt="" /></button>
              <button className="w-6 h-6"> <img className="w-6 h-6" src={twitter} alt="" /></button>
              <button className="w-6 h-6"> <img className="w-6 h-6" src={instagram} alt="" /></button>
              <button className="w-6 h-6"> <img className="w-6 h-6" src={linkedin} alt="" /></button>
            </div>
            <div className="self-end">
              <button type="button" className="md:w-6 w-11 h-11  md:h-6">
                <img className="2-full h-full" src={upArrowGreen} alt="" />
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* copyright  */}
      <hr style={{
        color: "rgba(82, 81, 81, 0.13)",
      }} />
      <div className="mt-[24.5px] w-full">
        <p className="flex items-center w-full gap-1 justify-center">
          <img src={copyRight} alt="" />
          <span className="text-bodyText font-Inter text-[11px] font-500 ">2023 Dhanlakshmi Organics. All rights reserved</span>
        </p>
      </div>


    </div>
  </div>


}

export default Footer