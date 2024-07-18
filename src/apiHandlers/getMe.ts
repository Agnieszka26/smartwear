import { Points } from "@/core/points";
import { apiAuthentication } from "./api";
import { AxiosError } from "axios";
import { UserType } from "@/core/types/pageProps/types";

export const getMe = (access: string): Promise<{ data: UserType }> => {
  return apiAuthentication(access).get(Points.ME);
};

export const getUser = async (access: string) => {
  try {
    const { data: user } = await getMe(access);
    return user;
  } catch (error) {
    const err = error as AxiosError;
    return err.message;
  }
};
