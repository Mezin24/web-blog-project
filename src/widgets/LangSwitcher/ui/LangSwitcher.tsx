import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
   className?: string;
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const {i18n, t} = useTranslation()

  const changeLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }
  
 return (
     <Button 
     onClick={changeLang} 
     className={classNames(cls.langSwitcher , {}, [className])}
     >
       {t('Язык')}
     </Button>
   );
};
