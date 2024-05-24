import type { MetaFunction } from '@remix-run/node';
import { useState } from 'react';
import Canvas from '~/components/Canvas';
import Select from '~/components/ui/Select';
import { INITIAL_LAYOUT_CONFIG, screenSizes } from '~/constants';
import { Component, LayoutConfig } from '~/types/layout';
import { ScreenSize } from '~/types/screen';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  const [layoutConfig, setLayoutConfig] = useState<LayoutConfig>(
    INITIAL_LAYOUT_CONFIG
  );
  console.log('Index ~ layoutConfig:', layoutConfig);

  const updateScreenSize = (updatedScreenSize: ScreenSize) => {
    const updatedConfigForm: LayoutConfig = {
      ...layoutConfig,
      screen: updatedScreenSize,
    };
    setLayoutConfig(updatedConfigForm);
  };

  const handleAddButtonClick = () => {
    const defaultComponent: Component = {
      type: 'NAV',
    };

    const updatedComponents = [...layoutConfig.components, defaultComponent];
    setLayoutConfig({ ...layoutConfig, components: updatedComponents });
  };
  return (
    <div className="">
      {/* Menu */}

      <div className="p-10">
        <Select
          label="Screen Size"
          id="screenSize"
          defaultValue={screenSizes[0]}
          options={screenSizes}
          onChange={updateScreenSize}
        />
        <div className="flex my-4 gap-2 items-center">
          <h2 className="text-xl">Components</h2>
          <button
            className="btn btn-primary btn-sm"
            onClick={handleAddButtonClick}
          >
            +
          </button>
        </div>
        <div className="flex gap-2 flex-col">
          {layoutConfig.components.map((component, index) => (
            <Select
              key={index}
              id="componentType"
              options={['NAV']}
              onChange={() => {}}
              defaultValue="NAV"
            />
          ))}
        </div>
      </div>

      <Canvas {...layoutConfig} />
    </div>
  );
}
