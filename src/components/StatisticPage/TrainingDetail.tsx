"use client";
import ShadowBox from "@/attoms/shadowBox/ShadowBox";
import { TextBold, TextMedium, Title } from "@/attoms/text/Text";
import { texts } from "@/constants/pl/common";
import {
    getDayMonthYearAndTime
} from "@/core/helpers";
import {
    Grid
} from "@mui/material";
import { FC } from "react";
import { ActionButton } from "./ActionButton";

interface TrainingDetailProps {
    name: string,
    user: number,
    stop_at: string,
    isTrainer: boolean
    training_id: number
    handleAction: () => Promise<boolean>;
}
export const TrainingDetail: FC<TrainingDetailProps> = ({
    name, user, stop_at, isTrainer, handleAction, training_id
}) => {

    return <>
        <ShadowBox>

            <Title text={"Statystyki"} className="text-midnight" />
        </ShadowBox>
        <ShadowBox>
            <Grid item sm={3}>
                <TextBold text={name.split(":")[0]} className="text-center" />
                <TextMedium text={texts.nazwa_terningu} className="text-center" />
            </Grid>
            <Grid item sm={3}>
                <TextBold text={`${user}`} className="text-center" />
                <TextMedium text={texts.identyfikator_uzytkownika} className="text-center" />
            </Grid>
            <Grid item sm={3}>
                <TextBold text={getDayMonthYearAndTime(stop_at)} className="text-center" />
                <TextMedium text={texts.data_wykonania} className="text-center" />
            </Grid>
            <ActionButton isTrainer={isTrainer} handleAction={handleAction} mentee_id={user} training_id={training_id} />

        </ShadowBox>


    </>
};
