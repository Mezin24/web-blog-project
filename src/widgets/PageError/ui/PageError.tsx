import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { memo } from 'react';
import cls from './PageError.module.scss';

interface PageErrorProps {
   className?: string;
}
export const PageError = memo(({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const onReload = () => window.location.reload();

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <div>{t('Произошла ошибка')}</div>
      <div>{t('Попробуйте перезагрузить страницу')}</div>
      <Button onClick={onReload}>{t('Перезагрузить')}</Button>
    </div>
  );
});
