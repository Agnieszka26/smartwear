import { AverageValues } from "@/core/types/pageProps/types";
import { Divider, Grid, Typography } from "@mui/material";
import _ from "lodash";
import { FC } from "react";
import ShadowBox from "../shadowBox/ShadowBox";
import { TextBold, TextMedium } from "../text/Text";

interface TileProps {
  title: string | undefined;
  elements: AverageValues[];
  onClick?: () => void;
}
const Tile: FC<TileProps> = ({ title, elements, onClick }) => {
  return (
    <ShadowBox onClick={onClick}>
      <Grid item sm={12}>
        <TextBold text={_.capitalize(title)} />
      </Grid>
      {elements.map(({ name, value }, index) => {
        return (
          <Grid item sm={6} key={name}>
            {index !== 0 && index !== 1 && <Divider />}
            <Typography
              align="center"
              variant="body1"
              className="text-midnight text-lg font-LibreFranklin font-bold"
            >
              {value}
            </Typography>
            <TextMedium text={name} className=" text-center" />
          </Grid>
        );
      })}
    </ShadowBox>
  );
};

export default Tile;
