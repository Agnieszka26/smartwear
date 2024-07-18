"use client";
import imageAppPreview from "@/assets/images/chair/aplikacja-podglad.png";
import imageAppTelephone from "@/assets/images/chair/aplikacja_telefony.png";
import i2 from "@/assets/images/chair/chair-blue1.png";
import i3 from "@/assets/images/chair/chair-blue2.png";
import imageRight from "@/assets/images/chair/chair-preview-sensors.png";
import hero from "@/assets/images/chair/hero.png";
import menOnChair from "@/assets/images/chair/men-on-chair.png";
import logoOrbhex from "@/assets/images/chair/orbhex-logo.png";
import imageLeft from "@/assets/images/chair/sensors-abstract.png";
// import descriptionProjectChair from "@/assets/images/eu/descriprion-project-chair.png";
// import euLogosDown from "@/assets/images/eu/eu-images-chair.png";
// import euLogosUp from "@/assets/images/eu/FE_POPW_poziom_pl-1_rgb.png";
import { AnimateOnScroll } from "@/attoms/animateOnScroll/AnimateOnScroll";
import ButtonContained from "@/attoms/button/ButtonContained";
import { TextChairSubtitle, TextChairTitle } from "@/attoms/text/Text";
import EuLogos from "@/components/EuLogos/EuLogos";
import {
  ImageBackground,
  Section1,
  Section2,
  Section3,
  Section4,
} from "@/components/Section/Section";
import { texts } from "@/constants/pl/common";
import { Box } from "@mui/material";
import _ from "lodash";
import Image from "next/image";

const textsChair = {
  title: "Inteligentne krzesła SmartWear",
  subtitle: "Siadaj wygodnie, my zajmiemy się resztą",
  chairTitle: "Inteligentne krzesło przyszłości: Nowa era wygody i technologii",
  chair:
    "Inteligentne krzesło jest zaprojektowane tak, aby doskonale dopasować się do każdej osoby, która na nim siedzi. Dzięki wbudowanym czujnikom, krzesło może rozpoznać kształt ciała, wagę, postawę oraz preferencje użytkownika. Na podstawie tych danych krzesło automatycznie dostosowuje swoje ustawienia, zapewniając optymalne wsparcie dla kręgosłupa i mięśni. Dla osób pracujących przez wiele godzin dziennie, inteligentne krzesło to prawdziwe błogosławieństwo, które minimalizuje napięcie mięśni i zmęczenie.",
  about_app:
    "Aplikacja do kontroli, która jest częścią inteligentnego krzesła, umożliwia użytkownikowi pełną kontrolę nad jego funkcjami. Za pomocą aplikacji można dostosować ustawienia krzesła, takie jak wysokość siedzenia, nachylenie oparcia, czy nawet intensywność masażu. Aplikacja pozwala również na monitorowanie postawy i aktywności siedzącej osoby, dając wskazówki, jak poprawić swoje nawyki siedzenia.",
  sensors: [
    `Jednym z najważniejszych elementów inteligentnego krzesła są jego zaawansowane czujniki.`,
    `Czujniki te są odpowiedzialne za zbieranie danych na temat użytkownika, takich jak temperatura ciała, puls, czy nawet poziom stresu.`,
    `Dzięki tym informacjom krzesło może dostosować się do aktualnego stanu użytkownika, oferując dodatkowe wsparcie, gdy jest to potrzebne.`,
    `Na przykład, jeśli krzesło wykryje zwiększone napięcie mięśni u użytkownika, może automatycznie włączyć funkcję masażu, pomagając mu się zrelaksować i odprężyć.`,
  ],
  titleManOnChair: `Inteligentne krzesło smart chair`,
};

async function Page() {
  return (
    <div className="pt-12 md:pt-20 pb-14 md:pb-auto md:px-auto">
      <EuLogos />
      <ImageBackground image={hero} isChangeImageWidthOnScreens={true}>
        <Box className="gap-3 absolute md:left-8 left-2 top-6 md:top-16 z-50 w-[65%] md:w-2/4 h-5/6">
          <div className="grid grid-cols-1">
            <AnimateOnScroll
              delay={1}
              x={100}
              className="justify-self-end items-end"
            >
              <Image
                src={logoOrbhex}
                alt={"logo Orbhex"}
                className="absolute  justify-self-end items-end  h-16 left-1 bottom-0  md:relative  md:mb-4  w-16 md:w-32 md:h-32"
              />
            </AnimateOnScroll>
            <AnimateOnScroll
              delay={1}
              x={100}
              className="justify-self-end items-end"
            >
              <TextChairTitle
                text={_.capitalize(textsChair.title)}
                className="text-right"
              />
              <TextChairSubtitle
                text={textsChair.subtitle}
                className="text-right"
              />
            </AnimateOnScroll>
            <AnimateOnScroll
              delay={1}
              x={100}
              className="justify-self-end items-end"
            >
              <ButtonContained
                text={"zamów teraz"}
                className=" justify-self-end items-end mt-4 md:px-8"
              />
            </AnimateOnScroll>
          </div>
        </Box>
      </ImageBackground>

      <Section1
        subtitle={textsChair.chairTitle}
        text={textsChair.chair}
        altSubtitle="x DREAM CHAIR x"
        images={[i3, i2]}
        button={
          <ButtonContained
            text={"zamów teraz"}
            className="justify-self-center md:justify-self-end px-8 mt-4 md:mt-32 md:px-16 md:h-12 "
          />
        }
        smallTitle={""}
      />
      <Section2
        imageLeft={imageLeft}
        imageRight={imageRight}
        title={texts.sensors}
        text={textsChair.sensors}
      />
      <Section3
        logo={logoOrbhex}
        imageMain={menOnChair}
        buttons={[texts.technologia, texts.zdrowie, texts.design]}
        title={textsChair.titleManOnChair}
      />
      <Section4
        images={[imageAppTelephone, imageAppPreview]}
        subtitle={texts.aplikacja}
        altSubtitle={texts.pobierz_aplikacje}
        text={textsChair.about_app}
      />

    </div>
  );
}

export default Page;
