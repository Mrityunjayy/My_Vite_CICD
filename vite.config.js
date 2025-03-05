import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import fs from 'fs';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
     // https: {
    //   key: fs.readFileSync('./key.pem'), // Path to your private key
    //   cert: fs.readFileSync('./cert.pem'), // Path to your certificate
    // },
  },
  base: '/My_Vite_CICD/',
  // build: {
    // minify: TRUE, // Disable minification,
    // outDir: 'build', // Change default 'dist' to 'build',
  // },
})
