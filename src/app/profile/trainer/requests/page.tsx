import { getDataTrainings } from "@/apiHandlers/getData";
import { options } from "@/app/api/auth/[...nextauth]/options";
import ShadowBox from "@/attoms/shadowBox/ShadowBox";
import { Title } from "@/attoms/text/Text";
import NotificationCard from "@/components/DetailCard/DetailCard";
import Sidebar from "@/components/Sidebar/Sidebar";
import { textsTrainer } from "@/constants/pl/common";
import { kasiaTrenerClients } from "@/constants/traineeIds";
import Box from "@mui/material/Box";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession(options);
  if (!session)
    return (
      <Sidebar>
        <Box> brak sesji</Box>
      </Sidebar>
    );
  const access = session.tokens.access;

  return (
    <Sidebar>
      <ShadowBox>

      <Title text={textsTrainer.prosby_o_opinie} />
      </ShadowBox>

      {kasiaTrenerClients.map((id) => {
        return (
          <NotificationCard
            key={id}
            mentee_id={id}
            // fname={name}
            // lname={description}
            // requestOpinion={false}
          />
        );
      })}
    </Sidebar>
  );
}
