// import React from 'react'

import ProjectCard from "./Extra/ProjectCard";

export default function ProjectSection() {
    return (
        <>
            <div className="bg-[#000000]">
                <div className="">
                    <h1 className="text-white text-center font-smibold text-3xl font-[Lora] md:pt-0">My Project</h1>
                </div>
                <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-fit mx-auto mt-8">
                    <ProjectCard
                        img="img/notes.png"
                        title="Doctor Point- Appointment Booking System"
                        description="Appointment Booking System"
                        live="https://doctor-point-hms-frontend-3hcq.onrender.com/"
                        github="https://doctor-point-hms-frontend-3hcq.onrender.com/"
                    />
                    <ProjectCard
                        img="img/notes.png"
                        title="RK-Graphics design or creative services"
                        description="design or creative services"
                        live="https://rkgraphics-complete-1frontend.onrender.com/"
                        github="#"
                    />
                    <ProjectCard
                        img="img/notes.png"
                        title="iNotebook - manage your Notes on Cloud"
                        description="manage your Notes on Cloud"
                        live="https://i-cloud-notebook-nine.vercel.app/landingpage"
                        github="#"
                    />
                </div>
            </div>
        </>
    )
}
