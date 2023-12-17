import { NavLink, Outlet } from 'react-router-dom'
import './App.css'
import styles from './components/Site.module.css'
import { S } from './components/pages/__styles'

function App() {
	return (
		<div>
			<div className={styles.header}>
				<h1>HEADER</h1>
			</div>
			<div className={styles.body}>
				<div className={styles.nav}>
					<S.NavWrapper>
						<NavLink to={'/page/0'}>Page1</NavLink>
					</S.NavWrapper>
					<S.NavWrapper>
						<NavLink to={'/page/1'}>Page2</NavLink>
					</S.NavWrapper>
					<S.NavWrapper>
						<NavLink to={'/page/2'}>Page3</NavLink>
					</S.NavWrapper>
					<div>
						<a href='/page1'>aHrefPage1</a>
					</div>
				</div>
				<div className={styles.content}>
					<Outlet />
				</div>
			</div>
			<div>FOOTER</div>
		</div>
	)
}

export default App
