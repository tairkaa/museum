import { Modal as ConstaModal } from "@consta/uikit/Modal";
import { Picture } from "@consta/uikit/Picture";
import "./Modal.css";

export const Modal = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  return (
    <ConstaModal
      isOpen={isOpen}
      onClose={onClose}
      hasOverlay
      onClickOutside={onClose}
      style={{ borderRadius: 0 }}
    >
      <div className="modal__content">
        <Picture src={imageSrc} alt={imageAlt} className="modal__image" />
      </div>
    </ConstaModal>
  );
};
