import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';

import Image from 'next/image'

export default function OverlapCard({ content, index }) {
    const cardRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "start start"]
    });

    const scaleImage = useTransform(scrollYProgress, [0, 1], [2, 1]);
    return (
        <div ref={cardRef} className='overlap-card' style={{ backgroundColor: content?.color, top: `calc(10% + ${index * 25}px)` }}>
            <h4>{content?.title}</h4>
            <div className="desc-image">
                <p>{content?.description}</p>
                <div className="image-container">
                    <motion.div
                        style={{
                            scale: scaleImage
                        }}
                        className="image-inner-container"
                    >
                        <Image
                            src={content?.image}
                            alt='Card Image'
                            width={400}
                            height={300}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
