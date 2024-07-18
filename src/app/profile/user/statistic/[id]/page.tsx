
import {
  getDataArmInc,
  getDataBodyTilts,
  getDataTraining,
  getDataVitalSings,
} from "@/apiHandlers/getData";
import { patchTrainer } from "@/apiHandlers/patchTrainer";

import { options } from "@/app/api/auth/[...nextauth]/options";
import Sidebar from "@/components/Sidebar/Sidebar";
import StatisticPage from "@/components/StatisticPage/StatisticPage";
import { getServerSession } from "next-auth";

export default async function Page({ params }: { params: { id: string } }) {
  const session = await getServerSession(options);
  const { id } = params;
  if (!session)
    return (

      <></>

    );
  const access = session.tokens.access;
  const training = await getDataTraining(access, id);
  const vitalSings = await getDataVitalSings(access, id);
  const bodyTilts = await getDataBodyTilts(access, id);
  const armInc = await getDataArmInc(access, id);

  if (typeof training === "string") return training;
  if (typeof armInc === "string") return armInc;
  if (typeof vitalSings === "string") return vitalSings;
  if (typeof bodyTilts === "string") return bodyTilts;



  return <>
    <Sidebar>
      {typeof vitalSings !== "string" &&
        typeof bodyTilts !== "string" &&
        typeof armInc !== "string" &&
        typeof training !== "string" && (
          <StatisticPage
isTrainer={false}
            vitalSings={vitalSings}
            bodyTilts={bodyTilts}
            armInclinations={armInc}
            training={training}
          />)}

    </Sidebar>
  </>

}

