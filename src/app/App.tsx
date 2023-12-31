import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/theme/useTheme';
import { userActions } from 'entities/User';
import { getUserInit } from 'entities/User/model/selectors/getUserInit/getUserInit';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'shared/config/i18n/i18n';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export const App = () => {
  const init = useSelector(getUserInit);
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="page-wrapper">
          <Sidebar />
          {init && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};
