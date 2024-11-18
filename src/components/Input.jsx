import styles from '../styles/Input.module.scss';

const Input = ({ width, height, type, placeholder, value, onChange }) => {
    return (
        <input 
            className={styles.Input} 
            style={{ width: width, height: height }}
            type={type} 
            placeholder={placeholder} 
            value={value}
            onChange={onChange}
        />
    );
}

export default Input;
