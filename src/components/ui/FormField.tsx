import { cn } from "@/lib/utils";

interface FieldWrapperProps {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}

function FieldWrapper({ label, htmlFor, error, required, className, children }: FieldWrapperProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

const inputBase =
  "w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function InputField({ label, error, required, id, className, ...rest }: InputFieldProps) {
  const fieldId = id || label.toLowerCase().replace(/\s+/g, "-");
  return (
    <FieldWrapper label={label} htmlFor={fieldId} error={error} required={required}>
      <input
        id={fieldId}
        aria-invalid={!!error}
        className={cn(
          inputBase,
          error ? "border-red-400 focus:ring-red-200" : "border-border focus:border-primary",
          className
        )}
        {...rest}
      />
    </FieldWrapper>
  );
}

interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function TextareaField({ label, error, required, id, className, ...rest }: TextareaFieldProps) {
  const fieldId = id || label.toLowerCase().replace(/\s+/g, "-");
  return (
    <FieldWrapper label={label} htmlFor={fieldId} error={error} required={required}>
      <textarea
        id={fieldId}
        aria-invalid={!!error}
        rows={5}
        className={cn(
          inputBase,
          "resize-none",
          error ? "border-red-400 focus:ring-red-200" : "border-border focus:border-primary",
          className
        )}
        {...rest}
      />
    </FieldWrapper>
  );
}

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { label: string; value: string }[];
  placeholder?: string;
}

export function SelectField({
  label,
  error,
  required,
  id,
  className,
  options,
  placeholder,
  ...rest
}: SelectFieldProps) {
  const fieldId = id || label.toLowerCase().replace(/\s+/g, "-");
  return (
    <FieldWrapper label={label} htmlFor={fieldId} error={error} required={required}>
      <select
        id={fieldId}
        aria-invalid={!!error}
        className={cn(
          inputBase,
          "appearance-none bg-no-repeat",
          error ? "border-red-400 focus:ring-red-200" : "border-border focus:border-primary",
          className
        )}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
}
