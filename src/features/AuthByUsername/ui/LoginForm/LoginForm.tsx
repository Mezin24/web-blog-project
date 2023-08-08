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
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
   className?: string;
   onSuccess: () => void
}

const initialReducers: ReducersList = {
  login: loginReducer
};

const LoginForm = ({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);
  const dispatch = useAppDispatch();

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLogin = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, onSuccess, password, username]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
    </DynamicModuleLoader>
  );
};

export default LoginForm;
