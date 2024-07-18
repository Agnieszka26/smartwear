"use client";

import { patchTrainer } from "@/apiHandlers/patchTrainer";
import ShadowBox from "@/attoms/shadowBox/ShadowBox";
import { TextBold } from "@/attoms/text/Text";
import { ChartTitles, chartArmsName, chartBackName, chartPulseAndTempName, curveFrontBackLabel, curveLeftRightLabel, leftHandLabel, rightHandLabel } from "@/constants/pl/common";
import {
  chartDataBackCurve,
  chartDataDistanceHands,
  chartDataPulseAndTemp
} from "@/core/helpers";
import {
  ArmInclinations,
  BodyTilts,
  Options,
  Training,
  VitalSigns
} from "@/core/types/pageProps/types";
import {
  Box,
  Container,
  Grid,
  SelectChangeEvent
} from "@mui/material";
import { useSession } from "next-auth/react";
import { FC, useCallback, useEffect, useState } from "react";
import Rate from "../Rate/Rate";
import SelectExerciseChart from "../SelectExerciseChart/SelectExerciseChart";
import DescriptionTraining from "./DescriptionTraining";
import { TrainingDetail } from "./TrainingDetail";
import {   domainBack, domainPulse, domaineTemperature, } from "@/constants";
import { TitleChart } from "./TitileChart";


interface StatisticPageProps {
  training: Training;
  isTrainer?: boolean;
  vitalSings: VitalSigns[];
  bodyTilts: BodyTilts[];
  armInclinations: ArmInclinations[];
}
const StatisticPage: FC<StatisticPageProps> = ({
  training,
  vitalSings,
  bodyTilts,
  armInclinations,
  isTrainer
}) => {
  const [selectedExercisePulse, setSelectedExercisePulse] =
    useState<string>("");
  const [selectedExerciseArms, setSelectedExerciseArms] = useState<string>("");
  const [selectedExerciseBack, setSelectedExerciseBack] = useState<string>("");

  const [options, setOptions] = useState<Options[]>();
  const session = useSession()
  const access = session.data?.tokens.access
  const { name, stop_at, user, id: training_id, description } = training;
  const getPulseTemp = useCallback(
    function (exercises?: boolean) {
      if (exercises) {
        if (!selectedExercisePulse) return [];
        return chartDataPulseAndTemp(
          partitionDataByExercise(vitalSings, selectedExercisePulse),
        );
      } else return chartDataPulseAndTemp(vitalSings);
    },
    [selectedExercisePulse],
  );

  const getHandDistance = useCallback(
    function (exercises?: boolean) {
      if (exercises) {
        const armInclinationsLeft = armInclinations.filter(
          ({ side, exercise }) => {
            return side === "left" && exercise === selectedExerciseArms;
          },
        );
        const armInclinationsRight = armInclinations.filter(
          ({ side, exercise }) =>
            side === "right" && exercise === selectedExerciseArms,
        );

        return chartDataDistanceHands(
          armInclinationsLeft,
          armInclinationsRight,
        );
      } else {
        const armInclinationsLeft = armInclinations.filter(({ side }) => {
          return side === "left";
        });
        const armInclinationsRight = armInclinations.filter(
          ({ side }) => side === "right",
        );

        return chartDataDistanceHands(
          armInclinationsLeft,
          armInclinationsRight,
        );
      }
    },
    [selectedExerciseArms],
  );

  const getBackCurve = useCallback(
    function (exercise?: boolean) {
      if (exercise) {
        if (!selectedExerciseBack) return [];

        return chartDataBackCurve(
          partitionDataByExercise(bodyTilts, selectedExerciseBack),
        );
      } else return chartDataBackCurve(bodyTilts);
    },
    [selectedExerciseBack],
  );

  const getListExercises = () => {
    const exercisesSet = new Set();
    vitalSings.forEach(({ exercise }) => {
      if (exercise)
        if (exercise) {
          exercisesSet.add(exercise);
        }
    });

    return Array.from(exercisesSet) as string[];
  };



  const partitionDataByExercise = (data: any[], exerciseS: string) => {
    return data.filter(({ exercise }) => {
      return exercise === exerciseS;
    });
  };

  const handleChangeExercise = (
    event: SelectChangeEvent,
    type: ChartTitles.PULSE | ChartTitles.HANDS_DISTANCE |  ChartTitles.CURVE_BACK,
  ) => {
    const {
      target: { value },
    } = event;
    switch (type) {
      case ChartTitles.PULSE:
        setSelectedExercisePulse(value);
        break;
      case  ChartTitles.HANDS_DISTANCE :
        setSelectedExerciseArms(value);
        break;
      case  ChartTitles.CURVE_BACK:
        setSelectedExerciseBack(value);
        break;
      default:
        break;
    }
  };

  const makeOptions = (base: string[]): Options[] => {
    const objectArray = base.map((value) => ({
      value,
      name: `${value}`,
      id: Math.random().toString(36).substring(7),
    }));

    return objectArray;
  };
  const setTrainerOpinion = async () => {
    try {
      if (!access) return false
      const x = await patchTrainer(access, user)
      return true
    } catch (error) {
      console.log(error)
      return false
    }

  }

  const assignTrainer = async () => {
    try {
      if (!access) return false
      const x = await patchTrainer(access, user)

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }
  useEffect(() => {
    setOptions(makeOptions(getListExercises()));
  }, []);
  const maxDataValue = Math.max(...getHandDistance().map(entry => entry.y2))
 const domainArmsDynamicMax = [0, maxDataValue];
  return (
    <Box>
      <TrainingDetail name={name} user={user} stop_at={stop_at} isTrainer={Boolean(isTrainer)} training_id={training_id} handleAction={isTrainer ? setTrainerOpinion : assignTrainer} />
      <DescriptionTraining description={description} />
      <Grid container>
        <ShadowBox>
          <TitleChart
            text={chartPulseAndTempName}
             data={chartDataPulseAndTemp(vitalSings)}
             domain1={domainPulse}
             domain2={domaineTemperature}
             par1={ChartTitles.PULSE}
             par2={ChartTitles.TEMPERATURE}
             />
          <SelectExerciseChart
            exercises={options}
            getData={getPulseTemp}
            selectedExercise={selectedExercisePulse}
            handleChangeExercise={(e) => handleChangeExercise(e,ChartTitles.PULSE)}
            label={ChartTitles.PULSE}
            label2={ChartTitles.TEMPERATURE}
            name={chartPulseAndTempName}
            domain1={domainPulse}
            domain2={domaineTemperature}
            type={ChartTitles.PULSE}
          />
        </ShadowBox>

        <ShadowBox>
          <TitleChart text={chartArmsName} data={getHandDistance()} domain1={[]}  par1={ChartTitles.HANDS_DISTANCE} par2={ChartTitles.HANDS_DISTANCE}

                />
          <SelectExerciseChart
            exercises={options}
            getData={getHandDistance}
            selectedExercise={selectedExerciseArms}
            handleChangeExercise={(e) => handleChangeExercise(e, ChartTitles.HANDS_DISTANCE)}
            label={leftHandLabel
              }
            label2={rightHandLabel}
            name={chartArmsName}
            domain1={ domainArmsDynamicMax}
            type={ChartTitles.HANDS_DISTANCE}
            showAreaBetweenLines
          />
        </ShadowBox>

        <ShadowBox>


          <TitleChart text={chartBackName}
           data={chartDataBackCurve(bodyTilts)}
            domain1={domainBack}
            par1={ChartTitles.CURVE_BACK}
            par2={ChartTitles.CURVE_ASIDE}
          />

          <SelectExerciseChart
            exercises={options}
            getData={getBackCurve}
            selectedExercise={selectedExerciseBack}
            handleChangeExercise={(e) => handleChangeExercise(e, ChartTitles.CURVE_BACK )}
            label={curveFrontBackLabel}
            label2={curveLeftRightLabel}
            name={chartBackName}
            domain1={domainBack}
            type={ChartTitles.CURVE_BACK}
          />
        </ShadowBox>
      </Grid>
    </Box>
  );
};

export default StatisticPage;
