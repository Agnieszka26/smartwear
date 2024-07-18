import { Points } from "@/core/points";
import { BodyTilts, Results } from "@/core/types/pageProps/types";
import { apiAuthentication } from "./api";
type params = {
  mentee_id?: string;
  offset?: string;
  limit?: string;
};

export const getBodyTilts = (
  access: string,
  training_id: string,
  mentee_id?: string,
  offset?: string,
  limit?: string,
): Promise<{ data: Results<BodyTilts> }> => {
  const p = mentee_id
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
      };

  return apiAuthentication(access).get(Points.BODY_TILTS, {
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
