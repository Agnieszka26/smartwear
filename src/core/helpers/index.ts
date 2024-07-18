
import {
  ArmInclinations,
  BodyTilts,
  Training,
  VitalSigns,
} from "../types/pageProps/types";

export const generateRandomDataDate = (length: number, interval?: number) => {
  const dataArray = [];
  let currentTime = 0;
  while (currentTime <= length - 1) {
    const today = new Date();
    const timestamp = today.setHours(0, currentTime, 0, 0);
    dataArray.push(new Date(timestamp));
    currentTime += 1;
  }
  return dataArray;
};
export const generateRandomNumbersData = (
  length: number,
  min: number,
  max: number,
) => {
  let data: number[] = [];
  for (let i = 0; i < length; i++) {
    // data.push(faker.number.int({ min, max }));
  }
  return data;
};

export const getFakeClients = (
  quantity: number,
): { fname: string; id: string; lname: string; requestOpinion: boolean }[] => {
  let clients: {
    fname: string;
    lname: string;
    id: string;
    requestOpinion: boolean;
  }[] = [];
  for (let i = 0; i < quantity; i++) {
    // clients.push({
    //   // fname: faker.person.firstName(),
    //   // id: faker.string.alphanumeric(),
    //   // lname: faker.person.lastName(),
    //   // requestOpinion: faker.datatype.boolean(),
    // });
  }
  return clients;
};

export const getFakeOpinions = (quantity: number) => {

  for (let i = 0; i < quantity; i++) {
    // opinions.push({
    //   fname: faker.person.firstName(),
    //   lname: faker.person.lastName(),
    //   training_id: faker.string.uuid(),
    //   comment: faker.lorem.sentence(),
    // });
  }
  return;
};

export const dateFormat = (dateTimeString: string) => {
  const dateTime = new Date(dateTimeString);
  const hours = dateTime.getHours().toString().padStart(2, "0");
  const minutes = dateTime.getMinutes().toString().padStart(2, "0");
  const seconds = dateTime.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

//transform data
export const chartDataPulseAndTemp = (results: VitalSigns[]) => {
  return results.map(({ added_at, heart_rate, temperature }, i) => {
    return {
      time: dateFormat(added_at),
      y: heart_rate,
      y2: parseFloat(temperature),
      helperLineUp: 37.25,
      helperLineDown: 35.75,
    };
  });
};

export const chartDataDistanceHands = (
  resultsLeft: ArmInclinations[],
  resultsRight: ArmInclinations[],
) => {
  return resultsLeft.map(({ added_at, distance }, index) => {
    let y2 = resultsRight[index].distance;
    return {
      time: dateFormat(added_at),
      y: distance,
      y2,
    };
  });
};

export const chartDataBackCurve = (results: BodyTilts[]) => {
  return results.map(({ added_at, alpha, beta }) => {
    return {
      time: dateFormat(added_at),
      y: alpha,
      y2: beta,
      ah: [10, 20],
      ah2: [-10, -20],
    };
  });
};

export const totalDurationOfTrainings = (events: Training[]) => {
  const totalDurationInSeconds = events.reduce((total, event) => {
    const startAt = new Date(event.start_at);
    const stopAt = new Date(event.stop_at);
    const durationInSeconds = (stopAt.getTime() - startAt.getTime()) / 1000;
    return total + durationInSeconds;
  }, 0);
  return Math.ceil(totalDurationInSeconds / 60);
};

export const getDayMonthYearAndTime = (inputDateString: string) => {
  const inputDate = new Date(inputDateString);

  const day = inputDate.getDate();
  const month = inputDate.getMonth() + 1;
  const year = inputDate.getFullYear();

  return ` ${day}.${month}.${year}r.`;
};

export const checkTimeTraining = (trainingLength: number) => {
  const minutes = trainingLength / 60;
  const hours = minutes / 60;
  return {
    trainingLength,
    minutes,
    hours,
  };
};

//interval between points in chart in seconds, trainingLength is count
export const checkIntervalChart = (trainingLength: number) => {
  if (trainingLength >= 0 && trainingLength <= 300) {
    return 15;
  } else if (trainingLength <= 900) {
    return 30;
  } else {
    return 60;
  }
};
