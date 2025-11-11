import Link from 'next/link'
import React from 'react'
import { RiDashboardHorizontalLine  } from 'react-icons/ri'

const NavBar = () => {
    const links = [
        { name: 'Dashboard', path: '/' },
        { name: 'Issues', path: '/issues' },
    ]

    return (
        <nav className='flex justify-between items-center p-4 bg-gray-800 text-white'>
            <Link href="/"><RiDashboardHorizontalLine /></Link>
            <ul className='flex space-x-4'>
                {links.map((link) => (
                    <li key={link.name}>
                        <Link 
                            className='text-gray-200 hover:text-amber-300' 
                            href={link.path}>{link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar