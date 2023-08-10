import { getAuthData } from 'entities/User/model/selectors/getAuthData/getAuthData';
import { Suspense, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'shared/ui/Page/Page';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = memo(() => {
  const isAuth = useSelector(getAuthData);
  const routes = useMemo(
    () => Object.values(routeConfig).filter((route) => !(!isAuth && route.auth)),
    [isAuth]
  );

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes
          .map((route) => (
            <Route key={route.path} path={route.path} element={<Page>{route.element}</Page>} />
          ))}
      </Routes>
    </Suspense>
  );
});
