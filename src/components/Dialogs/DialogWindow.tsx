import React from 'react';
import styles from './Dialogs.module.css';
import {MessageList} from "./MessageList";
import {Dialog} from "./Dialogs";

type DialogWindowProps = {
    activeDialog: Dialog | undefined;
};

export const DialogWindow: React.FC<DialogWindowProps> = ({ activeDialog }) => (
    <main className={styles.dialogContent}>
        <Header name={activeDialog?.name} />
        <MessageList messages={activeDialog?.messages || []} />
    </main>
);

type HeaderProps = {
    name: string | undefined;
};

export const Header: React.FC<HeaderProps> = ({ name }) => (
    <header className={styles.dialogHeader}>
        {name && <h3>{name}</h3>}
    </header>
);