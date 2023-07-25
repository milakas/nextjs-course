import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blog | Next App',
} 


const Blog = () => {
  return (
    <section>
      <h1>Blog page</h1>
      <PostSearch />
      <Posts />
    </section>
  )
}

export default Blog;