import styles from '../styles/Input.module.scss';

const Input = ({ width, height, type, placeholder, value, onChange }) => {
    return (
        <input 
            className={styles.Input} 
            style={{ width: width, height: height }}
            type={type} 
            placeholder={placeholder} 
            value={value} // Esto establece el valor del campo de texto
            onChange={onChange} // Esto asegura que el valor se actualice cuando el usuario lo cambie
        />
    );
}

export default Input;
