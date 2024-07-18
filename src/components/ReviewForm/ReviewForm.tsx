"use client";
import { patchOpinion } from "@/apiHandlers/patchOpinion";
import BaseModal from "@/attoms/baseModal/BaseModal";
import ButtonContained from "@/attoms/button/ButtonContained";
import { textsTrainer } from "@/constants/pl/common";
import { LeaveReviewForm } from "@/core/types/form/types";
import { FormControlLabel, FormGroup, Switch, TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
interface ReviewFormProps {
  reviewType: "training" | "parameters";
  training_id: number,
  mentee_id: number
}

const ReviewForm: FC<ReviewFormProps> = ({ reviewType, training_id, mentee_id }) => {
  const [training_rate, setTraining_rate] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LeaveReviewForm>();
  const {data: session} = useSession();
  const [success, setSuccess] = useState<boolean>(false)
  const access = session?.tokens.access
  const onSubmit: SubmitHandler<LeaveReviewForm> =async (data) =>{

if(!access) return
try {

   const x = await patchOpinion(access,mentee_id, training_id, data)

setSuccess(true)
 } catch (error) {
console.log(error)
 }
  }
  const handleChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTraining_rate(event.target.checked);
  };
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch

            checked={training_rate}
            onChange={handleChangeSwitch}
            // name="training_rate"
            // value={training_rate}
          />
        }
        label={
          reviewType === "training"
            ? "Trening został wykonany prawidłowo"
            : "Parametry są ok"
        }
      />
      <TextField
        {...register("description", {required: "Proszę usupełnić opinię na temat tego treningu"})}
        helperText={
          reviewType === "training"
            ? "Wpisz swoją opinię na temet treningu"
            : "Wpisz swoją opinię odnośnie parametrów"
        }
        multiline
        rows={4}
        id="review"
        label="Opinia"
      />
      <ButtonContained
        text={textsTrainer.wystaw_opinie}
        onClick={handleSubmit(onSubmit)}
      />
      {<BaseModal open={success} handleClose={()=>setSuccess(false)}>
      success
      </BaseModal>}
    </FormGroup>
  );
};

export default ReviewForm;
