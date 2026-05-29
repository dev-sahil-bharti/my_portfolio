import { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            
            // Track active section
            const sections = ['home', 'about', 'projects', 'blogs', 'contact'];
            let found = false;
            
            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if section is in viewport
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
                        setActiveSection(section);
                        found = true;
                        break;
                    }
                }
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsMobileMenuOpen(false);
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = ['home', 'about', 'projects', 'blogs', 'contact'];

    return (
        <div className={`fixed inset-x-0 flex justify-center z-50 px-4 transition-all duration-300 ${scrolled ? 'top-4' : 'top-6'}`}>
            <nav className={`bg-neutral-950/80 backdrop-blur-xl border rounded-2xl flex flex-col md:flex-row justify-between items-center w-full max-w-4xl shadow-2xl transition-all duration-500 px-6 py-2.5 ${scrolled ? 'border-[#71D9D3]/30 shadow-[0_0_15px_rgba(113,217,211,0.15)]' : 'border-white/10'}`}>
                <div className="flex justify-between items-center w-full md:w-auto">
                    <div className="cursor-pointer flex items-center" onClick={() => scrollToSection('home')}>
                        <img src={logo} alt="Sahil Bharti Logo" className="h-12 md:h-14 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    </div>
                    <div className="md:hidden py-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} cursor-pointer text-2xl text-neutral-300 hover:text-[#71D9D3] transition-colors`}></i>
                    </div>
                </div>

                <div className={`${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'} md:max-h-full md:opacity-100 md:mt-0 overflow-hidden md:overflow-visible transition-all duration-500 ease-in-out w-full md:w-auto`}>
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-1 items-center w-full">
                        {navItems.map((item) => (
                            <li
                                key={item}
                                className={`w-full md:w-auto px-5 py-2 text-base md:text-lg font-medium text-center rounded-full transition-all cursor-pointer capitalize ${
                                    activeSection === item
                                        ? 'bg-[#71D9D3]/20 text-[#71D9D3] border border-[#71D9D3]/50'
                                        : 'text-neutral-300 hover:text-[#71D9D3] hover:bg-white/5'
                                }`}
                                onClick={() => scrollToSection(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

