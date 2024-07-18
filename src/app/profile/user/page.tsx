import { getDataTrainings } from "@/apiHandlers/getData";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { TextMedium } from "@/attoms/text/Text";
import { DashboardPage } from "@/components/DashboardPage/DashboardPage";
import Sidebar from "@/components/Sidebar/Sidebar";
import { totalDurationOfTrainings } from "@/core/helpers";
import { getServerSession } from "next-auth";

const Page = async () => {
  const session = await getServerSession(options);

  if (!session) return <Sidebar>Loading ...</Sidebar>;

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
  if (typeof trainings === "string")
    return (
      <Sidebar>
        <TextMedium text={"Error"} />
      </Sidebar>
    );
  const statistics ={
      time: totalDurationOfTrainings(trainings.results),
      trainings: trainings.count,
  };

  return (
    <Sidebar>
      <DashboardPage statistic={statistics} user={user} />
    </Sidebar>
  );
};

export default Page;
