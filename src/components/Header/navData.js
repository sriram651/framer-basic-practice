export const navLinks = [
    {
        title: "Home",
        href: "#",
    },
    {
        title: "About",
        href: "#",
    },
    {
        title: "Contact",
        href: "#",
    },
    {
        title: "Privacy",
        href: "#",
    },
    {
        title: "Visit Now",
        href: "#",
    },
];

export const perspectiveVariants = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateY: 30,
        translateX: -20,
    },
    enter: (index) => {
        return {
            opacity: 1,
            rotateX: 0,
            translateY: 0,
            translateX: 0,
            transition: {
                duration: 0.35,
                opacity: {
                    duration: 0.45
                },
                delay: 0.35 + (index * 0.1),
                ease: [0.25, 1, 0.5, 1]
            }
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: [0.25, 1, 0.5, 1]
        }
    }
}