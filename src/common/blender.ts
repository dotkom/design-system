const blend = (color: number[], blender: number[], factor: number) => [
  Math.round(factor * blender[0] + (1.0 - factor) * color[0]),
  Math.round(factor * blender[1] + (1.0 - factor) * color[1]),
  Math.round(factor * blender[2] + (1.0 - factor) * color[2]),
];

const hexToRGB = (hex: string) => [
  parseInt(hex.slice(1, 3), 16),
  parseInt(hex.slice(3, 5), 16),
  parseInt(hex.slice(5, 7), 16),
];

const RGBToHex = (rgb: number[]) => '#' + rgb.map((n) => n.toString(16).padStart(2, '0')).join('');

export const darken = (hex: string, factor: number) => RGBToHex(blend(hexToRGB(hex), [0, 0, 0], factor));
export const lighten = (hex: string, factor: number) => RGBToHex(blend(hexToRGB(hex), [255, 255, 255], factor));
