import React from 'react';

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts postsData={props.state.postsData}
               profileImage={props.state.profileImage}
               addPost={props.addPost}
               updateNewPostText={props.updateNewPostText}
               newPostText={props.state.newPostText}/>
    </div>
  )
}

export default Profile