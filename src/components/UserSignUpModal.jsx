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
                            className="mt-4"
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
                            className="mt-4"
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
                          <Input
                            className="mt-4"
                            type="text"
                            placeholder="Enter your city/district"
                            {...register("address", { required: true })}
                          />
                          {errors.name && (
                            <ErrorLine error="Name is required" />
                          )}
                        </div>

                        <Button
                          disabled={!watch("address")}
                          role="button"
                          onClick={() => {
                            checkErrors(["address"], 3);
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
                              className="mt-4"
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
