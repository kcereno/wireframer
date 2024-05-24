import { ScreenSize } from '~/types/screen';

export const getWidth = (screenSize: ScreenSize) => {
  const tailwindBreakpoints = {
    MOBILE: 'max-w-[375px]', // Small screens and up
    TABLET: 'max-w-[768px]', // Medium screens and up
    LAPTOP: 'max-w-[1024px]', // Large screens and up
    DESKTOP: 'max-w-[1440px]', // Extra large screens and up
    ULTRAWIDE: 'max-w-[2560px]', // 2X large screens and up
  };

  return tailwindBreakpoints[screenSize];
};
