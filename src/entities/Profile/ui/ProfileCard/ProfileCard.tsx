import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import {
  getProfileIsLoading
} from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
   className?: string;
}
export const ProfileCard = ({ className }: ProfileCardProps) => {
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileIsLoading);
  const { t } = useTranslation('profile');

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />
        <Button theme={ButtonTheme.OUTLINE}>
          {t('Редактировать')}
        </Button>
      </div>
      <div className={cls.content}>
        <Input
          placeholder={t('Ваше имя')}
          value={data?.name}
          className={cls.input}
        />
        <Input
          placeholder={t('Ваша фамилия')}
          value={data?.lastname}
          className={cls.input}
        />
      </div>
    </div>
  );
};
