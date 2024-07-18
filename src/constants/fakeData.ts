import {
  generateRandomDataDate,
  generateRandomNumbersData,
} from "@/core/helpers";
import { faker } from "@faker-js/faker";

export const trainingDetails = [
  {
    rate: true,
    id: 1,
    name: "bieganie",
    element: [
      {
        name: "added_at",
        description: "added_at",
      },
      {
        name: " heart_rate",
        description: " heart_rate",
      },
      {
        name: "temperature",
        description: "temperature",
      },
      {
        name: "humidity",
        description: "humidity",
      },
    ],
  },
  {
    rate: false,
    id: 2,
    name: "jazda na rowerze",
    element: [
      {
        name: "added_at",
        description: "added_at",
      },
      {
        name: " heart_rate",
        description: " heart_rate",
      },
      {
        name: "temperature",
        description: "temperature",
      },
      {
        name: "humidity",
        description: "humidity",
      },
    ],
  },
];
