import { Points } from "@/core/points";
import { Results, Training } from "@/core/types/pageProps/types";
import { apiAuthentication } from "./api";

export const getTrainings = (
  access: string,
  mentee_id?: string,
): Promise<{ data: Results<Training> }> => {
  return apiAuthentication(access).get(Points.TRAININGS, {
    params: {
      mentee_id,
    },
  });
};

export const getTraining = (
  access: string,
  training_id: string,
  mentee_id?: string,
): Promise<{ data: Training }> => {
  return apiAuthentication(access).get(Points.TRAININGS + `${training_id}/`, {
    params: {
      mentee_id,
    },
  });
};
