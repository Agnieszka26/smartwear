import { AxiosError } from "axios";
import getArmInclinations from "./getArmInclinations";
import { getBodyTilts } from "./getBodyTilts";
import { getTraining, getTrainings } from "./getTrainings";
import { getVitalSings } from "./getVitalsSigns";
import { checkIntervalChart, checkTimeTraining } from "@/core/helpers";
import { VitalSigns } from "@/core/types/pageProps/types";

export async function getDataTrainings(access: string, mentee_id?: string) {
  try {
    const { data: trainings } = await getTrainings(access, mentee_id);
 
    return trainings;
  } catch (error) {
    const err = error as AxiosError;

    return err.message;
  }
}

export async function getDataTraining(
  access: string,
  training_id: string,
  mentee_id?: string,
) {
  try {
    const { data: trainings } = await getTraining(
      access,
      training_id,
      mentee_id,
    );
    return trainings;
  } catch (error) {
    const err = error as AxiosError;

    return err.message;
  }
}

export async function getDataArmInc(
  access: string,
  training_id: string,
  mentee_id?: string,
  offset?: string,
  limit?: string,
) {
  try {
    const { data: armInclinations } = await getArmInclinations(
      access,
      training_id,
      mentee_id,
      offset,
      limit,
    );
    const time = armInclinations.count;

    const { data: armInclinations2 } = await getArmInclinations(
      access,
      training_id,
      mentee_id,
      "0",
      `${time}`,
    );

    return armInclinations2.results;
  } catch (error) {
    const err = error as AxiosError;
    return err.message;
  }
}

export async function getDataBodyTilts(
  access: string,
  training_id: string,
  mentee_id?: string,
  offset?: string,
  limit?: string,
) {
  try {
    const { data: bodyTilts } = await getBodyTilts(
      access,
      training_id,
      mentee_id,
      offset,
      limit,
    );

    const time = bodyTilts.count;

    const { data: bodyTilts2 } = await getBodyTilts(
      access,
      training_id,
      mentee_id,
      "0",
      `${time}`,
    );

    return bodyTilts2.results;
  } catch (error) {
    const err = error as AxiosError;
    return err.message;
  }
}

export const getDataVitalSings = async (
  access: string,
  training_id: string,
  mentee_id?: string,
  offset?: string,
  limit?: string,
) => {
  try {
    const { data: vitalSings } = await getVitalSings(
      access,
      training_id,
      mentee_id,
      offset,
      limit,
    );
    const time = vitalSings.count;
    const { data: vitalSingsWhole } = await getVitalSings(
      access,
      training_id,
      mentee_id,
      "0",
      `${time}`,
    );
    return vitalSingsWhole.results;
  } catch (error) {
    const err = error as AxiosError;
    return err.message;
  }
};
