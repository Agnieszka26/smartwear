import { Points } from "@/core/points";
import { Registration } from "@/core/types/form/types";
import { api } from "./api";

export const registration = (data: Registration) => {
  return api().post(Points.REGISTRATION, data);
};
