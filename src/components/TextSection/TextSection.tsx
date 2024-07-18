import { AnimateText } from "@/attoms/animateOnScroll/AnimateOnScroll";
import { Typography } from "@mui/material";
import React, { FC } from "react";

const TextSection: FC<{ title: string; paragraph: string }> = ({
  title,
  paragraph,
}) => {
  return (
    <>
      <AnimateText marginViewPort="">
        <Typography
          variant="h2"
          padding={"0 0 2rem 0"}
          className="text-zinc-700 font-bold font-LibreFranklin text-start"
        >
          {title}
        </Typography>
      </AnimateText>
      <AnimateText marginViewPort="">
        <Typography
          variant="body1"
          className="text-zinc-500 font-medium font-Inter text-start mb-8"
        >
          {paragraph}
        </Typography>
      </AnimateText>
    </>
  );
};

export default TextSection;
