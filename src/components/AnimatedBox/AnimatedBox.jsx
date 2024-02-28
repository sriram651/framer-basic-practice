import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";

export default function AnimatedBox() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start center"]
    });

    const rotate = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 45, 90, 180]);
    const borderRadius = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], ["10%", "25%", "50%", "100%"]);
    return (
        <>
            <section ref={ref} className='animated-box-section'>
                <motion.div
                    className="box"
                    style={{ rotate, borderRadius }}
                    transition={{
                        duration: 4
                    }}
                />
            </section>
            <div className="w-full h-screen"></div>
        </>
    )
}
