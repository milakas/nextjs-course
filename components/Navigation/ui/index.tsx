'use client'

import { usePathname } from 'next/navigation';
import { NavProps } from './types';
import Link from 'next/link';


const Navigation = ({navLinks} : NavProps) => {
  const pathname = usePathname()

  return <>{
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
  }</>
};

export {Navigation}