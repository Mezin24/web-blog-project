import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { t } = useTranslation();

  const toggleAuthOpen = () => setIsAuthOpen((prev) => !prev);

  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <Button onClick={toggleAuthOpen} theme={ButtonTheme.CLEAR_INVERTED}>
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Dignissimos magnam consectetur maxime dicta sit assumenda distinctio ea
        alias cupiditate impedit?
      </Modal>
    </header>
  );
};
