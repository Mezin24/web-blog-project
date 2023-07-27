import { Link } from "react-router-dom"
import { AppPaths } from "shared/config/routeConfig/routeConfig"
import { AppRouter } from "app/providers/router"
import { useTheme } from "app/providers/theme/useTheme"
import { classNames } from "shared/lib/classNames/classNames"

export const App = () => {
  const {theme, toggleTheme} = useTheme()
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={AppPaths.main}>Main</Link>
      <Link to={AppPaths.about}>About</Link>
      <button onClick={toggleTheme}>toggle</button>
      <AppRouter />
    </div>
  )
}