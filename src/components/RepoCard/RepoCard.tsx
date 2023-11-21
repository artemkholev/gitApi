import { useState } from "react";
import { IRepo } from "../../models/models";
import style from "./RepoCard.module.scss";
import { NavLink } from "react-router-dom";
import { useActions } from "../../hooks/actions";
import { useAppSelector } from "../../hooks/redux";

export function RepoCard({ repo }: { repo: IRepo }) {
  const { addFavorite, removeFavorite } = useActions()
  const { favourites } = useAppSelector(state => state.github)
  const [isFav, setIsFav] = useState(favourites.includes(repo.html_url))

  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addFavorite(repo.html_url)
    setIsFav(true)
  }

  const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    removeFavorite(repo.html_url)
    setIsFav(false)
  }

  return (
    <NavLink className={style.link} to={repo.html_url} target="_blank">
      <div className={style.container}>
        <h2>{repo.full_name}</h2>
        <p>
          Forks: <span style={{marginRight: '2px', fontWeight: "bold"}}>{repo.forks}</span>
          Watchers: <span style={{fontWeight: "bold"}}>{repo.watchers}</span>
        </p>
        <p>{repo?.description}</p>
        {!isFav && <button
          style={{ background: 'yellow', padding: "10px", borderRadius: "5px" }}
          onClick={addToFavourite}
        >add</button>}
        {isFav && <button
          style={{ background: 'red', padding: "10px", borderRadius: "5px" }}
          onClick={removeFromFavourite}
        >Remove</button>}
      </div>
    </NavLink> 
  )
}