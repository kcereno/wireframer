import {
  ComponentType,
  HeroConfig,
  LayoutConfig,
  NavConfig,
} from './types/layout';
import { ScreenSize } from './types/screen';

export const screenSizes: ScreenSize[] = [
  'mobile',
  'tablet',
  'laptop',
  'desktop',
  'ultrawide',
];

export const INITIAL_LAYOUT_CONFIG: LayoutConfig = {
  screenSize: 'mobile',
  components: [],
};

export const ComponentTypes: ComponentType[] = ['nav', 'hero'];

export const NavConfigs: NavConfig[] = ['title only', 'title and icon'];
export const HeroConfigs: HeroConfig[] = ['basic', 'text only'];
