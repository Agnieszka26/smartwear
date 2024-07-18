"use client";
import ShadowBox from "@/attoms/shadowBox/ShadowBox";
import { Title } from "@/attoms/text/Text";
import DetailCard from "@/components/DetailCard/DetailCard";
import Sidebar from "@/components/Sidebar/Sidebar";
import { RoutesPath } from "@/constants/RoutesPath";
import { kasiaTrenerClients } from "@/constants/traineeIds";
import { getFakeClients } from "@/core/helpers";
import { useRouter } from "next/navigation";

const Page = () => {
  return (
    <Sidebar>
      <ShadowBox>

      <Title text={"Twoi podopieczni"} />
      </ShadowBox>
      {kasiaTrenerClients.map((id) => {
        return (
          <DetailCard
            key={id}
            mentee_id={id}
            // see_trainings={() => router.push(RoutesPath.SEE_TRAINING_DONE + id)}
            // fname={fname}
            // lname={lname}
            // requestOpinion={requestOpinion}
          />
        );
      })}
    </Sidebar>
  );
};

export default Page;
