import React from 'react';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../index";



type ProfilePropsType = {
    postData:PostType[]
}
const Profile: React.FC<ProfilePropsType> = ({postData}) => {
    return (
        <div className={styles.profileContent}>
            
            <ProfileInfo/>
            
            <MyPosts postData={postData}/>
        
        </div>
    );
};



export default Profile;


