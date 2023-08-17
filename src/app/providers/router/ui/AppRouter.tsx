import { Suspense, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

export const AppRouter = memo(() => {
  const routes = Object.values(routeConfig).map((route) => (
    <Route
      key={route.path}
      path={route.path}
      element={
        route.auth
          ? <RequireAuth>{route.element}</RequireAuth>
          : route.element
      }
    />
  ));

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes}
      </Routes>
    </Suspense>
  );
});
