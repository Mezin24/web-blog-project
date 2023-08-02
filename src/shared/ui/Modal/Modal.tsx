import { classNames } from 'shared/lib/classNames/classNames';
import {
  ReactNode, MouseEvent, useState, useRef, useEffect, useCallback
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
   className?: string;
   children: ReactNode;
   isOpen?: boolean;
   onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const {
    children, isOpen, className, onClose
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const onCloseModal = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        setIsClosing(false);
        onClose();
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onCloseModal);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onCloseModal);
    };
  }, [isOpen, onCloseModal]);

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  };

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className])}>
        <div className={cls.overlay} onClick={onCloseModal}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
