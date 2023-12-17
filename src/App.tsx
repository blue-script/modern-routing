import {NavLink, Outlet, useNavigate} from 'react-router-dom'
import './App.css'
import styles from './components/Site.module.css'
import {S} from './components/pages/__styles'
import {useEffect, useState} from 'react';
import {useWindowSize} from './helpers/useWindowSIze';

function App() {
  const navigate = useNavigate()
  const comeBack = () => navigate(-1)
  const mainPage = () => navigate('/page/0')


  const width = useWindowSize()
  console.log(width)

  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        {
          width > 800
            ? <div className={styles.nav}>
              <S.NavWrapper>
                <NavLink to={'/page/0'}>Page1</NavLink>
              </S.NavWrapper>
              <S.NavWrapper>
                <NavLink to={'/page/1'}>Page2</NavLink>
              </S.NavWrapper>
              <S.NavWrapper>
                <NavLink to={'/page/2'}>Page3</NavLink>
              </S.NavWrapper>
              <S.NavWrapper>
                <NavLink to={'/page/protected'}>Protected Page</NavLink>
              </S.NavWrapper>
              <div>
                <a href='/page1'>aHrefPage1</a>
              </div>
            </div>
            : <div></div>
        }

        <div className={styles.content}>
          <Outlet/>
          <button onClick={comeBack}>back</button>
          <button onClick={mainPage}>home page</button>
        </div>
      </div>
      <div>FOOTER</div>
    </div>
  )
}

export default App
