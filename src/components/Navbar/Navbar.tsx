import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import styles from './Navbar.module.css';
import {FriendListItem} from "./FriendListItem";

type NavItemProps = {
    to: string;
    currentPath: string;
    children: React.ReactNode;
};


const myFriends = [ { name: 'Dima', avatarUrl: '/path/to/dima-avatar.jpg' },
    { name: 'Sasha', avatarUrl: '/path/to/sasha-avatar.jpg' },]



const Navbar = () => {
    const location = useLocation();
    
    return (
        <nav className={styles.sidebar}>
            <NavItem to="/profile" currentPath={location.pathname}>
                Profile
            </NavItem>
            <NavItem to="/message" currentPath={location.pathname}>
                Message
            </NavItem>
            <NavItem to="/news" currentPath={location.pathname}>
                News
            </NavItem>
            <NavItem to="/music" currentPath={location.pathname}>
                Music
            </NavItem>
            <NavItem to="/settings" currentPath={location.pathname}>
                Settings
            </NavItem>
            
            <div className={styles.friends}> My friends
                <ul className={styles.friendList}>
                    {myFriends.map(friend => (
                        <FriendListItem key={friend.name} name={friend.name} avatarUrl={friend.avatarUrl} />
                    ))}
                </ul>
            </div>
        </nav>
    );
};

const NavItem: React.FC<NavItemProps> = ({to, currentPath, children}) => {
    const isActive = currentPath === to;
    
    return (
        <div className={`${isActive ? styles.active : ''} ${styles.item}`}>
            <Link to={to}>{children}</Link>
        </div>
    );
};

export default Navbar;
