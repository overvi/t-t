import type { ReactNode } from "react";
import Close from "@/assets/images/close.svg?react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-5">
      <div
        className="fixed inset-0 bg-shark/80"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-md rounded-3xl bg-white p-6 px-8 shadow-nav">
        <div className="mb-4 flex items-center justify-between">
          {title && (
            <h2 className="text-right text-[1.125rem] font-bold text-abbey">
              {title}
            </h2>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-xl text-manatee"
            aria-label="بستن"
          >
            <Close />
          </button>
        </div>

        <div className="mb-5 h-px w-full bg-athens-gray" />

        {children}
      </div>
    </div>
  );
};

export default Modal;
