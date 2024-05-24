import { ScreenSize } from '~/types/screen';

export const getScreenWidth = (screenSize: ScreenSize) => {
  const tailwindBreakpoints = {
    mobile: 'max-w-[375px]', // Small screens and up
    tablet: 'max-w-[768px]', // Medium screens and up
    laptop: 'max-w-[1024px]', // Large screens and up
    desktop: 'max-w-[1440px]', // Extra large screens and up
    ultrawide: 'max-w-[2560px]', // 2X large screens and up
  };

  return tailwindBreakpoints[screenSize];
};
