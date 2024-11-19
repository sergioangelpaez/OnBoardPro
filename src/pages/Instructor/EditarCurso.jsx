import styles from '../../styles/Instructor/EditCourse.module.scss'
import BackButton from '../../assets/back.png';
import EditIcon from '../../assets/edit-icon.png';
import CloseIcon from '../../assets/close.png';
import AddIcon from '../../assets/plus.png';
import * as Components from '../../components/index';
import { useState } from 'react';

const EditarCurso = () => {

    const stateOptions = ["Activo", "Desactivado", "Cancelado"];
    const availabilityOptions = ["Publico", "Privado"];
    const achievmentsOptions = ["Logro 1", "Logro 2", "Logro 3"];

    const [isConfirmationChipVisible, setIsConfirmationShipVisible] = useState(false);

    const handleChipClick = () => {
        setIsConfirmationShipVisible(false);
    };

    const [modal, setModal] = useState({
        isAddActivityModalOpen: false,
        isAddSectionModalOpen: false
    });

    const toggleModal = (modalName) => {
        setModal((prev) => ({
            ...prev,
            [modalName]: !prev[modalName],
        }));
    };

    const handleAddActivity = () => {
        toggleModal('isAddActivityModalOpen');
    };

    const handleAddSection = () => {
        toggleModal('isAddSectionModalOpen');
    };

    const [form, setForm] = useState({
        activityName: "",
        activityDesc: "",
        activityFile: null,
    });

    const [sectionForm, setSectionForm] = useState({
        sectionName: "",
    });

    const [errors, setErrors] = useState({
        activityName: "",
        activityDesc: "",
        activityFile: "",
        sectionName: "",
    });

    const handleInputChange = (e) => {
        setForm({ ...form, activityName: e.target.value });
        setErrors({ ...errors, activityName: "" });
    };

    const handleTextAreaChange = (e) => {
        setForm({ ...form, activityDesc: e.target.value });
        setErrors({ ...errors, activityDesc: "" });
    };

    const handleSectionInputChange = (e) => {
        setSectionForm({ sectionName: e.target.value });
        setErrors({ ...errors, sectionName: "" });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setForm({ ...form, activityFile: file });
            setErrors({ ...errors, activityFile: "" });
        } else {
            setForm({ ...form, activityFile: null });
            setErrors({ ...errors, activityFile: "Debe subir una lista de estudiantes." });
        }
    };

    const handleFileSelect = (file) => {
        console.log("Archivo recibido:", file);
        setForm({ ...form, activityFile: file });
    };

    const validateForm = () => {
        const newErrors = {
            activityName: form.activityName ? "" : "El nombre de la actividad es obligatorio.",
            activityDesc: form.activityDesc ? "" : "La descripcion de la actividad es obligatoria.",
            activityFile: form.activityFile ? "" : "Debe subir un archivo para la actividad",
        };

        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === "");
    };

    const validateSectionForm = () => {
        const newErrors = {
            sectionName: sectionForm.sectionName ? "" : "El nombre de la seccion es obligatorio.",
        };

        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === "");
    };

    const handleSubmit = () => {
        if (validateForm()) {
            toggleModal('isAddActivityModalOpen');
            setIsConfirmationShipVisible(true);
        }
    };

    const handleSectionSubmit = () => {
        if (validateSectionForm()) {
            toggleModal('isAddSectionModalOpen');
            setIsConfirmationShipVisible(true);
        }
    };


    return (
        <div className={styles.editCourseMainContainer}>
            <div className={styles.activitiesContainer}>
                <div className={styles.backButtonContainer}>
                    <div className={styles.backButtonImgContainer}>
                        <img src={BackButton} width='55%' height='80%' alt="" />
                    </div>
                    <div className={styles.backButtonTextContainer}>
                        <p>Volver al inicio</p>
                    </div>
                </div>
                <div className={styles.toolsContainer}>
                    <div className={styles.sectionsWrapper}>
                        <div className={styles.tools}>
                            <div className={styles.toolsHeader}>
                                <div className={styles.toolsTittle}>
                                    <span>Actividades</span>
                                </div>
                                <div className={styles.toolsDividerContainer}>
                                    <hr />
                                </div>
                            </div>
                            <div className={styles.sectionContainer}>
                                <div className={styles.toolsHeader}>
                                    <div className={styles.toolsTittle}>
                                        <span>Nombre de la sección</span>
                                    </div>
                                    <div className={styles.toolsDividerContainer}>
                                        <hr />
                                    </div>
                                </div>
                                <div className={styles.activity}>
                                    <div className={styles.activityName}>
                                        <p>Nombre actividad</p>
                                    </div>
                                    <div className={styles.activityButtonsContainer}>
                                        <Components.ConfirmationButton width='30%' height='70%'>
                                            <img src={EditIcon} width='15px' height='15px' alt="" />
                                        </Components.ConfirmationButton>
                                        <Components.CloseButton width='30%' height='70%'>
                                            <img src={CloseIcon} width='15px' height='15px' alt="" />
                                        </Components.CloseButton>
                                    </div>
                                </div>
                                <div className={styles.activity}>
                                    <div className={styles.activityName}>
                                        <p>Nombre entregable</p>
                                    </div>
                                    <div className={styles.activityButtonsContainer}>
                                        <Components.ConfirmationButton width='30%' height='70%'>
                                            <img src={EditIcon} width='15px' height='15px' alt="" />
                                        </Components.ConfirmationButton>
                                        <Components.CloseButton width='30%' height='70%'>
                                            <img src={CloseIcon} width='15px' height='15px' alt="" />
                                        </Components.CloseButton>
                                    </div>
                                </div>
                                <div className={styles.addActivity} onClick={handleAddActivity}>
                                    <img src={AddIcon} width='15px' height='15px' alt="" />
                                </div>
                            </div>
                            <div className={styles.addSection} onClick={handleAddSection}>
                                <img src={AddIcon} width='15px' height='15px' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.sectionsFooter}>
                        <Components.CloseButton width='40%' height='100%' text='Eliminar Curso'/> 
                    </div>
                </div>
            </div>
            <div className={styles.previewMainContainer}>
                <div className={styles.activitySettings}>
                    <div className={styles.toolsHeader}>
                        <div className={styles.toolsTittle}>
                            <span>Configuracion</span>
                        </div>
                        <div className={styles.toolsDividerContainer}>
                            <hr />
                        </div>
                    </div>
                    <div className={styles.settingsWrapper}>
                        <div className={styles.settingsContainer}>
                            <div className={styles.settings}>
                                <Components.Dropdown options={stateOptions} placeholder='Estado'/>
                                <Components.Dropdown options={availabilityOptions} placeholder='Disponibilidad'/>
                                <Components.Dropdown options={achievmentsOptions} placeholder='Logros'/>
                            </div>
                        </div>
                        <div className={styles.settingsButtonsContainer}>
                            <Components.ConfirmationButton width='40%' height='80%' text='Guardar'/>
                            <Components.ConfirmationButton width='40%' height='80%' text='Publicar'/>
                        </div>
                    </div>
                    <div className={styles.toolsHeader}>
                        <div className={styles.toolsTittle}>
                            <span>Preview</span>
                        </div>
                        <div className={styles.toolsDividerContainer}>
                            <hr />
                        </div>
                    </div>
                    <div className={styles.previewContainer}>
                    </div>
                </div>
            </div>

            <Components.Modal
                isVisible={modal.isAddActivityModalOpen}
                tittle="Crea una actividad"
                width="30%"
                height="fit-content"
                onClose={() => { toggleModal('isAddActivityModalOpen'); }}
            >
                <div className={styles.ModalContainer}>
                    <div className={styles.ModalTopContainer}>
                        <Components.Input
                            tittle="Nombre de la actividad"
                            width="100%"
                            height="5vh"
                            placeholder="Nombre de la actividad"
                            value={form.activityName}
                            onChange={handleInputChange}
                        />
                        {errors.activityName && <p className={styles.errorText}>{errors.activityName}</p>}

                        <Components.Input
                            tittle="Descripcion de la actividad"
                            width="100%"
                            height="10vh"
                            type='textarea'
                            placeholder="Descripcion de la actividad"
                            value={form.activityDesc}
                            onChange={handleTextAreaChange}
                        />
                        {errors.activityDesc && <p className={styles.errorText}>{errors.activityDesc}</p>}

                        <div className={styles.fileSelector}>
                        <Components.FileSelector tittle='Archivo de la actividad' onFileSelect={(handleFileSelect)} onChange={handleFileChange}/>
                            {errors.activityFile && <p className={styles.errorText}>{errors.activityFile}</p>}
                        </div>
                    </div>
                    <div className={styles.ModalButtonsContainer}>
                        <Components.CloseButton
                            text="Cancelar"
                            width="40%"
                            height="80%"
                            onClick={() => {toggleModal('isAddActivityModalOpen'); }}
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

            <Components.Modal
                isVisible={modal.isAddSectionModalOpen}
                tittle="Crea una sección"
                width="30%"
                height="fit-content"
                onClose={() => { toggleModal('isAddSectionModalOpen'); }}
            >
                <div className={styles.ModalContainer}>
                    <div className={styles.ModalTopContainer}>
                        <Components.Input
                            tittle="Nombre de la seccion"
                            width="100%"
                            height="5vh"
                            placeholder="Nombre de la seccion"
                            value={sectionForm.sectionName}
                            onChange={handleSectionInputChange}
                        />
                        {errors.sectionName && <p className={styles.errorText}>{errors.sectionName}</p>}
                        <div className={styles.ModalButtonsContainer}>
                        <Components.CloseButton
                            text="Cancelar"
                            width="40%"
                            height="80%"
                            onClick={() => {toggleModal('isAddSectionModalOpen'); }}
                        />
                        <Components.ConfirmationButton
                            text="Crear"
                            width="40%"
                            height="80%"
                            onClick={handleSectionSubmit}
                        />
                    </div>
                    </div>
                </div>
            </Components.Modal>

            {isConfirmationChipVisible && (
                <Components.ConfirmationChip 
                    label="Creada correctamente." 
                    onClick={handleChipClick} 
                />
            )}
        </div>
    );
}

export default EditarCurso;