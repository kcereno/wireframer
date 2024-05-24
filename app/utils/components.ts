import NavWithTitleAndIcon from '~/components/Nav/NavWithTitleAndIcon';
import NavWithTitleOnly from '~/components/Nav/NavWithTitleOnly';

import { ComponentConfig, ComponentType } from '~/types/layout';
import { HeroConfigs, NavConfigs } from '../constants';
import { ComponentMap } from '~/types/components';

export const getComponent = ({
  type,
  config,
}: {
  type: ComponentType;
  config: ComponentConfig;
}) => {
  const components: ComponentMap = {
    nav: {
      'title only': NavWithTitleOnly,
      'title and icon': NavWithTitleAndIcon,
    },
    hero: {
      basic: NavWithTitleAndIcon,
    },
  };

  return components[type][config];
};

export const getSecondarySelectOptions = (componentType: ComponentType) => {
  const secondaryOptions: {
    [key: string]: string[];
  } = {
    nav: NavConfigs,
    hero: HeroConfigs,
  };

  return secondaryOptions[componentType];
};
