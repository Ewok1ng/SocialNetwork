import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
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

  let postsElements = postsData.map(
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