import React from 'react';
import logo from '../../assets/logo/logo_branca.png';
import SidebarTab from './sidebar-tab';
import { XIcon } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import clsx from 'clsx';
import Tabs from '../../data/sidebar-tabs.json';
import GradientButton from './gradient-button';

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({isOpen, setIsOpen}) => {
    const handleTabClick = (label: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const key = label.toLowerCase();
        if (key === 'sobre') {
            e.preventDefault();
            const el = document.getElementById('sobre');
            if (el) {
                const headerOffset = 80;
                const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        } else if (key === 'entre em contato') {
            e.preventDefault();
            window.dispatchEvent(new Event('open-contact'));
        } else if (key === 'trabalhos') {
            e.preventDefault();
            // Future: navigate to '/trabalhos'
        } else if (key === 'quero mais') {
            e.preventDefault();
        }
        setIsOpen(false);
    };

    return (
        <aside className={clsx(
            `fixed sm:hidden left-0 top-0 w-dvw h-dvh bg-secondary -translate-x-full transition-transform duration-300 ease-in-out z-[4]`,
            isOpen? 'translate-x-0' : '',
            )}>
            <nav className='flex flex-col h-full justify-center items-center gap-16 px-5'>
                <div className='relative flex justify-center w-full'>
                    <Link to='/'>
                        <img src={logo} alt="Logo LP" className='w-12 h-auto'/>
                    </Link>
                    <XIcon 
                        className='absolute right-0 top-1/2 -translate-y-1/2 size-8 text-primary'
                        onClick={() => setIsOpen(false)}
                    />
                </div>

                {Tabs.map((tab) => (
                    <SidebarTab key={tab.href} href={tab.href} label={tab.label} onClick={handleTabClick(tab.label)} />
                ))}

                <GradientButton 
                    label='Quero mais'
                    onClick={() => setIsOpen(false)}
                    className='w-full py-4'
                />
            </nav>
        </aside>
    );
};

export default Sidebar;