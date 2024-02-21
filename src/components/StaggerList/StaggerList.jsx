import React from 'react';
import { motion } from "framer-motion";

const list = [
    {
        text: "lorem ipsum dolor sit am"
    },
    {
        text: "lorem ipsum dolor sit am"
    },
    {
        text: "lorem ipsum dolor sit am"
    },
    {
        text: "lorem ipsum dolor sit am"
    },
    {
        text: "lorem ipsum dolor sit am"
    },
    {
        text: "lorem ipsum dolor sit am"
    },
    {
        text: "lorem ipsum dolor sit am"
    },
    {
        text: "lorem ipsum dolor sit am"
    },
    {
        text: "lorem ipsum dolor sit am"
    },
    {
        text: "lorem ipsum dolor sit am"
    },
    {
        text: "lorem ipsum dolor sit am"
    },
    {
        text: "lorem ipsum dolor sit am"
    },
    {
        text: "lorem ipsum dolor sit am"
    },
    {
        text: "lorem ipsum dolor sit am"
    },
]
export default function StaggerList() {
    return (
        <section className='stagger-list'>
            <div className="stagger-list-container">
                <motion.h2
                    initial={{
                        opacity: 0,
                        scale: 0.4
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 0.4,
                            bounce: 0.4,
                            type: "spring",
                        }
                    }}
                    viewport={{
                        once: true,
                    }}
                >Staggered Animation Example</motion.h2>
                <ul className='list'>
                    {list.map((item, index) => (
                        <ListItem item={item} index={index} key={index} />
                    ))}
                </ul>
            </div>
        </section>
    )
}

function ListItem({ item, index }) {
    const staggerAnimation = {
        offscreen: {
            opacity: 0,
            scale: 0.4
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
                delay: 0.03 * index,
            }
        })
    };

    return (
        <motion.li
            initial="offscreen"
            whileInView="animate"
            variants={staggerAnimation}
            viewport={{
                once: true,
            }}
            custom={index}
            key={index}
        >
            <p>{item.text}</p>
        </motion.li>
    )
}