import { FC, useEffect, useRef, useState } from "react";

import BaseModal from "@/attoms/baseModal/BaseModal";
import ShadowBox from "@/attoms/shadowBox/ShadowBox";
import { Title } from "@/attoms/text/Text";
import { Tooltip } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import dayjs, { Dayjs } from "dayjs";
import { FormTraining } from "../treiningForm/TreiningForm";
import { colors } from "@/constants/colors";

// OPCJAA ZAMIAST ZAZNACZYĆ KOLOREM to powiadomieniem
//<Badge
//     key={props.day.toString()}

//     anchorOrigin={{
//         vertical: 'bottom',
//         horizontal: 'left',
//     }}
//     color={isSelected ? "primary" : undefined}
//     overlap="rectangular"
//     badgeContent={isSelected ? ' ' : undefined}
// >
interface TrainingPlanCalendarProps {}

function ServerDay(
  props: PickersDayProps<Dayjs> & { highlightedDays?: number[] },
) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;
  const [open, setOpen] = useState(false);
  const [detailsDayOpen, setDetailsDayOpen] = useState(false);
  const isSelected =
    !props.outsideCurrentMonth &&
    highlightedDays.indexOf(props.day.date()) >= 0;

    const handleSetTraining = (day: Dayjs, trainingID: string) => {
      console.log("ustawiono trening na", day);
      console.log("trainingID", trainingID);
    setOpen(false)
    };
  return (
    <>
      {isSelected ? (
        <Tooltip title="Twój trening">
          <PickersDay
            {...other}
            outsideCurrentMonth={outsideCurrentMonth}
            day={day}
            style={{ background: colors.chartGreen }}
            onClick={() => setDetailsDayOpen(true)}
          />
        </Tooltip>
      ) : (
        <PickersDay
          {...other}
          outsideCurrentMonth={outsideCurrentMonth}
          day={day}
          onClick={() => setOpen(true)}
        />
      )}

      <BaseModal
        open={detailsDayOpen}
        handleClose={() => setDetailsDayOpen(false)}
        title="Na ten dzień masz zaplanowane"
      >
        <Title text="Bieganie" />
      </BaseModal>
      <BaseModal
        title="Wybierz rodzaj treningu."
        open={open}
        handleClose={() => setOpen(false)}
      >
        <FormTraining chosenDate={day} handleSetTraining={handleSetTraining} />
      </BaseModal>
    </>
  );
}

function fakeFetch(date: Dayjs, { signal }: { signal: AbortSignal }) {
  return new Promise<{ daysToHighlight: number[] }>((resolve, reject) => {
    const timeout = setTimeout(() => {

      const daysToHighlight = [1,8,22,29]
      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException("aborted", "AbortError"));
    };
  });
}

const TrainingPlanCalendar: FC<TrainingPlanCalendarProps> = () => {
  const initialValue = dayjs(new Date());
  const requestAbortController = useRef<AbortController | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [highlightedDays, setHighlightedDays] = useState([1, 8, 15,22]);

  const fetchHighlightedDays = (date: Dayjs) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        // setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== "AbortError") {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  useEffect(() => {
    fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date: Dayjs) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

  return (
    <>
    <ShadowBox>

      <Title text="Twoje treningi" className="text-midnight"/>
    </ShadowBox>
      <ShadowBox>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            defaultValue={initialValue}
            loading={isLoading}
            onMonthChange={handleMonthChange}
            renderLoading={() => <DayCalendarSkeleton />}
            slots={{
              day: ServerDay,
            }}
            slotProps={{
              day: {
                highlightedDays,
              } as any,
            }}
          />
        </LocalizationProvider>
      </ShadowBox>
    </>
  );
};

export default TrainingPlanCalendar;
