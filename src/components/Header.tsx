import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <p>hello man</p>
            
            <img src='/logo.png' alt="Description of the image" className={styles.header_img}/>
        </header>
    );
};

export default Header;