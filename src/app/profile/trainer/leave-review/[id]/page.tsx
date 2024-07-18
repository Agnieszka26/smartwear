"use client";
import ShadowBox from "@/attoms/shadowBox/ShadowBox";
import { Title } from "@/attoms/text/Text";
import ReviewForm from "@/components/ReviewForm/ReviewForm";
import Sidebar from "@/components/Sidebar/Sidebar";
import { usePathname, useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const id = usePathname();

  return (
    <Sidebar>
      <ShadowBox>

      <Title text={"oceń trening"} />
      </ShadowBox>
      <ShadowBox>
        <ReviewForm reviewType="training" training_id={0} mentee_id={0} />
      </ShadowBox>
    </Sidebar>
  );
};

export default Page;
