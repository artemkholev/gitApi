import React from "react";
import { Link } from "react-router-dom"

import style from "./Navigation.module.scss"

export function Navigation() {
  return (
    <nav className={style.container}>
      <h3>Github Search</h3>

      <span className={style.links}>
        <Link className={style.linkHome} to='/'>Home</Link>
        <Link to='/favourites'>Favourites</Link>
      </span>
    </nav>
  ) 
}