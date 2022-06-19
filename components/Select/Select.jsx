// import Select from "react-select";
import { Label, SelectWrapper, Select, Option } from "./SelectStyle";

const SimpleSelect = ({ label, onChange, options, placeholder }) => {
  return (
    <SelectWrapper>
      {label ? <Label></Label> : null}
      <Select onChange={onChange} defaultValue="English">
        {options?.map((option, index) => (
          <Option value={option.value} key={index}>
            {option.label}
          </Option>
        ))}
      </Select>
      {/* <Select onChange={onChange} options={options} placeholder={placeholder} /> */}
    </SelectWrapper>
  );
};

export default SimpleSelect;
