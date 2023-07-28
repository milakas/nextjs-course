'use client'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FormEventHandler } from 'react';

export const SignInForm = () => {
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget)

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    })

    if (res && !res.error) {
      router.push('/profile')
    } else {
      console.log(res)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button type="submit">Sign In</button>
    </form>
  )
}