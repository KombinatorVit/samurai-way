import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {addPost, state, StateType} from "./redux/state";



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





export function rerenderEntireTree(state: StateType) {
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById('root')
    )
}


rerenderEntireTree(state)