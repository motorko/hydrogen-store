import clsx from 'clsx';
import {DetailedHTMLProps, HTMLAttributes, PropsWithChildren} from 'react';

export interface SelectProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  label?: string;
  error?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  onSelectChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({
  label,
  error,
  name,
  value,
  defaultValue,
  disabled = false,
  onSelectChange,
  className,
  children,
  ...props
}: SelectProps & PropsWithChildren) {
  const labelJSX = label ? (
    <span className="text-sm text-black">{label}</span>
  ) : null;

  const errorJSX = error ? (
    <span className="text-sm text-error">{error}</span>
  ) : null;

  const selectValue = defaultValue ? {defaultValue} : {value};

  return (
    <label className={`inline-flex flex-col gap-y-1 ${className}`} {...props}>
      {labelJSX}
      <span className="relative inline-block">
        <select
          disabled={disabled}
          name={name}
          {...selectValue}
          className={clsx({
            '!border-error hover:!border-black focus:!border-black':
              error && !disabled,
          })}
        >
          {children}
        </select>
      </span>
      {errorJSX}
    </label>
  );
}
