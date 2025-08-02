import React from 'react';
import clsx from 'clsx';

interface GradientButtonProps {
    className?: string;
    label: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({label, className}) => {
    return (
        <button
            className={clsx(
                'flex justify-center items-center font-primary text-primary text-2xl py-4 rounded-full',
                'bg-gradient-to-tr from-[#50acd8] via-[#b042d8] to-[#d73b98]',
                `${className}`
            )}
        >
            <span>
                {label}
            </span>
        </button>
    );
};

export default GradientButton;