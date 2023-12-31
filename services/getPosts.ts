export const getAllPosts = async() => {
  const response = await fetch('/api/posts')

  if (!response.ok) throw new Error('Unable to fetch posts')

  return response.json()
}

export const getPostsBySearch = async(search: string) => {
  const response = await fetch(`/api/posts?q=${search}`)

  if (!response.ok) throw new Error('Unable to fetch posts by search')

  return response.json()
}

export const getPostsById = async(id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  })

  if (!response.ok) throw new Error('Unable to fetch posts by id')

  return response.json()
}
