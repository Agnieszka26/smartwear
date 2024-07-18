import { TextBold } from "@/attoms/text/Text";
import { Container } from "@mui/material";
import { FC } from "react";
import Rate from "../Rate/Rate";

export const TitleChart: FC<{ text: string; data: any[], domain1: number[], domain2?: number[], par1: string, par2: string }> = ({ text,data, domain1, domain2,par1, par2 }) => {
  const checkDescription = () => {
    for (const obj of data) {
      if (obj.y < domain1[0] || obj.y > domain1[1]) {
        return `W pewnym momencie Twój parametr ${par1} był poza skalą wartości w normie. Popracuj nad tym.`;
      } else if (domain2 !== undefined) {
        if (obj.y2 < domain2[0] || obj.y2 > domain2[1]) {
          return `W pewnym momencie twój parametr ${par2} był poza skalą wartości w normie. Popracuj nad tym.`;
        }
      }
    }
    return `Wykonałeś prawidłowo swój trening, Gratulacje!`;
    };

  const checkRate = checkDescription() ===  `Wykonałeś prawidłowo swój trening, Gratulacje!`


  return (
    <Container className="flex items-center gap-4 mb-4">
      <TextBold text={text} />
      <Rate rate={checkRate} description={checkDescription()} />
    </Container>
  );
};
