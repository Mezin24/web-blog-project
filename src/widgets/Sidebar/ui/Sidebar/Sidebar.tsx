import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

interface SidebarProps {
   className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = useCallback(() => {
    setCollapsed(prev => !prev)
  }, [])
  
 return (
     <menu className={classNames(
      cls.sidebar , 
      {[cls.collapsed]: collapsed}, 
      [className])}
     >
        <Button theme={ButtonTheme.PRIMARY} className={cls['toggle-btn']} onClick={toggleCollapsed}>{collapsed ? '>' : '<'}</Button>
        <div className={cls.switchers}>
          <ThemeSwitcher />
          <LangSwitcher />
        </div>
     </menu>
   );
};
