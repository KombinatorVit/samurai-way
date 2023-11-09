import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

type NavItemProps = {
    to: string;
    currentPath: string;
    children: React.ReactNode;
};

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
        </nav>
    );
};

const NavItem: React.FC<NavItemProps> = ({ to, currentPath, children }) => {
    const isActive = currentPath === to;
    
    return (
        <div className={`${isActive ? styles.active : ''} ${styles.item}`}>
            <Link to={to}>{children}</Link>
        </div>
    );
};

export default Navbar;
