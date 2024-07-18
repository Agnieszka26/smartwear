import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, ReactNode } from "react";

const ButtonContained: FC<{
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}> = ({ text, onClick, className, disabled }) => {
  return (
    <Button
      color={"info"}
      disabled={disabled}
      onClick={onClick}
      variant="contained"
      className={`${
        className ? className : ` `
      } md:text-lg text-sm text-gray-200 font-Lato bg-midnight rounded-large`}
    >
      {text}
    </Button>
  );
};

export const ButtonLink: FC<{
  text: string;
  href: string;
  className?: string;
  disabled?: boolean;
}> = ({ text, href, className, disabled }) => {
  return (
    <Link href={href}>
      <Button
        disabled={disabled}
        variant="contained"
        className={`${
          className ? className : ` `
        } w-full md:text-lg text-sm text-gray-200 font-Lato bg-midnight`}
      >
        {text}
      </Button>
    </Link>
  );
};

export default ButtonContained;

interface NavButtonProps {
  text: string | ReactNode;
  href: string;
openModal?: ()=> void;
  ornament?: ReactNode;
}
export const NavButton: FC<NavButtonProps> = ({ text,  ornament, href, openModal }) => {
const router = useRouter()
const handleClick = () => {
  if(href===""){
    openModal && openModal()
  }
  else{
    router.push(href)
  }
}



  return (
    <>
      <Button
        color={"info"}
        component="span"
        variant="text"
        className={` text-lg  text-gray-600 hover:underline hover:text-midnight`}
        onClick={()=> handleClick()}
      >
        {text}
      </Button>
      {ornament}
    </>
  );
};
