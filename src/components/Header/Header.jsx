import React, { useState } from 'react'
import { motion } from "framer-motion";

import MenuButton from './MenuButton'

export default function Header() {
    const [isActive, setIsActive] = useState(false);
    const variants = {
        open: {
            scale: 1,
            top: "-16px",
            right: "-16px",
        },
        closed: {
            scale: 0,
            top: 0,
            right: 0,
        }
    }
    return (
        <header className='animated-dropdown-header'>
            <motion.div
                variants={variants}
                animate={isActive ? "open" : "closed"}
                initial={"closed"}
                transition={{
                    duration: 0.6,
                    ease: [0.25, 1, 0.5, 1]
                }}
                className="menu-container"
            ></motion.div>
            <MenuButton isActive={isActive} setIsActive={setIsActive} />
        </header>
    )
}
