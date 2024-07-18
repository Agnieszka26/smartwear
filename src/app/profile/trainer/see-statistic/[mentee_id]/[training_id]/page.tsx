"use client";
import {
  getDataArmInc,
  getDataBodyTilts,
  getDataTraining,
  getDataVitalSings,
} from "@/apiHandlers/getData";
import Sidebar from "@/components/Sidebar/Sidebar";
import StatisticPage from "@/components/StatisticPage/StatisticPage";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { useSession } from "next-auth/react";

export default async function Page({
  params,
}: {
  params: { mentee_id: string; training_id: string };
}) {
  const { data: session } = useSession();
  const { mentee_id, training_id } = params;
  if (!session)
    return (
      <Sidebar>
        <Box> brak sesji</Box>
      </Sidebar>
    );

  const access = session.tokens.access;
  const training = await getDataTraining(access, training_id, mentee_id);
  const vitalSings = await getDataVitalSings(access, training_id, mentee_id);
  const bodyTilts = await getDataBodyTilts(access, training_id, mentee_id);
  const armInc = await getDataArmInc(access, training_id, mentee_id);
  return (
    <Sidebar>
      <Grid container>
        {typeof training !== "string" &&
          typeof vitalSings !== "string" &&
          typeof bodyTilts !== "string" &&
          typeof armInc !== "string" && (
            <StatisticPage
              isTrainer={true}
              training={training}
              vitalSings={vitalSings}
              bodyTilts={bodyTilts}
              armInclinations={armInc}
            />
          )}
      </Grid>
    </Sidebar>
  );
}
