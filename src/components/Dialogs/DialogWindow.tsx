import React from 'react';
import styles from './Dialogs.module.css';
import {MessageList} from "./MessageList";
import {DialogData} from "../../index";

type DialogWindowProps = {
    activeDialog: DialogData | undefined;
};

export const DialogWindow: React.FC<DialogWindowProps> = ({activeDialog}) => (
    <main className={styles.dialogContent}>
        <HeaderDialog name={activeDialog?.name}/>
        <MessageList messages={activeDialog?.messages || []}/>
    </main>
);

type HeaderProps = {
    name: string | undefined;
};

export const HeaderDialog: React.FC<HeaderProps> = ({name}) => (
    <header className={styles.dialogHeader}>
        {name && <h3>{name}</h3>}
    </header>
);