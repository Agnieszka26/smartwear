import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FC } from "react";
interface AccordionProps {
  elements: {
    title: string;
    paragraph: string;
  }[];
}

const BasicAccordion: FC<AccordionProps> = ({ elements }) => {
  return (
    <div>
      {elements.map(({ title, paragraph }) => {
        return (
          <Accordion key={title}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="text-zinc-500 font-medium text-lg font-Inter text-start mb-4 mt-4">
                {title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-zinc-500 font-medium font-Inter text-start">
                {paragraph}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default BasicAccordion;
