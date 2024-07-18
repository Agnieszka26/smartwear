"use client";
import {
  AnimateOnScroll,
  AnimateText,
} from "@/attoms/animateOnScroll/AnimateOnScroll";
import ButtonContained from "@/attoms/button/ButtonContained";
import {
  TextChairParagraph,
  TextChairSectionSubtitle,
  TextChairTitle,
} from "@/attoms/text/Text";
import { Box, Container } from "@mui/material";
import _ from "lodash";
import Image, { StaticImageData } from "next/image";
import { FC, ReactNode } from "react";

interface Section4Props {
  images: StaticImageData[];
  subtitle: string;
  altSubtitle: string;
  text: string;
}
interface Section1Props extends Section4Props {
  button: ReactNode;
  smallTitle: string;
}

interface Section2Props {
  imageLeft: StaticImageData;
  imageRight: StaticImageData;
  title: string;
  text: string[];
  title2?: string;
  text2?: string[];
}

interface Section3Props {
  imageMain: StaticImageData;
  logo: StaticImageData;
  title: string;
  buttons: string[];
}

interface ImageBackgroundProps {
  image: StaticImageData;
  children: ReactNode;
  isChangeImageWidthOnScreens: boolean;
}

export const Section1: FC<Section1Props> = ({
  subtitle,
  altSubtitle,
  text,
  images,
  button,
  smallTitle,
}) => {
  return (
    <div className="relative pb-8 md:pb-44 pt-8 md:pt-12">
      <div className={` md:h-[450px] md:bg-happy-gray`}>
        <Container  className="grid grid-cols-1 md:grid-cols-2 md:pt-8 gap-8 px-0">
          <Container className="grid grid-cols-1 gap-2 items-end">
            <AnimateText>
              <TextChairParagraph text={altSubtitle} />
            </AnimateText>
            <AnimateText>
              <TextChairSectionSubtitle text={subtitle} />
            </AnimateText>

            {smallTitle && (
              <AnimateText>
                <TextChairParagraph
                  text={smallTitle}
                  className="font-medium m-0 "
                />
              </AnimateText>
            )}
            <AnimateText>
              <TextChairParagraph text={text} />
            </AnimateText>

            {button}
          </Container>
          <Box className={"flex items-end z-20  gap-8 "}>
            {images.map((x) => {
              return (
                <AnimateOnScroll key={String(x)}>
                  <Image
                    src={x}
                    alt={"Chair preview"}
                    className="shadow-2xl shadow-zinc-500 rounded-lg"
                  />
                </AnimateOnScroll>
              );
            })}
          </Box>
        </Container>
      </div>
    </div>
  );
};
export const Section2: FC<Section2Props> = ({
  text,
  imageLeft,
  imageRight,
  title,
  text2,
  title2,
}) => {
  return (
    <div className="relative"  id="second-section">
      <Container className="grid grid-cols-1 md:grid-cols-[3fr_6fr_3fr] pt-4 md:pt-8 gap-8">
        <AnimateOnScroll>
          <Image src={imageLeft} alt="image" className="md:flex hidden" />
        </AnimateOnScroll>
        <Box>
          <AnimateText>
            <TextChairTitle text={_.capitalize(title)} />
          </AnimateText>
          {text.map((t) => {
            return (
              <AnimateText key={t}>
                <TextChairParagraph className="py-1 md:py-4" text={t} />
              </AnimateText>
            );
          })}
          {title2 && (
            <TextChairTitle text={_.capitalize(title2)} className="pt-8" />
          )}
          {text2?.map((t) => {
            return (
              <AnimateText key={t}>
                <TextChairParagraph key={t} className="py-1 md:py-4" text={t} />
              </AnimateText>
            );
          })}
        </Box>

        <Box className="flex gap-2">
          <AnimateOnScroll>
            <Image
              src={imageRight}
              alt="image"
              className="flex w-1/2 md:w-auto"
            />
          </AnimateOnScroll>
          <AnimateOnScroll className="md:hidden flex  w-1/2 md:w-auto">
            <Image
              src={imageLeft}
              alt="image"
              className="md:hidden flex  w-1/2 md:w-auto"
            />
          </AnimateOnScroll>
        </Box>
      </Container>
    </div>
  );
};
export const Section3: FC<Section3Props> = ({
  imageMain,
  logo,
  buttons,
  title,
}) => {
  return (
    <Container className={"h-1/6 w-screen"}>
      <TextChairTitle
        text={_.capitalize(title)}
        className="py-4 md:py-8 text-center"
      />
      <ImageBackground image={imageMain} isChangeImageWidthOnScreens={false}>
        <Box className="absolute z-50 md:right-24 md:top-8 top-3  right-3 ">
          <AnimateOnScroll delay={0.85} x={100}>
            <Image
              src={logo}
              alt="orbhex logo"
              className=" md:mb-4  w-16 md:w-32 h-16 md:h-32"
            />
          </AnimateOnScroll>
        </Box>
        <Box className="gap-1 md:gap-3 absolute -left-4 bottom-0 md:-left-8  md:bottom-[15%]  z-50 grid grid-cols-1">
          {buttons.map((b, i) => {
            return (
              <AnimateOnScroll delay={Number(`0.1${i}`)} x={20} key={b}>
                <ButtonContained
                  text={b}
                  className={`w-full md:px-12 md:py-3 ${
                    i == 1 && "bg-midnight-light"
                  } ${i == 2 && "bg-midnight-lighter"}`}
                />
              </AnimateOnScroll>
            );
          })}
        </Box>
      </ImageBackground>
    </Container>
  );
};

export const ImageBackground: FC<ImageBackgroundProps> = ({
  image,
  children,
  isChangeImageWidthOnScreens,
}) => {
  return (
    <div
      className={`container  m-auto relative ${
        isChangeImageWidthOnScreens &&
        "md:px-[6vw] lg:px-[9vw] md:w-auto w-screen "
      } md:w-auto`}
    >
      {children}
      <AnimateOnScroll x={-50} delay={0}>
        <Image
          src={image}
          alt="hero img"
          className={`z-0 rounded-2xl ${
            isChangeImageWidthOnScreens && ""
          } w-full`}
        />
      </AnimateOnScroll>
    </div>
  );
};

export const HeaderSection: FC<{
  text: string;
  title: string;
  subtitle?: string;
  className?: string;
}> = ({ text, title, subtitle, className }) => {
  return (
    <Container className={className}>
      <AnimateText>
        <TextChairTitle text={_.capitalize(title)} className="text-center" />
      </AnimateText>
      <AnimateText>
        {subtitle && (
          <TextChairParagraph
            text={subtitle}
            className="text-center font-medium text-lg md:text-xl pt-2 pb-4"
          />
        )}
      </AnimateText>
      <AnimateText>
        <TextChairParagraph text={text} className="text-center md:py-4" />
      </AnimateText>
    </Container>
  );
};

export const Section4: FC<Section4Props> = ({
  text,
  subtitle,
  images,
  altSubtitle,
}) => {
  return (
    <Container
      className={
        "grid grid-cols-1 justify-items-center gap-4 md:gap-2 pt-3 md:pt-auto"
      }
    >
      <HeaderSection text={text} title={subtitle} />

      <Box className={"grid grid-cols-1 md:grid-cols-2 items-center"}>
        {images.map((i) => {
          return (
            <AnimateOnScroll key={String(i)}>
              <Image
                src={i}
                alt="Obrazek aplikacji"
                className="z-0 w-full align-self-end items-end"
              />
            </AnimateOnScroll>
          );
        })}
      </Box>
      <AnimateOnScroll>
        <ButtonContained text={altSubtitle} className="px-12 py-3" />
      </AnimateOnScroll>
    </Container>
  );
};
