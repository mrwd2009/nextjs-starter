import { TinyColor } from '@ctrl/tinycolor';

export const fade = (color: string, alpha: number) => {
  const colorObj = new TinyColor(color);
  colorObj.setAlpha(alpha);
  return colorObj.toRgbString();
};

export const darken = (color: string, amount: number) => {
  const colorObj = new TinyColor(color);
  colorObj.darken(amount);
  return colorObj.toString();
};
