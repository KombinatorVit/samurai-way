import React from 'react';
import styles from './Dialogs.module.css';
import {MessageList} from "./MessageList";
import {DialogData} from "../../index";

type DialogWindowProps = {
    activeDialog: DialogData | undefined;
    dispatch: any
};

export const DialogWindow: React.FC<DialogWindowProps> = ({activeDialog, dispatch}) => (
    <main className={styles.dialogContent}>
        <HeaderDialog name={activeDialog?.name}/>
        <MessageList messages={activeDialog?.messages || []} dispatch={dispatch} activeDialog={activeDialog}/>
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