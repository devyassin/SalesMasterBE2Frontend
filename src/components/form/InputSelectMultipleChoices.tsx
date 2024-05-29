import Select from "react-select";
import { SelectMultipleChoiceStyling } from "../../constants/styling";

type Props = {
  options: any;
  customStyles?: string;
  handleSelect: (value: string | Object) => void;
};

const InputSelectMultipleChoices = ({
  options,
  customStyles,
  handleSelect,
}: Props) => {
  const handleSelectChanges = (selected: any) => {
    console.log(selected);
    handleSelect(selected);
  };

  return (
    <Select
      className={`input-creategig ${customStyles} text-[#000]  font-tajwal`}
      isMulti
      components={{
        IndicatorSeparator: () => null,
      }}
      styles={SelectMultipleChoiceStyling}
      options={options}
      placeholder="Select Products"
      onChange={handleSelectChanges}
    />
  );
};

export default InputSelectMultipleChoices;
