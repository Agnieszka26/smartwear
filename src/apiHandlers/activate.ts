import { Points } from "@/core/points";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { api } from "./api";
import config from "./config";
const { baseURL } = config();

export const activate = (data: Params) => {
  return api().post(Points.ACTIVATE, data);
};
