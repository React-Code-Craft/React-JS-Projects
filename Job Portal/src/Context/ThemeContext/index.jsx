import { createContext, useCallback, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {

    const [theme, settheme] = useState(() => {
        if (typeof Window === undefined) return 'light';
        let localStorage_value = localStorage.getItem('theme')
        return localStorage_value || 'light'
    });


    let toggletheme = useCallback(() => {
        settheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')

        localStorage.setItem('theme', theme)

    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggletheme }}>
            {children}
        </ThemeContext.Provider>
    );
}


