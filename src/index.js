import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let postsData = [
  {
    id: 1,
    image: 'https://i.pinimg.com/originals/c6/70/a8/c670a847963dd4d0f06d63a97a83142e.png',
    text: 'Feel the power of the dark side',
    likesCount: '501'
  },
  {
    id: 2,
    image: 'https://cdn.dribbble.com/users/2478326/screenshots/8910581/baby-yoda-dribbble.png',
    text: 'Hmm?',
    likesCount: '666'
  }
]

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

ReactDOM.render(
  <App postsData={postsData} messageListData={messageListData} messageData={messageData}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
