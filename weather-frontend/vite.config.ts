import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({ jsxImportSource: "@emotion/react" })],
  server: {
    proxy: {
      '/weather': {
        target: 'https://weather-server-a2ck.onrender.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/weather/, '/weather'),
      },
    },
  },
});
