import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/Router'
import { Navbar } from 'widgets/Navbar'


const App = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter />
            <button onClick={toggleTheme}>TOGGLE</button>
            <AppRouter />
        </div>
    )
}

export default App