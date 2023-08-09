import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
   className?: string;
}

const initailReducers: ReducersList = {
  profile: profileReducer
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  return (
    <DynamicModuleLoader reducers={initailReducers} removeAfterUnmount>
      <div className={classNames(cls.profilePage, {}, [className])}>
        {t('Профиль')}
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
