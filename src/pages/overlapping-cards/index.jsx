import React, { useEffect } from 'react'

import Lenis from '@studio-freight/lenis';
import OverlapCard from '@/components/OverlapCard/OverlapCard'
import { cardsList } from '@/constants/overlappingCards'

export default function OverlappingCardPage() {
    useEffect(() => {
        const lenis = new Lenis({
            autoResize: true,
            duration: 2.5,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, []);
    return (
        <section className='overlap-card-page-container'>
            <ul className="cards-container">
                {cardsList?.map((card, index) => (
                    <OverlapCard key={index} content={card} index={index} />
                ))}
            </ul>
        </section>
    )
}
