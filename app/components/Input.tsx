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
  onInputChange,
  onInputKeyDown,
  submitButton = false,
  className,
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
    <label className={`inline-flex flex-col gap-y-1 ${className}`}>
      {labelJSX}
      <span className="relative inline-block">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onInputChange}
          onKeyDown={onInputKeyDown}
          className={submitButton ? '!pr-[42px]' : ''}
        />
        {submitButtonJSX}
      </span>
      {errorJSX}
    </label>
  );
}
