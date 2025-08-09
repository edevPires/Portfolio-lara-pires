// ModalLayout.tsx
import { type FC, type ReactNode, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

interface ModalLayoutProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalLayout: FC<ModalLayoutProps> = ({ isOpen, onClose, children }) => {
  const [show, setShow] = useState(isOpen);
  const [fadeClass, setFadeClass] = useState('');
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setTimeout(() => setFadeClass('opacity-100'), 10); // fade in
    } else {
      setFadeClass('opacity-0 pointer-events-none');
      timeoutRef.current = window.setTimeout(() => setShow(false), 300); // match duration
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isOpen]);

  if (!show) return null;

  return ReactDOM.createPortal(
    <div
      className={`transition-opacity duration-300 ease-in-out ${fadeClass} fixed inset-0 bg-[#000000]/80 flex flex-col justify-center items-center z-[1000] overflow-hidden`}
      onClick={onClose}
    >
      <div
        className="relative flex flex-col justify-center items-center rounded-lg w-full max-w-full max-h-[95vh] overflow-y-auto lg:overflow-y-hidden"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default ModalLayout;