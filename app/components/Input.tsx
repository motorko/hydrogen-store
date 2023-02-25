import clsx from 'clsx';
import {DetailedHTMLProps, HTMLAttributes} from 'react';
import Icons from './Icons';

export interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  label?: string;
  error?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  name?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onInputKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  submitButton?: boolean;
}

export default function Input({
  label,
  error,
  type = 'text',
  name,
  placeholder,
  value,
  disabled = false,
  onInputChange,
  onInputKeyDown,
  submitButton = false,
  className,
  ...props
}: InputProps) {
  const labelJSX = label ? (
    <span
      className={`text-sm  ${submitButton ? 'text-black' : 'text-secondary'}`}
    >
      {label}
    </span>
  ) : null;

  const errorJSX = error ? (
    <span className="text-sm text-error">{error}</span>
  ) : null;

  const submitButtonJSX = submitButton ? (
    <button
      className="with-outline w-[42px] h-[42px] absolute right-0 top-1/2 -translate-y-1/2 flex justify-center items-center"
      type="submit"
    >
      <Icons icon="arrow-right" />
    </button>
  ) : null;

  return (
    <label className={`inline-flex flex-col gap-y-1 ${className}`} {...props}>
      {labelJSX}
      <span className="relative inline-block">
        <input
          disabled={disabled}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onInputChange}
          onKeyDown={onInputKeyDown}
          className={clsx({
            '!pr-[42px]': submitButton,
            '!border-error hover:!border-black focus:!border-black': error,
          })}
        />
        {submitButtonJSX}
      </span>
      {errorJSX}
    </label>
  );
}
