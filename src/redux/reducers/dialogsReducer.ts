import {myAvatar, myName, StateType} from "../state";

const ADD_MESSAGE = 'ADD-MESSAGE';


type AddMessageActionCreatorType = {
    type: typeof ADD_MESSAGE
    text: string
    id: number
}

export function addMessageActionCreator(text: string, id: number): AddMessageActionCreatorType {
    return {type: ADD_MESSAGE, text, id};
}

export const dialogsReducer = (state: StateType, action: any) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const dialogIndex = state.dialogsData.findIndex((el) => el.id === action.id);
            if (dialogIndex !== -1) {
                return {
                    ...state,
                    dialogsData: state.dialogsData.map((dialog, index) => {
                        if (index === dialogIndex) {
                            return {
                                ...dialog,
                                messages: [
                                    ...dialog.messages,
                                    {
                                        text: action.text,
                                        sender: 'me',
                                        avatar: myAvatar,
                                        senderName: myName,
                                    },
                                ],
                            };
                        }
                        return dialog;
                    }),
                };
            }
            break;
        default:
            return state;
    }
    return state;
};