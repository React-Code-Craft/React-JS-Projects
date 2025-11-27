import React from "react";
// Import Custom Style Sheet
import './style.css'
import { useNavigate } from "react-router-dom";

export default function Button({ btnText, icon: Icon, extraCss, handleClick, type }) {
    return (
        <button type={`${type && type || "button"}`} onClick={handleClick} className={`button overflow-hidden relative cursor-pointer  rounded bg-primary    text-white flex items-center justify-center px-4 py-2 ${extraCss}  `}>
            {Icon && <span className="mr-0.5"><Icon /></span>}
            {btnText}
        </button>
    );
}

const BackButton = () => {
    const navigate = useNavigate()
    return (
        <>
            <button onClick={() => navigate(-1)} className="button backButton cursor-pointer bg-primary text-white text-[12px] py-1 px-2.5 pl-6.5 rounded">
                Back
            </button>
        </>
    )
}

export { BackButton }


