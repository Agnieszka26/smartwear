import address from "@/assets/icons/footer/adres.png";
import email from "@/assets/icons/footer/email.png";
import phone from "@/assets/icons/footer/telefon.png";
import {
  TextChairParagraph,
  TextChairSectionSubtitle,
} from "@/attoms/text/Text";
import { contact_mail, contact_tel, texts } from "@/constants/pl/common";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
const FooterElement: FC<{
  image: StaticImageData;
  title: string;
  par1: string;
  par2?: string;
}> = ({ image, title, par1, par2 }) => {
  return (
    <Box className="md-pb-auto pb-8">
      <Image src={image} alt="siedziba" className="m-auto h-20 w-20" />
      <TextChairParagraph
        text={title}
        className="font-bold text-center md:pb-4 md:text-lg pt-5"
      />
      <TextChairParagraph className="text-center" text={par1} />
      {par2 && <TextChairParagraph className="text-center" text={par2} />}
    </Box>
  );
};

const Footer = () => {
  return (
    <div className=" bg-happy-gray w-full pt-12">
      <TextChairSectionSubtitle
        text={texts.kontakt_z_nami}
        className="text-center pb-12"
      />
      <Container className="grid grid-cols-1 md:grid-cols-3">
        <FooterElement
          image={address}
          title={texts.siedziba}
          par1={texts.smartwearSp}
          par2={texts.warszawskaBiałystok}
        />
        <FooterElement
          image={phone}
          title={texts.telephone}
          par1={contact_tel}

        />
        <FooterElement
          image={email}
          title={texts.email}
          par1={contact_mail}
        />
      </Container>
    </div>
  );
};
export default Footer;
