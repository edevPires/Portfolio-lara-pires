import React from "react";
import clsx from "clsx";

type InputTextAreaFormProps = {
  name: string;
  label: string;
  register?: any;
  rows?: number;
  errors?: any;
  [key: string]: any;
};

const InputTextAreaForm: React.FC<InputTextAreaFormProps> = ({ name, label, register, rows = 5, errors, ...rest }) => {
  return (
    <div className="relative flex flex-col gap-1 w-full">
      <textarea   
        id={name}
        name={name}
        placeholder=" "
        rows={rows}
        className={clsx("peer bg-primary text-2xl font-bahnchrift rounded-3xl border border-purple-500 px-5 py-4 focus:outline-none resize-none min-h-[120px]", errors?.[name] && "border-red-500 border-2")}
        {...(register ? register(name) : {})}
        {...rest}
      />
      <label
        htmlFor={name}
        className={clsx(
          "absolute left-4 transition-all bg-primary px-2 text-secondary-500 rounded-lg font-bahnchrift text-purple-500 text-lg ",
          // Default state: centered vertically in the textarea
          "text-base top-6 -translate-y-1/2",
          // When focused or not empty: move to top border
          "peer-focus:-top-3 peer-focus:shadow-md peer-focus:text-purple-500 peer-focus:-translate-y-0",
          "peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:shadow-md peer-[&:not(:placeholder-shown)]:text-purple-500 peer-[&:not(:placeholder-shown)]:-translate-y-0"
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default InputTextAreaForm;
