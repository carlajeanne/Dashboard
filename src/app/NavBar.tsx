'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { RiDashboardHorizontalLine  } from 'react-icons/ri'

const NavBar = () => {
    const currentPath = usePathname();

    const links = [
        { name: 'Dashboard', href: '/' },
        { name: 'Issues', href: '/issues' },
    ]

    return (
        <nav className='flex justify-between items-center p-4 bg-gray-800 text-white'>
            <Link href="/"><RiDashboardHorizontalLine size={20}/></Link>
            <ul className='flex space-x-4'>
                {links.map((link) => (
                    <li key={link.name}>
                        <Link 
                            href={link.href}
                            className={`${
                                link.href === currentPath
                                ? 'text-amber-300'
                                : 'text-gray-200 hover:text-amber-300'
                                } transition-colors`}
                            >
                                {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar