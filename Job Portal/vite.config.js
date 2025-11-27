import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
// https://vite.dev/config/

export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],
    resolve: {
        alias: {
            '@Assets': path.resolve(__dirname, 'src/assets'),
            '@Components': path.resolve(__dirname, 'src/Components'),
            '@Pages': path.resolve(__dirname, 'src/Pages'),
            '@Admin': path.resolve(__dirname, 'src/Admin'),
        }
    }
})




