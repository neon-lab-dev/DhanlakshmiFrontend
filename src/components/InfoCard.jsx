const InfoCard = ({ title, subtitle, desc }) => {
  return (
    <div
      className="bg-surface p-6 rounded-lg w-full backdrop-blur-none flex flex-col text-center items-center justify-center gap-2 md:w-[300px]"
      style={{
        boxShadow: "0px 0px 72px 0px rgba(0, 0, 0, 0.10)",
      }}
    >
      <h3 className="font-700 text-[56px] text-primary min-w-fit">{title}</h3>
      <span className="font-600 text-[20px] text-heading">{subtitle}</span>
      <p className="max-w-[230px] text-bodyText text-base ">{desc}</p>
    </div>
  );
};

export default InfoCard;
