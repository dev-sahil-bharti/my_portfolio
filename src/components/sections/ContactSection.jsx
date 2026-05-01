// import React from 'react'

export default function SocialSection() {
    return (
        <>
            <div className='bg-black text-white text-center pb-12' id="social_section">
                <div>
                    <h1 className="text-white text-center font-semibold text-3xl font-[Lora] md:pt-0 pt-6 pb-6">Connect with me</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="grid grid-cols-5 gap-4 max-w-md">
                        <div className="">
                            <a href={social.gmail.url}>
                                <img src={social.gmail.image} className="w-[65px] p-1 transition-transform duration-300 hover:scale-110" alt="Gmail Logo" />
                            </a>
                        </div>
                        <div className="">
                            <a href={social.github.url}>
                                <img src={social.github.image} className="w-[65px] p-1 transition-transform duration-300 hover:scale-110" alt="Github Logo" />
                            </a>
                        </div>
                        <div className="">
                            <a href={social.linkedin.url}>
                                <img src={social.linkedin.image} className="w-[65px] p-1 transition-transform duration-300 hover:scale-110" alt="LinkedIn Logo" />
                            </a>
                        </div>
                        <div className="">
                            <a href={social.twitter.url}>
                                <img src={social.twitter.image} className="w-[65px] p-1 transition-transform duration-300 hover:scale-110" alt="Twitter Logo" />
                            </a>
                        </div>
                        <div className="">
                            <a href={social.instagram.url}>
                                <img src={social.instagram.image} className="w-[65px] p-1 transition-transform duration-300 hover:scale-110" alt="Instagram Logo" />
                            </a>
                        </div>
                    </div>
                    <div className="max-w-60 mt-6">
                        <img src="./img/signature.png" />
                    </div>
                </div>
            </div >
        </>
    )
}

const social = {
    gmail:
    {
        "id": 1,
        "name": "Gmail",
        "url": "https://mail.google.com/mail/?view=cm&fs=1&to=sahil.884062@gmail.com",
        "image": "./img/social/gmail.png"
    },
    github:
    {
        "id": 1,
        "name": "Github",
        "url": "https://github.com/dev-sahil-bharti",
        "image": "./img/social/github.webp"
    },
    linkedin:
    {
        "id": 2,
        "name": "Linked In",
        "url": "https://www.linkedin.com/in/sahil-bharti-995724329",
        "image": "./img/social/linkedin.webp"
    },
    instagram:
    {
        "id": 1,
        "name": "Twitter",
        "url": "https://www.instagram.com/official_coder01/",
        "image": "./img/social/instagram.webp"
    },
    twitter:
    {
        "id": 1,
        "name": "Instagram",
        "url": "https://x.com/Techsahil199",
        "image": "./img/social/x.webp"
    },
}