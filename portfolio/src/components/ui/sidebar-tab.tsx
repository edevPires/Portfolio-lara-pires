import React from 'react';
import clsx from 'clsx';
import { Link } from '@tanstack/react-router';

interface SidebarTabProps {
    href: string;
    label: string;
}

const SidebarTab: React.FC<SidebarTabProps> = ({ href, label }) => {
    return (
        <Link to={href} className={clsx(
            'flex justify-center items-center w-full py-4',
            'border border-primary rounded-full font-primary text-primary text-2xl',
            'hover:text-secondary hover:bg-primary transition-colors duration-200'
            )}>
            <span>
                {label}
            </span>
        </Link>
    );
};

export default SidebarTab;