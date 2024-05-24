import React from 'react';

type SelectProps<T> = {
  id: string;
  label?: string;
  options: string[];
  onChange: (updatedValue: T) => void;
  defaultValue: string;
};

function Select<T>({
  id,
  label,
  options,
  onChange,
  defaultValue,
}: SelectProps<T>) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as T);
  };

  return (
    <label
      htmlFor={id}
      className="form-control w-full max-w-xs"
    >
      {label ? <div className="label label-text">{label}</div> : null}
      <select
        className="select select-bordered"
        id={id}
        onChange={handleChange}
        defaultValue={defaultValue}
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
