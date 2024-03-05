import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs'

const Header = () => {
    return (
        <header className='flex items-center justify-between'>
            <Link href="/" className='flex items-center space-x-2'>
                <div className='bg-[#0160FE] w-fit'>
                    <Image
                        src="https://www.shareicon.net/data/128x128/2015/08/10/82855_dropbox_4096x4096.png"
                        alt='logo'
                        className='invert'
                        height={50}
                        width={50}
                    />
                </div>
                <h1 className='font-bold text-xl'>Dropbox</h1>
            </Link>

            <div className='px-5 flex space-x-2 items-center'>
                {/* Theme Toggler */}

                <UserButton afterSignOutUrl='/' />

                <SignedOut>
                    <SignInButton afterSignInUrl='/dashboard' mode='modal' />
                </SignedOut>
            </div>

        </header>
    )
}

export default Header
