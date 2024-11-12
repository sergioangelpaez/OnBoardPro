import userLogo from '../media/userLogo.webp';

const ProfileImage = () => (
    <img 
        src={userLogo} 
        alt="Perfil" 
        style={{ width: '5em' }} // Ajusta el tamaño aquí
    />
);

export default ProfileImage;
