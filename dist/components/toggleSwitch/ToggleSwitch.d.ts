/// <reference types="react" />
export interface Props {
    initialChecked?: boolean;
    disabled?: boolean;
    onChange: () => void;
    size?: number;
}
declare const ToggleSwitch: ({ initialChecked, disabled, size }: Props) => JSX.Element;
export default ToggleSwitch;
