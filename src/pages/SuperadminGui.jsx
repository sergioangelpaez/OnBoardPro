import React from 'react';
import styles from '../styles/Superadmin.module.scss';
import * as Components from '../components/index';
import userLogo from '../media/userLogo.webp';


const SuperadminGui = () => {
    return (
        <div className={styles.MainContainer}>
            {/* Header */}
            <header className={styles.Header}>
                <nav className={styles.NavigationButtons}>
                    <a href="inicio"> <h2>OnBoard</h2></a>
                    <a href="#mis-cursos"> <p> Mis Cursos </p></a>
                    <a href="#descubrir"> <p> Descubrir </p></a>
                    <a href="#comunidad"> <p> Comunidad</p> </a>
                    <div className={styles.UserSection}>
                        <span> <p> Nombre usuario </p> </span>
                        <Components.ProfileImage />

                    </div>
                </nav>
            </header>

            {/* Sidebar and Main Content */}
            <div className={styles.ContentContainer}>
                <aside className={styles.Sidebar}>
                    <img src="/path/to/avatar-icon.png" alt="Avatar" className={styles.Avatar} />
                    <h2>Bienvenido, Nombre Admin</h2>
                    <section className={styles.Tools}>
                        <h3>Herramientas</h3>
                        <Components.WhiteButton text="Crear Curso" />
                        <Components.WhiteButton text="Administrar usuarios" />
                        <Components.WhiteButton text="Ver metricas" />
                    </section>
                </aside>

                
            </div>
        </div>
    );
};

export default SuperadminGui;
