import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "jsm-x9",  // Replace with your Sentry organization slug
      project: "javascript-react"  // Replace with your Sentry project slug
    })
  ],
  build: {
    sourcemap: true  // Enable sourcemaps for easier debugging with Sentry
  },
  base: '/AppleLandingPage/'  // Add your GitHub repository name here
});
