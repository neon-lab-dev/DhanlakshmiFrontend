import React from 'react';

const Form = () => {
    return (
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
            <p className="font-Inter text-heading text-base font-600">Contact Number</p>
            <input
              className="mt-4 bg-bgGray py-[17px] px-4 rounded focus:border border-primary focus:outline-none w-full"
              type="text"
              name=""
              id=""
              placeholder="Enter your contact"
            />
          </div>

             <div className='flex items-center justify-between gap-5'>
             <div>
            <p className="font-Inter text-heading text-base font-600">State</p>
            <input
              className="mt-4 bg-bgGray py-[17px] px-4 rounded focus:border border-primary focus:outline-none"
              type="text"
              name=""
              id=""
              placeholder="Enter your state"
            />
          </div>

             <div>
            <p className="font-Inter text-heading text-base font-600">District/City</p>
            <input
              className="mt-4 bg-bgGray py-[17px] px-4 rounded focus:border border-primary focus:outline-none"
              type="text"
              name=""
              id=""
              placeholder="Enter your district/ city"
            />
          </div>
             </div>

             <div>
            <p className="font-Inter text-heading text-base font-600">Message</p>
            <input
              className="mt-4 bg-bgGray py-[17px] px-4 rounded focus:border border-primary focus:outline-none w-full"
              type="text"
              name=""
              id=""
              placeholder="Write your message here..."
            />
          </div>

          <button className='bg-primary rounded py-4 px-6 text-white font-Inter text-lg w-1/2'>Get in Touch</button>
        </div>
    );
};

export default Form;