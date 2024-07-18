import { ChartTitles } from "@/constants/pl/common";
import { Options } from "@/core/types/pageProps/types";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { FC } from "react";

const SelectInput: FC<{
  type:  ChartTitles.PULSE| ChartTitles.HANDS_DISTANCE | ChartTitles.CURVE_BACK
  className?: string;
  handleChange: (
    event: SelectChangeEvent,
    type:  ChartTitles.PULSE| ChartTitles.HANDS_DISTANCE | ChartTitles.CURVE_BACK,
  ) => void;
  label: string;
  options: Options[];
  value: string;
}> = ({ type, className, value, handleChange, label, options }) => {
  return (
    <FormControl className={className}>
      <InputLabel id={"demo-simple-select-label"}>{label}</InputLabel>
      <Select
        labelId={"demo-simple-select-label"}
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={(e) => handleChange(e, type)}
      >
        {options.map(({ value, name, id }) => {
          return (
            <MenuItem value={value} key={id}>
              {name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
