import {StateType} from "../state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type AddPostActionType = ReturnType<typeof addPostActionCreator>

export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>

export type PostsActionReducerType = AddPostActionType | UpdateNewPostTextActionType

export function addPostActionCreator() {
    return {type: ADD_POST} as const
}

export function updateNewPostTextActionCreator(text: string) {
    return {type: UPDATE_NEW_POST_TEXT, newText: text} as const
}


export const postsReducer = (state: StateType, action: PostsActionReducerType) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postData: [
                    ...state.postData,
                    {
                        message: state.newPostText,
                        likeCount: 0,
                        id: state.postData.length + 1,
                    },
                ],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };
        default:
            return state;
    }
};