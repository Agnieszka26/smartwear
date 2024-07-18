"use client";

import ShirtPage from "@/components/ShirtPage/ShirtPage";
import Sidebar from "@/components/Sidebar/Sidebar";

const Page = () => {
  return (
    <Sidebar>
      <ShirtPage
        name={"Koszulka 1"}
        battery={50}
        model={"TKM 875 993"}
        last_used={"14.05.2023"}
        address_mac="XDSER"
        first_connection="11.03.2023"
      />
    </Sidebar>
  );
};
export default Page;
