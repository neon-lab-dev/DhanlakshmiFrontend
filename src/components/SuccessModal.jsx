import Button from "./Button";
import tickMark from "../assets/icons/tick-mark.svg";

const SuccessModal = ({ props }) => {
  return (
    <div id="closeModal" className=" flex flex-col gap-6">
      <h1 className="font-Inter text-2xl font-600 text-heading">
        Thanks for submission, we’ll get in touch soon.
      </h1>

      <div className="flex justify-center">
        <img className="w-24" src={tickMark} alt="" />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="font-Inter text-xl font-600 text-heading text-center">
          {props.type} is Registered Successfully! 🎉🎉
        </h2>

        <p className="font-Inter text-base font-400 text-heading text-justify">
          You have successfully registered in out Pre Registration Program and
          have unlocked the perks. We’ll get in touch with you soon,
        </p>

        <Button role="button" onClick={props.onCloseModal}>
          Close
        </Button>
      </div>
    </div>
  );
};
export default SuccessModal;
