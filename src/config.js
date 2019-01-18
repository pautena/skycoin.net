import palx from 'palx';
import moment from 'moment';

export const DISTRIBUTION_START = moment('2017-08-08T12:00:00.000Z');
export const DISTRIBUTION_END = moment('2017-08-31T12:00:00.000Z');
export const COLORS = palx('#0072FF');
export const COLOR = {
  base: '#0072FF',
  dark: '#101F34',
  white: '#fff',
  paleGrey: '#F4F9FF',
  lightGrey: '#F2F5FA',
  lightBlue: '#F4F9FF',
  textLight: '#B6C5D6',
  textGrey: '#92A4BA',
  textDark: '#07172E',
  darkGrey: '#333',
  lightBlueGrey: '#ebf3fd',
  borderGrey: '#d0d0d0',
  red: 'red',
};
export const SPACE = [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80];
export const FONT_SIZES = [11, 13, 14, 15, 17, 20, 24, 30, 36, 40];

export const BREAKPOINTS = {
  sm: 40,
  md: 52,
  lg: 64,
};

export const FONT_FAMILIES = {
  mono: '"Inconsolata", monospace, sans-serif',
  monoBold: '"InconsolataBold", monospace, sans-serif',
  sans: '"SkycoinSans", sans-serif',
  sansItalic: '"SkycoinSansItalic", sans-serif',
  sansBold: '"SkycoinSansBold", sans-serif',
  sansBoldItalic: '"SkycoinSansBoldItalic", sans-serif',
};

export const BORDER_RADIUS = {
  base: '4px',
  pill: '1000px',
};

export const BOX_SHADOWS = {
  base: '0 1px 2px rgba(0, 0, 0, 0.25)',
  hover: '0 1px 4px rgba(0, 0, 0, 0.25)',
  box: '0 2px 20px #DFE9F4',
  image: '0 0 18px 0 rgba(223, 233, 244, .52)',
  menu: '0 2px 10px rgba(0, 0, 0, 0.25)',
};

export const FLAGS = {
  chinese: true,
  russian: true,
  korean: true,
  japanese: true,
  timeline: false,
  distribution: true,
  network: false,
};

export const whiteListFormSrc = 'https://trello-attachments.s3.amazonaws.com/5ab38209e926ff042bc206ca/5ad45bbbbbc8af5ad024b24b/9655c1b1713f785ec85da79f723e6ada/skyminer_whitelist_form.html';
export const skyminerFormSrc = 'https://sv.mikecrm.com/NAWohxs';
export const BUY_SKY_LINK = 'buy';
