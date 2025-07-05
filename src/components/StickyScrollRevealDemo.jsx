"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
        title: "Image Search App",
        description:
            "A modern React-based web app that allows users to search for images using an external API. It includes features like real-time search suggestions, image previews, and a responsive UI for a seamless experience across devices.",
        image: "./img/imageSearch.png"
    },
    {
        title: "Spiritual Yatra Web App",
        description:
            "I developed the user interface for the Spiritual Yatra website using React JS, ensuring an intuitive and visually appealing design. Implemented responsive design principles to provide a seamless experience across various screen sizes and devices.",
        image: "./img/travel.png"
    },
    {
        title: "Student Management App",
        description:
            "Developed a Student Management System using Next.js and MongoDB, enabling efficient student and course management. Features include creating, updating, and deleting course records with a focus on responsive design and user experience.",
        image: "./img/studentmanegment.png"
    },
    {
        title: "Sales Management App",
        description:
            "Built a Sales Management System using Next.js and MongoDB to streamline the process of managing products and sales. Emphasized quick access to data, dynamic storage, and a responsive, user-friendly interface across devices.",
        image: "./img/salesmanagement.png"
    }
];

export function StickyScrollRevealDemo() {
    return (
        <div className="p-10 bg-black">
            <div className="">
                <h1 className="text-white text-center font-smibold text-3xl font-[Lora] md:pt-0">My Project</h1>
            </div>
            <StickyScroll content={content} />
        </div>
    );
}
