import telephony from "@/assets/images/telefony.png";
import {
  AnimateOnScroll,
  AnimateText,
} from "@/attoms/animateOnScroll/AnimateOnScroll";
import ButtonContained from "@/attoms/button/ButtonContained";
import { texts, textsShirt } from "@/constants/pl/common";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
const Application = () => {
  return (
    <Container
      id="application"
      className="bg-white shadow-2xl rounded-xl pb-2 md:pb-5"
    >
      <AnimateText marginViewPort="-100px">
        <Typography
          variant="h2"
          padding={"2rem 0"}
          className="text-zinc-700 font-bold font-LibreFranklin text-end"
        >
          {textsShirt.appTitle}
        </Typography>
      </AnimateText>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "2fr 2fr" },
          alignItems: "center",
          gap: { xs: "8px", md: "32px" },
        }}
      >
        <AnimateOnScroll>
          <Image src={telephony} alt="telefony z aplikacja" />
        </AnimateOnScroll>
        <AnimateText>
          <Typography
            variant="body1"
            fontSize={16}
            className="text-zinc-500 font-bold font-Inter text-end"
          >
            {textsShirt.monitorowanie_postępu}
          </Typography>
          <Typography
            variant="body1"
            fontSize={16}
            className="text-zinc-500 font-bold font-Inter text-end"
          >
            {textsShirt.appMonitorowaniePostępuParagraph}
          </Typography>
        </AnimateText>
      </Box>
      <AnimateText>
        <Box className="flex align-middle justify-center">
          <ButtonContained text={texts.sciagnij_aplikacje} />{" "}
        </Box>
      </AnimateText>
    </Container>
  );
};

export default Application;
