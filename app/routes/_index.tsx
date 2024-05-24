import type { MetaFunction } from '@remix-run/node';
import { useState } from 'react';
import Canvas from '~/components/Canvas';
import ControlPanel from '~/components/ControlPanel';
import { INITIAL_LAYOUT_CONFIG } from '~/constants';
import { LayoutConfig } from '~/types/layout';

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

  const updateLayoutConfig = (updatedLayoutConfig: LayoutConfig) => {
    setLayoutConfig(updatedLayoutConfig);
  };
  return (
    <div className="">
      <ControlPanel
        layoutConfig={layoutConfig}
        updateLayoutConfig={updateLayoutConfig}
      />

      <Canvas {...layoutConfig} />
    </div>
  );
}
