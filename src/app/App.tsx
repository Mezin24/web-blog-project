import { AppRouter } from "app/providers/router"
import { useTheme } from "app/providers/theme/useTheme"
import { classNames } from "shared/lib/classNames/classNames"
import { Navbar } from "widgets/Navbar"
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar"

export const App = () => {
  const {theme} = useTheme()
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <Sidebar />
      <AppRouter />
    </div>
  )
}