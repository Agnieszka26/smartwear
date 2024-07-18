"use client";
import { getTrainings } from "@/apiHandlers/getTrainings";
import { TrDashboardPage } from "@/components/DashboardPage/DashboardPage";
import Sidebar from "@/components/Sidebar/Sidebar";
import { kasiaTrenerClients } from "@/constants/traineeIds";
import { faker } from "@faker-js/faker";
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
    user,
    tokens: { access },
  } = session;
  return (
    <Sidebar>
      <TrDashboardPage user={user} customers={kasiaTrenerClients.length} />
    </Sidebar>
  );
};

export default Page;
