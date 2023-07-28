import { AppRouter } from "app/providers/router"
import { useTheme } from "app/providers/theme/useTheme"
import { Suspense } from "react"
import 'shared/config/i18n/i18n'
import { classNames } from "shared/lib/classNames/classNames"
import { Navbar } from "widgets/Navbar"
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar"

export const App = () => {
  const {theme} = useTheme()
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className="page-wrapper">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}