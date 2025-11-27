// import { useState, useRef, useEffect } from "react";
// import { FaAngleDown } from "react-icons/fa6";

import { useState, useRef, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";

export default function CustomSelect({
    options,
    selected,
    setSelected,
    label,
    placeholder = "Select an option...", // New: Placeholder prop
    disabled = false // New: Disabled prop
}) {
    const [open, setOpen] = useState(false);
    const selectRef = useRef(null);
    const buttonRef = useRef(null); // Ref for the button (for focus)

    // Close on click outside or Escape key
    useEffect(() => {
        function handleClose(e) {
            // Click outside logic
            if (selectRef.current && !selectRef.current.contains(e.target)) {
                setOpen(false);
            }
            // Escape key logic
            if (e.key === 'Escape' && open) {
                setOpen(false);
                buttonRef.current?.focus(); // Focus back on the button
            }
        }

        document.addEventListener("mousedown", handleClose);
        document.addEventListener("keydown", handleClose);
        return () => {
            document.removeEventListener("mousedown", handleClose);
            document.removeEventListener("keydown", handleClose);
        };
    }, [open]);

    // Function to toggle the menu
    const toggleOpen = () => setOpen(!open);

    // Get the displayed text (selected value or placeholder)
    const displayText = selected || placeholder;

    return (
        <div className="relative w-full" ref={selectRef}>
            <p className="mb-2.5 font-Lato font-semibold leading-[1.75] text-title dark:text-white ">
                {label}
            </p>

            <button
                ref={buttonRef}
                type="button"
                onClick={toggleOpen}
                disabled={disabled}
                // --- A11Y Attributes ---
                role="combobox"
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label={label}
                // --- Styling Classes ---
                className={`
                    w-full shadow-normal flex justify-between items-center py-4 px-3.5 rounded text-gray-700 h-[50px]
                    dark:bg-[#0e0f20] dark:text-white transition-all duration-200
                    focus:outline-none
                    ${disabled ? 'opacity-60 cursor-not-allowed bg-gray-100 dark:bg-gray-700' : ''}
                `}
            >
                <span className={`font-Roboto text-[12px] ${!selected && 'text-gray-400 dark:text-gray-500'}`}>
                    {displayText}
                </span>
                <span
                    className={`text-gray-500 dark:text-white text-[12px] ml-4 transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'}`}
                >
                    <FaAngleDown />
                </span>
            </button>

            {open && (
                <ul
                    role="listbox" // A11Y: Define container as listbox
                    className="absolute mt-1 w-full border dark:border-[rgba(255,255,255,0.1)] border-primary-1 rounded bg-white dark:bg-dark-secondary py-2 z-10 shadow-lg max-h-60 overflow-y-auto"
                >
                    {options.map((opt) => (
                        <li
                            key={opt}
                            role="option" // A11Y: Define each item as an option
                            aria-selected={opt === selected} // A11Y: Indicate selection state
                            onClick={() => {
                                setSelected(opt);
                                setOpen(false);
                                buttonRef.current?.focus(); // Return focus to the button after selection
                            }}
                            className={`px-3 py-2 hover:bg-blue-500 hover:text-white dark:text-white cursor-pointer transition-colors text-[12px] ${opt === selected ? "bg-blue-500 text-white dark:bg-blue-600" : ""}`}
                        >
                            {opt}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}