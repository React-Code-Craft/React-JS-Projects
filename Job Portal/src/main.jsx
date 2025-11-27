import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './tailwindConfig.css';
import ThemeProvider from './Context/ThemeContext/index.jsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/index.jsx';
import { Provider } from 'react-redux';
import store from './Store/index.js';
import Loader from '@Components/Common/Loader/index'; // import your loader
import '../src/Fonts/index.js'


function AppWrapper() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Wait for full window load
        const handleLoad = () => setLoading(false);
        window.addEventListener('load', handleLoad);

        // Fallback: hide loader after 5s if something fails to load
        const timeout = setTimeout(() => setLoading(false), 5000);

        return () => {
            window.removeEventListener('load', handleLoad);
            clearTimeout(timeout);
        };
    }, []);

    if (loading) return <Loader />; // show loader until everything is loaded

    return (
        <ThemeProvider>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ThemeProvider>
    );
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppWrapper />
    </StrictMode>
);
