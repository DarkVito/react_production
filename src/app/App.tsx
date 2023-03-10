import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { AppRouter } from './providers/Router'


const App = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главнвя</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter />
        </div>
    )
}

export default App