import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <img className={style.background}
           src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
           alt=""/>
      <div>
        <div>User avatar</div>
        <div>Info about user</div>
      </div>
    </div>
  )
}

export default ProfileInfo