import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Layout.module.scss';
import logo from '../../assets/play-boy.png'

const Layout = () => {
    return (
        <>
        <header className={styles.headerLayout}>
            <div className={styles.headerContainer}>
                
            <Link to={'/'}>
                <img  className={styles.logo} src={logo} alt='logo'/>
            </Link>
            <Link to={'*'} className={styles.login}>
Вход
            </Link>

            </div>
        </header>
        </>
    );
}

export default Layout;
