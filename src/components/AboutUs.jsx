import React from "react";

export default function AboutUs() {
  const whyChooseUs = [
    "We prioritize excellence in crafting top-quality agricultural solutions for optimal crop health and productivity.",
    "Committed to environmental stewardship, our products promote sustainable farming practices for a greener future.",
    "Thoughtfully formulated and meticulously crafted solutions tailored for cattle nutrition.",
    "Remarkable growth in production and quality of crops.",
    "Proven quality at the right selling point.",
  ];
  return (
    <section className="justify-center px-20 max-md:px-0 mt-16 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col-reverse max-md:gap-0 max-md:w-full">
        <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full max-md:h-[300px]">
          <div style={{backgroundImage: 'url(./Images/AboutUsImg.png)'}} className="flex flex-col grow h-[100%] bg-cover bg-center rounded-3xl	max-md:rounded-none justify-center max-md:mt-10 max-md:max-w-full">
          </div>
        </div>
        <div className="flex py-4 flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:px-5  justify-center mt-2 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-3 max-md:flex-wrap">
              <div className="flex justify-center items-center p-1.5 w-9 h-9 rounded-lg bg-amber-500 bg-opacity-30">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.5246 12.5001C23.5246 6.41116 18.5885 1.4751 12.4996 1.4751C6.41067 1.4751 1.47461 6.41116 1.47461 12.5001C1.47461 18.589 6.41067 23.5251 12.4996 23.5251C18.5885 23.5251 23.5246 18.589 23.5246 12.5001Z"
                    stroke="#DF9718"
                    stroke-width="1.2"
                    stroke-miterlimit="10"
                  />
                  <circle cx="12.5098" cy="18.3374" r="1.125" fill="#DF9718" />
                  <path
                    d="M9.13867 9.84137C9.1385 8.0505 10.3463 6.30129 12.7203 6.30127C15.0942 6.30125 16.6223 8.66844 15.4691 10.8826C14.4279 12.8817 12.4704 13.4638 12.4704 15.7138"
                    stroke="#DF9718"
                    stroke-width="1.2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <h2 className="my-auto text-lg capitalize text-zinc-800 max-md:max-w-full">
                About us
              </h2>
            </div>
            <h3 className="mt-3 text-3xl font-bold font-bold capitalize text-zinc-800 max-md:max-w-full">
              Vision of dhanlaskhmi organics
            </h3>
            <p className="mt-3 text-base leading-6 text-stone-500 max-md:max-w-full">
              Dhanlakshmi Organics is a leading provider of agricultural
              solutions, offering high-quality fertilizers, pesticides, and
              sustainable farming practices. With a strong commitment to quality
              and innovation, we empower farmers nationwide to cultivate
              thriving crops and foster sustainable growth in the agricultural
              sector.
            </p>
            <div className="mt-8"></div>
            <h3 className="mt-10 text-3xl font-bold capitalize text-zinc-800 max-md:max-w-full">
              Why Choose us?
            </h3>
            <ul className="mt-6 text-base leading-8 text-stone-500 max-md:max-w-full">
              {whyChooseUs.map((point, index) => (
                <li key={index}>
                  {point}
                  <br />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
