import React from 'react';
import {BrowserRouter} from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./Routes";

import './App.css';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className="app-content">
          <Routes state={props.state}
                  addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText}
                  addMessage={props.addMessage}
                  updateMessage={props.updateMessage}/>
        </div>
      </div>
  );
}

export default App;
