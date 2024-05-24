import React from 'react';

type SelectProps<T, U> = {
  id: string;
  label?: string;
  options: string[];
  onChange: (updatedValue: T) => void;
  defaultValue: U;
};

function Select<T, U>({
  id,
  label,
  options,
  onChange,
  defaultValue,
}: SelectProps<T, U>) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = { [id]: e.target.value };

    onChange(value as T);
  };

  return (
    <label
      htmlFor={id}
      className="form-control w-full max-w-xs"
    >
      {label ? <div className="label label-text">{label}</div> : null}

      <select
        className="select select-bordered select-sm w-full"
        id={id}
        onChange={handleChange}
        defaultValue={defaultValue as string}
      >
        {options.map((option) => (
          <option
            key={option}
            className="lowercase"
          >
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Select;
