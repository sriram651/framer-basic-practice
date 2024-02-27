import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { navLinks, perspectiveVariants } from './navData'

export default function NavMenu() {
    return (
        <nav>
            <ul className='links-container'>
                {navLinks?.map((navItem, index) => (
                    <NavItem key={index} item={navItem} index={index} />
                ))}
            </ul>
        </nav>
    )
}

function NavItem({ item, index }) {
    return (
        <li className='link-item'>
            <motion.div
                variants={perspectiveVariants}
                custom={index}
                initial="initial"
                animate="enter"
                exit="exit"
            >
                <Link href={item?.href}>{item?.title}</Link>
            </motion.div>
        </li>
    )
}