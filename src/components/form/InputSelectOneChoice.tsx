import Select, {
  GroupBase,
  OptionsOrGroups,
  PropsValue,
  SingleValue,
} from "react-select";
import { SelectOneChoiceStyling } from "../../constants/styling";

type Props = {
  options:
    | OptionsOrGroups<
        {
          value: string | Object;
          label: string;
        },
        GroupBase<{
          value: string;
          label: string;
        }>
      >
    | undefined;
  defaultValue:
    | PropsValue<{
        value: string;
        label: string;
      }>
    | undefined;

  handleSelect: (value: string | Object) => void;
};

const InputSelectOneChoice = ({
  options,
  defaultValue,
  handleSelect,
}: Props) => {
  const handleSelectChanges = (
    selected: SingleValue<{
      value: any;
      label: string;
    }>
  ) => {
    handleSelect(selected?.value);
  };

  return (
    <Select
      className="input-creategig text-[#000]  font-tajwal "
      components={{
        IndicatorSeparator: () => null,
      }}
      styles={SelectOneChoiceStyling}
      options={options}
      defaultValue={defaultValue}
      onChange={handleSelectChanges}
    />
  );
};

export default InputSelectOneChoice;
