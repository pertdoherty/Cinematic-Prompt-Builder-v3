import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace '<repository-name>' with your actual GitHub repository name
const repoName = 'Cinematic-Prompt-Builder-v3';

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // This ensures correct relative paths
});
