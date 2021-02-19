import style from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={style.dialogs__item}>
      <NavLink to={`/messages/${props.id}`} activeClassName={style.active}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem