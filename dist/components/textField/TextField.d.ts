/// <reference types="react" />
import { StyledComponentProps } from 'styled-components';
declare const statuses: {
    error: string;
    warning: string;
    success: string;
};
declare type StatusStrings = keyof typeof statuses;
interface TextFieldProps extends StyledComponentProps<'input', any, any, any> {
    errorMessage?: string;
    label?: string;
    type?: string;
    status?: StatusStrings;
}
declare const TextField: ({ type, label, errorMessage, ...props }: TextFieldProps) => JSX.Element;
export default TextField;
