import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


export type MessageData = {
    text: string;
    sender: 'me' | 'them';
    avatar: string;
    senderName?: string;
};

export type DialogData = {
    id: number;
    name: string;
    messages: MessageData[];
};


export type PostType = {
    message: string
    likeCount: number
    id: number
}

const PostData: PostType[] = [
    {message: 'Hello', likeCount: 1, id: 1},
    {message: 'My first message', likeCount: 2, id: 2},
    {message: 'My second message', likeCount: 3, id: 3},
    {message: 'My third message', likeCount: 4, id: 4},
]

const myName = 'Виталик';
const myAvatar = '/avaa.jpeg';
const theirAvatars = [
    'https://placekitten.com/50/50?image=1',
    'https://placekitten.com/50/50?image=2',
    'https://placekitten.com/50/50?image=3',
    'https://placekitten.com/50/50?image=4',
    'https://placekitten.com/50/50?image=5'
];

const dialogsData: DialogData[] = [
    {
        id: 1,
        name: 'Andrew',
        messages: [
            {text: 'Hey! How are you doing?', sender: 'them', avatar: theirAvatars[0]},
            {text: 'Just got back from hiking, it was great!', sender: 'me', avatar: myAvatar, senderName: myName},
            {text: 'Awesome! Got any pics?', sender: 'them', avatar: theirAvatars[0]},
            {text: 'Yeah, I\'ll send them over.', sender: 'me', avatar: myAvatar, senderName: myName},
        ],
    },
    {
        id: 2,
        name: 'Dmitry',
        messages: [
            {text: 'Did you catch the game last night?', sender: 'them', avatar: theirAvatars[1]},
            {text: 'No, I missed it. Was working late.', sender: 'me', avatar: myAvatar, senderName: myName},
            {text: 'You missed a good one!', sender: 'them', avatar: theirAvatars[1]},
            {text: 'I\'ll catch the highlights.', sender: 'me', avatar: myAvatar, senderName: myName},
        ],
    },
    {
        id: 3,
        name: 'Sasha',
        messages: [
            {text: 'Have you heard about the new cafe?', sender: 'them', avatar: theirAvatars[2]},
            {text: 'Nope, is it any good?', sender: 'me', avatar: myAvatar, senderName: myName},
            {text: 'It\'s fantastic! Coffee is top-notch.', sender: 'them', avatar: theirAvatars[2]},
            {text: 'Let\'s go there this weekend!', sender: 'me', avatar: myAvatar, senderName: myName},
        ],
    },
    {
        id: 4,
        name: 'Maria',
        messages: [
            {text: 'Can you send the report by EOD?', sender: 'them', avatar: theirAvatars[3]},
            {text: 'Working on it, will do!', sender: 'me', avatar: myAvatar, senderName: myName},
            {text: 'Thanks, I appreciate it!', sender: 'them', avatar: theirAvatars[3]},
            {text: 'No problem, almost finished.', sender: 'me', avatar: myAvatar, senderName: myName},
        ],
    },
    {
        id: 5,
        name: 'Ivan',
        messages: [
            {text: 'Is the project meeting rescheduled?', sender: 'them', avatar: theirAvatars[4]},
            {text: 'Yes, it’s now at 3 PM.', sender: 'me', avatar: myAvatar, senderName: myName},
            {text: 'Alright, thanks for the update.', sender: 'them', avatar: theirAvatars[4]},
            {text: 'No problem, see you then!', sender: 'me', avatar: myAvatar, senderName: myName},
        ],
    },
];


ReactDOM.render(
    
    
    
    
    <App data={dialogsData} postData={PostData} />,
  document.getElementById('root')
);