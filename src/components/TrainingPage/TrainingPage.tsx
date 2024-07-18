"use client";
import Card from "@/attoms/card/Card";
import ShadowBox from "@/attoms/shadowBox/ShadowBox";
import { Title } from "@/attoms/text/Text";
import { texts } from "@/constants/pl/common";
import { getDayMonthYearAndTime } from "@/core/helpers";
import { Training } from "@/core/types/pageProps/types";
import { Box, Grid } from "@mui/material";
import _ from "lodash";
import { FC } from "react";
interface TrainingPageProps {
  trainings: Training[];
  mentee_id?: number;
  isTrainer?: boolean;
}

const TrainingPage: FC<TrainingPageProps> = ({
  trainings,
  isTrainer,
  mentee_id,
}) => {


  return (
    <Box>
    {!isTrainer &&   <ShadowBox>
      <Title text={_.capitalize(texts.twoje_treningi)} className="text-midnight"/>
      </ShadowBox>}
      <Grid container>
        {trainings.length ? (
          <>
            {trainings.reverse().map(
              ({ name, id, stop_at, description }) => {
                return (
                  <Card
                  description={description}
                    key={id}
                    name={name.split(":")[0]}
                    date={getDayMonthYearAndTime(stop_at)}
                    rate={false}
                    training_id={id}
                    mentee_id={mentee_id?? 0}
                    isTrainer={isTrainer}
                  />
                );
              },
            )}
          </>
        ) : (
          <>  <Card

          name={"name"}
          date={"stop_at"}
          rate={false}
          training_id={0}
          mentee_id={mentee_id}
          isTrainer={isTrainer}
        /></>
        )}
      </Grid>
    </Box>
  );
};

export default TrainingPage;
