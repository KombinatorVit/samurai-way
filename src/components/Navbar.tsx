import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    
    const activeStyle = `${styles.active} ${styles.item}`;
    return (
        <nav className={styles.sidebar}>
            <div className={activeStyle}>
                Profile
            </div>
            <div className={styles.item}>
                Message
            </div>
            <div className={styles.item}>
                News
            </div>
            <div className={styles.item}>
                Music
            </div>
            
            <div className={styles.item}>
                Settings
            </div>
        </nav>
    
    );
};

export default Navbar;