import { useState, useEffect } from "react";

export default function HeroContent() {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const text = ["Developer", "Designer", "Freelancer"]; // Array of words
    const delay = 2000;

    useEffect(() => {
        const typingInterval = setInterval(() => {
            setCurrentText(text[currentIndex]);
            setCurrentIndex((currentIndex + 1) % text.length); // Loop back to the beginning
        }, delay);

        return () => clearInterval(typingInterval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text, delay]);

    return (
        <>
            <div className="grid gap-16 grid-cols-1 md:grid-cols-2 text-center p-4 max-w-full md:mx-[150px] z-50 px-4 sm:px-8 md:px-16 py-12 md:py-24 mt-44">
                <div className="flex flex-col mx-6 my-auto">
                    <h3 className="text-[#71D9D3] text-left font-semibold">Hello, I am Sahil Bharti</h3>
                    <div className="text-2xl sm:text-3xl font-[Anta] text-left text-white w-full break-words leading-tight" >
                        Craft, Code <br />
                        <span className="">
                            {currentText}
                        </span>
                    </div>
                    <div className="mt-10 flex flex-wrap gap-8 justify-items-start">
                        <a
                            href="/file/Sahil_Resume_ATS.pdf"
                            download="Sahil_Resume_ATS.pdf"
                            className="mx-2 inline-block hover:animate-bounce px-8 py-3 hover:text-[#C084FC] bg-[#71D9D3] hover:bg-white transition-colors ease-in-out duration-700 text-black font-bold rounded"
                        >
                            Download CV <span>
                                <i className="fa-solid fa-arrow-down px-2 font-bold"></i>
                            </span>
                        </a>
                        <a
                            href="#social_section"
                            className="mx-2 inline-block hover:animate-bounce px-8 py-3 text-[#C084FC] bg-white hover:bg-[#71D9D3] transition-colors ease-in-out duration-700 hover:text-black font-bold rounded"
                        >
                            Contact Me<span className="">
                                <i className="px-2 fa-solid fa-user-tie"></i>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="text-white flex items-center justify-center h-full animate-[bounce_1s_infinite_ease-in-out]">
                    <img src="img/sahilprofile1.png" className="md:w-96 w-90" />
                </div>
            </div>
        </>

    )
}
