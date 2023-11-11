const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

type AddPostActionCreatorType = {
    type: typeof ADD_POST
}

type UpdateNewPostTextActionCreatorType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}


export function addPostActionCreator(): AddPostActionCreatorType {
    return {type: ADD_POST}
}

export function updateNewPostTextActionCreator(text: string): UpdateNewPostTextActionCreatorType {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}


export const postsReducer = (state: any, action: any) => {
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