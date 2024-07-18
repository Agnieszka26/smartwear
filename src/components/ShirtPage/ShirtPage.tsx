import ButtonContained from "@/attoms/button/ButtonContained";
import ShadowBox from "@/attoms/shadowBox/ShadowBox";
import { TextBold, TextMedium, Title } from "@/attoms/text/Text";
import { texts } from "@/constants/pl/common";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { FC } from "react";
interface ShirtPageProps {
  name: string;
  first_connection: string;
  battery: number;
  model: string;
  last_used: string;
  address_mac: string;
}
const GridItem: FC<{ text1: string; text2: string }> = ({ text1, text2 }) => {
  return (
    <Grid
      item
      sm={12}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      className="p-5"
    >
      <TextMedium text={text1} />

      <TextBold text={text2} />
    </Grid>
  );
};

const ShirtPage: FC<ShirtPageProps> = ({
  name,
  model,
  first_connection,
  last_used,
  address_mac,
}) => {
  return (
    <Box>
      <ShadowBox>

      <Title text={texts.koszulki}   className="text-midnight"/>
      </ShadowBox>

      <ShadowBox>
        <Grid item sm={12} className=" p-5">
          <Typography
            variant="body1"
            className="text-gray-700 font-LibreFranklin font-bold"
          >
            {name}
          </Typography>
        </Grid>
        <Grid item sm={12} className="shadow rounded-xl p-5">
          <GridItem
            text1={texts.pierwsze_polaczenie}
            text2={first_connection}
          />
          <Divider light />
          <GridItem text1={texts.model} text2={model} />
          <Divider light />
          <GridItem text1={texts.ostatnio_uzywana} text2={last_used} />
          <Divider light />
          <GridItem text1={texts.adres_MAC} text2={address_mac} />
        </Grid>

        <Grid item sm={12} className="flex items-center gap-5 m-5">
          <TextMedium
            text={texts.jezei_potrzebujesz_nowej_koszulki}
            className="grow"
          />

          <ButtonContained text={texts.kup_teraz} />
        </Grid>
      </ShadowBox>
    </Box>
  );
};

export default ShirtPage;
