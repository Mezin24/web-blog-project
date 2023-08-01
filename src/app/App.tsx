import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/theme/useTheme';
import { Suspense, useState } from 'react';
import 'shared/config/i18n/i18n';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/ui/Modal';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export const App = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <button type="button" onClick={() => setIsOpen(true)}>modal</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <div className="page-wrapper">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
