import euLogo1 from "@/assets/images/eu/FE_POPW_poziom_pl-1_rgb.png";
import euLogo2 from "@/assets/images/eu/FE_POPW_poziom_pl-1_rgb_1.png";
import euLogo3 from "@/assets/images/eu/FE_POPW_poziom_pl-1_rgb_2.png";
import euLogo4 from "@/assets/images/eu/belka POIR_pl.jpg";
import euLogo5 from "@/assets/images/eu/belka POIR_pl_1.jpg";
import euLogo6 from "@/assets/images/eu/belka POIR_pl_2.jpg";
import euLogo7 from "@/assets/images/eu/belka POIR_pl_3.jpg";
import { AnimateOnScroll } from '@/attoms/animateOnScroll/AnimateOnScroll';
import { RoutesPath } from '@/constants/RoutesPath';
import { Container, Link } from '@mui/material';
import Image, { StaticImageData } from "next/image";
import { FC, ReactNode } from 'react';

const SmartLink: FC<{ children: ReactNode, url: string }> = ({ children, url }) => {
  const regEx = /^https/;

  return regEx.test(url) ? <Link href={url}>{children}</Link> : <a href={url}>{children}</a>;
}

const LogoUe: FC<{ src: StaticImageData, alt: string, href: string }> = ({ src, alt, href }) => {
  return (
    < SmartLink url={href} >
      <AnimateOnScroll delay={0.55} x={300}>
        <Image src={src} alt={alt} className="m-auto" />
      </AnimateOnScroll>
    </ SmartLink>
  )
}

const logosUe1 = [{
  src: euLogo1, alt: "eu Logo", href: RoutesPath.PROJECTS_UE + "#shirt"

},
{
  src: euLogo2, alt: "eu Logo", href: RoutesPath.PROJECTS_UE + "#shirt"

},
{
  src: euLogo3, alt: "eu Logo", href: RoutesPath.PROJECTS_UE + "#shirt"
  ,
}

];

const logosUe2 = [
  {
    src: euLogo4, alt: "eu Logo", href: RoutesPath.PROJECTS_UE + "#chair"

  },
  {
    src: euLogo5, alt: "eu Logo", href: RoutesPath.PROJECTS_UE + "#chair"

  },
  {
    src: euLogo6, alt: "eu Logo", href: "https://www.gov.pl/web/ncbr"

  },
  {
    src: euLogo7, alt: "eu Logo", href: RoutesPath.PROJECTS_UE + "#chair"

  },

];

export const Row1EuLogos: FC = () => {
  return <Container className="grid grid-cols-3 gap-4">
    {logosUe1.map(({ src, alt, href }) => {

      return <LogoUe key={href} src={src} alt={alt} href={href} />
    })}

  </Container>
}
export const Row2EuLogos: FC = () => {
  return <Container className="grid grid-cols-4 gap-4">
    {logosUe2.map(({ src, alt, href }) => {

      return <LogoUe  key={href} src={src} alt={alt} href={href} />
    })}

  </Container>
}


const EuLogos = () => {
  return (
    <>
      <Row1EuLogos />
      <Row2EuLogos />
    </>
  )
}

export default EuLogos
