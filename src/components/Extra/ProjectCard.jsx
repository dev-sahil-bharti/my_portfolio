import PropsTypes from "prop-types";

export default function ProjectCard({ img, title, description, live, github }) {
    return (
        <>
            <div className="max-w-96 overflow-hidden border-slate-700 border-[1px] bg-blend-soft-light hover:shadow-md hover:shadow-gray-500 rounded-lg group" style={{
                background:
                    "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}>
                <div className="max-w-full p-3 overflow-hidden">
                    <img src={img} className="w-full transform transition-transform duration-500 group-hover:scale-105 rounded-md" alt={title} />
                </div>
                <div className="flex flex-col items-start p-4">
                    <div className="flex gap-3 w-full mb-3">
                        <a
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center px-4 py-2 bg-[#71D9D3] hover:bg-white text-black font-bold rounded transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                            View Project <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i>
                        </a>
                        {github && github !== "#" && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center px-4 py-2 border border-slate-600 hover:border-slate-400 text-gray-300 hover:text-white font-semibold rounded transition-colors duration-300 flex items-center justify-center gap-2"
                            >
                                GitHub <i className="fa-brands fa-github text-lg"></i>
                            </a>
                        )}
                    </div>
                    <h3 className="text-white text-left text-xl font-bold mb-2 h-14 line-clamp-2">{title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2 min-h-[40px]">
                        {description}
                    </p>
                </div>
            </div>
        </>
    )
}


ProjectCard.propTypes = {
    img: PropsTypes.string,
    title: PropsTypes.string,
    description: PropsTypes.string,
    live: PropsTypes.string,
    github: PropsTypes.string,
}