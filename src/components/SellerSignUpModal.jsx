import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useForm } from "react-hook-form";
import Input from "./Input";
import ErrorLine from "./ErrorLine";
import Button from "./Button";
import { useMutation } from "@tanstack/react-query";
import { resisterSeller, verifyOtp } from "../api/seller";
import Swal from "sweetalert2";
import backIcon from "../assets/icons/back-svgrepo-com.svg";
import Spinner from "./Spinner";
import { OTP_TIMER } from "../assets/data/constants";
import SuccessModal from "./SuccessModal";

const SellerSignUpModal = () => {
  const { isSellerSignUpModalOpen, setIsSellerSignUpModalOpen } =
    useGlobalContext();
  const [otpTImer, setOtpTimer] = useState(OTP_TIMER);
  const [activeTab, setActiveTab] = useState(1);

  const {
    register,
    handleSubmit,
    setError,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const {
    register: registerOtp,
    handleSubmit: handleSubmitOtp,
    watch: watchOtp,
    reset: resetOtp,
    formState: { errors: errorsOtp },
  } = useForm({
    mode: "all",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: resisterSeller,
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      });
    },
    onSuccess: () => {
      if (activeTab === 2) {
        setActiveTab("otp");
      }
      if (activeTab === "otp") {
        setOtpTimer(OTP_TIMER);
      }
    },
  });

  const { mutate: mutateOtp, isPending: isOtpPending } = useMutation({
    mutationFn: verifyOtp,
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      });
    },
    onSuccess: () => {
      setActiveTab("success");
      reset();
      resetOtp();
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

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

  useEffect(() => {
    const interval = setInterval(() => {
      if (otpTImer > 0 && activeTab === "otp") {
        setOtpTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [activeTab]);

  const onOtpSubmit = (data) => {
    mutateOtp({
      ...data,
      email: watch("email"),
    });
  };

  return (
    <>
      {isSellerSignUpModalOpen && (
        <>
          <div
            onClick={() => setIsSellerSignUpModalOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-20 z-50 w-full h-full backdrop-blur-[2px]"
          />
          <div className="bg-gray-900 bg-opacity-30 fixed flex justify-center items-center z-50 w-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white px-8 py-9 w-[90vw] max-w-[450px] sm:w-[450px]">
              {activeTab !== "success" && (
                <div id="closeModal" className=" flex flex-col gap-8">
                  <div className="flex gap-3 items-center">
                    {(activeTab === 2 ||
                      activeTab === 3 ||
                      activeTab === "otp") && (
                      <button
                        onClick={() =>
                          setActiveTab((prev) =>
                            prev === "otp" ? 2 : prev - 1
                          )
                        }
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
                        activeTab === "otp" ? "bg-primary" : "bg-lightGray"
                      }`}
                    />
                  </div>

                  {activeTab !== "otp" ? (
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
                              Name
                            </p>
                            <Input
                              className="mt-4"
                              placeholder="Enter your name"
                              {...register("full_name", { required: true })}
                            />
                            {errors.full_name && (
                              <ErrorLine message="Name is required" />
                            )}
                          </div>

                          <div>
                            <p className="font-Inter text-heading text-base font-600">
                              Store Name
                            </p>
                            <Input
                              className="mt-4"
                              placeholder="eg. Shree Shyam Organics"
                              {...register("store_name", { required: true })}
                            />
                            {errors.store_name && (
                              <ErrorLine message="Store Name is required" />
                            )}
                          </div>

                          <Button
                            role="button"
                            disabled={
                              !watch("full_name") || !watch("store_name")
                            }
                            onClick={() => {
                              checkErrors(["full_name", "store_name"], 2);
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
                              placeholder="Enter your address"
                              {...register("address", { required: true })}
                            />
                            {errors.address && (
                              <ErrorLine message="Address is required" />
                            )}
                          </div>

                          <div>
                            <p className="font-Inter text-heading text-base font-600">
                              Email*
                            </p>
                            <Input
                              className="mt-4"
                              placeholder="Enter your email"
                              type="email"
                              {...register("email", { required: true })}
                            />
                            {errors.mobileNumber && (
                              <ErrorLine message="Email is required" />
                            )}
                          </div>

                          <Button
                            disabled={!watch("address") || !watch("email")}
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
                  ) : (
                    <form
                      onSubmit={handleSubmitOtp(onOtpSubmit)}
                      className="flex flex-col gap-8"
                    >
                      <div>
                        <p className="font-Inter text-heading text-base font-600">
                          Enter OPT sent to you mobile
                        </p>
                        <Input
                          className="mt-4"
                          placeholder="Enter 4 digit OTP"
                          type="number"
                          {...registerOtp("otp", { required: true })}
                        />
                        {errorsOtp.otp && (
                          <ErrorLine message="OTP is required" />
                        )}
                      </div>

                      <div className="flex flex-col gap-3">
                        <p className="font-Inter text-heading text-base font-600">
                          {Math.floor(otpTImer / 60)
                            .toString()
                            .padStart(2, "0")}
                          : {(otpTImer % 60).toString().padStart(2, "0")}
                        </p>
                        <div className="flex flex-col gap-4">
                          <Button
                            onClick={() => {
                              mutate({ ...watch() });
                              resetOtp();
                            }}
                            variant="secondary"
                            role="button"
                            type="button"
                            disabled={otpTImer > 0}
                            className="disabled:opacity-50 disabled:pointer-events-none"
                          >
                            {isPending ? (
                              <div className="flex items-center gap-3 justify-center">
                                <span>Sending</span>
                                <Spinner />
                              </div>
                            ) : (
                              <span>Resend OTP</span>
                            )}
                          </Button>

                          <Button disabled={!watchOtp("otp")}>
                            {isOtpPending ? (
                              <div className="flex items-center gap-3 justify-center">
                                <span>Verifying</span>
                                <Spinner />
                              </div>
                            ) : (
                              <span>Verify</span>
                            )}
                          </Button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              )}

              {activeTab === "success" && (
                <SuccessModal
                  type="Seller"
                  onCloseModal={() => {
                    setIsSellerSignUpModalOpen(false);
                    setActiveTab(1);
                  }}
                />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SellerSignUpModal;
