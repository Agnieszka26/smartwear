//***
//*in documentation there is possibility to set multiple trainers but in our vpm model there is one trainer
//*with id=16, so it is constants and all users will have one trainer
//***

import { trainers } from "@/constants";
import { Points } from "@/core/points";
import { apiAuthentication } from "./api";

//assign user to trainer id -> user id
export const patchTrainer = (access: string, id: number) => {
  return apiAuthentication(access).patch(
    Points.USER_PARTIAL_UPDATE + `${id}/`,
    trainers,
  );
};
