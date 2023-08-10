import { classNames } from 'shared/lib/classNames/classNames';
import { t } from 'i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import {
  updateProfiledata
} from 'entities/Profile/model/services/updateProfileData/updateProfileData';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
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

  const dispatch = useAppDispatch();

  const onUpdate = useCallback(() => {
    dispatch(updateProfiledata());
  }, [dispatch]);

  return (
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
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
  );
};
