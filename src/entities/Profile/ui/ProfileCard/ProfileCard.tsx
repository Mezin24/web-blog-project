import { Profile } from 'entities/Profile/model/types/profile';
import { useTranslation } from 'react-i18next';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
   className?: string;
   data?: Profile;
   isLoading?: boolean;
   error?: string;
   onChangeName?: (val: string) => void;
   onChangeLastname?: (val: string) => void;
   onChangeAge?: (val: string) => void;
   onChangeCity?: (val: string) => void;
   onChangeUsername?: (val: string) => void;
   onChangeAvatar?: (val: string) => void;
   onChangeCurrency?: (val: Currency) => void;
   onChangeCountry?: (val: Country) => void;
   readonly?: boolean
}
export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    onChangeLastname,
    onChangeName,
    onChangeCity,
    readonly,
    onChangeAge,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry
  } = props;
  const { t } = useTranslation('profile');
  const mods: Mods = {
    [cls.editing]: !readonly
  };

  if (isLoading) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('Произошла ошибка призагрузке профиля')}
          text={t('Попробуйте обновить страницу')}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.profileCard, mods, [className])}>
      {data?.avatar && (
        <div className={cls.avatarWrapper}>
          <Avatar size={100} alt={data.username} src={data.avatar} />
        </div>
      )}
      <div className={cls.content}>
        <Input
          placeholder={t('Ваше имя')}
          value={data?.name}
          className={cls.input}
          onChange={onChangeName}
          readOnly={readonly}
        />
        <Input
          placeholder={t('Ваша фамилия')}
          value={data?.lastname}
          className={cls.input}
          onChange={onChangeLastname}
          readOnly={readonly}
        />
        <Input
          placeholder={t('Ваш возраст')}
          value={data?.age?.toString()}
          className={cls.input}
          onChange={onChangeAge}
          readOnly={readonly}
          type="number"
        />
        <Input
          placeholder={t('Ваш город')}
          value={data?.city}
          className={cls.input}
          onChange={onChangeCity}
          readOnly={readonly}
        />
        <Input
          placeholder={t('Ваш username')}
          value={data?.username}
          className={cls.input}
          onChange={onChangeUsername}
          readOnly={readonly}
        />
        <Input
          placeholder={t('Ваш аватар')}
          value={data?.avatar}
          className={cls.input}
          onChange={onChangeAvatar}
          readOnly={readonly}
        />
        <CurrencySelect
          value={data?.currency}
          className={cls.input}
          onChange={onChangeCurrency}
          readOnly={readonly}
        />
        <CountrySelect
          value={data?.country}
          className={cls.input}
          onChange={onChangeCountry}
          readOnly={readonly}
        />
      </div>
    </div>
  );
};
