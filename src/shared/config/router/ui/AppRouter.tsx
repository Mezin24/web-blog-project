import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "../model/routeConfig";

export function AppRouter() {
  return <Suspense fallback=''>
    <Routes>
      {Object.values(routerConfig)
        .map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))
      }
    </Routes>
  </Suspense>
}