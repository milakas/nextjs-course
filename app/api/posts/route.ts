import { NextResponse } from "next/server";
import { POSTS } from "./posts";


export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');

  let currentPosts = POSTS;
  if (query) {
    currentPosts = POSTS.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }

  return NextResponse.json(currentPosts)
}

export async function POST(req: Request) {
  const body = await req.json()

  return NextResponse.json({body})

}