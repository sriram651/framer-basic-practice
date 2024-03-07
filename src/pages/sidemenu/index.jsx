import CurvedSidemenu from '@/components/CurvedSidemenu/CurvedSidemenu';
import Head from 'next/head'
import Header from '@/components/Header/Header';
import React from 'react'

export default function AnimatedDropdownPage() {
    
    return (
        <>
            <Head>
                <title>Animated Dropdown | Sidemenus</title>
            </Head>
            <div className='w-full max-w-screen-xl mx-auto font-mono'>
                <Header />
            </div>
        </>
    )
}
