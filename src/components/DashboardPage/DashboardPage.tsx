"use client";
import ShadowBox from "@/attoms/shadowBox/ShadowBox";
import { TextBold, TextMedium, Title } from "@/attoms/text/Text";
import { texts } from "@/constants/pl/common";
import { Statistics, UserType } from "@/core/types/pageProps/types";
import { Box, Grid, Typography } from "@mui/material";
import _ from "lodash";
import { FC } from "react";
import { NameCard } from "../NameCard/NameCard";
import { getTrainings } from "@/apiHandlers/getTrainings";

interface DashboardPageProps {
  user: UserType;
  statistic: {
    time: number;
    trainings: number;
  }
}

export const DashboardPage: FC<DashboardPageProps> = ({ statistic: {
  time,
  trainings,
}, user }) => {
  const {
    last_name,
    first_name,
    birthdate,
    target,
    trainers,
    weight,
    height,
    id,
    user_type,
  } = user;

  return (
    <Box>
       <ShadowBox>

      <Title text={_.capitalize(texts.twoj_profil)} className="text-midnight" />
       </ShadowBox>
      <NameCard name={`${first_name} ${last_name}`} user_type={user_type} />

      <ShadowBox>
      <Grid item sm={12}>
          <TextBold text={"Twoje dane"} className="text-center mb-8"/>
        </Grid>
        <Grid item sm={4}>
          <TextBold text={`${target ?? "nie podano"} ${texts.kg}`} className="text-center"/>
          <TextMedium text={texts.cel} className="text-center"/>
        </Grid>
        <Grid item sm={4}>
          <TextBold text={`${weight ?? "nie podano"} ${texts.kg}`} className="text-center"/>

          <TextMedium text={texts.obecna_waga}className="text-center" />
        </Grid>
        <Grid item sm={4} alignItems={"center"} justifyContent={"center"}>
          <TextBold text={birthdate ?? "nie podano"} className="text-center"/>

          <TextMedium text={`data urodzin`} className="text-center"/>
        </Grid>
      </ShadowBox>
      <ShadowBox>
        <Grid item sm={12}>
          <TextBold text={texts.statystyki + " treningów"} className="text-center mb-8"/>
        </Grid>
        <Grid item sm={6}>
          <TextBold text={`${time} ${texts.min}`} className="text-center"/>
          <TextMedium text={"łączny czs wszystkich treningów"} className="text-center"/>
        </Grid>
        <Grid item sm={6}>
          <TextBold text={`${trainings}`} className="text-center"/>
          <TextMedium text={texts.liczba_treningow} className="text-center"/>
        </Grid>
      </ShadowBox>
    </Box>
  );
};
interface TrDashboardPageProps {
  opinions?: number;
  customers: number;
  user: UserType;
}
export const TrDashboardPage: FC<TrDashboardPageProps> = async ({
  opinions,
  customers,
  user,
}) => {
  const {
    last_name,
    first_name,
    birthdate,
    target,
    trainers,
    weight,
    height,
    id,
    user_type,
  } = user;

  return (
    <>
      <Box>
        <Title text={texts.twoj_profil} />
        <NameCard name={`${first_name} ${last_name}`} user_type={last_name} />

        <ShadowBox>
          {opinions && (
            <Grid item sm={4}>
              <TextBold text={`${opinions}`} className="text-midnight" />
              <TextMedium text={"Wystawionych opinii"} />
            </Grid>
          )}
          <Grid item sm={4}>
            <TextBold text={`${customers}`} className="text-midnight" />

            <TextMedium text={"użytowników pod opieką"} />
          </Grid>
          <Grid item sm={4} alignItems={"center"} justifyContent={"center"}>
            <TextBold
              text={`bieganie, jazda na rowerze`}
              className="text-midnight"
            />

            <TextMedium text={"Specjalizacje"} />
          </Grid>
        </ShadowBox>
      </Box>
    </>
  );
};
