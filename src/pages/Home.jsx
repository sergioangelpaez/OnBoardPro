import React, { useState } from 'react';
import AdminHome from './Admin/AdminHome';
import styles from '../styles/Home.module.scss';

const Home = () => {
    const [role, setRole] = useState('Admin');

    const toggleRole = () => {
        setRole(prevRole => (prevRole === 'Admin' ? 'User' : 'Admin'));
    };

    return (
        <div className={styles.outletContainer}>
            {role === 'Admin' ? <AdminHome /> : <p>Error</p>}
            {/**<button onClick={toggleRole}>Cambiar rol</button>**/}
        </div>
    );
}

export default Home;