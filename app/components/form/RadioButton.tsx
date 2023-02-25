import clsx from 'clsx';
import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface RadioButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  label?: string;
  name?: string;
  value?: string | number | readonly string[] | undefined;
  disabled?: boolean;
  onRadioButtonChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioButton({
  label,
  name,
  value,
  disabled = false,
  onRadioButtonChange = () => {},
}: RadioButtonProps) {
  return (
    <label
      tabIndex={disabled ? -1 : 0}
      className={`text-base flex w-fit gap-2 group  ${clsx({
        'cursor-pointer text-black': !disabled,
        'cursor-default text-secondary': disabled,
      })}`}
    >
      <input
        className="hidden [&+span_svg]:hidden [&:checked+span_svg]:block"
        type="radio"
        name={name}
        value={value}
        onChange={onRadioButtonChange}
        disabled={disabled}
      />
      <span
        className={`inline-flex justify-center items-center border border-borderLight rounded-full overflow-hidden w-6 h-6  transition-colors ${clsx(
          {
            'bg-accent': disabled,
            'group-hover:border-black': !disabled,
          },
        )}`}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="12" height="12" rx="6" fill="black" />
        </svg>
      </span>

      {label}
    </label>
  );
}
