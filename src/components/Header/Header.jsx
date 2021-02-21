import React from 'react';

import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <a href="#" className={style.header__logo}>SN</a>
    </header>
  )
}

export default Header