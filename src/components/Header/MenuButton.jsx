import React from 'react'
import { motion } from 'framer-motion'

export default function MenuButton({ isActive, setIsActive }) {
    return (
        <button
            className='header-menu-btn'
            onClick={() => setIsActive(!isActive)}
        >
            <motion.div
                animate={{
                    top: isActive ? "-100%" : 0
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.25, 1, 0.5, 1],
                }}
                className="slider"
            >
                <div className='menu'>
                    <PerspectiveText label="Menu" />
                </div>
                <div className='close'>
                    <PerspectiveText label="Close" />
                </div>
            </motion.div>
        </button>
    )
}

function PerspectiveText({ label }) {
    return (
        <div className="perspective-text">
            <span>{label}</span>
            <span>{label}</span>
        </div>
    )
}