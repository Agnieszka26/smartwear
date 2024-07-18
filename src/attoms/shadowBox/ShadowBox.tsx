import { Grid } from "@mui/material";
import { FC, ReactNode } from "react";
interface ShadowBoxProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
const ShadowBox: FC<ShadowBoxProps> = ({ children, onClick, className}) => {
  return (
    <Grid
      onClick={onClick}
      container
      className={`shadow ${
        onClick && `hover:border-2 border-midnight cursor-pointer`
      }  rounded-xl bg-white border-gray-500 p-5 mb-5 align-middle ${className ??  "align-middle justify-center content-center"}`}
    >
      {children}
    </Grid>
  );
};

export default ShadowBox;
