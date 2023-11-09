import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Dialogs.module.css';
import {DialogData} from "../../index";

type DialogListProps = {
    dialogs: DialogData[];
    setActiveDialogId: (id: number) => void;
};

export const DialogList: React.FC<DialogListProps> = ({ dialogs, setActiveDialogId }) => (
    <aside className={styles.dialogsList}>
        <h3>Dialogs</h3>
        {dialogs.map(dialog => (
            <NavLink
                to={`/message/${dialog.id}`}
                key={dialog.id}
                className={({ isActive }: any) =>
                    `${styles.dialogItem} ${isActive ? styles.active : ''}`
                }
                onClick={() => setActiveDialogId(dialog.id)}
            >
                <img src={`https://placekitten.com/50/50?image=${dialog.id}`} alt={`${dialog.name}`} className={styles.avatar} />
                <span className={styles.dialogName}>{dialog.name}</span>
            </NavLink>
        ))}
    </aside>
);