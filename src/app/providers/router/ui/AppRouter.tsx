import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'shared/ui/Page/Page';
import { PageLoader } from 'widgets/PageLoader';

export function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig)
          .map((route) => (
            <Route key={route.path} path={route.path} element={<Page>{route.element}</Page>} />
          ))}
      </Routes>
    </Suspense>
  );
}
