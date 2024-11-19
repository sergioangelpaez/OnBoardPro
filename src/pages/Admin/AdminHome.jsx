import styles from '../../styles/Admin/AdminHome.module.scss';
import { useState } from 'react';
import Tool from '../../components/Admin/Tool';

const AdminHome = () => {
    
    const [userName, setUserName] = useState("User Name");

    return (
        <div className={styles.adminMainContainer}>
            <div className={styles.toolsContainer}>
                <div className={styles.profileBanner}>
                    <div className={styles.userPictureContainer}>
                        <div className={styles.userPicture}>
                        </div>
                    </div>
                    <div className={styles.userNameContainer}>
                        <p>Bievenido,<br /></p>
                        <div className={styles.userName}>
                            <p>{userName}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.tools}>
                    <div className={styles.toolsHeader}>
                        <div className={styles.toolsTittle}>
                            <span>Herramientas</span>
                        </div>
                        <div className={styles.dividerContainer}>
                            <hr />
                        </div>
                    </div>
                    <Tool tittle="Crear curso"/>
                </div>
            </div>
            <div className={styles.overviewContainer}>
            </div>
        </div>
    );
}

export default AdminHome;