import React, { useState } from "react";
import styles from "../styles/Dropdown.module.scss";

const Dropdown = ({ options, placeholder = "Selecciona una opción", onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelected(option);
        setIsOpen(false);
        if (onChange) onChange(option);
    };

    return (
        <div className={styles.Dropdown}>
            <div
                className={styles["Dropdown-Input"]}
                tabIndex="0"
                onClick={toggleDropdown}
                onBlur={() => setTimeout(() => setIsOpen(false), 100)}
            >
                {selected || placeholder}
            </div>
            <div
                className={`${styles["Dropdown-Menu"]} ${
                    isOpen ? styles.open : ""
                }`}
            >
                {options.map((option, index) => (
                    <div
                        key={index}
                        className={styles["Dropdown-Option"]}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;