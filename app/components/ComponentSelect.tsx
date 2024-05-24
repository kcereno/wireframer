import Select from './ui/Select';
import { getSecondarySelectOptions } from '~/utils/components';
import { Component, ComponentConfig, ComponentType } from '~/types/layout';
import { ComponentTypes } from '~/constants';
import { StringMap } from '~/types/utilityTypes';
import { useEffect, useState } from 'react';

type ComponentSelectProps = {
  component: Component;
  updateComponent: (updatedComponent: Component) => void;
};

function ComponentSelect({ component, updateComponent }: ComponentSelectProps) {
  const [secondaryOptions, setSecondaryOptions] = useState<string[]>([]);
  const { type, config } = component;

  useEffect(() => {
    setSecondaryOptions(getSecondarySelectOptions(type));
  }, [type]);

  const handleSelect = (selectedValue: StringMap) => {
    const key = Object.keys(selectedValue)[0];
    const value = Object.values(selectedValue)[0];

    let updatedComponent: Component;
    if (key === 'componentType') {
      const defaultConfig = getSecondarySelectOptions(
        value as ComponentType
      )[0];

      updatedComponent = {
        type: selectedValue[key] as ComponentType,
        config: defaultConfig as ComponentConfig,
      };
    } else {
      updatedComponent = {
        ...component,
        config: selectedValue[key] as ComponentConfig,
      };
    }

    updateComponent(updatedComponent);
  };

  return (
    <div className="flex gap-2">
      <Select
        id="componentType"
        options={ComponentTypes}
        onChange={handleSelect}
        defaultValue={type}
      />
      <Select
        id="componentConfig"
        options={secondaryOptions}
        onChange={handleSelect}
        defaultValue={config}
      />
    </div>
  );
}

export default ComponentSelect;
