import {
  updateProfiledata
} from 'entities/Profile/model/services/updateProfileData/updateProfileData';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile';
import { getAuthData } from 'entities/User/model/selectors/getAuthData/getAuthData';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
   className?: string;
   readonly?: boolean;
   onEdit?: () => void;
   onCancel?: () => void;
}
export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const {
    className, readonly, onCancel, onEdit
  } = props;
  const { t } = useTranslation('profile');
  const profileData = useSelector(getProfileData);
  const authData = useSelector(getAuthData);
  const canEdit = profileData?.id === authData?.id;

  const dispatch = useAppDispatch();

  const onUpdate = useCallback(() => {
    dispatch(updateProfiledata());
  }, [dispatch]);

  return (
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {canEdit && (
        <div className={cls.btnWrapper}>
          {readonly ? (
            <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
              {t('Редактировать')}
            </Button>
          ) : (
            <div className={cls.actions}>
              <Button theme={ButtonTheme.OUTLINE} onClick={onUpdate}>
                {t('Сохранить')}
              </Button>
              <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancel}>
                {t('Отменить')}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
