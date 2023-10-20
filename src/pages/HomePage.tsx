import React from "react";
import { useSearchUsersQuery } from "../store/github/github.api";

export function HomePage() {
  const { data } = useSearchUsersQuery('vladilen')
  console.log(data)
  return (
    <div>home + </div>
    
  )
}