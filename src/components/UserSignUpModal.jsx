import React, { useState } from "react";
import downArrow from "../assets/icons/down-arrow.svg";
import { useGlobalContext } from "../context/GlobalContext";
import Button from "./Button";
import Input from "./Input";
import { useForm } from "react-hook-form";
import ErrorLine from "./ErrorLine";
import backIcon from "../assets/icons/back-svgrepo-com.svg";
import { useMutation } from "@tanstack/react-query";
import { resisterUser } from "../api/user";
import Swal from "sweetalert2";
import Spinner from "./Spinner";
import SuccessModal from "./SuccessModal";

const UserSignUpModal = () => {
  const { isUserSignUpModalOpen, setIsUserSignUpModalOpen } =
    useGlobalContext();
  const [activeTab, setActiveTab] = useState(1);

  const [yesChecked, setYesChecked] = useState(false);
  const [noChecked, setNoChecked] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    reset,
  } = useForm({
    mode: "all",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: resisterUser,
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      });
    },
    onSuccess: () => {
      setActiveTab("successful");
      reset();
    },
  });

  const checkErrors = (keys, nextTab) => {
    let error = false;
    keys.forEach((key) => {
      if (!watch(key)) {
        setError(key, { type: "required" });
        error = true;
      }
    });
    if (!error) setActiveTab(nextTab);
  };

  const onSubmit = (data) => {
    mutate({
      ...data,
      domestic_animal: yesChecked ? data.domestic_animal : "no",
    });
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
            <div className="bg-white px-8 py-9 w-[90vw] max-w-[450px] sm:w-[450px]">
              {activeTab !== "successful" && (
                <div className=" flex flex-col gap-8">
                  <div className="flex gap-3 items-center">
                    {activeTab !== 1 && (
                      <button
                        onClick={() => setActiveTab((prev) => prev - 1)}
                        className="rounded-full p-2 hover:bg-primary/30 transition-colors"
                      >
                        <img src={backIcon} alt="" className="w-5 h-5" />
                      </button>
                    )}
                    <p className="font-Inter text-2xl font-600 text-heading">
                      Please enter details
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="h-1 w-full bg-primary" />
                    <div
                      className={`h-1 w-full ${
                        activeTab !== 1 ? "bg-primary" : "bg-lightGray"
                      }`}
                    />
                    <div
                      className={`h-1 w-full ${
                        activeTab !== 1 && activeTab !== 2
                          ? "bg-primary"
                          : "bg-lightGray"
                      }`}
                    />
                    <div
                      className={`h-1 w-full ${
                        activeTab === 4 ? "bg-primary" : "bg-lightGray"
                      }`}
                    />
                  </div>

                  <p className="font-Inter text-sm font-400 text-heading">
                    Fields with* on it are mandatory.
                  </p>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") e.preventDefault();
                    }}
                    className="flex flex-col gap-8"
                  >
                    {activeTab === 1 && (
                      <>
                        <div>
                          <p className="font-Inter text-heading text-base font-600">
                            Name*
                          </p>
                          <Input
                            type="text"
                            placeholder="Enter your name"
                            {...register("name", { required: true })}
                          />
                          {errors.name && (
                            <ErrorLine error="Name is required" />
                          )}
                        </div>

                        <div>
                          <p className="font-Inter text-heading text-base font-600">
                            Contact Number*
                          </p>
                          <Input
                            type="number"
                            placeholder="Enter your contact"
                            {...register("contact_number", { required: true })}
                          />
                          {errors.contact_number && (
                            <ErrorLine error="Contact number is required" />
                          )}
                        </div>

                        <Button
                          role="button"
                          disabled={!watch("name") || !watch("contact_number")}
                          onClick={() => {
                            checkErrors(["name", "contact_number"], 2);
                          }}
                        >
                          Next
                        </Button>
                      </>
                    )}
                    {activeTab === 2 && (
                      <>
                        <div>
                          <p className="font-Inter text-heading text-base font-600">
                            Address*
                          </p>
                          <div className="relative inline-block text-left w-full">
                            <select
                              {...register("address", { required: true })}
                              className="block appearance-none cursor-pointer mt-4 bg-bgGray py-[17px] px-4 rounded focus:border border-primary focus:outline-none w-full"
                            >
                              <option value="" disabled selected>
                                Choose city/district
                              </option>
                              {["Kolkata", "Mumbai", "Bangaloru"].map(
                                (city) => (
                                  <option key={city} value={city}>
                                    {city}
                                  </option>
                                )
                              )}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 top-4 flex items-center px-3 text-gray-700">
                              <img src={downArrow} alt="" />
                            </div>
                          </div>
                          {errors.address && (
                            <ErrorLine error="Address is required" />
                          )}
                        </div>

                        <div>
                          <p className="font-Inter text-heading text-base font-600">
                            Estimate yearly income*
                          </p>

                          <div className="relative inline-block text-left w-full">
                            <select
                              {...register("income", { required: true })}
                              className="block appearance-none cursor-pointer mt-4 bg-bgGray py-[17px] px-4 rounded focus:border border-primary focus:outline-none w-full"
                            >
                              <option value="" disabled selected>
                                Select income range
                              </option>
                              {[
                                "10,000 - 15,000",
                                "15,000 - 20,000",
                                "20,000 - 25,000",
                              ].map((range) => (
                                <option key={range} value={range}>
                                  {range}
                                </option>
                              ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 top-4 flex items-center px-3 text-gray-700">
                              <img src={downArrow} alt="" />
                            </div>
                          </div>
                          {errors.income && (
                            <ErrorLine error="Income is required" />
                          )}
                        </div>

                        <Button
                          disabled={!watch("address") || !watch("income")}
                          role="button"
                          onClick={() => {
                            checkErrors(["address", "income"], 3);
                          }}
                        >
                          Next
                        </Button>
                      </>
                    )}

                    {activeTab === 3 && (
                      <>
                        <div>
                          <p className="font-Inter text-heading text-base font-600">
                            Crops you harvest*
                          </p>
                          <Input
                            type="text"
                            placeholder="Enter your harvesting type"
                            {...register("crops_harvest", { required: true })}
                          />
                          {errors.crops_harvest && (
                            <ErrorLine error="Crops you harvest is required" />
                          )}
                        </div>

                        <div>
                          <p className="font-Inter text-heading text-base font-600">
                            Cultivation land area*
                          </p>
                          <Input
                            type="number"
                            placeholder="Enter your land area"
                            {...register("land_area", {
                              required: true,
                            })}
                          />
                          {errors.land_area && (
                            <ErrorLine error="Land area is required" />
                          )}
                        </div>

                        <Button
                          disabled={
                            !watch("crops_harvest") || !watch("land_area")
                          }
                          role="button"
                          onClick={() => {
                            checkErrors(["crops_harvest", "land_area"], 4);
                          }}
                        >
                          Next
                        </Button>
                      </>
                    )}

                    {activeTab === 4 && (
                      <>
                        <div>
                          <p className="font-Inter text-heading text-base font-600">
                            Do you have any domestic animal?*
                          </p>
                          <div className="flex items-center mt-2">
                            <input
                              type="checkbox"
                              id="yes"
                              className="hidden"
                              checked={yesChecked}
                              onChange={() => {
                                setYesChecked(true);
                                setNoChecked(false);
                              }}
                              style={{
                                backgroundColor: yesChecked ? "#38a169" : "",
                              }}
                            />
                            <label
                              htmlFor="yes"
                              className="flex items-center cursor-pointer"
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
                              onChange={() => {
                                setNoChecked(true);
                                setYesChecked(false);
                              }}
                              style={{
                                backgroundColor: noChecked ? "#38a169" : "",
                              }}
                            />
                            <label
                              htmlFor="no"
                              className="flex items-center cursor-pointer ml-4"
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

                        {yesChecked && (
                          <div>
                            <p className="font-Inter text-heading text-base font-600">
                              Which animals do you own and how many?*
                            </p>
                            <Input
                              type="text"
                              placeholder="i.e. 2 cattles and a buffalo"
                              {...register("domestic_animal", {
                                required: yesChecked,
                              })}
                            />
                            {errors.animalDetails && (
                              <ErrorLine error="Animal details is required" />
                            )}
                          </div>
                        )}

                        <Button
                          disabled={yesChecked && !watch("domestic_animal")}
                        >
                          {isPending ? (
                            <div className="flex items-center gap-3 justify-center">
                              <span>Loading</span>
                              <Spinner />
                            </div>
                          ) : (
                            <span>Submit</span>
                          )}
                        </Button>
                      </>
                    )}
                  </form>
                </div>
              )}

              {activeTab === "successful" && (
                <SuccessModal
                  type="User"
                  onCloseModal={() => {
                    setIsUserSignUpModalOpen(false);
                    setActiveTab(1);
                  }}
                />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserSignUpModal;
