interface InputProps {
    placeholder: string,
    onChange: ()=> void
}

export function Input({placeholder,onChange}:InputProps)
{
    return (
        <input type="text" placeholder={placeholder} onChange={onChange} className="px-4 py-2 border rounded m-2"/>
    )
}