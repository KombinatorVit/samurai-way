import React from 'react';
import styles from './Dialogs.module.css';

type MessageData = {
    text: string;
    sender: 'me' | 'them';
    avatar: string;
    senderName?: string; // Optional property for the sender's name
};

type Dialog = {
    id: number;
    name: string;
    messages: MessageData[];
};

const Dialogs: React.FC = () => {
    const myName = 'Виталик';
    const myAvatar = './avaa.jpeg';
    const theirAvatars = [
        'https://placekitten.com/50/50?image=1',
        'https://placekitten.com/50/50?image=2',
        'https://placekitten.com/50/50?image=3',
        'https://placekitten.com/50/50?image=4',
        'https://placekitten.com/50/50?image=5'
    ];

    
    const dialogsData: Dialog[] = [
        {
            id: 1,
            name: 'Andrew',
            messages: [
                { text: 'Hey! How are you doing?', sender: 'them', avatar: theirAvatars[0] },
                { text: 'Just got back from hiking, it was great!', sender: 'me', avatar: myAvatar, senderName: myName },
                { text: 'Awesome! Got any pics?', sender: 'them', avatar: theirAvatars[0] },
                { text: 'Yeah, I\'ll send them over.', sender: 'me', avatar: myAvatar, senderName: myName },
            ],
        },
        {
            id: 2,
            name: 'Dmitry',
            messages: [
                { text: 'Did you catch the game last night?', sender: 'them', avatar: theirAvatars[1] },
                { text: 'No, I missed it. Was working late.', sender: 'me', avatar: myAvatar, senderName: myName },
                { text: 'You missed a good one!', sender: 'them', avatar: theirAvatars[1] },
                { text: 'I\'ll catch the highlights.', sender: 'me', avatar: myAvatar, senderName: myName },
            ],
        },
        {
            id: 3,
            name: 'Sasha',
            messages: [
                { text: 'Have you heard about the new cafe?', sender: 'them', avatar: theirAvatars[2] },
                { text: 'Nope, is it any good?', sender: 'me', avatar: myAvatar, senderName: myName },
                { text: 'It\'s fantastic! Coffee is top-notch.', sender: 'them', avatar: theirAvatars[2] },
                { text: 'Let\'s go there this weekend!', sender: 'me', avatar: myAvatar, senderName: myName },
            ],
        },
        {
            id: 4,
            name: 'Maria',
            messages: [
                { text: 'Can you send the report by EOD?', sender: 'them', avatar: theirAvatars[3] },
                { text: 'Working on it, will do!', sender: 'me', avatar: myAvatar, senderName: myName },
                { text: 'Thanks, I appreciate it!', sender: 'them', avatar: theirAvatars[3] },
                { text: 'No problem, almost finished.', sender: 'me', avatar: myAvatar, senderName: myName },
            ],
        },
        {
            id: 5,
            name: 'Ivan',
            messages: [
                { text: 'Is the project meeting rescheduled?', sender: 'them', avatar: theirAvatars[4] },
                { text: 'Yes, it’s now at 3 PM.', sender: 'me', avatar: myAvatar, senderName: myName },
                { text: 'Alright, thanks for the update.', sender: 'them', avatar: theirAvatars[4] },
                { text: 'No problem, see you then!', sender: 'me', avatar: myAvatar, senderName: myName },
            ],
        },
    ];
    
    const [activeDialogId, setActiveDialogId] = React.useState<number>(dialogsData[0].id);
    
    const activeDialog = dialogsData.find(dialog => dialog.id === activeDialogId);
    
    return (
        <div className={styles.dialogsContainer}>
            <aside className={styles.dialogsList}>
                <h3>Dialogs</h3>
                {dialogsData.map(dialog => (
                    <div
                        key={dialog.id}
                        className={`${styles.dialogItem} ${activeDialogId === dialog.id ? styles.active : ''}`}
                        onClick={() => setActiveDialogId(dialog.id)}
                    >
                        <img src={`https://placekitten.com/50/50?image=${dialog.id}`} alt={`${dialog.name}`} className={styles.avatar}/>
                        <span className={styles.dialogName}>{dialog.name}</span>
                    </div>
                ))}
            </aside>
            <main className={styles.dialogContent}>
                <header className={styles.dialogHeader}>
                    {activeDialog && <h3>{activeDialog.name}</h3>}
                </header>
                <div className={styles.messages}>
                    {activeDialog && activeDialog.messages.map((message, index) => (
                        <Message key={index} text={message.text} sender={message.sender} avatar={message.avatar} senderName={message.senderName} />
                    ))}
                </div>
            </main>
        </div>
    );
};

type MessageProps = {
    text: string;
    sender: 'me' | 'them';
    avatar: string;
    senderName?: string;
};

const Message: React.FC<MessageProps> = ({ text, sender, avatar, senderName }) => (
    <div className={`${styles.message} ${styles[sender]}`}>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        {sender === 'me' && senderName && <span className={styles.senderName}>{senderName}</span>}
        <p>{text}</p>
    </div>
);

export default Dialogs;
