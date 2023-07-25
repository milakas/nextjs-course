'use client';
import useSWR from 'swr'

import { FormEventHandler, useState } from "react";
import { getPostsBySearch } from "@/services/getPosts";


export const PostSearch = () => {
  const {mutate} = useSWR('posts')
  const [search, setSearch] = useState('');
  
  const handleSubmit: FormEventHandler<HTMLFormElement> = async(ev) => {
    ev.preventDefault();
    const posts = await getPostsBySearch(search)

    mutate(posts)
  }

  return ( 
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
   );
}

