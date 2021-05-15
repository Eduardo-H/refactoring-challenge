import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
    isOpen: boolean;
    setIsOpen: () => void;
    children: JSX.Element;
}

export function Modal({isOpen, setIsOpen, children}: ModalProps) {
    const [modalStatus, setModalStatus] = useState(isOpen);

    useEffect(() => {
        modalStatus !== isOpen ?? setModalStatus(isOpen);
    }, [modalStatus, isOpen]);

    return (
        <ReactModal
            shouldCloseOnOverlayClick={!false}
            onRequestClose={setIsOpen}
            isOpen={isOpen}
            ariaHideApp={false}
            className="react-modal-content"
            overlayClassName="react-modal-overlay"
        >
            {children}
        </ReactModal>
    );
};

export default Modal;
