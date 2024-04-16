import { useEffect, useState } from "react";
import tickMark from "../assets/icons/tick-mark.svg";
import { useGlobalContext } from "../context/GlobalContext";
import { useForm } from "react-hook-form";
import Input from "./Input";
import ErrorLine from "./ErrorLine";
import Button from "./Button";

const SellerSignUpModal = () => {
  const { isSellerSignUpModalOpen, setIsSellerSignUpModalOpen } =
    useGlobalContext();
  const [activeTab, setActiveTab] = useState("first");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!isSellerSignUpModalOpen) {
      setActiveTab("first");
    }
  }, [isSellerSignUpModalOpen]);

  const onSubmit = (data) => {
    alert(data);
  };

  return (
    <>
      {isSellerSignUpModalOpen && (
        <>
          <div
            onClick={() => setIsSellerSignUpModalOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-20 z-50 w-full h-full backdrop-blur-[2px]"
          />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-900 bg-opacity-30 fixed flex justify-center items-center z-50 w-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="bg-white px-8 py-9 w-[450px]">
              {activeTab === "first" && (
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
                  </div>

                  <div className="flex flex-col gap-8">
                    <div>
                      <p className="font-Inter text-heading text-base font-600">
                        Name
                      </p>
                      <Input
                        placeholder="Enter your name"
                        {...register("name", { required: true })}
                      />
                      {errors.name && <ErrorLine message="Name is required" />}
                    </div>

                    <div>
                      <p className="font-Inter text-heading text-base font-600">
                        Store Name
                      </p>
                      <Input
                        placeholder="eg. Shree Shyam Organics"
                        {...register("storeName", { required: true })}
                      />
                      {errors.storeName && (
                        <ErrorLine message="Store Name is required" />
                      )}
                    </div>

                    <Button
                      role="button"
                      onClick={() => setActiveTab("second")}
                    >
                      Next
                    </Button>
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
                  </div>

                  <div className="flex flex-col gap-8">
                    <div>
                      <p className="font-Inter text-heading text-base font-600">
                        Address
                      </p>
                      <Input
                        placeholder="Enter your address"
                        {...register("address", { required: true })}
                      />
                      {errors.address && (
                        <ErrorLine message="Address is required" />
                      )}
                    </div>

                    <div>
                      <p className="font-Inter text-heading text-base font-600">
                        Mobile number
                      </p>
                      <Input
                        placeholder="Enter your mobile number"
                        {...register("mobileNumber", { required: true })}
                      />
                      {errors.mobileNumber && (
                        <ErrorLine message="Mobile number is required" />
                      )}
                    </div>

                    <Button role="button" onClick={() => setActiveTab("otp")}>
                      Next
                    </Button>
                  </div>
                </div>
              )}

              {activeTab === "otp" && (
                <div id="closeModal" className=" flex flex-col gap-8">
                  <p className="font-Inter text-2xl font-600 text-heading">
                    Please enter details
                  </p>

                  <div className="flex items-center justify-between gap-4">
                    <div className="h-1 w-full bg-primary"></div>
                    <div
                      className={`h-1 w-full ${
                        activeTab === "otp" ? "bg-primary" : "bg-lightGray"
                      }`}
                    ></div>
                    <div
                      className={`h-1 w-full ${
                        activeTab === "otp" ? "bg-primary" : "bg-lightGray"
                      }`}
                    ></div>
                  </div>

                  <div className="flex flex-col gap-8">
                    <div>
                      <p className="font-Inter text-heading text-base font-600">
                        Enter OPT sent to you mobile
                      </p>
                      <Input
                        placeholder="Enter 4 digit OTP"
                        {...register("otp", { required: true })}
                      />
                      {errors.otp && <ErrorLine message="OTP is required" />}
                    </div>

                    <div className="flex flex-col gap-3">
                      <p className="font-Inter text-heading text-base font-600">
                        00:29
                      </p>
                      <div className="flex flex-col gap-4">
                        <Button variant="secondary" role="button">
                          Resend OTP
                        </Button>

                        <Button
                          role="button"
                          onClick={() => setActiveTab("successful")}
                        >
                          Verify
                        </Button>
                      </div>
                    </div>
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
                      User is Registered Successfully! 🎉🎉
                    </h2>

                    <p className="font-Inter text-base font-400 text-heading text-justify">
                      You have successfully registered in out Pre Registration
                      Program and have unlocked the perks. We’ll get in touch
                      with you soon,
                    </p>

                    <Button
                      role="button"
                      onClick={() => setIsSellerSignUpModalOpen(false)}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default SellerSignUpModal;
