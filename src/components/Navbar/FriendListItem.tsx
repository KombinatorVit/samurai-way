import React from "react";
import styles from "./Navbar.module.css";

type FriendListItemProps = {
    name: string;
    avatarUrl: string; // Путь к аватарке
};
export const FriendListItem: React.FC<FriendListItemProps> = ({ name, avatarUrl }) => {
    return (
        <li className={styles.friendListItem}>
            <img src={avatarUrl} alt={`Avatar of ${name}`} className={styles.avatar} />
            {name}
        </li>
    );
};
