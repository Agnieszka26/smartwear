import { Points } from "@/core/points";
import { Results, VitalSigns } from "@/core/types/pageProps/types";
import { apiAuthentication } from "./api";

export const getVitalSings = (
  access: string,
  training_id: string,
  mentee_id?: string,
  offset?: string,
  limit?: string,
): Promise<{ data: Results<VitalSigns> }> => {
  return apiAuthentication(access).get(Points.VITALS_SINGS, {
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
