import React from 'react';

import state, {addMessage, addPost, subscribe, updateMessage, updateNewPostTest} from './redux/state'

import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let renderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}
           addPost={addPost}
           updateNewPostText={updateNewPostTest}
           addMessage={addMessage}
           updateMessage={updateMessage}/>
    </BrowserRouter>,

    document.getElementById('root')
  );
}

renderEntireTree()

subscribe(renderEntireTree)
