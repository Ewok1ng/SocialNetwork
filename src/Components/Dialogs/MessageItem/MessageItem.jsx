import style from "./MessageItem.module.css";

const MessageItem = (props) => {
  return (
    <div className={style.message}>
      <div className={style.user__info}>
        <img className={style.user__avatar}
             src={props.image} alt="User avatar"/>
        <div className={style.user__name}>{props.name}</div>
      </div>
      <div className={style.user__text}>
        {props.text}
      </div>
    </div>
  )
}

export default MessageItem