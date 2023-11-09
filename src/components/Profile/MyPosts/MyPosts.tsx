import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../index";


type MyPosts = {
    postData: PostType[]
}
const MyPosts: React.FC<MyPosts> = ({postData}) => {
    
    const inputRef = React.createRef<HTMLTextAreaElement>()
    
    function addPost() {
        if (inputRef.current && inputRef.current.value) {
            
            let text = inputRef.current.value
            
            console.log(text)
            inputRef.current.value = ''
            
            
        }
        
    }
    
    
    return (
        <div className={styles.myPosts}>
            <h3>My posts</h3>
            
            
            <div className={styles.addPost}>
                <textarea className={styles.postInput} placeholder="Write something..." ref={inputRef}/>
                <button className={styles.btnAddPost} onClick={addPost}>Add post</button>
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
