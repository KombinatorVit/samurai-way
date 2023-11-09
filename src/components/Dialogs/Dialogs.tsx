import React from 'react';
import styles from './Dialogs.module.css';
import {DialogWindow} from "./DialogWindow";
import {DialogList} from "./DialogList";
import {DialogData} from "../../index";


type DialogsPropsType = {
    dialogsData: Array<DialogData>
}
const Dialogs: React.FC<DialogsPropsType> = ({dialogsData}) => {
    
    
    const [activeDialogId, setActiveDialogId] = React.useState<number>(dialogsData[1].id);
    
    const activeDialog = dialogsData.find(dialog => dialog.id === activeDialogId);
    
    return (
        <div className={styles.dialogsContainer}>
            <DialogList dialogs={dialogsData} setActiveDialogId={setActiveDialogId}/>
            <DialogWindow activeDialog={activeDialog}/>
        </div>
    );
};


export default Dialogs;
