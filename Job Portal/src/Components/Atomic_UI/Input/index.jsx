import React, { useId } from 'react'


export default function Input({ label, placeholder, type = "text", value, onChange, error, style, ...rest }) {
    const id = useId();
    return (
        <div className='block w-full'>
            <label htmlFor={id} className='block mb-2.5 font-Lato font-semibold leading-[1.75] text-title dark:text-white'>{label}</label>
            <input type={type} id={id} value={value} onChange={onChange} placeholder={placeholder} {...rest} className={`w-full py-3 px-3.5 text-sm shadow-normal rounded outline-none font-Lato h-[50px] dark:bg-[#0e0f20] dark:text-white placeholder:text-[rgb(107,107,107)] ${style}`} />
            {error && <p className='mt-1 text-xs text-red-500'>{error}</p>}
        </div>
    )
}

function TextArea({ label, placeholder, value, onChange, style }) {
    const id = useId();
    return (
        <div className='block w-full'>
            <label htmlFor={id} className='block mb-2.5 font-Lato font-semibold leading-[1.75] text-title dark:text-white'>{label}</label>
            <textarea placeholder={placeholder} value={value} onChange={onChange} id={id} className={`w-full py-3 px-3.5 text-sm shadow-normal rounded outline-none font-Lato  dark:bg-[#0e0f20] dark:text-white placeholder:text-[rgb(107,107,107)] ${style}`}></textarea>
        </div>
    )
}

export { TextArea }
