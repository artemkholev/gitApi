import React from "react";
import style from "./FavouritsPage.module.scss"
import { useAppSelector } from "../../hooks/redux";

export function FavouritsPage() {
  const { favourites } = useAppSelector(state => state.github)
  
  if (favourites.length === 0) return <p>No items.</p>

  return (
    <div>
      <ul className={style.container}>
        {favourites.map(f => (
          <li key={f}>
            <a href={f} target="_blank">{f}</a>
          </li>
        ))}
      </ul>
    </div>
    
  )
}