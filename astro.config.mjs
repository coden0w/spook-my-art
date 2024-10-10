// @ts-check
import { defineConfig } from 'astro/config';
import fulldev from 'fulldev-ui/integration';

// https://astro.build/config
export default defineConfig({
    integrations: [
        fulldev({
            colors: {
                theme: 'dark',
                dark: {
                    background: '#1A1A1A',
                    base: '#FA7D23',
                    brand: '#8423FA'
                }
            }
        })
    ]
});
