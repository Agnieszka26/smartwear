import { Tooltip, Typography } from "@mui/material";
import { FC } from "react";
import { FaInfoCircle } from "react-icons/fa";

interface RateProps {
  rate: boolean;
  description?: string;

}
const Rate: FC<RateProps> = ({ rate, description }) => {

  return <Tooltip
    title={
    `Opinia o treningu: ${description}`
    }
  >
    <Typography>
      <FaInfoCircle size={24} className ={rate ? "text-green-600": "text-red-600" }/>
    </Typography>
  </Tooltip>

};

export default Rate;
