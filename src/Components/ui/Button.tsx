import type { ReactElement } from "react"

interface ButtonProps {
    variant:"primary" | "secondary",
    onClick : () => void,
    size : "sm" | "md" | "lg",
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    text: string,
}

const variantStyles = {
    "primary" : "bg-purple-500 text-white",
    "secondary": "bg-purple-300 text-purple-400"
}

const defaultStyles = "rounded-lg flex items-center";

const sizeStyles = {
    "sm" : "px-3 py-1",
    "md" : "px-6 py-2",
    "lg" : "px-12 py-3",
}



export function Button(props : ButtonProps)
{
    return <button onClick ={props.onClick} className={`${defaultStyles} ${variantStyles[props.variant]} 
    ${sizeStyles[props.size]}`}>
        {props.startIcon} <span className="px-3">{props.text}</span> {props.endIcon}</button>
}