import React from 'react';
import styles from './Post.module.css';

type PropsType = {
    message: string;
    likeCount: number;
};

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.postItem}>
            <div className={styles.postContent}>
                {props.message}
                <img src="/ava.jpeg" alt="" className={styles.postImage} />
            </div>
            <div className={styles.likeSection}>
                <span>Like </span>
                {props.likeCount}
            </div>
        </div>
    );
};

export default Post;
