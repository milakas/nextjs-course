'use client'
import Link from "next/link"
import useSWR from 'swr'
import { getAllPosts } from "@/services/getPosts"

// import { UsePosts } from "@/store"
// import { useEffect } from "react"
// import { shallow } from "zustand/shallow"


export const Posts = () => {
  const {data: posts, isLoading} = useSWR('posts', getAllPosts)
  // const [posts, loading, getAllPosts] = UsePosts(state => [
  //   state.posts,
  //   state.loading,
  //   state.getAllPosts
  // ], shallow)

  // useEffect(() => {
  //   getAllPosts()
  // }, [getAllPosts])

  return (
    <>
    { isLoading ? (
      <h3>Loading...</h3>
    ) : (
      <ul>
        { posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </li>
        ))}
      </ul>
    )}</>

  )

}