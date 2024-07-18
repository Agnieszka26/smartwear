"use client";
import { getDataTrainings } from "@/apiHandlers/getData";
import Card from "@/attoms/card/Card";
import ShadowBox from "@/attoms/shadowBox/ShadowBox";
import { Title } from "@/attoms/text/Text";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Grid } from "@mui/material";
import { useSession } from "next-auth/react";

const Page = async () => {
  const { data: session } = useSession();
  if (!session)
    return (
      <Sidebar>
        <></>
      </Sidebar>
    );

  const {
    tokens: { access },
  } = session;

  const trainings = await getDataTrainings(access);
  return (
    <Sidebar>
      <ShadowBox>

      <Title text={`Treningi Użytkownika`} />
      </ShadowBox>
      <Grid container>
        {typeof trainings === "string" ? (
          <>{trainings}</>
        ) : (
          trainings?.results.map(({ name, id, start_at }) => {
            return (
              <Card
                key={id}
                name={name}
                date={start_at}
                rate={false}
                training_id={id}
                isTrainer
              />
            );
          })
        )}
      </Grid>
    </Sidebar>
  );
};

export default Page;
