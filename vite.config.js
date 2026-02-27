import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace '<repository-name>' with your actual GitHub repository name
const repoName = 'Cinematic-Prompt-Builder-v3';

export default defineConfig({
  plugins: [react()],
  base: '/Cinematic-Prompt-Builder-v3/', // Explicit base for GitHub Pages subfolder
  build: {
    outDir: 'dist', // Standard Vite build folder
  }
});
