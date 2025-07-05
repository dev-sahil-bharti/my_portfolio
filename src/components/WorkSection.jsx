export default function WorkSection() {
    return (
        <div className="bg-black text-white text-center pt-16 px-4 sm:px-8">
            <h1 className="text-3xl font-[Lora] font-semibold">Work Experience</h1>

            <div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 mt-10 rounded-md"
                style={{
                    background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
                }}
            >
                {/* Left: Image */}
                <div className="flex justify-center items-center border border-slate-700 p-4 rounded-md">
                    <img
                        src="./img/logo/infonicsolutions.jpeg"
                        className="w-full sm:w-80 md:w-96 h-auto rounded-md"
                        alt="Infonic Solutions logo"
                    />
                </div>

                {/* Right: Text */}
                <div className="text-left p-2 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                        <h2 className="text-2xl font-bold">Infonic Solutions</h2>
                        <span className="text-sm text-gray-400 mt-1 sm:mt-0">
                            June 2024 - September 2024
                        </span>
                    </div>
                    <h3 className="text-sm text-gray-400">MERN Stack Developer</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>
                            Designed and developed dynamic web applications using the MERN stack,
                            delivering responsive and scalable solutions for diverse business needs.
                        </li>
                        <li>
                            Built server-side rendering (SSR) and static web applications with Next.js,
                            optimizing performance and improving SEO for client projects.
                        </li>
                        <li>
                            Integrated RESTful APIs and third-party services into applications,
                            enhancing functionality and user engagement.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
