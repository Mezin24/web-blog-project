import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
  fetchProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidationErrors,
  profileActions,
  profileReducer
} from 'entities/Profile';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { ValidationErrors } from 'entities/Profile/model/types/profile';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
   className?: string;
}

const initialReducers: ReducersList = {
  profile: profileReducer
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validationErrors = useSelector(getProfileValidationErrors);
  const { t } = useTranslation('profile');
  const { id } = useParams<{id: string}>();

  const validationTranslations = {
    [ValidationErrors.INVALID_DATA]: t('Имя и фамилия обязательны'),
    [ValidationErrors.INVALID_AGE]: t('Некорректный возраст'),
    [ValidationErrors.INVALID_COUNTRY]: t('Некорректный регион'),
    [ValidationErrors.SERVER_ERROR]: t('Серверная ошибка присохранении'),
    [ValidationErrors.NO_DATA]: t('Данные не указаны'),
  };

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.setProfileData({
      name: value || ''
    }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.setProfileData({
      lastname: value || ''
    }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.setProfileData({
      age: Number(value || 0)
    }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.setProfileData({
      city: value || ''
    }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.setProfileData({
      avatar: value || ''
    }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.setProfileData({
      username: value || ''
    }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((value?: Currency) => {
    dispatch(profileActions.setProfileData({
      currency: value || Currency.RUB
    }));
  }, [dispatch]);

  const onChangeCountry = useCallback((value?: Country) => {
    dispatch(profileActions.setProfileData({
      country: value || Country.Russia
    }));
  }, [dispatch]);

  const onSetEdit = useCallback(() => {
    dispatch(profileActions.setReadonly());
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.profilePage, {}, [className])}>
        <ProfilePageHeader
          readonly={readonly}
          onEdit={onSetEdit}
          onCancel={onCancelEdit}
        />
        {validationErrors?.length && validationErrors.map((error) => (
          <Text
            key={error}
            theme={TextTheme.ERROR}
            text={validationTranslations[error]}
          />
        ))}
        <ProfileCard
          data={formData}
          error={error}
          isLoading={isLoading}
          onChangeName={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
