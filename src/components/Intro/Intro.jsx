import React, { useRef } from 'react'
import { circIn, circInOut, motion, useScroll, useTransform } from 'framer-motion';

export default function Intro() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start center"]
    });

    const text = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

    return (
        <section ref={ref} className='intro-section'>
            <div className="intro-section-container">
                <motion.h4 style={{ scale: text, opacity: text }}>Intro section</motion.h4>
                <ul>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, index) => (
                        <GridItem key={index} />
                    ))}
                </ul>
            </div>
        </section>
    )
}

function GridItem({index}) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start center"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
    const translateY = useTransform(scrollYProgress, [0, 1], ["45%", "0%"]);
    return (
        <motion.li
            style={{
                translateY,
                scale,
                opacity: scale
            }}
            ref={ref}
            className='grid-item'></motion.li>
    )
}