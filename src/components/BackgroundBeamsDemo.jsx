"use client";
import { BackgroundBeams } from "./ui/background-beams";
import { useState, useEffect } from "react";

export function BackgroundBeamsDemo() {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const text = ["Developer", "Designer", "Freelancer"];
    const delay = 2000;

    useEffect(() => {
        const typingInterval = setInterval(() => {
            setCurrentText(text[currentIndex]);
            setCurrentIndex((currentIndex + 1) % text.length);
        }, delay);

        return () => clearInterval(typingInterval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]);

    return (
        <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-8 md:px-16 w-full max-w-7xl mt-20 z-10">

                {/* Left Section */}
                <div className="flex flex-col justify-center space-y-6 items-center text-center md:items-start md:text-left w-full">
                    <h3 className="text-[#71D9D3] font-semibold text-base sm:text-lg">
                        Hello, I am Sahil Bharti
                    </h3>

                    <div className="text-3xl sm:text-5xl md:text-6xl font-[Anta] text-white leading-tight break-words">
                        Craft, Code <br />
                        <span className="text-[#C084FC]">{currentText}</span>
                    </div>

                    <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 w-full">
                        <a
                            href="/file/Sahil_Resume_ATS.pdf"
                            download="Sahil_Resume_ATS.pdf"
                            className="px-6 py-3 bg-[#71D9D3] text-black font-bold rounded hover:bg-white hover:text-[#C084FC] transition duration-500"
                        >
                            Download CV <i className="fa-solid fa-arrow-down px-1"></i>
                        </a>
                        <a
                            href="#social_section"
                            className="px-6 py-3 bg-white text-[#C084FC] font-bold rounded hover:bg-[#71D9D3] hover:text-black transition duration-500"
                        >
                            Contact Me <i className="fa-solid fa-user-tie px-1"></i>
                        </a>
                    </div>
                </div>


                {/* Right Section */}
                <div className="flex items-center justify-center">
                    <img
                        src="/img/sahilprofile1.png"
                        alt="Profile"
                        className="w-60 sm:w-72 md:w-80 lg:w-96 h-auto rounded-xl animate-float"
                    />
                </div>
            </div>

            {/* Background Effect */}
            <BackgroundBeams />
        </div>
    );
}
