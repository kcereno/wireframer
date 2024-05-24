import { LayoutConfig } from './types/layout';
import { ScreenSize } from './types/screen';

export const screenSizes: ScreenSize[] = [
  'MOBILE',
  'TABLET',
  'LAPTOP',
  'DESKTOP',
  'ULTRAWIDE',
];

export const INITIAL_LAYOUT_CONFIG: LayoutConfig = {
  screen: 'MOBILE',
  components: [],
};
