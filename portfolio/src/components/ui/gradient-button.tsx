import React from 'react';
import clsx from 'clsx';

type ButtonType = "button" | "submit" | "reset";

interface GradientButtonProps {
    className?: string;
    children?: React.ReactNode;
    label: string;
    onClick?: () => void;
    type?: ButtonType;
}

const GradientButton: React.FC<GradientButtonProps> = ({label, className, children, onClick, type = "button"}) => {
    return (
        <button
            type={type}
            className={clsx(
                'flex justify-center items-center font-bahnchrift text-secondary text-2xl rounded-full z-[1]',
                'bg-gradient-to-tr from-[#50acd8] via-[#b042d8] to-[#d73b98]',
                `${className}`
            )}
            onClick={onClick}
        >
            <span>
                {label}
            </span>
            {children}
        </button>
    );
};

export default GradientButton;