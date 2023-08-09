import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo } from 'react';

interface LangSwitcherProps {
   className?: string;
   short?: boolean
}
export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { i18n, t } = useTranslation();

  const changeLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <Button
      onClick={changeLang}
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
    >
      {short ? t('Короткий язык') : t('Язык')}
    </Button>
  );
});
