import {myAvatar, myName, StateType} from "../state";

const ADD_MESSAGE = 'ADD-MESSAGE';


export type AddMessageAction = ReturnType<typeof addMessageActionCreator>;


export function addMessageActionCreator(text: string, id: number) {
    return {type: ADD_MESSAGE, text, id};
}

export const dialogsReducer = (state: StateType, action: AddMessageAction) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const dialogIndex = state.dialogsData.findIndex((el) => el.id === action.id);
            if (dialogIndex !== -1) {
                return {
                    ...state,
                    dialogsData: state.dialogsData.map((dialog, index) =>
                        index === dialogIndex
                            ? {
                                ...dialog,
                                messages: [...dialog.messages, {
                                    text: action.text,
                                    sender: 'me',
                                    avatar: myAvatar,
                                    senderName: myName
                                }]
                            }
                            : dialog
                    )
                };
            }
            break;
        default:
            return state;
    }
    return state;
};