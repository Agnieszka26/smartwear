import { Typography } from "@mui/material";
import { FC } from "react";
interface TextProps {
  text: string;
  className?: string;
}
export const TextBold: FC<TextProps> = ({ text, className }) => {
  return (
    <Typography
      variant="body1"
      className={`text-gray-700 text-xl font-bold ${
        className ? className : ` `
      }`}
    >
      {text}
    </Typography>
  );
};
export const TextMedium: FC<TextProps> = ({ text, className }) => {
  return (
    <Typography
      variant="body2"
      className={`text-gray-500 text-lg  ${
        className ? className : ` `
      }`}
    >
      {text}
    </Typography>
  );
};

export const Title: FC<TextProps> = ({ text, className }) => {
  return (
    <Typography
      variant="h4"
      className={`text-gray-700 font-bold my-5 ${className}`}
    >
      {text}
    </Typography>
  );
};

export const TextChairTitle: FC<TextProps> = ({ text, className }) => {
  return (
    <Typography
      variant="h1"
      className={`text-gray-900 font-bold text-base md:text-4xl ${className}`}
    >
      {text}
    </Typography>
  );
};

export const TextChairSubtitle: FC<TextProps> = ({ text, className }) => {
  return (
    <Typography
      variant="h2"
      className={`text-gray-800 font-medium text-sm md:text-2xl ${className}`}
    >
      {text}
    </Typography>
  );
};

export const TextChairSectionSubtitle: FC<TextProps> = ({
  text,
  className,
}) => {
  return (
    <Typography
      variant="h3"
      className={`text-gray-800 font-bold text-xl  md:text-4xl z-20 ${className}`}
    >
      {text}
    </Typography>
  );
};

export const TextChairParagraph: FC<TextProps> = ({ text, className }) => {
  return (
    <Typography
      variant="body1"
      className={`text-gray-700  text-sm md:text-md z-20 ${className}`}
    >
      {text}
    </Typography>
  );
};
