import React from 'react'
import { useRef } from 'react'

import { TiTick } from 'react-icons/ti'

export default function CheckBox({ label, labelStyle }) {
    return (
        <>
            <label class="flex items-center space-x-2 cursor-pointer">
                <input
                    type="checkbox"
                    class="peer appearance-none h-4 w-4 border-2 border-[rgba(97,63,229,0.1)]  bg-[rgba(97,63,229,0.1)] rounded checked:bg-primary dark:checked:bg-dark-secondary dark:bg-dark-secondary checked:border-primary dark:checked:border-dark-secondary transition-all delay-0"
                />
                <span class={`text-[#333] dark:text-white font-Roboto ${labelStyle}`}>{label && label}</span>

                <TiTick className='absolute hidden peer-checked:block text-white' />
            </label>
        </>

    )
}
