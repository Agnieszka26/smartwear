"use client";
import {
  getDataTrainings
} from "@/apiHandlers/getData";
import { NameCard } from "@/components/NameCard/NameCard";
import Sidebar from "@/components/Sidebar/Sidebar";
import TrainingPage from "@/components/TrainingPage/TrainingPage";
import { Box } from "@mui/material";
import { useSession } from "next-auth/react";

export default async function Page({
  params,
}: {
  params: { mentee_id: string };
}) {
  const { data: session } = useSession();
  const { mentee_id } = params;

  if (!session)
    return (
      <Sidebar>
        <Box> brak sesji</Box>
      </Sidebar>
    );

  const access = session.tokens.access;
  const trainings = await getDataTrainings(access, mentee_id);

  if (!trainings)
    return (
      <Sidebar>
        <Box> Brak Danych</Box>
      </Sidebar>
    );

  return (
    <Sidebar>
      <NameCard
        name={`identyfikator użytkownika: ${mentee_id}`}
        user_type={"standard"}
      />
      {typeof trainings !== "string" ? (
        <TrainingPage
          trainings={trainings.results}
          isTrainer
          mentee_id={Number(mentee_id)}
        />
      ): trainings}
    </Sidebar>
  );
}
