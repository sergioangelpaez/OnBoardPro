import styles from '../../styles/Admin/AdminHome.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../controllers/authContext';
import Tool from '../../components/Admin/Tool';
import ConfirmationButton from '../../components/ConfirmationButton';
import editIcon from '../../assets/edit-icon.png';
import seeIcon from '../../assets/see-icon.png';
import * as Components from '../../components/index';

const AdminHome = () => {
    const { userData } = useAuth();
    const [userName, setUserName] = useState(userData ? userData.user.email : "Username");
    const options = ["Instructor 1", "Instructor 2", "Instructor 3"];
    const navigate = useNavigate();
    
    const [isConfirmationChipVisible, setIsConfirmationShipVisible] = useState(false);

    const handleChipClick = () => {
        setIsConfirmationShipVisible(false);
    };
    
    const [modal, setModal] = useState({
        isCreateCourseModalOpen: false,
    });

    const [form, setForm] = useState({
        courseName: "",
        selectedInstructor: "",
        studentFile: null,
    });

    const [errors, setErrors] = useState({
        courseName: "",
        selectedInstructor: "",
        studentFile: "",
    });

    const toggleModal = (modalName) => {
        setModal((prev) => ({
            ...prev,
            [modalName]: !prev[modalName],
        }));
    };

    const handleCreateCourse = () => {
        toggleModal('isCreateCourseModalOpen');
    };

    const handleInputChange = (e) => {
        setForm({ ...form, courseName: e.target.value });
        setErrors({ ...errors, courseName: "" });
    };

    const handleSelection = (selectedOption) => {
        setForm({ ...form, selectedInstructor: selectedOption });
        setErrors({ ...errors, selectedInstructor: "" });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setForm({ ...form, studentFile: file });
            setErrors({ ...errors, studentFile: "" });
        } else {
            setForm({ ...form, studentFile: null });
            setErrors({ ...errors, studentFile: "Debe subir una lista de estudiantes." });
        }
    };

    const handleFileSelect = (file) => {
        console.log("Archivo recibido:", file);
        setForm({ ...form, studentFile: file });
    };

    const validateForm = () => {
        const newErrors = {
            courseName: form.courseName ? "" : "El nombre del curso es obligatorio.",
            selectedInstructor: form.selectedInstructor ? "" : "Debe seleccionar un instructor.",
            studentFile: form.studentFile ? "" : "Debe subir una lista de estudiantes.",
        };

        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === "");
    };

    const handleSubmit = () => {
        if (validateForm()) {
            toggleModal('isCreateCourseModalOpen');
            setIsConfirmationShipVisible(true);
        }
    };

    const navigateTo = (url) => {
        console.log('aslkdj');
        navigate(url);
    }

    return (
        <div className={styles.adminMainContainer}>
            <div className={styles.toolsContainer}>
                <div className={styles.profileBanner}>
                    <div className={styles.userPictureContainer}>
                        <div className={styles.userPicture}></div>
                    </div>
                    <div className={styles.userNameContainer}>
                        <p>Bienvenido,<br /></p>
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
                    <Tool tittle="Crear curso" onClick={handleCreateCourse} />
                    <Tool tittle="Asignar profesores" />
                    <Tool tittle="Reportes" />
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
                                    <ConfirmationButton width='40%' height='100%' onClick={() => navigateTo('/editar-curso')} isDisabled={false}>
                                        <img src={editIcon} width='15px' height='15px' alt="" />
                                    </ConfirmationButton>
                                    <ConfirmationButton width='40%' height='100%' isDisabled={false}>
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
                                    <ConfirmationButton width='40%' height='100%' onClick={() => navigateTo('/editar-curso')} isDisabled={false}>
                                        <img src={editIcon} width='15px' height='15px' alt="" />
                                    </ConfirmationButton>
                                    <ConfirmationButton width='40%' height='100%' onClick={() => navigateTo('/editar-curso')} isDisabled={false}>
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
                                    <ConfirmationButton width='40%' height='100%' isDisabled={false}>
                                        <img src={editIcon} width='15px' height='15px' alt="" />
                                    </ConfirmationButton>
                                    <ConfirmationButton width='40%' height='100%' isDisabled={false}>
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
                                    <ConfirmationButton width='40%' height='100%' isDisabled={false}>
                                        <img src={editIcon} width='15px' height='15px' alt="" />
                                    </ConfirmationButton>
                                    <ConfirmationButton width='40%' height='100%' isDisabled={false}>
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
                isVisible={modal.isCreateCourseModalOpen}
                tittle="Crea un curso"
                width="30%"
                height="fit-content"
                onClose={() => { toggleModal('isCreateCourseModalOpen'); }}
            >
                <div className={styles.ModalContainer}>
                    <div className={styles.ModalTopContainer}>
                        <Components.Input
                            tittle="Nombre del curso"
                            width="100%"
                            height="5vh"
                            placeholder="Nombre del curso"
                            value={form.courseName}
                            onChange={handleInputChange}
                        />
                        {errors.courseName && <p className={styles.errorText}>{errors.courseName}</p>}

                        <Components.Dropdown
                            options={options}
                            placeholder="Instructor"
                            onChange={handleSelection}
                        />
                        {errors.selectedInstructor && <p className={styles.errorText}>{errors.selectedInstructor}</p>}

                        <div className={styles.fileSelector}>
                        <Components.FileSelector onFileSelect={(handleFileSelect)} onChange={handleFileChange}/>
                            {errors.studentFile && <p className={styles.errorText}>{errors.studentFile}</p>}
                        </div>
                    </div>
                    <div className={styles.ModalButtonsContainer}>
                        <Components.CloseButton
                            text="Cancelar"
                            width="40%"
                            height="80%"
                            onClick={() => { toggleModal('isCreateCourseModalOpen'); }}
                        />
                        <Components.ConfirmationButton
                            text="Crear"
                            width="40%"
                            height="80%"
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </Components.Modal>

            {isConfirmationChipVisible && (
                <Components.ConfirmationChip 
                    label="Curso creado correctamente." 
                    onClick={handleChipClick} 
                />
            )}
        </div>
    );
};

export default AdminHome;