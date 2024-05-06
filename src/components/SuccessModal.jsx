import Button from "./Button";
import tickMark from "../assets/icons/tick-mark.svg";

const SuccessModal = (props) => {
  return (
    <div id="closeModal" className=" flex flex-col gap-6">
      <h1 className="font-Inter text-2xl font-600 text-heading text-center">
        Thanks for submission, we will get in touch soon.
      </h1>

      <div className="flex justify-center">
        <img className="w-24" src={tickMark} alt="" />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="font-Inter text-xl font-600 text-heading text-center">
          Registered Successfully!
        </h2>
        <Button role="button" onClick={props.onCloseModal}>
          Close
        </Button>
      </div>
    </div>
  );
};
export default SuccessModal;
