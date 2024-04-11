import Select from "react-select";
import { userTypeSelectStyling } from "../../constants/styling";
import { userTypes } from "../../constants/selectValues";

const InputSelectUserType = () => {
  return (
    <div className="font-tajwal mt-8 w-full  ">
      <Select
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={userTypeSelectStyling}
        options={userTypes}
        menuPosition="fixed"
        defaultValue={{
          value: "User",
          label: "User",
        }}
      />
    </div>
  );
};

export default InputSelectUserType;
