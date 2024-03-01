import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { navLinks } from '../Header/navData'

const curvedSidemenuVariants = {
    initial: {
        x: "-100%",
    },
    animate: {
        x: "0%",
        transition: {
            duration: 0.7,
            ease: "anticipate"
        }
    },
    exit: {
        x: "-100%",
        transition: {
            delay: 0.15,
            duration: 0.7,
            ease: "backOut"
        }
    }
}
export default function CurvedSidemenu() {
    return (
        <motion.aside
            className='curved-menu'
            initial="initial"
            animate="animate"
            exit="exit"
            variants={curvedSidemenuVariants}
        >
            <ul className='nav-links'>
                {navLinks?.map((link, index) => (
                    <NavItem key={index} index={index} link={link} />
                ))}
            </ul>
        </motion.aside>
    )
}

function NavItem({ index, link }) {
    const sidemenuLinkVariants = {
        initial: {
            x: "-40%",
            opacity: 0,
        },
        animate: {
            x: "0%",
            opacity: 1,
            transition: {
                delay: 0.18 + (index * 0.1),
                duration: 0.7,
                ease: "anticipate"
            }
        },
        exit: {
            x: "-40%",
            opacity: 0,
            transition: {
                duration: 0.25,
                ease: "backOut"
            }
        }
    }
    return (
        <motion.li
            initial="initial"
            animate="animate"
            exit="exit"
            custom={index}
            variants={sidemenuLinkVariants}
        >
            <Link href={link?.href}>{link?.title}</Link>
        </motion.li>
    )
}