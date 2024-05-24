import Select from './ui/Select';
import { screenSizes } from '~/constants';
import { Component, LayoutConfig } from '~/types/layout';
import { ScreenSize } from '~/types/screen';
import ComponentSelect from './ComponentSelect';

type ControlPanelProps = {
  layoutConfig: LayoutConfig;
  updateLayoutConfig: (updatedLayoutConfig: LayoutConfig) => void;
};

function ControlPanel({ layoutConfig, updateLayoutConfig }: ControlPanelProps) {
  const updateScreenSize = (updatedScreenSize: { screenSize: ScreenSize }) => {
    const updatedConfigForm: LayoutConfig = {
      ...layoutConfig,
      ...updatedScreenSize,
    };

    updateLayoutConfig(updatedConfigForm);
  };

  const handleAddButtonClick = () => {
    const defaultComponent: Component = {
      // TODO: Remove hard code, use first index of const instead
      type: 'nav',
      config: 'title only',
    };

    const updatedComponents = [...layoutConfig.components, defaultComponent];
    updateLayoutConfig({ ...layoutConfig, components: updatedComponents });
  };

  const updateComponent = (updatedComponent: Component, index: number) => {
    const updatedComponents = [
      ...layoutConfig.components.slice(0, index),
      updatedComponent,
      ...layoutConfig.components.slice(index + 1),
    ];

    updateLayoutConfig({ ...layoutConfig, components: updatedComponents });
  };

  return (
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
          <ComponentSelect
            component={component}
            key={index}
            updateComponent={(updatedComponent) => {
              updateComponent(updatedComponent, index);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ControlPanel;
