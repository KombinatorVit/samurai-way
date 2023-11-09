// Settings.jsx
import React, { useState } from 'react';
import styles from './Settings.module.css';

const Settings = () => {
    const [username, setUsername] = useState('John Doe');
    const [email, setEmail] = useState('john@example.com');
    
    const handleEdit = () => {
        console.log('Edit button clicked');
    };
    
    const handleSave = () => {
        console.log('Save button clicked');
    };
    
    return (
        <div className={styles.settings}>
            <h2>User Settings</h2>
            <div className={styles.settingItem}>
                <label>Username:</label>
                <span>{username}</span>
                <button onClick={handleEdit}>Edit</button>
            </div>
            <div className={styles.settingItem}>
                <label>Email:</label>
                <span>{email}</span>
                <button onClick={handleEdit}>Edit</button>
            </div>
            <button className={styles.saveButton} onClick={handleSave}>Save Changes</button>
        </div>
    );
};

export default Settings;
