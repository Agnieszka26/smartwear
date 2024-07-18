import { getTrainings } from "@/apiHandlers/getTrainings";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { TextMedium } from "@/attoms/text/Text";
import Sidebar from "@/components/Sidebar/Sidebar";
import TrainingPage from "@/components/TrainingPage/TrainingPage";
import { AxiosError } from "axios";
import { getServerSession } from "next-auth";

async function getDataTrainings(access: string) {
  try {
    const { data: trainings } = await getTrainings(access);

    return trainings;
  } catch (error) {
    const err = error as AxiosError;
    console.error(err);
  }
}

export default async function Page() {
  const session = await getServerSession(options);

  if (!session)
    return (
      <Sidebar>
        <>Loading...</>
      </Sidebar>
    );

  const {
    user,
    tokens: { access },
  } = session;
  if (!access) {
    <Sidebar>
      <TextMedium text={"wylogowano"} />
    </Sidebar>;
  }

  const trainings = await getDataTrainings(access);

  return (
    <Sidebar>
      {trainings && <TrainingPage trainings={trainings.results} />}
    </Sidebar>
  );
}
