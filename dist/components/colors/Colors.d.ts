/// <reference types="react" />
import { ColorName } from 'common/colors';
interface ColorSwatchProps {
    color: ColorName;
    darkText?: boolean;
}
declare const ColorSwatch: ({ color, darkText }: ColorSwatchProps) => JSX.Element;
export default ColorSwatch;
