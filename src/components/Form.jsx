import React from "react";
import Button from "./Button";
import Input from "./Input";
import { useForm } from "react-hook-form";
import ErrorLine from "./ErrorLine";
import { useMutation } from "@tanstack/react-query";
import { contact } from "../api/contact";
import Swal from "sweetalert2";
import Spinner from "./Spinner";
const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    mutate(data);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: contact,
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Thank you!",
        text: "Thanks for your message, we’ll get in touch soon.",
      });
      reset();
    },
    onError: () => {
      Swal.fire({
        icon: "error",
        title: "Failed!",
        text: "Failed to send message, Please try again.",
      });
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-7 w-full"
    >
      <div className="flex flex-col gap-2">
        <p className="text-heading text-base font-600">Name</p>
        <Input
          type="text"
          placeholder="Enter your name"
          {...register("name", { required: true })}
        />
        {errors.name && <ErrorLine error="Name is required" />}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-heading text-base font-600">Contact Number</p>
        <Input
          type="text"
          placeholder="Enter your contact"
          {...register("contact_number", { required: true })}
        />
        {errors.contact_number && <ErrorLine error="Contact is required" />}
      </div>

      <div className="flex items-center justify-between gap-5 w-full">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-heading text-base font-600">State</p>
          <Input
            type="text"
            placeholder="Enter your state"
            {...register("state", { required: true })}
          />
          {errors.state && <ErrorLine error="State is required" />}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <p className="text-heading text-base font-600">District/City</p>
          <Input
            type="text"
            placeholder="Enter your district/ city"
            {...register("city", { required: true })}
          />
          {errors.city && <ErrorLine error="District is required" />}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-heading text-base font-600">Message</p>
        <Input
          type="text"
          placeholder="Write your message here..."
          {...register("message", { required: true })}
        />
        {errors.message && <ErrorLine error="Message is required" />}
      </div>

      <Button className="w-[200px]">
        {isPending ? (
          <div className="flex items-center gap-3 justify-center">
            <span>Loading</span>
            <Spinner />
          </div>
        ) : (
          <span>Get in touch</span>
        )}
      </Button>
    </form>
  );
};

export default Form;
