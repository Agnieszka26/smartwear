import { activate } from "@/apiHandlers/activate";
import imageRegistration from "@/assets/images/registrationAndLogin/Email campaign-amico.svg";
import { styleBaseModal } from "@/attoms/baseModal/BaseModal";
import { ButtonLink } from "@/attoms/button/ButtonContained";
import { RoutesPath } from "@/constants/RoutesPath";
import { texts } from "@/constants/pl/common";
import { Box, Typography } from "@mui/material";
import { AxiosError, AxiosResponse } from "axios";
import Image from "next/image";
const ActivatePage = async ({ params }: any) => {
  try {
    const { data: activationData }: AxiosResponse = await activate(params);
  } catch (err) {
    const error = err as AxiosError;
    console.error("error", error);
  }
  return (
    <main className="section" style={{ paddingTop: "6rem" }}>
      <Box sx={styleBaseModal} className="grid items-center align-middle">
        <Typography
          variant="body1"
          className="text-zinc-700 font-medium font-Inter text-center mb-12 text-xl"
        >
          {texts.dziekujemy_za_rejestracje}
        </Typography>
        <Image src={imageRegistration} alt={"image registration correct"} />
        <Typography
          variant="body1"
          className="text-zinc-700 font-medium font-Inter text-center mb-12 text-xl"
        >
          {texts.mozesz_sie_juz_zalogowac}
        </Typography>

        <ButtonLink href={RoutesPath.LOG_IN} text={texts.zaloguj_sie} />
      </Box>
    </main>
  );
};

export default ActivatePage;
