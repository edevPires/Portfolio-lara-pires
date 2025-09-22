import React from 'react';

import { FaBehance, FaInstagram, FaArtstation } from "react-icons/fa";
import { Link } from '@tanstack/react-router';
import clsx from 'clsx';
interface FooterProps {

}

const Footer: React.FC<FooterProps> = ({}) => {
    const handleClick = (label: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const key = label.toLowerCase();
        if (key === 'sobre') {
            e.preventDefault();
            const el = document.getElementById('sobre');
            if (el) {
                const headerOffset = 80;
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
    };
    return (
        <footer className='flex flex-col gap-8 bg-secondary px-5 py-18 sm:px-42'>

            <div className='flex gap-5'>
                <div className={clsx(
                    "flex justify-center items-center text-2xl size-14 rounded-full",
                    "bg-gradient-to-tr from-[#FB26B4] via-[#F77746] to-[#E6B300]",
                    "transition-all duration-200 hover:from-[#E6B300] hover:via-[#F77746] hover:to-[#FB26B4] hover:cursor-pointer hover:scale-105"
                )}>
                    <FaBehance className='text-secondary'/>
                </div>
                <div className={clsx(
                    "flex justify-center items-center text-2xl size-14 rounded-full",
                    "bg-gradient-to-tr from-[#FB26B4] via-[#F77746] to-[#E6B300]",
                    "transition-all duration-200 hover:from-[#E6B300] hover:via-[#F77746] hover:to-[#FB26B4] hover:cursor-pointer hover:scale-105"
                )}>
                    <FaInstagram className='text-secondary'/>
                </div>
                <div className={clsx(
                    "flex justify-center items-center text-2xl size-14 rounded-full",
                    "bg-gradient-to-tr from-[#FB26B4] via-[#F77746] to-[#E6B300]",
                    "transition-all duration-200 hover:from-[#E6B300] hover:via-[#F77746] hover:to-[#FB26B4] hover:cursor-pointer hover:scale-105"
                )}>
                    <FaArtstation className='text-secondary'/>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row'>
                <div className='flex flex-col gap-2'>
                    <Link className='font-altone-bold text-primary text-xl transition-all duration-200 hover:scale-105 w-fit' to={"/"}>
                        Home
                    </Link>
                    <Link className='font-bahnchrift text-primary text-xl transition-all duration-200 hover:scale-105 w-fit' to={"/"} onClick={handleClick('trabalhos')}>
                        trabalhos
                    </Link>
                    <Link className='font-bahnchrift text-primary text-xl transition-all duration-200 hover:scale-105 w-fit' to={"/"} onClick={handleClick('sobre')}>
                        sobre
                    </Link>
                    <Link className='font-bahnchrift text-primary text-xl transition-all duration-200 hover:scale-105 w-fit' to={"/"} onClick={handleClick('entre em contato')}>
                        entre em contato
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;