import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import Image from 'next/image';

export default function ScrollMotion() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    const translateX = useTransform(scrollYProgress, [0, 0.5, 0.75, 1], [700, 200, 200, 0]);
    const scale = useTransform(scrollYProgress, [0.3, 0.6, 1], [1, 1.8, 1]);
    const translateY = useTransform(scrollYProgress, [0, 1], [300, 0]);

    const imageOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
    const scaleImage = useTransform(scrollYProgress, [0.2, 0.6], [0.3, 1]);
    const translateImage = useTransform(scrollYProgress, [0.5, 0.8], ["20%", "0%"]);
    const roundedSize = useTransform(scrollYProgress, [0.2, 0.6], ["48px", "24px"]);

    const textOpacity = useTransform(scrollYProgress, [0.4, 1], [0, 1]);
    return (
        <section ref={ref} className='scroll-motion'>
            <div className="scroll-motion-container">
                <motion.div
                    style={{
                        opacity: imageOpacity,
                        scale: scaleImage,
                        left: translateImage,
                        borderRadius: roundedSize
                    }}
                    className="image-container"
                >
                    <Image
                        src="/pine-forest-bg.webp"
                        alt='Pine Forest'
                        width={2000}
                        height={1400}
                        priority
                    />
                </motion.div>
                <motion.div
                    style={{
                        left: translateX,
                        translateY: translateY,
                        scale: scale,
                    }}
                    className="motion-element"
                >
                    Hello I&apos;m being animated in this section based on how much you scroll.
                </motion.div>
                <div className="text-content-container">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
                        <motion.div 
                        key={index} 
                        style={{
                            // translateY: textTranslate,
                            opacity: textOpacity,
                        }}
                        className="text-content"
                        >
                            <h3>This is a Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, numquam quasi. Nulla quasi voluptates doloremque laboriosam non eaque quidem, totam incidunt hic ratione eos possimus! Facilis laborum nesciunt laudantium, modi vel et fugit soluta, ipsa quo, commodi maxime. Aliquam, aperiam.</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
