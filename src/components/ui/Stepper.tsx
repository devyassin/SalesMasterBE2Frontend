import { Status } from "../../types";

type Props = {
  status: string;
};

const Stepper = ({ status }: Props) => {
  return (
    <div className="grid grid-cols-5  ">
      <div></div>
      <div className="flex  ">
        <div className="text-[#A3DE83]">NOUVELLE</div>
        <span className="bg-[#4299e1] h-[4px] rounded-full   mt-6 w-full" />
      </div>
      <div className="flex  ">
        <div
          className={`${
            status === "ENCOURS" || status === "COMPLETEE"
              ? "text-[#A3DE83]"
              : ""
          }`}
        >
          ENCOURS
        </div>
        <span
          className={`${
            status === "ENCOURS" || status === "COMPLETEE"
              ? "bg-[#4299e1] "
              : "bg-[#C49494]"
          }  h-[4px] rounded-full   mt-6 w-full`}
        />
      </div>
      <div className="flex ">
        <div className={`${status === "COMPLETEE" ? "text-[#A3DE83]" : ""}`}>
          COMPLETED
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Stepper;
