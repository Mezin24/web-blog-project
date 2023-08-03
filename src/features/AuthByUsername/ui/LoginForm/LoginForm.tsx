import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
   className?: string;
}
export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <form className={classNames(cls.loginForm, {}, [className])}>
      <Input type="text" className={cls.input} placeholder={t('Введите username')} />
      <Input type="text" className={cls.input} placeholder={t('Введите пароль')} />
      <Button className={cls.submitBtn} theme={ButtonTheme.OUTLINE}>
        {t('Отправить')}
      </Button>
    </form>
  );
};
