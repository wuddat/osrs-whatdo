import localFont from 'next/font/local';

export const runescapeFont = localFont({
  src: [
    {
      path: '../public/fonts/runescape.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-runescape',
});

export const runescapeBold = localFont({
  src: [
    {
      path: '../public/fonts/runescape_bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-runescape-bold',
});

export const runescapeSmall = localFont({
  src: [
    {
      path: '../public/fonts/runescape_small.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-runescape-small',
});