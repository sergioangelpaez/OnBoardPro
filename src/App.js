import React from 'react';
import styles from './styles/App.module.scss';
import Login from './pages/Login';
import Modal from './components/Modal';

function App() {
  return (
    <Modal isVisible={true}/>
    //<Login />
  );
}

export default App;