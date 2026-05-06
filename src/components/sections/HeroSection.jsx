import { BackgroundBeams } from "../ui/background-beams";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TEXT_OPTIONS = ["Full Stack Developer", "Freelancer"];

export function HeroSection() {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer;
        const typeDelay = isDeleting ? 50 : 150;
        const currentString = TEXT_OPTIONS[currentIndex];

        if (!isDeleting && currentText === currentString) {
            timer = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && currentText === '') {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % TEXT_OPTIONS.length);
        } else {
            const nextText = isDeleting
                ? currentString.substring(0, currentText.length - 1)
                : currentString.substring(0, currentText.length + 1);

            timer = setTimeout(() => setCurrentText(nextText), typeDelay);
        }

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentIndex]);

    return (
        <div id="home" className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-18 md:gap-32 px-4 sm:px-8 md:px-16 w-full max-w-7xl mt-20 z-10">

                {/* Right Section - Text (Displays second on mobile, second on desktop) */}
                <div className="flex flex-col justify-center space-y-6 items-center text-center md:items-start md:text-left w-full order-2">
                    <h3 className="text-[#71D9D3] font-semibold text-lg sm:text-xl tracking-wide">
                        Hello, I am Sahil Bharti
                    </h3>

                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[Anta] text-white leading-tight break-words">
                        Craft, Code <br />
                        <span className="text-[#C084FC]">{currentText}</span>
                        <span className="animate-pulse text-[#C084FC]">|</span>
                    </div>

                    <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 w-full">
                        <a
                            href="/file/Sahil_Resume_ATS_working.pdf"
                            download="Sahil_Resume_ATS_working.pdf"
                            className="px-8 py-4 bg-[#71D9D3] text-black font-bold rounded-lg hover:bg-white hover:text-[#C084FC] transition-all duration-300 shadow-[0_0_15px_rgba(113,217,211,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transform hover:-translate-y-1"
                        >
                            Download CV <i className="fa-solid fa-arrow-down ml-2"></i>
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-transparent border-2 border-[#C084FC] text-[#C084FC] font-bold rounded-lg hover:bg-[#C084FC] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(192,132,252,0.2)] hover:shadow-[0_0_25px_rgba(192,132,252,0.5)] transform hover:-translate-y-1"
                        >
                            Contact Me <i className="fa-solid fa-user-tie ml-2"></i>
                        </a>
                    </div>
                </div>

                {/* Left Section - Image (Displays first on mobile, first on desktop) */}
                <div className="flex items-center justify-center order-1">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#71D9D3] to-[#C084FC] rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                        <img
                            src="/img/headerProfile.jpg"
                            alt="Profile"
                            className="relative w-64 sm:w-85 md:w-80 lg:w-96 h-auto rounded-3xl border-2 border-[#71D9D3]/30 group-hover:border-[#C084FC]/50 drop-shadow-[0_0_30px_rgba(113,217,211,0.4)] group-hover:drop-shadow-[0_0_20px_rgba(192,132,252,0.6)] group-hover:scale-[1.02] transition-all duration-500"
                        />
                    </div>
                </div>

            </div>

            {/* Background Effect */}
            <BackgroundBeams />

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-white rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </div>
    );
}
