import { useState } from 'react';
import logo from '../../assets/logo.png';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        setIsMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed top-6 inset-x-0 flex justify-center z-50 px-4">
            <nav className="bg-neutral-950/80 backdrop-blur-xl border rounded-2xl border-white/10 px-6 py-2.5 flex flex-col md:flex-row justify-between items-center w-full max-w-4xl shadow-2xl transition-all duration-300">
                <div className="flex justify-between items-center w-full md:w-auto">
                    <div className="cursor-pointer flex items-center" onClick={() => scrollToSection('home')}>
                        <img src={logo} alt="Sahil Bharti Logo" className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    </div>
                    <div className="md:hidden py-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} cursor-pointer text-2xl text-neutral-300 hover:text-white transition-colors`}></i>
                    </div>
                </div>
                
                <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto mt-4 md:mt-0 space-y-4 md:space-y-0`}>
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-1 items-center w-full">
                        <li className="w-full md:w-auto px-5 py-2 text-sm font-medium text-center text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-all cursor-pointer" onClick={() => scrollToSection('home')}>Home</li>
                        <li className="w-full md:w-auto px-5 py-2 text-sm font-medium text-center text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-all cursor-pointer" onClick={() => scrollToSection('about')}>About</li>
                        <li className="w-full md:w-auto px-5 py-2 text-sm font-medium text-center text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-all cursor-pointer" onClick={() => scrollToSection('projects')}>Projects</li>
                        <li className="w-full md:w-auto px-5 py-2 text-sm font-medium text-center text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-all cursor-pointer" onClick={() => scrollToSection('blogs')}>Blogs</li>
                        <li className="w-full md:w-auto px-5 py-2 text-sm font-medium text-center text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-all cursor-pointer" onClick={() => scrollToSection('contact')}>Contact</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
