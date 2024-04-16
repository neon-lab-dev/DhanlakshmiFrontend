import { useEffect, useState } from "react";
import tickMark from "../../assets/icons/tick-mark.svg"


const SellerSignUpModal = ({isSellerModalOpen, setIsSellerModalOpen}) => {
  const [activeTab, setActiveTab] = useState("first");
  console.log(activeTab);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const closestDropdown = event.target.closest("#closeModal");
      if (isSellerModalOpen && closestDropdown === null) {
        setIsSellerModalOpen(false);
        setActiveTab("first")
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSellerModalOpen]);

  

  return (
    <div>
      {isSellerModalOpen && (
        <div className="bg-gray-900 bg-opacity-30  fixed inset-0 flex justify-center items-center z-50 w-full mx-auto ">

           <div className="bg-white px-8 py-9 w-[450px]">
           {
            activeTab === "first" && 
            <div id="closeModal" className=" flex flex-col gap-8">
                <p className="font-Inter text-2xl font-600 text-heading">Please enter details</p>

                <div className="flex items-center justify-between gap-4">
                    <div className="h-1 w-full bg-primary"></div>
                    <div className={`h-1 w-full ${activeTab === "second" ? 'bg-primary' : 'bg-lightGray'}`}></div>
                    <div className="h-1 w-full bg-lightGray"></div>
                </div>

                <div className='flex flex-col gap-8'>
             <div>
            <p className="font-Inter text-heading text-base font-600">Name</p>
            <input
              className="mt-4 bg-bgGray py-[17px] px-4 rounded focus:border border-primary focus:outline-none w-full"
              type="text"
              name=""
              id=""
              placeholder="Enter your name"
            />
          </div>

             <div>
            <p className="font-Inter text-heading text-base font-600">Store Name</p>
            <input
              className="mt-4 bg-bgGray py-[17px] px-4 rounded focus:border border-primary focus:outline-none w-full"
              type="text"
              name=""
              id=""
              placeholder="eg. Shree Shyam Organics"
            />
          </div>

            
          <button onClick={() => setActiveTab("second")} className='bg-primary rounded py-4 px-6 text-white font-Inter text-lg w-full'>Next</button>
        </div>
           </div>
           }

           {
            activeTab === "second" && 
            <div id="closeModal" className=" flex flex-col gap-8">
                <p className="font-Inter text-2xl font-600 text-heading">Please enter details</p>

                <div className="flex items-center justify-between gap-4">
                    <div className="h-1 w-full bg-primary"></div>
                    <div className={`h-1 w-full ${activeTab === "second" ?'bg-primary' : 'bg-lightGray'}`}></div>
                    <div className="h-1 w-full bg-lightGray"></div>
                </div>

                <div className='flex flex-col gap-8'>
             <div>
            <p className="font-Inter text-heading text-base font-600">Address</p>
            <input
              className="mt-4 bg-bgGray py-[17px] px-4 rounded focus:border border-primary focus:outline-none w-full"
              type="text"
              name=""
              id=""
              placeholder="Enter your address"
            />
          </div>

             <div>
            <p className="font-Inter text-heading text-base font-600">Mobile number</p>
            <input
              className="mt-4 bg-bgGray py-[17px] px-4 rounded focus:border border-primary focus:outline-none w-full"
              type="number"
              name=""
              id=""
              placeholder="Enter your number"
            />
          </div>

            
          <button onClick={() => setActiveTab("otp")} className='bg-primary rounded py-4 px-6 text-white font-Inter text-lg w-full'>Next</button>
        </div>
           </div>
           }

           {
            activeTab === "otp" && 
            <div id="closeModal" className=" flex flex-col gap-8">
                <p className="font-Inter text-2xl font-600 text-heading">Please enter details</p>

                <div className="flex items-center justify-between gap-4">
                    <div className="h-1 w-full bg-primary"></div>
                    <div className={`h-1 w-full ${activeTab === "otp" ?'bg-primary' : 'bg-lightGray'}`}></div>
                    <div className={`h-1 w-full ${activeTab === "otp" ? 'bg-primary' : 'bg-lightGray'}`}></div>

                </div>

                <div className='flex flex-col gap-8'>
             <div>
            <p className="font-Inter text-heading text-base font-600">Enter OPT sent to you mobile</p>
            <input
              className="mt-4 bg-bgGray py-[17px] px-4 rounded focus:border border-primary focus:outline-none w-full"
              type="number"
              name=""
              id=""
              placeholder="Enter 4 digit OTP"
            />
          </div>

             <div>
            <p className="font-Inter text-heading text-base font-600">00:29</p>
            <button className='mt-4 border border-primary rounded py-[17px] px-4 text-primary font-500 font-Inter text-lg w-full'>Resend OTP </button>
          </div>

          

            
          <button onClick={() => setActiveTab("successful")} className='bg-primary rounded py-4 px-6 text-white font-Inter text-lg w-full'>Verify</button>
        </div>
           </div>
           }

{
            activeTab === "successful" && 
            <div id="closeModal" className=" flex flex-col gap-6">
                <h1 className="font-Inter text-2xl font-600 text-heading">Thanks for submission, we’ll get in touch soon.</h1>

                    <div className="flex justify-center">
                    <img className="w-24" src={tickMark} alt="" />
                    </div>

                <div className='flex flex-col gap-6'>
                <h2 className="font-Inter text-xl font-600 text-heading text-center">User is Registered Successfully! 🎉🎉</h2>

                <p className="font-Inter text-base font-400 text-heading text-justify">You have successfully registered in out Pre Registration Program and have unlocked the perks. We’ll get in touch with you soon,</p>

          <button onClick={() => setIsSellerModalOpen(false)} className='bg-primary rounded py-4 px-6 text-white font-Inter text-lg w-full'>Close</button>
        </div>
           </div>
           }


           </div>
        </div>
      )}
    </div>
  );
};

export default SellerSignUpModal;
