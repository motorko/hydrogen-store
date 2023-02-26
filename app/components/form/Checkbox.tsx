import clsx from 'clsx';
import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface CheckboxProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  label?: string;
  name?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onCheckboxChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox({
  label,
  name,
  checked = false,
  disabled = false,
  defaultChecked,
  onCheckboxChange = () => {},
}: CheckboxProps) {
  const checkboxValue =
    typeof defaultChecked === 'boolean' ? {defaultChecked} : {checked};

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
        type="checkbox"
        name={name}
        {...checkboxValue}
        onChange={onCheckboxChange}
        disabled={disabled}
      />
      <span
        className={`inline-flex justify-center items-center border border-borderLight rounded-[4px] w-6 h-6  transition-colors ${clsx(
          {
            'bg-accent': disabled,
            'group-hover:border-black': !disabled,
          },
        )}`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="23"
            height="23"
            rx="3.5"
            fill="black"
            stroke="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.29325 16.7073L6.29325 13.7073C5.90225 13.3163 5.90225 12.6843 6.29325 12.2933C6.68425 11.9023 7.31625 11.9023 7.70725 12.2933L9.94325 14.5293L16.2413 7.35032C16.6013 6.93032 17.2323 6.88232 17.6503 7.24132C18.0703 7.60132 18.1192 8.23132 17.7592 8.65032L10.7593 16.6503C10.5783 16.8623 10.3162 16.9883 10.0382 16.9993C9.73525 17.0003 9.48025 16.8953 9.29325 16.7073Z"
            fill="white"
          />
        </svg>
      </span>

      {label}
    </label>
  );
}
