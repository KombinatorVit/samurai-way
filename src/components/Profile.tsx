import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
    return (
        <div className={styles.content}>
            
            <img src="/images.jpeg" alt=""/>
            <div style={{display: 'flex'}}>
                <img src="/ava.jpeg" alt="" style={{width: '50px'}}/>
                <h3>Name</h3>
                <p> Deskr</p>
            </div>
            
            <div className={styles.post}>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>post1</div>
                    <div>post2</div>
                    <div>post3</div>
                </div>
            </div>
        
        </div>
    
    );
};

export default Profile;