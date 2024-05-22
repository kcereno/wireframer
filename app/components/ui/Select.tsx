import React from 'react';
import { StringMap } from '~/types/utilityTypes';

type SelectProps = {
  id: string;
  label: string;
  options: string[];
  onChange: (config: StringMap) => void;
};

function Select({ id, label, options, onChange }: SelectProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const updatedConfig = { [id]: e.target.value };
    onChange(updatedConfig);
  };

  return (
    <label
      htmlFor={id}
      className="form-control w-full max-w-xs"
    >
      <div className="label label-text">{label}</div>
      <select
        className="select select-bordered"
        id={id}
        onChange={handleChange}
        defaultValue={'Pick One'}
      >
        <option
          disabled
          value={'Pick One'}
        >
          Pick one
        </option>
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
