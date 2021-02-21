import React from 'react';

import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

import style from './Dialogs.module.css'

const Dialogs = (props) => {

  let messageElements = props.state.messageData.map(
    message => <MessageItem image={message.image} text={message.text} name={message.name}/>
    )

  let messageListElements = props.state.messageListData.map(
    dialog => <DialogItem id={dialog.id} name={dialog.name}/>
  )

  let sendMessageElement = React.createRef()

  const sendMessage = () => {
    props.addMessage()
  }

  let updateMessage = () => {
    let message = sendMessageElement.current.value
    props.updateMessage(message)
  }

  return (
    <div className={style.container}>
      <div className={style.dialogs__list}>
        { messageListElements }
      </div>

      <div className={style.message__list}>
        { messageElements }
        <div>
          <textarea ref={sendMessageElement}
                    onChange={updateMessage}
                    value={props.state.newMessage}
                    cols="30" rows="5"/>
          <button onClick={sendMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;