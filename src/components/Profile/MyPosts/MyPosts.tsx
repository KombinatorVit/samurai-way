import React, {FC} from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../index";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducers/postsReducer";


type MyPostsProps = {
    postData: PostType[]
    dispatch: any
    newPostText: string
}


const MyPosts: FC<MyPostsProps> = ({postData, dispatch, newPostText}) => {
    
    
    function addPostClick() {
        
        
        dispatch(addPostActionCreator())
        
        
    }
    
    function onPostChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        
        dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
    }
    
    
    return (
        <div className={styles.myPosts}>
            <h3>My posts</h3>
            
            
            <div className={styles.addPost}>
                <textarea className={styles.postInput} placeholder="Write something..."
                          value={newPostText} onChange={onPostChange}/>
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
