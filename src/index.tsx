import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import { store} from "./redux/state";


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


function rerenderEntireTree( ) {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    )
}


rerenderEntireTree()

store.subscribe(rerenderEntireTree)