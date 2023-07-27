import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

export function AppRouter() {
  return <Suspense fallback=''>
    <Routes>
      {Object.values(routeConfig)
        .map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))
      }
    </Routes>
  </Suspense>
}