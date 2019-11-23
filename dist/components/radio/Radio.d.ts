/// <reference types="react" />
interface RadioProps {
    labels: string[];
    groupName: string;
    disabled?: boolean;
    error?: boolean;
}
declare const Radio: ({ labels, groupName, disabled, error }: RadioProps) => JSX.Element;
export default Radio;
