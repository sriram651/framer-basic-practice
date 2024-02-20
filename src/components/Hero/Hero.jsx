import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';

import Image from 'next/image'

export default function Hero() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.4]);
    return (
        <div ref={ref} className='hero-section'>
            <motion.span style={{ opacity }}></motion.span>
            <div className="image-container">
                {/* <Image
                    src="/hero-bg.webp"
                    alt='Hero Background'
                    width={2000}
                    height={1000}
                    priority
                /> */}
            </div>
            <div className="hero-content">
                <motion.h1 style={{
                    scale
                }}>Hero section</motion.h1>
            </div>
        </div>
    )
}
