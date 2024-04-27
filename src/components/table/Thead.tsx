import React from "react";
import Column from "./Column";

type Props = { feilds: string[] };

const Thead = ({ feilds }: Props) => {
  console.log("Thead");
  return (
    <thead className="text-xs uppercase font-tajwal bg-[#4a5568] text-[#a0aec0]">
      <tr>
        {feilds.map((field, i) => {
          return <Column key={i} columnName={field} />;
        })}
      </tr>
    </thead>
  );
};

export default React.memo(Thead);
