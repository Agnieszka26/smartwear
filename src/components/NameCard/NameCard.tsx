import ShadowBox from "@/attoms/shadowBox/ShadowBox";
import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

import { TextBold, TextMedium } from "@/attoms/text/Text";
import { texts } from "@/constants/pl/common";
import avatar from "@/assets/images/default_avatar_image.jpg"
interface NameCardProps {
  image?: StaticImageData;
  name: string;
  user_type: string;
}
export const NameCard: FC<NameCardProps> = ({ image, name, user_type }) => {
  return (
    <ShadowBox  className="flex justify-center items-center gap-12">
        <Image src={avatar} alt="avatar image" className="max-h-[150px] max-w-[150px] rounded-2xl shadow"/>
      <div>
        <TextBold text={name} />
        <TextMedium text={`${texts.typ_konta}: ${user_type}`} />
      </div>
    </ShadowBox>
  );
};
