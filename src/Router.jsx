import React from 'react';
import {Route} from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

const Router = (props) => {
  return (
    <div>
      <Route path="/profile" render={ () => <Profile postsData={props.postsData}/> }/>
      <Route path="/messages"
             render={ () => <Dialogs messageListData={props.messageListData} messageData={props.messageData}/> }/>
      <Route path="/news" render={ () => <News/> }/>
      <Route path="/music" render={ () => <Music/> }/>
      <Route path="/settings" render={ () => <Settings/> }/>
    </div>
  );
};

export default Router;