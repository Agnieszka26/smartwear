import ShadowBox from '@/attoms/shadowBox/ShadowBox'
import { TextBold } from '@/attoms/text/Text'
import Tooltip from '@mui/material/Tooltip'
import { FC } from 'react'

const DescriptionTraining: FC<{ description: string }> = ({ description }) => {
    return description !== "" ?
        <ShadowBox>
            <Tooltip title="opinia o treningu wystawion przez Twojego Trenera" >
                <div className="grid grid-cols-1 align-middle justify-center content-center">

                    <TextBold text={description} className="text-center" />

                </div>
            </Tooltip>
        </ShadowBox> : <></>

}



export default DescriptionTraining
