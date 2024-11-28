import React, { useState } from 'react';
import AdminHome from './Admin/AdminHome';
import styles from '../styles/Home.module.scss';

const Home = () => {
    const [role, setRole] = useState('Admin');
    return (
        <div className={styles.outletContainer}>
            {role === 'Admin' ? <AdminHome /> : <p>Error</p>}
        </div>
    );
}

export default Home;