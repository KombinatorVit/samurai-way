import React from 'react';
import styles from './Dialogs.module.css';
import {MessageData} from "../../index";

type MessageListProps = {
    messages: MessageData[];
};
type MessageItemProps = MessageData;

export const MessageList: React.FC<MessageListProps> = ({messages}) => (
    <div className={styles.messages}>
        {messages.map((message, index) => (
            <MessageItem key={index} {...message} />
        ))}
    </div>
);


export const MessageItem: React.FC<MessageItemProps> = ({text, sender, avatar, senderName}) => (
    <div className={`${styles.message} ${styles[sender]}`}>
        <img src={avatar} alt="avatar" className={styles.avatar}/>
        {sender === 'me' && senderName && <span className={styles.senderName}>{senderName}</span>}
        <p>{text}</p>
    </div>
);