import { LoginModal } from 'features/AuthByUsername';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthData } from 'entities/User/model/selectors/getAuthData/getAuthData';
import { userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/lib/const/localStorage';
import { useNavigate } from 'react-router-dom';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { t } = useTranslation();
  const authData = useSelector(getAuthData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCloseModal = () => setIsAuthOpen(false);
  const onOpenModal = () => setIsAuthOpen(true);
  const onLogout = () => {
    dispatch(userActions.logout());
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    navigate('/');
  };

  if (authData) {
    return (
      <header className={classNames(cls.navbar, {}, [className])}>
        <Button onClick={onLogout} theme={ButtonTheme.CLEAR_INVERTED}>
          {t('Выйти')}
        </Button>
      </header>
    );
  }

  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <Button onClick={onOpenModal} theme={ButtonTheme.CLEAR_INVERTED}>
        {t('Войти')}
      </Button>
      {isAuthOpen && <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />}
    </header>
  );
});
