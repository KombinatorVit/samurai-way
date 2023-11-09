import styles from "../Profile.module.css";
import React from "react";

export const ProfileInfo = () => {
    return <>
        <div className={styles.coverImage}>
            <img src="/images.jpeg" alt="Cover"/>
        </div>
        
        <div className={styles.userInfo}>
            <div className={styles.avatar}>
                <img src="/ava.jpeg" alt="Avatar"/>
            </div>
            <div className={styles.userData}>
                <h3 className={styles.userName}>Name</h3>
                <p className={styles.userDescription}>Description</p>
            </div>
        </div>
    </>
}