import type { MetaFunction } from '@remix-run/node';
import { useState } from 'react';
import Select from '~/components/ui/Select';
import { StringMap } from '~/types/utilityTypes';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export type CanvasSize =
  | 'MOBILE'
  | 'TABLET'
  | 'LAPTOP'
  | 'DESKTOP'
  | 'ULTRAWIDE';

export type ConfigForm = {
  canvasSize: CanvasSize;
};

export default function Index() {
  const INITIAL_CONFIG_FORM: ConfigForm = {
    canvasSize: 'MOBILE',
  };

  const [configForm, setConfigForm] = useState<ConfigForm>(INITIAL_CONFIG_FORM);
  console.log('Index ~ configForm:', configForm);
  // const [showMenu, setShowMenu] = React.useState(true);

  const canvasSizeOptions: CanvasSize[] = [
    'MOBILE',
    'TABLET',
    'LAPTOP',
    'DESKTOP',
    'ULTRAWIDE',
  ];

  const getWidth = (canvasSize: CanvasSize) => {
    const tailwindBreakpoints = {
      MOBILE: 'max-w-[375px]', // Small screens and up
      TABLET: 'max-w-[768px]', // Medium screens and up
      LAPTOP: 'max-w-[1024px]', // Large screens and up
      DESKTOP: 'max-w-[1440px]', // Extra large screens and up
      ULTRAWIDE: 'max-w-[2560px]', // 2X large screens and up
    };

    return tailwindBreakpoints[canvasSize];
  };

  const width = getWidth(configForm.canvasSize);
  console.log('Index ~ width:', width);

  const updateConfigForm = (updatedConfig: StringMap) => {
    const updatedConfigForm = { ...configForm, ...updatedConfig };
    setConfigForm(updatedConfigForm);
  };
  return (
    <div className="">
      {/* Menu */}

      <div className="p-10">
        <Select
          label="Canvas Size"
          id="canvasSize"
          options={canvasSizeOptions}
          onChange={updateConfigForm}
        />
      </div>

      <div className="flex justify-center mx-10">
        <div className={`${width} bg-red-300 w-full`}>Canvas</div>
      </div>
    </div>
  );
}
