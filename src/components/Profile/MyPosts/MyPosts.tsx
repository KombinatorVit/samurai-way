import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

type PostType = {
    message: string
    likeCount: number
    id: number
}

const PostData: PostType[] = [
    {message: 'Hello', likeCount: 1, id: 1},
    {message: 'My first message', likeCount: 2, id: 2},
]

const MyPosts = () => {
    return (
        <div className={styles.myPosts}>
            <h3>My posts</h3>
            
            <div className={styles.addPost}>
                <textarea className={styles.postInput} placeholder="Write something..."/>
                <button className={styles.btnAddPost}>Add post</button>
            </div>
            
            <div className={styles.posts}>
                
                {PostData.map(p => {
                    return <React.Fragment key={p.id}>
                        <Post message={p.message} likeCount={p.likeCount}/>
                    </React.Fragment>
                })}
            
            </div>
        </div>
    );
};

export default MyPosts;
