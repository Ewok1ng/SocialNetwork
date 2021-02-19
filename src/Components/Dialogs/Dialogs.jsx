import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {
  let messageListData = [
    {id: 1, name: 'Darth Vader'},
    {id: 2, name: 'Kenobi'},
    {id: 3, name: 'Master Yoda'},
    {id: 4, name: 'Luke Skywalker'},
  ]

  let messageData = [
    {
      id: 1,
      image: 'https://i.pinimg.com/originals/c6/70/a8/c670a847963dd4d0f06d63a97a83142e.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      name: 'Darth Vader'
    },
    {
      id: 2,
      image: 'https://cdn.dribbble.com/users/2478326/screenshots/8910581/baby-yoda-dribbble.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      name: 'Grogu'
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/originals/c6/70/a8/c670a847963dd4d0f06d63a97a83142e.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      name: 'Darth Vader'
    },
    {
      id: 4,
      image: 'https://cdn.dribbble.com/users/2478326/screenshots/8910581/baby-yoda-dribbble.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      name: 'Grogu'
    },
  ]

  let messageElements = messageData.map(
    message => <MessageItem image={message.image} text={message.text} name={message.name}/>
    )

  let messageListElements = messageListData.map(
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