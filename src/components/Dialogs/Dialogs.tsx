import React from 'react';
import styles from './Dialogs.module.css';

const Dialogs = () => {
    const dialogsData = [
        { id: 1, name: 'John', message: 'Hello' },
        { id: 2, name: 'Jane', message: 'Hi' },
        { id: 3, name: 'Bob', message: 'How are you?' },
        { id: 4, name: 'Alice', message: 'Fine, thanks' } ,
    ];
    
    return (
        <div className={styles.dialogs}>
            <h3>My dialogs</h3>
            <div className={styles.dialogItems}>
                {dialogsData.map(dialog => (
                    <div key={dialog.id} className={styles.dialog}>
                        <div className={styles.dialogAvatar}>
                            <img src="https://placekitten.com/50/50" alt="Avatar" />
                        </div>
                        <div className={styles.dialogInfo}>
                            <p className={styles.dialogName}>{dialog.name}</p>
                        </div>
                        <div className={styles.dialogMessage}>{dialog.message}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dialogs;
