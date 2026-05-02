// use client directive removed
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";

export const StickyScroll = ({
    content,
}: {
    content: {
        title: string;
        description: string;
        image: string;
        Live?: string;
    }[];
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        cardsBreakpoints.forEach((breakpoint, index) => {
            if (latest > breakpoint - 0.2 && latest <= breakpoint) {
                setActiveCard(() => index);
            }
        });
    });

    const backgroundColors = [
        "var(--slate-900)",
        "var(--black)",
        "var(--neutral-900)",
    ];

    return (
        <div className="bg-black pt-10">
            <motion.div
                animate={{
                    backgroundColor: backgroundColors[activeCard % backgroundColors.length],
                }}
                className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 p-10"
                ref={ref}
            >
                <div className="div relative flex items-start px-4">
                    <div className="max-w-2xl">
                        {content.map((item, index) => (
                            <div key={item.title + index} className="my-20 grid gap-10 md:grid-cols-2 grid-cols-1">
                                <div>
                                    <motion.h2
                                        initial={{
                                            opacity: 0,
                                        }}
                                        animate={{
                                            opacity: activeCard === index ? 1 : 0.3,
                                        }}
                                        className="text-2xl font-bold text-slate-100"
                                    >
                                        {item.title}
                                    </motion.h2>
                                    <motion.p
                                        initial={{
                                            opacity: 0,
                                        }}
                                        animate={{
                                            opacity: activeCard === index ? 1 : 0.3,
                                        }}
                                        className="text-kg text-slate-300 max-w-sm mt-10"
                                    >
                                        {item.description}
                                    </motion.p>
                                    {item.Live && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                            }}
                                            animate={{
                                                opacity: activeCard === index ? 1 : 0.3,
                                            }}
                                            className="mt-6"
                                        >
                                            <a 
                                                href={item.Live} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-colors inline-flex items-center gap-2"
                                            >
                                                Live Demo
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11M15 3H21M21 3V9M21 3L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </a>
                                        </motion.div>
                                    )}
                                </div>
                                <div>
                                    <motion.p
                                        initial={{
                                            opacity: 0,
                                        }}
                                        animate={{
                                            opacity: activeCard === index ? 1 : 0.3,
                                        }}
                                        className="lg:block w-fit rounded-md bg-black sticky top-10 items-center overflow-hidden"
                                    >

                                        <img className="" src={item.image} alt="" />

                                    </motion.p>
                                </div>
                            </div>
                        ))}
                        <div className="h-40" />
                    </div>
                </div>
                {/* <motion.div
                    animate={{
                        background: linearGradients[activeCard % linearGradients.length],
                    }}
                    className="hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden"
                ></motion.div> */}
            </motion.div>
        </div>
    );
};
