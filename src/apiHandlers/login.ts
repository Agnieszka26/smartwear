import { Points } from "@/core/points";
import { Login } from "@/core/types/form/types";
import { api } from "./api";

export const login = (data: Record<never, string> | undefined) => {
  return api().post(Points.LOGIN, data);
};
