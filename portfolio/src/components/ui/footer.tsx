import React from 'react';
import { FaBehance, FaInstagram, FaArtstation } from "react-icons/fa";
import { Link } from '@tanstack/react-router';
import clsx from 'clsx';
interface FooterProps {

}

const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <footer className='flex flex-col gap-8 bg-secondary px-5 py-18 sm:px-42'>
            <div className='flex gap-5'>
                <div className={clsx(
                    "flex justify-center items-center text-2xl size-14 rounded-full",
                    "bg-gradient-to-tr from-[#50acd8] via-[#b042d8] to-[#d73b98]",
                    "transition-all duration-200 hover:from-[#d73b98] hover:via-[#b042d8] hover:to-[#50acd8] hover:cursor-pointer hover:scale-105"
                )}>
                    <FaBehance className='text-primary'/>
                </div>
                <div className={clsx(
                    "flex justify-center items-center text-2xl size-14 rounded-full",
                    "bg-gradient-to-tr from-[#50acd8] via-[#b042d8] to-[#d73b98]",
                    "transition-all duration-200 hover:from-[#d73b98] hover:via-[#b042d8] hover:to-[#50acd8] hover:cursor-pointer hover:scale-105"
                )}>
                    <FaInstagram className='text-primary'/>
                </div>
                <div className={clsx(
                    "flex justify-center items-center text-2xl size-14 rounded-full",
                    "bg-gradient-to-tr from-[#50acd8] via-[#b042d8] to-[#d73b98]",
                    "transition-all duration-200 hover:from-[#d73b98] hover:via-[#b042d8] hover:to-[#50acd8] hover:cursor-pointer hover:scale-105"
                )}>
                    <FaArtstation className='text-primary'/>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row'>
                <div className='flex flex-col gap-2'>
                    <Link className='font-altone-bold text-primary text-xl transition-all duration-200 hover:scale-105 w-fit' to={"/"}>
                        Home
                    </Link>
                    <Link className='font-bahnchrift text-primary text-xl transition-all duration-200 hover:scale-105 w-fit' to={"/"}>
                        trabalhos
                    </Link>
                    <Link className='font-bahnchrift text-primary text-xl transition-all duration-200 hover:scale-105 w-fit' to={"/"}>
                        sobre
                    </Link>
                    <Link className='font-bahnchrift text-primary text-xl transition-all duration-200 hover:scale-105 w-fit' to={"/"}>
                        entre em contato
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;