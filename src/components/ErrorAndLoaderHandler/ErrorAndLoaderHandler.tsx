"use client";

import { TextMedium } from "@/attoms/text/Text";
import { FC, ReactNode, useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
interface ErrorAndLoaderHandlerProps {
  errorMessage: string | false;
  data: boolean;
  children: ReactNode;
}
const ErrorAndLoaderHandler: FC<ErrorAndLoaderHandlerProps> = ({
  errorMessage,
  data,
  children,
}) => {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    !data ? setLoader(true) : setLoader(false);
  });
  return (
    <Sidebar>
      {errorMessage ? (
        <TextMedium text={errorMessage} />
      ) : loader ? (
        <>Loading ... </>
      ) : (
        children
      )}
    </Sidebar>
  );
};

export default ErrorAndLoaderHandler;
