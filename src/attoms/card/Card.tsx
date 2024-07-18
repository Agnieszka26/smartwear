"use client";
import Rate from "@/components/Rate/Rate";
import { RoutesPath } from "@/constants/RoutesPath";
import { texts, textsTrainer } from "@/constants/pl/common";
import { Button, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import ButtonContained from "../button/ButtonContained";
import ShadowBox from "../shadowBox/ShadowBox";
import { TextBold, TextMedium } from "../text/Text";
import BaseModal from "../baseModal/BaseModal";
import { ModalContent } from "../modalContent/ModalContent";
import { patchTrainer } from "@/apiHandlers/patchTrainer";


interface CardProps {
  name: string;
  date: string;
  rate?: boolean;
  training_id: number;
  mentee_id?: number;
  onClick?: () => void;
  isTrainer?: boolean;
  description?: string;
}
const Card: FC<CardProps> = ({
  name,
  date,
  rate,
  description,
  training_id,
  isTrainer,
  mentee_id,
}) => {
  const router = useRouter();


  return (
    <ShadowBox>

      <Grid item sm={4}>
        <TextBold text={name} />
        <TextMedium text={texts.nazwa_terningu} />
      </Grid>
      <Grid item sm={4}>
        <TextBold text={date} />
        <TextMedium text={texts.data_wykonania} />
      </Grid>
      <Grid item sm={1} alignItems={"center"} justifyContent={"center"}>
      <Rate description={description} rate={false} />
      </Grid>

      <Grid item sm={3}>

        <ButtonContained
          onClick={() =>
            mentee_id
              ? router.push(
                  RoutesPath.SEE_STATISTICS +
                    `/${mentee_id}` +
                    `/${training_id}`,
                )
              : router.push(RoutesPath.STATISTICS + `/${training_id}`)
          }
          text={`${textsTrainer.zobacz_statystyki}`}
        />
      </Grid>
    </ShadowBox>
  );
};

export default Card;
