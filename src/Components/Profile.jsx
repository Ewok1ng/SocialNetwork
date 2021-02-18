import style from './Profile.module.css'

const Profile = () => {
  return (
    <div className={style.content}>
      <img className={style.background}
           src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
           alt=""/>
        Main content
      <div>Avatar + description</div>
      <div>
        My posts
        <div>
          new post
        </div>
        <div className={style.posts}>
          <div className={style.item}>
            post 1
          </div>
          <div className={style.item}>
            post 2
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile