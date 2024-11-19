import styles from '../../styles/Admin/AdminHome.module.scss';
import { useState } from 'react';
import Tool from '../../components/Admin/Tool';
import ConfirmationButton from '../../components/ConfirmationButton';
import editIcon from '../../assets/edit-icon.png';
import seeIcon from '../../assets/see-icon.png';
import * as Components from '../../components/index';

const AdminHome = () => {
    
    const [userName, setUserName] = useState("User Name");

    const options = ["Instructor 1", "Instructor 2", "Instructor 3"];

    const handleSelection = (selectedOption) => {
        console.log("Seleccionaste:", selectedOption);
    };

    const [modals, setModals] = useState({
        isCreateCourseModalVisible: true
    });
    
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
                        <div className={styles.toolsDividerContainer}>
                            <hr />
                        </div>
                    </div>
                    <Tool tittle="Crear curso"/>
                    <Tool tittle="Asignar profesores"/>
                    <Tool tittle="Reportes"/>
                </div>
            </div>
            <div className={styles.overviewContainer}>
                <div className={styles.CoursesOverview}>
                    <div className={styles.toolsHeader}>
                        <div className={styles.toolsTittle}>
                            <span>Cursos</span>
                        </div>
                        <div className={styles.toolsDividerContainer}>
                            <hr />
                        </div>
                    </div>
                    <div className={styles.CourseOverview}>
                        <div className={styles.CourseOverviewInfo}>
                            <p>Nombre del curso</p>
                            <div className={styles.CourseOverviewDetails}>
                                <div>
                                    <p>Nombre del instructor</p>
                                </div>
                                <div>
                                    <p>10 Estudiantes</p>
                                </div>
                                <div className={styles.CourseOverviewButtonsContainer}>
                                    <ConfirmationButton width='40%' height='100%'>
                                        <img src={editIcon} width='15px' height='15px' alt="" />
                                    </ConfirmationButton>
                                    <ConfirmationButton width='40%' height='100%'>
                                        <img src={seeIcon} width='20px' height='15px' alt="" />
                                    </ConfirmationButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.CourseOverview}>
                        <div className={styles.CourseOverviewInfo}>
                            <p>Nombre del curso</p>
                            <div className={styles.CourseOverviewDetails}>
                                <div>
                                    <p>Nombre del instructor</p>
                                </div>
                                <div>
                                    <p>10 Estudiantes</p>
                                </div>
                                <div className={styles.CourseOverviewButtonsContainer}>
                                    <ConfirmationButton width='40%' height='100%'>
                                        <img src={editIcon} width='15px' height='15px' alt="" />
                                    </ConfirmationButton>
                                    <ConfirmationButton width='40%' height='100%'>
                                        <img src={seeIcon} width='20px' height='15px' alt="" />
                                    </ConfirmationButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.CoursesOverview}>
                    <div className={styles.toolsHeader}>
                        <div className={styles.toolsTittle}>
                            <span>Instructores</span>
                        </div>
                        <div className={styles.toolsDividerContainer}>
                            <hr />
                        </div>
                    </div>
                    <div className={styles.CourseOverview}>
                        <div className={styles.CourseOverviewInfo}>
                            <p>Nombre del instructor</p>
                            <div className={styles.CourseOverviewDetails}>
                                <div>
                                    <p>10 Cursos</p>
                                </div>
                                <div className={styles.CourseOverviewButtonsContainer}>
                                    <ConfirmationButton width='40%' height='100%'>
                                        <img src={editIcon} width='15px' height='15px' alt="" />
                                    </ConfirmationButton>
                                    <ConfirmationButton width='40%' height='100%'>
                                        <img src={seeIcon} width='20px' height='15px' alt="" />
                                    </ConfirmationButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.CourseOverview}>
                        <div className={styles.CourseOverviewInfo}>
                            <p>Nombre del instructor</p>
                            <div className={styles.CourseOverviewDetails}>
                                <div>
                                    <p>10 Cursos</p>
                                </div>
                                <div className={styles.CourseOverviewButtonsContainer}>
                                    <ConfirmationButton width='40%' height='100%'>
                                        <img src={editIcon} width='15px' height='15px' alt="" />
                                    </ConfirmationButton>
                                    <ConfirmationButton width='40%' height='100%'>
                                        <img src={seeIcon} width='20px' height='15px' alt="" />
                                    </ConfirmationButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.CoursesOverview}>
                    <div className={styles.toolsHeader}>
                        <div className={styles.toolsTittle}>
                            <span>Reportes</span>
                        </div>
                        <div className={styles.toolsDividerContainer}>
                            <hr />
                        </div>
                    </div>
                    <div className={styles.ReportsOverview}>
                        <div className={styles.ReportOverview}>

                        </div>
                        <div className={styles.ReportOverview}>
                            
                        </div>
                    </div>
                </div>
            </div>

            <Components.Modal
                isVisible={modals.isCreateCourseModalVisible}
                tittle="Crea un curso"
                width="30%"
                height="50%"
                onClose={() => {}}
            >
                <div className={styles.ModalContainer}>
                    <div className={styles.ModalTopContainer}>
                        <Components.Input tittle="Nombre del curso" width='100%' height='5vh' placeholder='Nombre del curso'/>
                        <Components.Dropdown 
                            options={options} 
                            placeholder="Instructor" 
                            onChange={handleSelection} 
                        />
                        <div className={styles.fileSelector}>
                            <Components.FileSelector />
                        </div>
                    </div>
                    <div className={styles.ModalButtonsContainer}>
                        <Components.CloseButton text='Cancelar' width='40%' height='80%' onClick={() => {}} />
                        <Components.ConfirmationButton text='Crear' width='40%' height='80%' />
                    </div>
                </div>
            </Components.Modal>
        </div>
    );
}

export default AdminHome;