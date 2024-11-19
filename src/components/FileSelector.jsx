import React, { useState } from "react";
import styles from "../styles/FileSelector.module.scss";

const FileSelector = ({ onFileSelect }) => {
    const [fileName, setFileName] = useState("Lista de estudiantes");
    const [error, setError] = useState(""); // Estado para manejar errores

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileType = file.name.split(".").pop(); // Extrae la extensión del archivo
            if (fileType === "xlsx" || fileType === "csv") {
                setFileName(file.name);
                setError(""); // Limpia el mensaje de error si todo está bien
                if (onFileSelect) {
                    onFileSelect(file);
                }
            } else {
                setFileName("Lista de estudiantes");
                setError("Por favor, seleccione un archivo válido (.xlsx o .csv).");
            }
        }
    };

    return (
        <div className={styles.fileSelectorContainer}>
            <div className={styles.fileSelector} onClick={() => document.getElementById("fileInput").click()}>
                <p>{fileName}</p>
                <input
                    id="fileInput"
                    type="file"
                    style={{ display: "none" }}
                    accept=".xlsx, .csv" // Solo acepta archivos .xlsx y .csv
                    onChange={handleFileChange}
                />
            </div>
            {error && <p className={styles.errorMessage}>{error}</p>}
        </div>
    );
};

export default FileSelector;