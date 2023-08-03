import { LoginModal } from 'features/AuthByUsername';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { t } = useTranslation();

  const onCloseModal = () => setIsAuthOpen(false);
  const onOpenModal = () => setIsAuthOpen(true);

  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <Button onClick={onOpenModal} theme={ButtonTheme.CLEAR_INVERTED}>
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />
    </header>
  );
};
