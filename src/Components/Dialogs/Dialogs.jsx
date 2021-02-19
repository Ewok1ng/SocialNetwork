import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {

  let messageElements = props.messageData.map(
    message => <MessageItem image={message.image} text={message.text} name={message.name}/>
    )

  let messageListElements = props.messageListData.map(
    dialog => <DialogItem id={dialog.id} name={dialog.name}/>
  )

  return (
    <div className={style.container}>
      <div className={style.dialogs__list}>
        { messageListElements }
      </div>

      <div className={style.message__list}>
        { messageElements }
      </div>
    </div>
  );
};

export default Dialogs;