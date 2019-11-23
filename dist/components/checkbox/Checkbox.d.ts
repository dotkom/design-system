/// <reference types="react" />
interface CheckboxProps {
    label: string;
    isChecked?: boolean;
    onCheck: (isChecked: boolean) => void;
    disabled?: boolean;
    error?: boolean;
}
declare const Checkbox: ({ label, isChecked, onCheck, disabled, error }: CheckboxProps) => JSX.Element;
export default Checkbox;
