import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.avatar__container}>
        <img className={style.avatar__img}
             src={props.image}
             alt="User avatar"/>
      </div>
      <div className={style.text}>{props.text}</div>
      <div className={style.likes}>
        {props.likesCount} <a className={style.likes__icon}><i className="far fa-heart"></i></a>
      </div>
    </div>
  );
};

export default Post;