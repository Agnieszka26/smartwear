"use client";
import ButtonContained from "@/attoms/button/ButtonContained";
import ShadowBox from "@/attoms/shadowBox/ShadowBox";
import { TextBold, TextMedium } from "@/attoms/text/Text";
import { textsTrainer } from "@/constants/pl/common";
import { Avatar, Box, Button, Container } from "@mui/material";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { RoutesPath } from "@/constants/RoutesPath";
import BaseModal from "@/attoms/baseModal/BaseModal";
import ReviewForm from "../ReviewForm/ReviewForm";
interface DetailCardProps {
  fname?: string;
  lname?: string;
  requestOpinion?: boolean;
  handleSeeStatistics?: () => void;
  handleLeaveReview?: () => void;
  see_trainings?: () => void;
  comment?: string;
  mentee_id: number | string;
}

const DetailCard: FC<DetailCardProps> = ({
  see_trainings,
  comment,
  fname,
  lname,
  requestOpinion,
  mentee_id,
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleSeeStatistics = (mentee_id: number | string) => {
    router.push(RoutesPath.SEE_STATISTICS + mentee_id);
  };
  const handleLeaveReview = (id: number | string) => {
    setOpen(true);
  };
  return (
    <ShadowBox>
      <Container className="flex gap-4 items-center justify-between">
        <Avatar />
        <Box>
          {fname && <TextBold text={`${fname ?? ""} ${lname ?? ""}`} />}
          {mentee_id && (
            <TextBold text={`identyfikator użytkownika: ${mentee_id}`} />
          )}
          {requestOpinion && <TextMedium text={textsTrainer.prosi_o_opinie} />}
        </Box>

        <Button
          variant="outlined"
          onClick={() => handleSeeStatistics(mentee_id)}
        >
          {textsTrainer.zobacz_treningi}
        </Button>

        {/*
        {requestOpinion && <ButtonContained
          onClick={() => handleLeaveReview( mentee_id)}
          text={textsTrainer.wystaw_opinie}
        /> }

        {see_trainings && (
          <ButtonContained text={"zobacz historię"} onClick={see_trainings} />
        )} */}
        {/* {comment && <TextMedium text={comment} />} */}
      </Container>
      <BaseModal open={open} handleClose={() => setOpen(false)}>
        <ReviewForm reviewType="training" training_id={0} mentee_id={0} />
      </BaseModal>
    </ShadowBox>
  );
};

export default DetailCard;
