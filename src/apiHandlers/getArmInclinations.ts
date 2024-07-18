import { Points } from "@/core/points";
import { ArmInclinations, Results } from "@/core/types/pageProps/types";
import { apiAuthentication } from "./api";

const getArmInclinations = (
  access: string,
  training_id: string,
  mentee_id?: string,
  offset?: string,
  limit?: string,
): Promise<{ data: Results<ArmInclinations> }> => {
  return apiAuthentication(access).get(Points.ARM_INCLINATIONS, {
    params: mentee_id
      ? offset
        ? {
            training_id,
            mentee_id,
            offset,
            limit,
          }
        : {
            training_id,
            mentee_id,
          }
      : offset
      ? {
          training_id,
          offset,
          limit,
        }
      : {
          training_id,
        },
  });
};
export default getArmInclinations;
