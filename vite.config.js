import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import fs from 'fs';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  base: '/My_Vite_CICD/'
})
