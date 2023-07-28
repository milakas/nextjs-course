'use client'

import { usePathname } from 'next/navigation';
import { NavProps } from './types';
import { useSession,  signOut } from 'next-auth/react'
import Link from 'next/link';


const Navigation = ({navLinks} : NavProps) => {
  const pathname = usePathname();
  const session = useSession();

  return (
    <>
      {
      navLinks.map(link => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? 'active' : ''}
          >
            {link.label}
          </Link>

        )

      })
      }
      
      {/* private routes */}
      {session?.data && (
        <Link href='/profile'>Profile</Link>
      )}

      {/* Sign Out and SignIn */}
      {session?.data ? (
        <Link href="#" onClick={() => signOut({
        callbackUrl: '/'})}>Sign Out</Link>
      ) : (
        <Link href='/signin'>SignIn</Link>
      )}
    </>
  )
};

export {Navigation}