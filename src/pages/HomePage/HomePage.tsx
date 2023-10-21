import React, { useEffect, useState } from "react";
import { useLazyGetUserReposQuery, useSearchUsersQuery } from "../../store/github/github.api";
import style from "./HomePage.module.scss"
import { useDebounce } from "../../hooks/debounce";
import { RepoCard } from "../../components/RepoCard/RepoCard";

export function HomePage() {
  const [search, setSearch] = useState('')
  const debounced = useDebounce(search) 
  const [dropdown, setDropdown] = useState(false);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true
  })

  const [fetchRepos, {isLoading: areReposLoading, data: repos}] = useLazyGetUserReposQuery()

  useEffect( () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    setDropdown(debounced.length > 3 && data?.length! > 0)
  }, [debounced, data])

  const clickHandler = (username: string) => {
    fetchRepos(username)
    setDropdown(false)
  }

  return (
    <div className={style.container}>
      <div className={style.container_input}>
        <input
          className={style.input}
          type="text"
          placeholder="Search for Github username..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {dropdown && <ul className={style.dropdown}>
          {isLoading && <p>Loading...</p>}
          {data?.map(user => (
            <li
              className={style.user}
              key={user.id}
              onClick={() => clickHandler(user.login)}
            >{user.login}</li>
          ))}
        </ul>}
        <div className={style.contaynerRepos}>
          {areReposLoading && <p>Repos are loading...</p>}
          {repos?.map(repo => <RepoCard repo = { repo } key = { repo.id }/>)}
        </div>
      </div>
      {isError && <p className={style.error}>Something went wrong...</p>}
    </div>
  )
}