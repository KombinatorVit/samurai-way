import {DialogData, PostType} from "../index";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const myName = 'Виталик';
const myAvatar = '/avaa.jpeg';
const theirAvatars = [
    'https://placekitten.com/50/50?image=1',
    'https://placekitten.com/50/50?image=2',
    'https://placekitten.com/50/50?image=3',
    'https://placekitten.com/50/50?image=4',
    'https://placekitten.com/50/50?image=5'
];


export type StateType = {
    dialogsData: DialogData[];
    postData: PostType[]
    newPostText: string
}

export type StoreType = {
    
    subscribe: (observer: () => void) => void
    _state: StateType
    getState: () => StateType
    callSubscriber: () => void
    dispatch: (action: any) => void
}

type AddPostActionCreatorType = {
    type: typeof ADD_POST
}

type UpdateNewPostTextActionCreatorType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
export const store: StoreType = {
    _state: {
        dialogsData: [
            {
                id: 1,
                name: 'Andrew',
                messages: [
                    {text: 'Hey! How are you doing?', sender: 'them', avatar: theirAvatars[0]},
                    {
                        text: 'Just got back from hiking, it was great!',
                        sender: 'me',
                        avatar: myAvatar,
                        senderName: myName
                    },
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
        ],
        postData: [
            {message: 'Hello', likeCount: 1, id: 1},
            {message: 'My first message', likeCount: 2, id: 2},
            {message: 'My second message', likeCount: 3, id: 3},
            {message: 'My third message', likeCount: 4, id: 4},
        ],
        newPostText: ''
    },
    callSubscriber() {
        console.log('rerender');
        
    },
    subscribe(observer: () => void) {
        this.callSubscriber = observer;
    },
    
    
    dispatch(action: any) {
        
        if (action.type === ADD_POST) {
            this._state.postData.push({
                message: this._state.newPostText,
                likeCount: 0,
                id: this._state.postData.length + 1
            });
            this._state.newPostText = '';
            this.callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            
            
            this._state.newPostText = action.newText;
            this.callSubscriber();
        } else if (action.type === ADD_MESSAGE) {
            const dialogIndex = this._state.dialogsData.findIndex(el => el.id === action.id);
            
            if (dialogIndex !== -1) {
                this._state.dialogsData[dialogIndex].messages.push({
                    text: action.text,
                    sender: 'me',
                    avatar: myAvatar,
                    senderName: myName,
                });
                
                // Вызываем перерисовку
                this.callSubscriber();
            }
            
        }},
        getState()
        {
            return this._state;
        }
    }


export function addPostActionCreator(): AddPostActionCreatorType {
    return {type: ADD_POST}
}

export function updateNewPostTextActionCreator(text: string): UpdateNewPostTextActionCreatorType {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export function addMessageActionCreator(text: string, id: number) {
    return { type: ADD_MESSAGE, text, id };
}


// @ts-ignore
window.store = store