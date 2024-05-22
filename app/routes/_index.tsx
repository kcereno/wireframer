import type { MetaFunction } from '@remix-run/node';
import Select from '~/components/ui/Select';
import { StringMap } from '~/types/utilityTypes';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export type CanvasType =
  | 'MOBILE'
  | 'TABLET'
  | 'LAPTOP'
  | 'DESKTOP'
  | 'ULTRAWIDE';

export default function Index() {
  // const [showMenu, setShowMenu] = React.useState(true);

  const canvasSizeOptions: CanvasType[] = [
    'MOBILE',
    'TABLET',
    'LAPTOP',
    'DESKTOP',
    'ULTRAWIDE',
  ];

  const updateConfigForm = (updatedConfig: StringMap) => {
    console.log('updateConfigForm ~ config:', updatedConfig);
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

      <div className="Canvas"></div>
    </div>
  );
}
