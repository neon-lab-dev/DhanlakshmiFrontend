import React from "react";
import Button from "./Button";
import Input from "./Input";
import { useForm } from "react-hook-form";
import ErrorLine from "./ErrorLine";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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
          {...register("contact", { required: true })}
        />
        {errors.contact && <ErrorLine error="Contact is required" />}
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
            {...register("district", { required: true })}
          />
          {errors.district && <ErrorLine error="District is required" />}
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

      <Button className="w-[200px]">Get in touch</Button>
    </form>
  );
};

export default Form;
