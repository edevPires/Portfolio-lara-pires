import React from "react";
import clsx from "clsx";

type InputPhoneFormProps = {
  name: string;
  label: string;
  register?: any;
  errors?: any;
  [key: string]: any;
};

const BASE_PREFIX = "+55 ";

function formatLocalBRPhone(digitsLocal: string): string {
  const d = digitsLocal.slice(0, 11);
  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`; // starts typing DDD
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`; // (XX) XXXX
  if (d.length === 7) return `(${d.slice(0, 2)}) ${d.slice(2, 7)}`; // (XX) XXXXX (no hyphen yet)
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`; // (XX) XXXXX-XXXX (partial)
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7, 11)}`; // full 11 digits
}

function formatBRPhoneWithPrefix(raw: string, includePrefix: boolean): string {
  const digits = raw.replace(/\D/g, "");
  // Remove leading country code if present in the typed digits
  const local = digits.startsWith("55") ? digits.slice(2) : digits;
  const formattedLocal = formatLocalBRPhone(local);
  if (!includePrefix) return formattedLocal;
  // If there are no local digits, return empty to avoid sticking with only "+55"
  return formattedLocal ? `${BASE_PREFIX}${formattedLocal}` : "";
}

const InputPhoneForm: React.FC<InputPhoneFormProps> = ({ name, label, register, errors, ...rest }) => {

  const registered = register
    ? register(name, {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          const digits = e.target.value.replace(/\D/g, "");
          const hasLocal = (digits.startsWith("55") ? digits.slice(2) : digits).length > 0;
          const include = hasLocal; // only include prefix when there are local digits
          if (!hasLocal) {
            e.target.value = "";
          } else {
            const formatted = formatBRPhoneWithPrefix(e.target.value, include);
            e.target.value = formatted;
          }
        },
      })
    : undefined;

  return (
    <div className="relative flex flex-col gap-1 w-full">
      <input
        id={name}
        name={name}
        type="tel"
        placeholder=" "
        className={clsx(
          "peer bg-primary text-2xl font-bahnchrift rounded-3xl border border-purple-500 px-5 py-4 focus:outline-none transition-all",
          errors?.[name] && "border-red-500 border-2"
        )}
        {...(registered || {})}
        onFocus={(e) => {
          // Do not inject prefix on focus; it will appear after first digit
          rest?.onFocus?.(e);
        }}
        onBlur={(e) => {
          const digits = e.currentTarget.value.replace(/\D/g, "");
          const local = digits.startsWith("55") ? digits.slice(2) : digits;
          if (local.length === 0) {
            // Clear if nothing typed besides prefix
            e.currentTarget.value = "";
          } else {
            // Keep formatted with prefix
            e.currentTarget.value = formatBRPhoneWithPrefix(e.currentTarget.value, true);
          }
          rest?.onBlur?.(e);
        }}
        {...rest}
      />
      <label
        htmlFor={name}
        className={clsx(
          "absolute left-4 transition-all bg-primary px-2 text-secondary-500 rounded-lg font-bahnchrift  text-purple-500 text-lg ",
          "text-base top-1/2 -translate-y-1/2",
          "peer-focus:-top-3 peer-focus:shadow-md peer-focus:text-purple-500 peer-focus:-translate-y-0",
          "peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:shadow-md peer-[&:not(:placeholder-shown)]:text-purple-500 peer-[&:not(:placeholder-shown)]:-translate-y-0"
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default InputPhoneForm;
