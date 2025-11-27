import React from 'react'
import { TiTick } from 'react-icons/ti'

export default function RadioButton({ label }) {
    return (
        <>
            <label class="flex items-center cursor-pointer relative">
                <div className="">
                    <input
                        type="radio"
                        name="plan"
                        class="peer appearance-none h-4.5 w-4.5 border-2 border-none bg-[rgba(97,63,229,0.1)] dark:bg-dark-primary border-[rgba(97,63,229,0.1)] dark:border-dark-primary rounded-full checked:border-primary dark:checked:border-dark-primary checked:bg-primary dark:checked:bg-dark-primary transition-all delay-0"
                    />
                    <div class="absolute hidden peer-checked:block w-2 h-2 bg-white rounded-full left-[5px] top-[5px]"></div>

                </div>

                <span class="text-[#333] font-Roboto ml-1.5">{label && label}</span>
            </label>
        </>
    )
}
