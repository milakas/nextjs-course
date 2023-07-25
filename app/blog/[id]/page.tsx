import { getPostsById } from "@/services/getPosts";
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  }
} 

export const generateMetadata = async ({ params: { id } }: Props): Promise<Metadata> => {
  const post = await getPostsById(id)

  return {
    title: post.title
  }
}

const Post = async ({ params: { id } }: Props) => {
  const post = await getPostsById(id)

  return (
    <section>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </section>
  )
}

export default Post;