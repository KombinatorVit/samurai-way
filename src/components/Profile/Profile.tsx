import React from 'react';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../index";


type ProfilePropsType = {
    postData: PostType[]
    dispatch: any
    newPostText: string
}
const Profile: React.FC<ProfilePropsType> = ({postData, dispatch, newPostText}) => {
    return (
        <div className={styles.profileContent}>
            
            <ProfileInfo/>
            
            <MyPosts postData={postData} dispatch={dispatch}
                     newPostText={newPostText}/>
        
        </div>
    );
};


export default Profile;


