import React, { useState } from 'react'

import { AnimatePresence } from 'framer-motion';
import CurvedMenuHeader from '@/components/CurvedSidemenu/CurvedMenuHeader';
import CurvedSidemenu from '@/components/CurvedSidemenu/CurvedSidemenu';
import Head from 'next/head'

export default function CurvedSidemenuPage() {
    const [active, setActive] = useState(false);

    return (
        <>
            <Head>
                <title>Curved Sidemenu | Sidemenus</title>
            </Head>
            <div className='w-full mx-auto font-mono'>
                <AnimatePresence>
                    {active ? <CurvedSidemenu /> : null}
                </AnimatePresence>
                <CurvedMenuHeader active={active} setActive={setActive} />
            </div>
        </>
    )
}
