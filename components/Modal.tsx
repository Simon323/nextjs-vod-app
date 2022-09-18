import React from "react";
import MuiModal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState);

  const handleClose = (): void => {
    setShowModal(false);
  };
  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <></>
    </MuiModal>
  );
}

export default Modal;
