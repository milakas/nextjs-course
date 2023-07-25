import { authConfig } from '@/config/auth'
import { getServerSession } from 'next-auth/next'

export default async function Profile() {
  const session = await getServerSession(authConfig)
  const renderImg = session?.user?.image && <img src={session.user.image} alt='' />

  return (
    <div>
      <h3>Profile of {session?.user?.name}</h3>
      {renderImg}
    </div>
  )
}