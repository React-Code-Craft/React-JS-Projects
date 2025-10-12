import React from "react";
// Import Custom Style Sheet
import './style.css'

export default function Button({ btnText, icon: Icon, extraCss }) {
    return (
        <button className={`button overflow-hidden relative cursor-pointer  rounded bg-primary    text-white flex items-center justify-between px-4 py-3 ${extraCss} `}>
            {Icon && <span className="mr-0.5"><Icon /></span>}
            {btnText}
        </button>
    );
}


