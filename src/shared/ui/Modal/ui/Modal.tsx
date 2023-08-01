import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, MouseEvent } from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
   className?: string;
   children?: ReactNode;
   isOpen?: boolean;
   onClose?: () => void;
}
export const Modal = (props: ModalProps) => {
  const {
    children, isOpen, className, onClose
  } = props;

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen
  };

  const onCloseModal = () => {
    if (onClose) {
      onClose();
    }
  };

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={classNames(cls.modal, mods, [className])}>
      <div className={cls.overlay} onClick={onCloseModal}>
        <div className={cls.content} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </div>
  );
};
