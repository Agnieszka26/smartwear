"use client";
import logo from "@/assets/icons/logo-smartwear.png";
import BaseModal from "@/attoms/baseModal/BaseModal";
import ButtonContained, { NavButton } from "@/attoms/button/ButtonContained";
import { TextMedium } from "@/attoms/text/Text";
import { trener } from "@/constants";
import { RoutesPath } from "@/constants/RoutesPath";
import { contact_tel, texts } from "@/constants/pl/common";
import { hideOnMobile, showOnMobile } from "@/constants/propertiesCSS";
import { UserType } from "@/core/types/pageProps/types";
import { Avatar, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useSession } from "next-auth/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import test from "node:test";
import { FC, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const navElements = [
  {
    children: (
      <Image src={logo} alt="logo smartwaer" height={250} width={250} />
    ),
    href: RoutesPath.HOME,
  },
  { children: texts.projekty_unijne, href: RoutesPath.PROJECTS_UE },
  { children: texts.aplikacja, href: "#second-section" },
  {
    children: texts.o_nas,
    href: RoutesPath.ABOUT_US,
  },
  { children: texts.smart_chair, href: RoutesPath.SMART_CHAIR },
  { children: texts.kontakt_z_nami, href: "" },
];

const LoginButtonsContainer: FC<{
  user: UserType | undefined;
  router: AppRouterInstance;
}> = ({ user, router }) => {
  {
    if (user) {
      return (
        <Button
          color={"info"}
          onClick={() => {
            if (user.last_name === trener) {
              router.push(RoutesPath.PROFILE_TRAINER);
            } else router.push(RoutesPath.PROFILE_USER);
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        </Button>
      );
    } else
      return (
        <>
          <Button
            variant="outlined"
            color={"info"}
            onClick={() => router.push(RoutesPath.LOG_IN)}
            className={"rounded-large"}
          >
            {texts.zaloguj_sie}
          </Button>
          <ButtonContained
            text={texts.zarejestruj_sie}
            onClick={() => router.push(RoutesPath.REGISTRATION)}
          />
        </>
      );
  }
};

const NavbarBar = () => {
  const router = useRouter();
const [modal, setModal] = useState(false)
  const { data: session } = useSession();
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);

  const openModal = () =>{
    setModal(true)
  }

  return (
<>
    <AppBar
      sx={{ bgcolor: "background.paper" }}
      className={`shadow-none border-2 border-b-midnight-white`}
    >
      <Container
        sx={{
          display: showOnMobile,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={() => setOpenHamburgerMenu((prev) => !prev)}
          size="large"
          edge="start"
          color={"info"}
          aria-label="menu"
        >
          <RxHamburgerMenu />
        </IconButton>
        <LoginButtonsContainer user={session?.user} router={router} />
      </Container>

      <Container
        sx={{
          display: hideOnMobile,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {navElements.map(({ children, href }, i) => (
          <NavButton
            href={href}
            key={href + i}
            text={children}
            openModal={()=>openModal()}
            ornament={i !== 0 &&
              i !== navElements.length - 1 && (
                <TextMedium className="text-xs" text="|" />
              )}



              />
        ))}

        <LoginButtonsContainer user={session?.user} router={router} />
      </Container>

      {openHamburgerMenu && (
        <Box
          sx={{
            display: "grid",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          {navElements.map(({ children, href }, i) => (
            <NavButton href={href} key={href + i} text={children}

            />
          ))}
        </Box>
      )}
    </AppBar>
    <BaseModal open={modal} handleClose={()=>setModal(false) }>
      <TextMedium text="Kontakt telefoniczny:" />
      <TextMedium text={contact_tel} />
       </BaseModal>
    </>
  );
};
export default NavbarBar;
