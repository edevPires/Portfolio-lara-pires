import React, { useEffect, useRef, useState } from 'react';
import logo from '../../assets/logo/logo.png';
import HeaderTab from './header-tab';
import { Link } from '@tanstack/react-router';
import { Menu } from 'lucide-react';
import Tabs from '../../data/header-tabs.json';

interface HeaderProps {
    setIsOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setIsOpen }) => {
    const [highlight, setHighlight] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });
    const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [activeIdx, setActiveIdx] = useState<number | null>(null);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const onScroll = () => {
            setIsAtTop(window.scrollY === 0);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleTabClick = (label: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const key = label.toLowerCase();
        if (key === 'sobre') {
            e.preventDefault();
            const el = document.getElementById('sobre');
            if (el) {
                const headerOffset = 80; // fixed header height
                const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
            return;
        }
        if (key === 'entre em contato') {
            e.preventDefault();
            window.dispatchEvent(new Event('open-contact'));
            return;
        }
        if (key === 'trabalhos') {
            e.preventDefault();
            // Future: navigate to '/trabalhos'
            return;
        }
        if (key === 'quero mais') {
            e.preventDefault();
            return;
        }
    };

    const handleMouseEnter = (idx: number) => {
        const tab = tabRefs.current[idx];
        setActiveIdx(idx);
        if (tab) {
            const rect = tab.getBoundingClientRect();
            const navRect = tab.parentElement?.getBoundingClientRect();
            setHighlight({
                left: rect.left - (navRect?.left ?? 0),
                width: rect.width,
                opacity: 1,
            });
        }
    };

    const handleMouseLeave = () => {
        setHighlight((prev) => ({ ...prev, opacity: 0 }));
        setActiveIdx(null);
    };

    return (
        <header className={`fixed top-0 left-0 w-dvw h-20 bg-primary text-secondary z-[3] transition-all duration-300 ${isAtTop ? '' : 'shadow-lg'}`}>
            <nav className="relative flex h-full items-center justify-between lg:justify-center gap-14 lg:gap-20 px-8">
                <Link to="/">
                    <img src={logo} alt="Logo LP" className="h-12 w-auto" />
                </Link>

                <div
                    className="absolute top-1/2 -translate-y-1/2 rounded-full bg-secondary transition-all duration-300 pointer-events-none"
                    style={{
                        left: highlight.left - 20,
                        width: highlight.width + 40,
                        height: '2.5rem',
                        opacity: highlight.opacity,
                        paddingLeft: 8,
                        paddingRight: 8,
                        zIndex: 1,
                    }}
                />
                {Tabs.map((tab, idx) => (
                    <div
                        key={tab.href}
                        ref={(el) => { tabRefs.current[idx] = el; }}
                        onMouseEnter={() => handleMouseEnter(idx)}
                        onMouseLeave={handleMouseLeave}
                        className="h-full hidden lg:flex items-center"
                    >
                        <HeaderTab
                            href={tab.href}
                            label={tab.label}
                            active={activeIdx === idx}
                            onClick={handleTabClick(tab.label)}
                        />
                    </div>
                ))}

                <Menu
                    className="size-10 lg:hidden"
                    onClick={() => setIsOpen(true)}
                />
            </nav>
        </header>
    );
};

export default Header;