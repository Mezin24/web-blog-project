import { getAuthData } from 'entities/User/model/selectors/getAuthData/getAuthData';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
  children: ReactNode
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const auth = useSelector(getAuthData);

  if (!auth) {
    return <Navigate to={`/${AppRoutes.MAIN}`} replace />;
  }
  // eslint-disable-next-line
  return <>{children}</>;
};
