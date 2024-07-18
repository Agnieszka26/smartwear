import BaseModal from "@/attoms/baseModal/BaseModal";
import ButtonContained from "@/attoms/button/ButtonContained";
import { ModalContent } from "@/attoms/modalContent/ModalContent";
import { texts, textsTrainer } from "@/constants/pl/common";
import { FC, useState } from "react";
import ReviewForm from "../ReviewForm/ReviewForm";

export const ActionButton: FC<{ isTrainer: boolean, handleAction: () => Promise<boolean>,   training_id?: number,
    mentee_id?: number }> = ({ isTrainer, handleAction,   training_id,
    mentee_id, }) => {
    const [modal, setModal] = useState<string>("");

    const handleClickButton = async () => {
        if(isTrainer){
            setModal(textsTrainer.napisz_opinie )
        }else{

            const x = await handleAction()
            if (x) {
                setModal("Udało się")

            }
            else setModal("Nie udało się")
        }
    }

    return <>
        <BaseModal open={Boolean(modal)} handleClose={() => setModal("")}>
            <ModalContent message={isTrainer ? "" :modal} title={isTrainer ?textsTrainer.napisz_opinie : texts.zapytaj_o_ocene} />
            {isTrainer && training_id&& mentee_id &&<ReviewForm reviewType="training" training_id={training_id} mentee_id={mentee_id} /> }
        </BaseModal>
        <ButtonContained text={isTrainer ? textsTrainer.wystaw_opinie : texts.zapytaj_o_ocene} onClick={handleClickButton} />
    </>

}
