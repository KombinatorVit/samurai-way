import React from 'react';
import styles from './Dialogs.module.css';
import {MessageData} from "../../index";

type MessageListProps = {
    messages: MessageData[];
};
type MessageItemProps = MessageData;

export const MessageList: React.FC<MessageListProps> = ({messages}) => {
    
    const textRefMessage = React.useRef<HTMLTextAreaElement>(null);
    
    function addMessage() {
        if (textRefMessage.current) {
            let text = textRefMessage.current.value
            console.log(text)
            textRefMessage.current.value = '';
        }
    }
    return (
        <div className={styles.messages}>
            {messages.map((message, index) => (
                <React.Fragment key={index}>
                    <MessageItem  {...message} />
                
                
                </React.Fragment>        ))}
            <textarea className={styles.messageInput} placeholder="Write something..." ref={textRefMessage}/>
            <button className={styles.btnSend} onClick={addMessage}>Send</button>
        </div>
    );
}


export const MessageItem: React.FC<MessageItemProps> = ({text, sender, avatar, senderName}) => (
    <div className={`${styles.message} ${styles[sender]}`}>
        <img src={avatar} alt="avatar" className={styles.avatar}/>
        {sender === 'me' && senderName && <span className={styles.senderName}>{senderName}</span>}
        <p>{text}</p>
    </div>
);