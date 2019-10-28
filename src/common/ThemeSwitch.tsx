import React, { useState, useEffect, useRef } from 'react';

interface IProps {
    dark?: boolean
    global?: boolean
    hidden?: boolean
}

const darkColor = "#111111"
const lightColor = "#dddddd"

export const ThemeSwitch = (props: IProps) => {
    const [root, setRoot] = useState<HTMLElement | null>(null);
    const button = useRef<HTMLButtonElement>(null)

    const getColor = (dark: boolean) => {
        if (dark) {
            return darkColor
        }
        return lightColor
    }

    const setColor = (element: HTMLButtonElement | HTMLElement, dark: boolean) => {
        element.style.setProperty('--bg', getColor(dark))
    }

    const switchColor = (element: HTMLButtonElement | HTMLElement) => {
        const prevValue: string = element.style.getPropertyValue('--bg');
        const dark = prevValue === darkColor
        setColor(element, !dark)
    }

    useEffect(() => {
        if (props.global) {
            const newRoot: HTMLElement = parent.document.documentElement
            setRoot(newRoot)
            setColor(newRoot, props.dark || false)
        }
        return () => {
            if (root !== null) {
                setColor(root, false)
                setRoot(null)
            }
        }
    }, [])

    useEffect(() => {
        if (!props.global && button.current && button.current.parentElement) {
            setColor(button.current.parentElement, props.dark || false)
        }
    }, [button.current])

    const handleClick = () => {
        if (props.global) {
            if (root !== null) {
                switchColor(root)
            }
        } else {
            if (button.current && button.current.parentElement) {
                switchColor(button.current.parentElement)
            }
        }
    }

    return <button ref={button} style={{ display: props.hidden ? 'none' : 'clock' }} onClick={handleClick}>Switch</button>
}
