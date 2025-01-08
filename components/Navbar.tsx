import { auth, signIn, signOut } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const Navbar = async () => {

    const session = await auth()

    return (
        <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
            <nav className='flex justify-between items-center'>
                <Link href='/'>
                    <Image src='/logo.png' alt='logo' width={144} height={30} />
                </Link>
                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                        <>
                            <Link href='/startup/create'>
                                <span>Create Startup</span>
                            </Link>
                           <button onClick={async () => {
                                'use server';
                                await signOut();
                                redirect('/');
                            }}>
                                <span>Logout</span>
                            </button>
                            <Link href={`/user/${session?.user?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <button onClick={async () => {
                            'use server';
                            await signIn('github')
                        }}>
                            <span>Login</span>
                        </button>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar