import React, {ChangeEvent} from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../index";


type MyPosts = {
    postData: PostType[]
    addPost: (newPostText: string) => void
    updateChangePost: (newPostText: string) => void
    newPostText: string
}
const MyPosts: React.FC<MyPosts> = ({postData, addPost,updateChangePost, newPostText}) => {
    
    const inputRef = React.createRef<HTMLTextAreaElement>()
    
    function addPostClick() {
        if (inputRef.current && inputRef.current.value) {
            
            let text = inputRef.current.value
            
            addPost(text)
        }
        
    }
    
    function onPostChange(e:ChangeEvent<HTMLTextAreaElement>) {
        updateChangePost(inputRef.current?.value || '')
    }
    
    
    return (
        <div className={styles.myPosts}>
            <h3>My posts</h3>
            
            
            <div className={styles.addPost}>
                <textarea className={styles.postInput} placeholder="Write something..." ref={inputRef} value={newPostText} onChange={onPostChange}/>
                <button className={styles.btnAddPost} onClick={addPostClick}>Add post</button>
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
