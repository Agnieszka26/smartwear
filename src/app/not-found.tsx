import { ButtonLink } from "@/attoms/button/ButtonContained";
import { TextBold, TextMedium } from "@/attoms/text/Text";
import { RoutesPath } from "@/constants/RoutesPath";
import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import pageNotFound from "@/assets/images/pageNotFound.png"
import ShadowBox from "@/attoms/shadowBox/ShadowBox";
export default function NotFound() {
    return (
      <Container className="pt-40">
        <ShadowBox className="grid grid-cols-1">


        <TextBold text="Ups... " className="text-center" />
       <TextMedium text="Nie znaleziono strony." className="text-center" />

       <Image src={pageNotFound}  alt="nie znaleziono strony" className="m-auto" height={500} width={500}/>
        <ButtonLink href={RoutesPath.HOME}  text={"wróć na stronę główną"} />
        </ShadowBox>

      </Container>
    );
  }
