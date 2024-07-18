import { Typography } from "@mui/material";
import { StaticImageData } from "next/image";
import { Children, FC, ReactNode } from "react";
import Image from "next/image";

export const ModalContent: FC<{
    message: string;
    title: string;
    image?: StaticImageData;
    children?: ReactNode;
  }> = ({ message, title, image,children }) => {
    return (
      <>
        <Typography
          variant="body1"
          className="text-zinc-700 font-medium font-Inter text-center mb-12 text-xl"
        >
          {title}
        </Typography>
       {image && <Image src={image} alt={"image"} /> }
        <Typography
          variant="body1"
          className="text-zinc-700 font-medium font-Inter text-center mb-12 text-xl"
        >
          {message}
        </Typography>
        {children}
      </>
    );
  };
