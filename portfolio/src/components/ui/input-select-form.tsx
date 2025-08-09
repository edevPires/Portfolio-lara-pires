import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";

type Option = {
  value: string;
  label: string;
};

type InputSelectFormProps = {
  name: string;
  label: string;
  options: Option[];
  register?: any;
  value?: string;
  onChange?: (value: string) => void;
  [key: string]: any;
};

const InputSelectForm: React.FC<InputSelectFormProps> = ({
  name,
  label,
  options,
  register,
  value: controlledValue,
  onChange,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>(controlledValue || "");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (controlledValue !== undefined) setSelected(controlledValue);
  }, [controlledValue]);

  function handleSelect(option: Option) {
    setSelected(option.value);
    setOpen(false);
    if (onChange) onChange(option.value);
    // Integração com react-hook-form
    if (register) {
      const reg = register(name);
      if (reg && typeof reg.onChange === "function") {
        reg.onChange({ target: { name, value: option.value } });
      }
    }
  }

  return (
    <div ref={containerRef} className="relative flex flex-col gap-1 w-full">

      <input
        type="hidden"
        name={name}
        value={selected}
        {...(register ? register(name) : {})}
        {...rest}
      />

      <button
        type="button"
        className={clsx(
          "peer bg-primary text-2xl font-bahnchrift rounded-3xl border border-purple-500 px-5 py-4 flex items-center justify-between focus:outline-none transition-all",
          open && "ring-2 ring-purple-400"
        )}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        tabIndex={0}
      >
        <span className={clsx(selected ? "text-secondary" : "text-secondary-500")}>{
          options.find(o => o.value === selected)?.label || "Selecione..."
        }</span>
        <svg className={clsx("ml-2 w-5 h-5 transition-transform", open && "rotate-180")}
          fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <label
        htmlFor={name}
        className={clsx(
          "pointer-events-none rounded-lg absolute left-4 transition-all bg-primary px-2 text-secondary-500 font-bahnchrift text-purple-500 text-lg",
          selected || open ? "text-lg -top-3 shadow-md" : "text-base top-1/2 -translate-y-1/2"
        )}
      >
        {label}
      </label>
      
      <ul
        className={clsx(
          "absolute z-10 left-0 top-full w-full bg-primary border border-purple-500 rounded-2xl shadow-lg overflow-hidden transition-all duration-200",
          open ? "max-h-60 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95 pointer-events-none"
        )}
        role="listbox"
      >
        {options.map(option => (
          <li
            key={option.value}
            className={clsx(
              "px-4 py-2 cursor-pointer hover:bg-purple-100 text-lg font-bahnchrift transition-colors",
              selected === option.value && "bg-purple-100 text-secondary"
            )}
            onClick={() => handleSelect(option)}
            role="option"
            aria-selected={selected === option.value}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InputSelectForm;
