import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styles from '../styles/Layout.module.scss';
import { useState } from 'react';
import { useAuth } from '../controllers/authContext';

const Layout = () => {
    const { logout } = useAuth();
    const { userData } = useAuth();
    const [headerUsername, setheaderUsername] = useState(userData ? userData.user.email : 'Username');
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible((prev) => !prev);
    };

    const handleLogout = () => {
        logout();
        window.location.href = '/';
    };

    return (
        <div className={styles.MainContainer}>
            <header>
                <div className={styles.LogoContainer}>
                    <h1>OnBoardPro</h1>
                </div>
                <div className={styles.menuHeader}>
                    <nav>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/settings">Settings</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.userMenu}>
                    <div className={styles.userProfile}>
                        <div className={styles.headerUserPicture}>
                
                        </div>
                        <div className={styles.headerUsernamePlaceholder} onClick={toggleMenu}>
                            <p>{headerUsername}</p>
                        </div>
                    </div>
                    <div className={styles.triangle} onClick={toggleMenu}>
                    </div>
                    {isMenuVisible && (
                        <div className={styles.dropdownMenu}>
                            <ul>
                                <li><Link to="/logros">Ver mis logros</Link></li>
                                <li onClick={handleLogout}>Cerrar sesión</li>
                            </ul>
                        </div>
                    )}
                </div>
            </header>
            <main> 
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;