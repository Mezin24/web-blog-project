import { Link } from "react-router-dom"
import { AppPaths } from "shared/config/routeConfig/routeConfig"
import { AppRouter } from "app/providers/router"
import { useTheme } from "app/providers/theme/useTheme"
import { classNames } from "shared/lib/classNames/classNames"
import { Navbar } from "widgets/Navbar"

export const App = () => {
  const {theme} = useTheme()
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  )
}