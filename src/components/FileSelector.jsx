import React, { useState } from "react";
import styles from "../styles/FileSelector.module.scss";

const FileSelector = ({ onFileSelect, tittle}) => {
    const [fileName, setFileName] = useState("Lista de estudiantes");
    const [error, setError] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileType = file.name.split(".").pop();
            if (fileType === "xlsx" || fileType === "csv") {
                setFileName(file.name);
                setError("");
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
                <p>{tittle}</p>
                <input
                    id="fileInput"
                    type="file"
                    style={{ display: "none" }}
                    accept=".xlsx, .csv"
                    onChange={handleFileChange}
                />
            </div>
            {error && <p className={styles.errorMessage}>{error}</p>}
        </div>
    );
};

export default FileSelector;