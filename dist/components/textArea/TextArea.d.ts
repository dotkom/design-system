/// <reference types="react" />
import { StyledComponentProps } from 'styled-components';
declare const statuses: {
    error: string;
    warning: string;
    success: string;
};
declare type StatusStrings = keyof typeof statuses;
interface TextAreaProps extends StyledComponentProps<'input', any, any, any> {
    errorMessage?: string;
    label?: string;
    type?: string;
    status?: StatusStrings;
}
declare const TextArea: ({ type, label, errorMessage, ...props }: TextAreaProps) => JSX.Element;
export default TextArea;
