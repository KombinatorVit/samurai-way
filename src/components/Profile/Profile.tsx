import React from 'react';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../index";



type ProfilePropsType = {
    postData:PostType[]
    addPost: (newPostText: string) => void
    updateChangePost: (newPostText: string) => void
    newPostText:string
}
const Profile: React.FC<ProfilePropsType> = ({postData,addPost, updateChangePost, newPostText}) => {
    return (
        <div className={styles.profileContent}>
            
            <ProfileInfo/>
            
            <MyPosts postData={postData} addPost={addPost} updateChangePost={updateChangePost} newPostText={newPostText}/>
        
        </div>
    );
};



export default Profile;


