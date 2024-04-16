import React, { useEffect, useState } from "react";
import tickMark from "../assets/icons/tick-mark.svg";
import downArrow from "../assets/icons/down-arrow.svg";
import { useGlobalContext } from "../context/GlobalContext";
import Button from "./Button";
import Input from "./Input";
import { useForm } from "react-hook-form";

const UserSignUpModal = () => {
  const { isUserSignUpModalOpen, setIsUserSignUpModalOpen } =
    useGlobalContext();
  const [activeTab, setActiveTab] = useState("first");

  const [yesChecked, setYesChecked] = useState(false);
  const [noChecked, setNoChecked] = useState(false);
  const { register } = useForm();

  const toggleCheckbox = (option) => {
    if (option === "yes") {
      setYesChecked(!yesChecked);
      setNoChecked(false);
    } else {
      setNoChecked(!noChecked);
      setYesChecked(false);
    }
  };

  return (
    <div>
      {isUserSignUpModalOpen && (
        <>
          <div
            onClick={() => setIsUserSignUpModalOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-20 z-50 w-full h-full backdrop-blur-[2px]"
          />
          <div className="bg-gray-900 bg-opacity-30 fixed flex justify-center items-center z-50 w-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white px-8 py-9 w-[450px]">
              {activeTab === "first" && (
                <div id="closeModal" className=" flex flex-col gap-8">
                  <p className="font-Inter text-2xl font-600 text-heading">
                    Please enter details
                  </p>

                  <div className="flex items-center justify-between gap-4">
                    <div className="h-1 w-full bg-primary"></div>
                    <div className="h-1 w-full bg-lightGray"></div>
                    <div className="h-1 w-full bg-lightGray"></div>
                    <div className="h-1 w-full bg-lightGray"></div>
                  </div>

                  <p className="font-Inter text-sm font-400 text-heading">
                    Fields with* on it are mandatory.
                  </p>

                  <div className="flex flex-col gap-8">
                    <div>
                      <p className="font-Inter text-heading text-base font-600">
                        Name*
                      </p>
                      <Input type="text" placeholder="Enter your name" />
                    </div>

                    <div>
                      <p className="font-Inter text-heading text-base font-600">
                        Contact Number*
                      </p>
                      <Input type="number" placeholder="Enter your contact" />
                    </div>

                    <Button onClick={() => setActiveTab("second")}>Next</Button>
                  </div>
                </div>
              )}

              {activeTab === "second" && (
                <div id="closeModal" className=" flex flex-col gap-8">
                  <p className="font-Inter text-2xl font-600 text-heading">
                    Please enter details
                  </p>

                  <div className="flex items-center justify-between gap-4">
                    <div className="h-1 w-full bg-primary"></div>
                    <div
                      className={`h-1 w-full ${
                        activeTab === "second" ? "bg-primary" : "bg-lightGray"
                      }`}
                    ></div>
                    <div className="h-1 w-full bg-lightGray"></div>
                    <div className="h-1 w-full bg-lightGray"></div>
                  </div>

                  <p className="font-Inter text-sm font-400 text-heading">
                    Fields with* on it are mandatory.
                  </p>

                  <div className="flex flex-col gap-8">
                    <div>
                      <p className="font-Inter text-heading text-base font-600">
                        Address*
                      </p>
                      <div className="relative inline-block text-left w-full">
                        <select
                          {...register("city", { required: true })}
                          className="block appearance-none cursor-pointer mt-4 bg-bgGray py-[17px] px-4 rounded focus:border border-primary focus:outline-none w-full"
                        >
                          <option value="Choose city/district">
                            Choose city/district{" "}
                          </option>
                          <option value="Kolkata">Kolkata </option>
                          <option value="Mumbai">Mumbai </option>
                          <option value="Bangaloru">Bangaloru </option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 top-4 flex items-center px-3 text-gray-700">
                          <img src={downArrow} alt="" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="font-Inter text-heading text-base font-600">
                        Estimate yearly income
                      </p>

                      <div className="relative inline-block text-left w-full">
                        <select
                          {...register("incomeRange", { required: true })}
                          className="block appearance-none cursor-pointer mt-4 bg-bgGray py-[17px] px-4 rounded focus:border border-primary focus:outline-none w-full"
                        >
                          <option value="Select income range">
                            Select income range{" "}
                          </option>
                          <option value="10,000 - 15,000">
                            10,000 - 15,000
                          </option>
                          <option value="15,000 - 20,000">
                            15,000 - 20,000{" "}
                          </option>
                          <option value="20,000 - 25,000">
                            20,000 - 25,000{" "}
                          </option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 top-4 flex items-center px-3 text-gray-700">
                          <img src={downArrow} alt="" />
                        </div>
                      </div>
                    </div>

                    <Button onClick={() => setActiveTab("third")}>Next</Button>
                  </div>
                </div>
              )}

              {activeTab === "third" && (
                <div id="closeModal" className=" flex flex-col gap-8">
                  <p className="font-Inter text-2xl font-600 text-heading">
                    Please enter details
                  </p>

                  <div className="flex items-center justify-between gap-4">
                    <div className="h-1 w-full bg-primary"></div>
                    <div
                      className={`h-1 w-full ${
                        activeTab === "third" ? "bg-primary" : "bg-lightGray"
                      }`}
                    ></div>
                    <div
                      className={`h-1 w-full ${
                        activeTab === "third" ? "bg-primary" : "bg-lightGray"
                      }`}
                    ></div>
                    <div className="h-1 w-full bg-lightGray"></div>
                  </div>

                  <p className="font-Inter text-sm font-400 text-heading">
                    Fields with* on it are mandatory.
                  </p>

                  <div className="flex flex-col gap-8">
                    <div>
                      <p className="font-Inter text-heading text-base font-600">
                        Crops you harvest*
                      </p>
                      <Input
                        type="text"
                        placeholder="Enter your harvesting type"
                        {...register("harvestingType", { required: true })}
                      />
                    </div>

                    <div>
                      <p className="font-Inter text-heading text-base font-600">
                        Cultivation land area
                      </p>
                      <Input
                        type="number"
                        placeholder="Enter your contact"
                        {...register("cultivationLandArea", { required: true })}
                      />
                    </div>

                    <Button onClick={() => setActiveTab("fourth")}>Next</Button>
                  </div>
                </div>
              )}

              {activeTab === "fourth" && (
                <div id="closeModal" className=" flex flex-col gap-8">
                  <p className="font-Inter text-2xl font-600 text-heading">
                    Please enter details
                  </p>

                  <div className="flex items-center justify-between gap-4">
                    <div className="h-1 w-full bg-primary"></div>
                    <div
                      className={`h-1 w-full ${
                        activeTab === "fourth" ? "bg-primary" : "bg-lightGray"
                      }`}
                    ></div>
                    <div
                      className={`h-1 w-full ${
                        activeTab === "fourth" ? "bg-primary" : "bg-lightGray"
                      }`}
                    ></div>
                    <div
                      className={`h-1 w-full ${
                        activeTab === "fourth" ? "bg-primary" : "bg-lightGray"
                      }`}
                    ></div>
                  </div>

                  <p className="font-Inter text-sm font-400 text-heading">
                    Fields with* on it are mandatory.
                  </p>

                  <div className="flex flex-col gap-8">
                    <div>
                      <p className="font-Inter text-heading text-base font-600">
                        Do you have any domestic animal?
                      </p>
                      <div className="flex items-center mt-2">
                        <input
                          type="checkbox"
                          id="yes"
                          className="hidden"
                          checked={yesChecked}
                          onChange={() => {}}
                          style={{
                            backgroundColor: yesChecked ? "#38a169" : "",
                          }}
                        />
                        <label
                          htmlFor="yes"
                          className="flex items-center cursor-pointer"
                          onClick={() => toggleCheckbox("yes")}
                        >
                          <div className="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center mr-2">
                            <div
                              id="yesCircle"
                              className={`w-3 h-3 rounded-full ${
                                yesChecked ? "bg-primary" : ""
                              }`}
                            ></div>
                          </div>
                          <span className="text-sm">Yes</span>
                        </label>
                        <input
                          type="checkbox"
                          id="no"
                          className="hidden"
                          checked={noChecked}
                          onChange={() => {}}
                          style={{
                            backgroundColor: noChecked ? "#38a169" : "",
                          }}
                        />
                        <label
                          htmlFor="no"
                          className="flex items-center cursor-pointer ml-4"
                          onClick={() => toggleCheckbox("no")}
                        >
                          <div className="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center mr-2">
                            <div
                              id="noCircle"
                              className={`w-3 h-3 rounded-full ${
                                noChecked ? "bg-primary" : ""
                              }`}
                            ></div>
                          </div>
                          <span className="text-sm">No</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <p className="font-Inter text-heading text-base font-600">
                        Which animals do you own and how many?
                      </p>
                      <Input
                        type="text"
                        placeholder="i.e. 2 cattles and a buffalo"
                        {...register("animalDetails", { required: true })}
                      />
                    </div>

                    <Button onClick={() => setActiveTab("successful")}>
                      Next
                    </Button>
                  </div>
                </div>
              )}

              {activeTab === "successful" && (
                <div id="closeModal" className=" flex flex-col gap-6">
                  <h1 className="font-Inter text-2xl font-600 text-heading">
                    Thanks for submission, we’ll get in touch soon.
                  </h1>

                  <div className="flex justify-center">
                    <img className="w-24" src={tickMark} alt="" />
                  </div>

                  <div className="flex flex-col gap-6">
                    <h2 className="font-Inter text-xl font-600 text-heading text-center">
                      Seller Registered Successfully! 🎉🎉
                    </h2>

                    <p className="font-Inter text-base font-400 text-heading text-justify">
                      You have successfully registered in out Pre Registration
                      Program and have unlocked the perks. We’ll get in touch
                      with you soon,
                    </p>

                    <Button
                      onClick={() => {
                        setIsUserSignUpModalOpen(false);
                        setActiveTab("first");
                      }}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserSignUpModal;
