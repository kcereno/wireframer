import { ScreenSize } from './screen';

export type ComponentType = 'NAV';

export type Component = {
  type: ComponentType;
};

export type LayoutConfig = {
  screen: ScreenSize;
  components: Component[];
};
