'use client'
import hero from "@/assets/images/shirts/hero-shirt.png";
import people from "@/assets/images/shirts/imagePopleShowingPhone.png";
import telephoneLeft from "@/assets/images/shirts/phoneLeft.png";
import telephoneRight from "@/assets/images/shirts/phoneRight.png";
import {
  AnimateOnScroll
} from "@/attoms/animateOnScroll/AnimateOnScroll";
import BaseModal from "@/attoms/baseModal/BaseModal";
import ButtonContained from "@/attoms/button/ButtonContained";
import { TextChairSubtitle, TextChairTitle, TextMedium } from "@/attoms/text/Text";
import EuLogos from "@/components/EuLogos/EuLogos";
import {
  HeaderSection,
  ImageBackground,
  Section1,
  Section2,
} from "@/components/Section/Section";
import { texts, textsShirt } from "@/constants/pl/common";
import { Box, Container } from "@mui/material";
import _ from "lodash";
import { useState } from "react";

async function Page() {
  const [pdfModal, setPdfModal] = useState<boolean>(false);
  const [orderModal, setOrderModal] = useState<boolean>(false);
  const openModalPDF = () => {
    setPdfModal(true)
  }
  const openModalOrder = () => {
    setOrderModal(true)
  }
  return (
    <div className="pt-24 ">
      {orderModal && <BaseModal open={orderModal} handleClose={() => setOrderModal(false)}>
        <TextMedium text="Wkrótce dostępne" />
      </BaseModal>}
      <EuLogos />
      <ImageBackground image={hero} isChangeImageWidthOnScreens={true}>
        <Box className="gap-3 absolute  left-[42%] bottom-6 z-50">
          <AnimateOnScroll delay={1} x={100}>
            <div className="grid grid-cols-1">
              <TextChairTitle
                text={_.capitalize(texts.TwójPrywatnyTrener)}
                className="justify-self-end items-end [text-shadow:_0_1px_1px_rgb(225_255_255_/_60%)]"
              />
              <TextChairSubtitle
                text={texts.technologia_w_sluzbie_treningow}
                className="justify-self-end items-end [text-shadow:_0_1px_1px_rgb(225_255_255_/_60%)]"
              />
              <ButtonContained
                onClick={openModalOrder}
                text={"zamów teraz"}
                className=" justify-self-end items-end mt-4 md:px-9 md:py-2"
              />
            </div>
          </AnimateOnScroll>
        </Box>
      </ImageBackground>
      <Container className="pb-4 pt-24">
        <HeaderSection
          text={textsShirt.w_dzisiejszym_pedzacym_tempem_zyciu}
          title={texts.technologia_w_sluzbie_treningow}
          subtitle={texts.czujniki_w_inteligentnych_koszulkach}
        />
      </Container>
      
      
       {pdfModal && <BaseModal open={pdfModal} handleClose={() => setPdfModal(false)}>
       {/* TODO: make proper modal for download app ( it supposed to be instructions in pdf) */}
        pdf
      </BaseModal>} 
     
      <Section1
        images={[people]}
        subtitle={textsShirt.aplikacje_mobilne}
        altSubtitle={"x SMART WEAR x"}
        text={textsShirt.aplikacje_mobilne_zintegrowane_z_inteligentnymi}
        smallTitle={textsShirt.monitorowanie_postępu}
        button={
          <>
            <ButtonContained
              onClick={openModalPDF}
              text={texts.pobierz_aplikacje}
              className="justify-self-center md:justify-self-end px-8 mt-8 md:mt-auto md:px-16 md:h-12"
            />
          </>
        }
      />
      <div id="second-section">

        <Section2
          imageLeft={telephoneLeft}
          imageRight={telephoneRight}
          title={textsShirt.personalizacja_treningow}
          text={textsShirt.personalizacja_treningow_paragraph}
          title2={textsShirt.ostrzezenia_i_powiadomienia}
          text2={textsShirt.ostrzezenia_i_powiadomienia_paragraph}
        />
      </div>
    </div>
  );
}

export default Page;
