import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../index";


type MyPosts = {
    postData: PostType[]
}
const MyPosts: React.FC<MyPosts> = ({postData}) => {
    return (
        <div className={styles.myPosts}>
            <h3>My posts</h3>
            
            <div className={styles.addPost}>
                <textarea className={styles.postInput} placeholder="Write something..."/>
                <button className={styles.btnAddPost}>Add post</button>
            </div>
            
            <div className={styles.posts}>
                
                {postData.map(p => {
                    return <React.Fragment key={p.id}>
                        <Post message={p.message} likeCount={p.likeCount}/>
                    </React.Fragment>
                })}
            
            </div>
        </div>
    );
};

export default MyPosts;
