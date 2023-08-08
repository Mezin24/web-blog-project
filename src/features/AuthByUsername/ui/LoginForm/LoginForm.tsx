import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import {
  getLoginIsLoading
} from 'features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading';
import {
  getLoginPassword
} from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import {
  getLoginUsername
} from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import {
  loginByUsername
} from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicMaduleLoader,
  ReducersList
} from 'shared/lib/components/DynamicMaduleLoader/DynamicMaduleLoader';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
   className?: string;
}

const initialReducers: ReducersList = {
  login: loginReducer
};

const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);
  const dispatch = useDispatch();

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <DynamicMaduleLoader reducers={initialReducers} removeAfterUnmount>
      <form className={classNames(cls.loginForm, {}, [className])}>
        <Text title={t('Форма авторици')} />
        {error && <Text text={t('Вы ввели некорректный данные')} theme={TextTheme.ERROR} />}
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
        <Button
          onClick={onLogin}
          className={cls.submitBtn}
          theme={ButtonTheme.OUTLINE}
          disabled={isLoading}
        >
          {isLoading ? t('Отправка...') : t('Отправить')}
        </Button>
      </form>
    </DynamicMaduleLoader>
  );
};

export default LoginForm;
