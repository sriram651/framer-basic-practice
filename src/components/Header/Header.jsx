import React, { useState } from 'react'

import MenuButton from './MenuButton'

export default function Header() {
    const [isActive, setIsActive] = useState(false);
    return (
        <header className='animated-dropdown-header'>
            <MenuButton isActive={isActive} setIsActive={setIsActive} />
        </header>
    )
}
