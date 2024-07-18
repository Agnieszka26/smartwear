import ShadowBox from "@/attoms/shadowBox/ShadowBox";
import { Title } from "@/attoms/text/Text";
import DetailCard from "@/components/DetailCard/DetailCard";
import Sidebar from "@/components/Sidebar/Sidebar";
import { getFakeOpinions } from "@/core/helpers";

const page = () => {
  return (
    <Sidebar>
      <ShadowBox>

      <Title text="Twoje wystawione opinie" />
      </ShadowBox>
      <></>
      {/* {getFakeOpinions(5).map(({ lname, fname, training_id, comment }) => {
        return (
          <DetailCard
            mentee_id={training_id}
            key={lname + fname}
            fname={fname}
            lname={lname}
            requestOpinion={false}
            comment={comment}
          />
        );
      })} */}
    </Sidebar>
  );
};

export default page;
