import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useCallback, useState } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
   className?: string;
}
export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsername = useCallback((value: string) => {
    setUsername(value);
  }, []);

  const onChangePassword = useCallback((value: string) => {
    setPassword(value);
  }, []);

  return (
    <form className={classNames(cls.loginForm, {}, [className])}>
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Введите username')}
        onChange={onChangeUsername}
        value={username}
        autoFocus
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Введите пароль')}
        onChange={onChangePassword}
        value={password}
      />
      <Button className={cls.submitBtn} theme={ButtonTheme.OUTLINE}>
        {t('Отправить')}
      </Button>
    </form>
  );
};
