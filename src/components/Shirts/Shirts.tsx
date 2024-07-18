import img1 from "@/assets/images/shirts/1.jpg";
import img2 from "@/assets/images/shirts/2.jpg";
import img3 from "@/assets/images/shirts/3.jpg";
import img4 from "@/assets/images/shirts/4.jpg";
import {
  AnimateOnScroll,
  AnimateText,
} from "@/attoms/animateOnScroll/AnimateOnScroll";
import ButtonContained from "@/attoms/button/ButtonContained";
import { texts, textsShirt } from "@/constants/pl/common";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

const itemData = [
  {
    img: img1,
    title: "running woman",
  },
  {
    img: img3,
    title: "strong man",
  },
  {
    img: img2,
    title: "playing tennis men",
  },
  {
    img: img4,
    title: "playing tennis men",
  },
];

const Shirts = () => {
  return (
    <Grid id={"shirts"} container spacing={3} className="pt-1 md:pt-24 pb-10">
      <Grid item sm={4} className="relative">
        <AnimateText marginViewPort="-100px">
          <Typography
            variant="h2"
            padding={{ sx: "1rem 0", md: "2rem 0" }}
            className="text-zinc-700 font-bold font-LibreFranklin text-start"
          >
            {textsShirt.sensorsTitle}
          </Typography>
        </AnimateText>
        <AnimateText marginViewPort="-100px">
          <Typography
            variant="body1"
            fontSize={16}
            className="text-zinc-500 font-medium font-Inter text-start"
          >
            {textsShirt.sensorsOverview}
          </Typography>
        </AnimateText>
        <AnimateText>
          <ButtonContained text={texts.kup_teraz} className="mt-5 w-full" />
        </AnimateText>
      </Grid>

      <Grid item sm={4} className="relative">
        <AnimateOnScroll marginViewPort="-100px" delay={0.2}>
          <Image
            src={itemData[1].img}
            alt={itemData[1].title}
            className="shadow-2xl shadow-zinc-500 rounded-xl mb-11"
          />
          <Image
            src={itemData[0].img}
            alt={itemData[0].title}
            className="rounded-xl shadow-2xl shadow-zinc-500"
          />
        </AnimateOnScroll>
      </Grid>

      <Grid item sm={4} className="relative">
        <AnimateOnScroll marginViewPort="-100px" delay={0.3}>
          <Image
            src={itemData[2].img}
            alt={itemData[2].title}
            className="rounded-xl shadow-2xl shadow-zinc-500 mb-11"
          />
          <Image
            src={itemData[3].img}
            alt={itemData[3].title}
            className=" shadow-2xl shadow-zinc-500 rounded-xl"
          />
        </AnimateOnScroll>
      </Grid>
    </Grid>
  );
};

export default Shirts;
