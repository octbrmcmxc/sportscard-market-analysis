import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['5173-iumqmmjn78y8pffwlqvsc-59be4647.manusvm.computer', 'localhost', '127.0.0.1']
  }
})
