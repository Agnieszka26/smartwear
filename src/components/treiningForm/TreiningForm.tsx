import ButtonContained from "@/attoms/button/ButtonContained";
import { TextMedium } from "@/attoms/text/Text";
import { colors } from "@/constants/colors";
import { texts } from "@/constants/pl/common";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Dayjs } from "dayjs";
import { FC, useState } from "react";
import { BiCycling } from "react-icons/bi";
import { CgGym } from "react-icons/cg";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GrRun } from "react-icons/gr";
import { MdSportsRugby } from "react-icons/md";
import { TbBallFootball } from "react-icons/tb";

interface FormTrainingProps {
  chosenDate: Dayjs;
  handleSetTraining: (date:  Dayjs, training_name: string ) => void;
}
const elements = [
  {
    text: texts.bieganie,
    icon: <GrRun />,
    id: 1,
  },
  {
    text: texts.jazda_na_rowerze,
    icon: <BiCycling />,
    id: 2,
  },
  {
    text: texts.pilka_nozna,
    icon: <TbBallFootball />,
    id: 3,
  },
  {
    text: texts.rugby,
    icon: <MdSportsRugby />,
    id: 4,
  },
  {
    text: texts.silownia,
    icon: <CgGym />,
    id: 5,
  },
  {
    text: texts.areobik,
    icon: <GiWeightLiftingUp color={colors.w3} />,
    id: 6,
  },
];
export const FormTraining: FC<FormTrainingProps> = ({
  chosenDate,
  handleSetTraining,
}) => {
  const [trainingID, setTrainingID] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setTrainingID(event.target.value as string);
  };


  return (
    <FormControl fullWidth className="mt-5">
      <Select
        labelId="training-type"
        id="training-type"
        value={trainingID}
        onChange={handleChange}
      >
        {elements.map(({ text, id }) => {
          return (
            <MenuItem key={text + id} value={text}>
              <TextMedium text={text} />
            </MenuItem>
          );
        })}
      </Select>
      <ButtonContained
        text="Dodaj trening"
        className="mt-5"
        onClick={() => handleSetTraining(chosenDate, trainingID)}
      />
    </FormControl>
  );
};
