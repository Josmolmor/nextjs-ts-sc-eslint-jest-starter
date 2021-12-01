import { useEffect, useState } from 'react';

import keysOf from '$/utils/keysOf';

export const sizes = {
  mobile: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1200,
} as const;

const minWidthQuery = (width: number) => `@media (min-width: ${width}px)`;
const maxWidthQuery = (width: number) => `@media (max-width: ${width}px)`;

type ReduceReturnType = { [key in keyof typeof sizes]: string };

export const from = keysOf(sizes).reduce(
  (acc: ReduceReturnType, key: 'mobile' | 'tablet' | 'laptop' | 'desktop') => ({
    ...acc,
    [key]: minWidthQuery(sizes[key]),
  }),
  {} as ReduceReturnType,
);

export const until = keysOf(sizes).reduce(
  (acc: ReduceReturnType, key: 'mobile' | 'tablet' | 'laptop' | 'desktop') => ({
    ...acc,
    [key]: maxWidthQuery(sizes[key]),
  }),
  {} as ReduceReturnType,
);

export const useMediaQuery = (query: string): boolean => {
  const mediaQuery = query.replace('@media', '').trim();

  const [match, setMatch] = useState<boolean>(false);

  useEffect(() => {
    setMatch(() => window.matchMedia(mediaQuery).matches);
    const mediaQueryList = window.matchMedia(mediaQuery);

    const handleChange = (event: MediaQueryListEvent) =>
      setMatch(event.matches);

    mediaQueryList.addListener(handleChange);

    return () => mediaQueryList.removeListener(handleChange);
  }, [mediaQuery]);

  return match;
};
