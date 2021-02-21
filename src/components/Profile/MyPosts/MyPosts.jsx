import React from 'react';

import Post from "./Post/Post";

import style from './MyPosts.module.css'

const MyPosts = (props) => {

  let postsElements = props.postsData.map(
    post => <Post image={props.profileImage} text={post.text} likesCount={post.likesCount}/>
  )

  let newPostElement = React.createRef()

  let addPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return (
    <div>
      My posts
      <div>
        <textarea onChange={onPostChange}
                  ref={newPostElement}
                  value={props.newPostText}
                  cols="30" rows="3"/>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;