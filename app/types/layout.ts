import { ScreenSize } from './screen';

export type ComponentType = 'nav' | 'hero';

export type NavConfig = 'title only' | 'title and icon';
// | 'icon at start and end'
// | 'menu and submenu'
// | 'search input and dropdown'
// | 'icon, indicator and dropdown'
// | 'dropdown, center logo and icon'
// | 'responsive';

export type HeroConfig = 'basic' | 'text only';

export type ComponentConfig = NavConfig | HeroConfig;

export type Component = {
  type: ComponentType;
  config: ComponentConfig;
};

export type LayoutConfig = {
  screenSize: ScreenSize;
  components: Component[];
};
