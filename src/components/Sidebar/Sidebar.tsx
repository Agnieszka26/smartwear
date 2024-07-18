"use client";
import { url } from "@/apiHandlers/config";
import Loading from "@/app/loading";
import {
  Calendar,
  Profile,
  Shirt,
  Workout
} from "@/attoms/iconsAsComponents/IconsAsComponents";
import { RoutesPath } from "@/constants/RoutesPath";
import { texts, textsTrainer } from "@/constants/pl/common";
import {
  Container,
  Grid,
  List,
  ListItemButton,
  Skeleton,
  Typography
} from "@mui/material";
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { FC, ReactNode, Suspense, useEffect, useState } from "react";
import { BsPeople } from "react-icons/bs";
import { IoIosLogOut, IoMdNotificationsOutline } from "react-icons/io";
interface SidebarProps {
  children: ReactNode;
}

const USsideBarElements = [
  {
    text: texts.twoj_profil,
    icon: <Profile />,
    href: RoutesPath.PROFILE_USER,
  },
  {
    text: texts.twoja_koszulka,
    icon: <Shirt />,
    href: RoutesPath.YOUR_SHIRT,
  },
  {
    text: texts.trening,
    icon: <Workout />,
    href: RoutesPath.TRAINING,
  },
  {
    text: texts.plan_treningowy,
    icon: <Calendar />,
    href: RoutesPath.TRAINING_PLAN,
  },
];

const TRSideBarElements = [
  {
    text: texts.twoj_profil,
    icon: <Profile />,
    href: RoutesPath.PROFILE_TRAINER,
  },
  {
    text: textsTrainer.prosby_o_opinie,
    icon: <IoMdNotificationsOutline size={24} />,
    href: RoutesPath.REQUESTS,
  },
  {
    text: textsTrainer.twoi_klienci,
    icon: <BsPeople size={24} />,
    href: RoutesPath.CLIENTS,
  },
  {
    text: textsTrainer.twoje_opinie,
    icon: <Calendar />,
    href: RoutesPath.OPINIONS,
  },
];

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const [sideBarElements, setSideBarElements] = useState<
    {
      text: string;
      icon: JSX.Element;
      href: string;
    }[]
  >();
  const router = useRouter();
  const pathName = usePathname();
  useEffect(() => {
    pathName.includes("trainer")
      ? setSideBarElements(TRSideBarElements)
      : setSideBarElements(USsideBarElements);
  }, []);
  return (
    <Container className="min-h-[73vh]">
      <Grid container className="pt-24">
        <Grid sm={3} item className="relative w-full">
          <List className="bg-white  shadow-sm rounded-2xl shadow-midnight fixed min-w-[240px] ">
            {sideBarElements
              ? sideBarElements.map(({ text, icon, href }, index) => (
                <div key={text} id="hoverIcon">
                  <ListItemButton
                    href={href}
                    className={` text-gray-500 hover:underline hover:text-midnight`}
                  >
                    {icon}
                    <Typography className="text-lg ml-3">{text}</Typography>
                  </ListItemButton>
                </div>
              ))
              : TRSideBarElements.map((x) => {
                return (
                  <Skeleton
                    key={x.text}
                    variant="rectangular"
                    animation="wave"
                    height="36px"
                    className="my-5"
                  />
                );
              })}
            <ListItemButton
              id="hoverIcon"
              onClick={() => signOut({ redirect: false, callbackUrl: url }).then(() => {
                router.push("/")
              })}
              className={`text-gray-500 hover:underline hover:text-midnight`}
            >
              <IoIosLogOut size={24} />
              <Typography className="text-lg ml-3 hover:text-midnight ">
                {texts.wyloguj_sie}
              </Typography>
            </ListItemButton>
          </List>
        </Grid>
        <Grid item sm={9}>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Sidebar;
