import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.postsData.map(
    post => <Post image={post.image} text={post.text} likesCount={post.likesCount}/>
    )

  return (
    <div>
      My posts
      <div>
        <textarea name="new_post" id="new_post" cols="30" rows="3">Type here</textarea>
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;