import React from 'react';
import clsx from 'clsx';

interface GradientButtonProps {
    className?: string;
    children?: React.ReactNode;
    label: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({label, className, children}) => {
    return (
        <button
            className={clsx(
                'flex justify-center items-center font-bahnchrift text-primary text-2xl rounded-full z-[1]',
                'bg-gradient-to-tr from-[#50acd8] via-[#b042d8] to-[#d73b98]',
                `${className}`
            )}
        >
            <span>
                {label}
            </span>
            {children}
        </button>
    );
};

export default GradientButton;