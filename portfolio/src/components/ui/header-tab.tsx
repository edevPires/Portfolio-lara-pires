import React from 'react';
import clsx from 'clsx';
import { Link } from '@tanstack/react-router';

interface HeaderTabProps {
    href: string;
    label: string;
    active?: boolean;
}

const HeaderTab: React.FC<HeaderTabProps> = ({ href, label, active }) => {
    return (
        <Link
            to={href}
            className={clsx(
                'flex justify-center items-center h-full font-bahnchrift text-2xl transition-colors duration-300 z-[2]',
                active ? 'text-primary' : 'text-secondary'
            )}
        >
            <span>
                {label}
            </span>
        </Link>
    );
};

export default HeaderTab;