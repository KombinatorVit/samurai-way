import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={styles.myPosts}>
            <h3>My posts</h3>
            
            <div className={styles.addPost}>
                <textarea className={styles.postInput} placeholder="Write something..." />
                <button className={styles.btnAddPost}>Add post</button>
            </div>
            
            <div className={styles.posts}>
                <Post message={'Hello'} likeCount={1} />
                <Post message={'My first message'} likeCount={2} />
            </div>
        </div>
    );
};

export default MyPosts;
