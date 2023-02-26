import clsx from 'clsx';
import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface TextAreaProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  label?: string;
  error?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onTextAreaChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onTextAreaKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({
  label,
  error,
  name,
  placeholder,
  value,
  disabled = false,
  onTextAreaChange,
  onTextAreaKeyDown,
  className,
  ...props
}: TextAreaProps) {
  const labelJSX = label ? <span className="text-black">{label}</span> : null;

  const errorJSX = error ? (
    <span className="text-sm text-error">{error}</span>
  ) : null;

  return (
    <label
      className={`inline-flex flex-col gap-y-1 ${className ? className : ''}`}
      {...props}
    >
      {labelJSX}
      <textarea
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        value={value}
        cols={33}
        rows={3}
        onChange={onTextAreaChange}
        onKeyDown={onTextAreaKeyDown}
        className={clsx({
          '!border-error hover:!border-black focus:!border-black':
            error && !disabled,
        })}
      ></textarea>
      {errorJSX}
    </label>
  );
}
