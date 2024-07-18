import { Box, Modal } from "@mui/material";
import { FC, ReactNode } from "react";
import { TextMedium, Title } from "../text/Text";
interface BaseModalProps {
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
  title?: string;
}
export const styleBaseModal = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "16px",
  boxShadow: 12,
  p: 4,
};
const BaseModal: FC<BaseModalProps> = ({
  open,
  handleClose,
  title,
  children,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styleBaseModal}>
        {title && <TextMedium text={title} />}
        {children}
      </Box>
    </Modal>
  );
};

export default BaseModal;
