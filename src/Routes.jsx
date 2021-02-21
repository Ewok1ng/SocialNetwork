import React from 'react';
import {Route} from "react-router-dom";

import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const Routes = (props) => {
  return (
    <div>
      <Route path="/profile"
             render={() => <Profile state={props.state.profilePage}
                                    addPost={props.addPost}
                                    updateNewPostText={props.updateNewPostText}/>}/>
      <Route path="/messages"
             render={() => <Dialogs state={props.state.messagesPage}
                                    addMessage={props.addMessage}
                                    updateMessage={props.updateMessage}/>}/>
      <Route path="/news" render={() => <News/>}/>
      <Route path="/music" render={() => <Music/>}/>
      <Route path="/settings" render={() => <Settings/>}/>
    </div>
  );
};

export default Routes;