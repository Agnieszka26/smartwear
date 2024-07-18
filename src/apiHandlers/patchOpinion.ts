

import { trainers } from "@/constants";
import { Points } from "@/core/points";
import { apiAuthentication } from "./api";

//* make opinion (description) about training (training_id)
export const patchOpinion = (access: string,  mentee_id: number,training_id: number, data:{ description: string}) => {
  return apiAuthentication(access).patch(
    Points.USER_PARTIAL_UPDATE_TRAINING_OPINION + `${training_id}/?mentee_id=${mentee_id}`,
 data,
  );
};
