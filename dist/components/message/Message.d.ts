import * as React from 'react';
interface MessageProps {
    type: 'info' | 'success' | 'warning' | 'error';
    children: React.ReactNode;
}
declare const Message: ({ type, children }: MessageProps) => JSX.Element;
export default Message;
