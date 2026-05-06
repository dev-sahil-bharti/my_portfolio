// use client directive removed
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
    {
        title: "Ai Powered Edu-Track",
        description:
            "Edu-Track – A full-stack web app where students can log their learning goals, track daily progress across subjects, and get AI-generated weekly summaries + study recommendations based on their activity.",
        image: "./img/EduTrack_Dashboard.png",
        Live: "https://edutrack-ai-powered-frontend.onrender.com"
    },
    {
        title: "Doctor Point- Appointment Booking System",
        description:
            "Developed “Doctor Point,” a full-stack Appointment booking Manag   ement System using the MERN stack. Implemented features such as appointment booking, patient record management, role-based authentication, and admin dashboards to streamline healthcare operations.",
        image: "./img/DoctorPoint.png",
        Live: "https://doctor-point-hms-frontend-3hcq.onrender.com/"
    },
    {
        title: "RK-Graphics design or creative services",
        description:
            "Developed “RK-Graphics,” a full-stack design or creative services platform. Implemented responsive UI, project showcase, and backend integration to support scalable and professional digital branding.",
        image: "./img/rkGraphics.png",
        Live: "https://rkgraphics-complete-1frontend.onrender.com/"
    },
    {
        title: "iNotebook - manage your Notes on Cloud",
        description:
            "Designed and developed “i-Cloud Notebook,” featuring user authentication, secure cloud-based note storage, create/read/update/delete operations, and a responsive interface for multi-device access.",
        image: "./img/iNotebook.png",
        Live: "https://i-cloud-notebook-nine.vercel.app/landingpage"
    },
];

export function ProjectsSection() {
    return (
        <div id="projects" className="px-4 py-12 sm:p-10 bg-black">
            <div className="mb-8">
                <h1 className="text-white text-center font-semibold text-3xl sm:text-4xl font-[Lora] md:pt-0">My Projects</h1>
            </div>
            <StickyScroll content={content} />
        </div>
    );
}
