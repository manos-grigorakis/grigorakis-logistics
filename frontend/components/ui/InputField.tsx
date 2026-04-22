import { InputFieldProps } from "@/app/types/input-field-props";

export default function InputField({
  label,
  name,
  type = "text",
  placeholder,
  error,
  required = false,
  onChange,
  onBlur,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="uppercase">
        {required && <span className="text-red-500">*</span>} {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className={`border text-sm px-3 py-2.5 placeholder:text-body focus:ring-2 focus:outline-none 
        ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-ruler focus:border-primary-300 focus:ring-primary-300"
        }`}
      />

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
