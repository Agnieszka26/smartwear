import BaseLineChart from "@/attoms/chart/BaseLineChart";
import SelectInput from "@/attoms/selectInput/SelectInput";
import { ChartTitles } from "@/constants/pl/common";
import { ChartDataReChartType, Options } from "@/core/types/pageProps/types";
import { SelectChangeEvent } from "@mui/material";
import React, { FC, useState } from "react";

const SelectExerciseChart: FC<{
  selectedExercise: string;
  handleChangeExercise: (
    e: SelectChangeEvent,
    type: ChartTitles.PULSE| ChartTitles.HANDS_DISTANCE | ChartTitles.CURVE_BACK,
  ) => void;
  exercises: Options[] | undefined;
  getData: (x?: boolean) => ChartDataReChartType[];
  type: ChartTitles.PULSE| ChartTitles.HANDS_DISTANCE | ChartTitles.CURVE_BACK,
  label: string;
  label2: string;
  name: string;
  domain1: number[];
  domain2?: number[];
  showAreaBetweenLines?: boolean;
}> = ({
  exercises,
  type,
  getData,
  selectedExercise,
  handleChangeExercise,
  label,
  label2,
  name,
  domain1,
  domain2,
  showAreaBetweenLines,
}) => {
  return exercises && exercises.length !== 0 ? (
    <>
      <SelectInput
        type={type}
        className="w-full mx-20 mb-8"
        value={selectedExercise}
        handleChange={handleChangeExercise}
        label={"ćwiczenie"}
        options={exercises}
      />
      {selectedExercise === "" ? (
        "Wybierz ćwiczenie "
      ) : (
        <BaseLineChart
          showAreaBetweenLines={showAreaBetweenLines}
          data={getData(true)}
          label={label}
          label2={label2}
          name={name}
          domain1={domain1}
          domain2={domain2}
        />
      )}
    </>
  ) : (
    <BaseLineChart
      showAreaBetweenLines={showAreaBetweenLines}
      data={getData()}
      label={label}
      label2={label2}
      name={name}
      domain1={domain1}
      domain2={domain2}
    />
  );
};

export default SelectExerciseChart;
